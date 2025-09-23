// pages/api/ai-chat.js
// Uses mfapi.in for fund universe, computes returns, does robust fuzzy-token matching,
// but FIRST tries exact substring matches for longer tokens (e.g. AMC names like "invesco")
// so queries like "best invesco funds" return proper results.

const SITE_BASE_URL = process.env.SITE_BASE_URL || 'https://ideas2invest.in';
const DEBUG = process.env.NODE_ENV !== 'production';

let fundCache = null;
let lastFundFetch = 0;
const FUND_CACHE_TTL = 24 * 60 * 60 * 1000; // 24 hours

const STOPWORDS = new Set([
  'i','me','my','you','your','the','a','an','in','on','at','for','to','please','want',
  'start','sip','invest','investing','investor','with','of','and','or','is','are','show','what'
]);

const GREETINGS = ['hi','hello','hey','good morning','good afternoon','good evening'];
const RECOMMEND_KEYWORDS = /\b(best|top|recommend|suggest|good|list|which)\b/i;
const FUND_KEYWORDS = /\b(fund|funds|mutual|scheme|sip|elss|investment|portfolio|amc)\b/i;

// normalize & tokenize utilities
function normalize(s = '') {
  return s.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
}
function tokenize(s = '') {
  return normalize(s).split(' ')
    .map(t => t.trim())
    .filter(t => t && !STOPWORDS.has(t) && t.length > 0);
}

// overlap-based token score
function scoreMatch(fundName = '', queryTokens = []) {
  const fundTokens = tokenize(fundName);
  if (!fundTokens.length || !queryTokens.length) return 0;
  let overlap = 0;
  for (const ft of fundTokens) {
    for (const qt of queryTokens) {
      if (ft.includes(qt) || qt.includes(ft)) {
        overlap++;
        break;
      }
    }
  }
  const fundScore = overlap / fundTokens.length;
  const queryScore = overlap / queryTokens.length;
  return (fundScore + queryScore) / 2;
}

async function fetchFundList() {
  const now = Date.now();
  if (!fundCache || now - lastFundFetch > FUND_CACHE_TTL) {
    const resp = await fetch('https://api.mfapi.in/mf');
    if (!resp.ok) throw new Error('Failed to fetch fund list from mfapi.in');
    fundCache = await resp.json(); // array of { schemeCode, schemeName, ... }
    lastFundFetch = now;
    if (DEBUG) console.log(`Fetched ${fundCache.length} funds from mfapi`);
  }
  return fundCache;
}

async function fetchFundDetails(schemeCode) {
  const resp = await fetch(`https://api.mfapi.in/mf/${schemeCode}`);
  if (!resp.ok) return null;
  return await resp.json();
}

function parseNavDate(ddmmyyyy) {
  const parts = String(ddmmyyyy).split('-');
  if (parts.length !== 3) return null;
  return new Date(parts[2], parseInt(parts[1], 10) - 1, parseInt(parts[0], 10));
}

function calcCAGRFromHistory(history = [], years = 1) {
  if (!Array.isArray(history) || history.length === 0) return null;
  const latestNav = parseFloat(history[0].nav);
  if (!latestNav || isNaN(latestNav)) return null;
  const target = new Date();
  target.setFullYear(target.getFullYear() - years);

  // find first entry with date <= target (history is descending)
  let pastNav = null;
  for (let i = 0; i < history.length; i++) {
    const d = parseNavDate(history[i].date);
    if (!d) continue;
    if (d <= target) {
      pastNav = parseFloat(history[i].nav);
      break;
    }
  }
  if (!pastNav || isNaN(pastNav) || pastNav === 0) return null;
  const cagr = (Math.pow(latestNav / pastNav, 1 / years) - 1) * 100;
  return Number(cagr);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { message, messages } = req.body || {};
  const userText = (typeof message === 'string' && message.trim()) ? message.trim()
                 : (Array.isArray(messages) && messages.length ? (messages[messages.length-1].content || messages[messages.length-1].text || '') : '');

  if (!userText) return res.status(400).json({ error: 'No message provided' });

  try {
    const qNorm = normalize(userText);
    const qTokens = tokenize(userText);

    // 1) greetings → short friendly reply
    if (GREETINGS.some(g => qNorm === g || qNorm.startsWith(g + ' ') || qNorm.includes(' ' + g + ' '))) {
      return res.status(200).json({
        reply: 'Hi 👋 I am Ideas2Invest AI Advisor. I can help you understand SIPs, suggest funds, or start a SIP in a specific fund. How can I help today?'
      });
    }

    // 2) Intent detection: only run fund recommendation flow if user explicitly asks for recommendation + fund context
    const isRecommendationQuery = RECOMMEND_KEYWORDS.test(userText) && FUND_KEYWORDS.test(userText);

    // If not a recommendation query, forward to Groq (if available) or return general guidance
    if (!isRecommendationQuery) {
      if (process.env.GROQ_API_KEY) {
        // Forward conversation for multi-turn context
        const groqMessages = [
          { role: 'system', content: "You are Ideas2Invest's AI financial assistant. Be concise, clear, and friendly. Answer user's general financial questions. Do NOT suggest specific funds unless explicitly asked." },
          ...(Array.isArray(messages)
            ? messages.map(m => ({ role: m.role === 'user' ? 'user' : 'assistant', content: m.content || m.text }))
            : [{ role: 'user', content: userText }])
        ];

        const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            model: 'llama-3.1-8b-instant',
            messages: groqMessages,
            max_tokens: 500,
            temperature: 0.3
          }),
        });

        const groqData = await groqRes.json();
        const reply = groqData?.choices?.[0]?.message?.content || "Sorry, I couldn't process that.";
        if (DEBUG) console.log('Groq reply:', reply);
        return res.status(200).json({ reply });
      }

      // no Groq key: return helpful fallback
      return res.status(200).json({
        reply: "I can help with financial queries (SIP, ELSS, mutual funds). Try: 'Suggest top ELSS funds' or 'What is SIP?'."
      });
    }

    // 3) Recommendation flow: use mfapi
    const fundList = await fetchFundList(); // array of { schemeCode, schemeName, ... }

    // 3a) PRIORITY: try exact substring matches for tokens that look like brand/AMC names or long tokens
    const exactTokens = qTokens.filter(t => t.length >= 4); // require length >=4 to avoid tiny tokens
    const exactMatches = [];
    if (exactTokens.length) {
      const qSet = new Set(exactTokens);
      for (const f of fundList) {
        const nameNorm = normalize(f.schemeName || f.scheme_name || '');
        for (const qt of qSet) {
          if (nameNorm.includes(qt)) {
            exactMatches.push({ entry: f, reasonToken: qt });
            break;
          }
        }
      }
    }

    // Deduplicate exactMatches
    const uniqueExact = [];
    const seenCodes = new Set();
    for (const em of exactMatches) {
      const code = em.entry.schemeCode || em.entry.scheme_code;
      if (!seenCodes.has(String(code))) {
        seenCodes.add(String(code));
        uniqueExact.push(em.entry);
      }
    }

    let picks = [];
    if (uniqueExact.length > 0) {
      // If exact matches exist, use them (limit to top 5)
      if (DEBUG) console.log(`Exact token matches found for tokens ${exactTokens}: ${uniqueExact.length} matches`);
      picks = uniqueExact.slice(0, 5).map(e => ({ score: 1, entry: e }));
    } else {
      // 3b) No exact matches → fallback to fuzzy scoring
      const scored = [];
      for (const f of fundList) {
        const name = f.schemeName || f.scheme_name || '';
        if (!name) continue;
        const s = scoreMatch(name, qTokens);
        if (s > 0) scored.push({ score: s, entry: f });
      }
      scored.sort((a,b) => b.score - a.score);
      if (DEBUG) console.log('Top scored examples:', scored.slice(0,6).map(s => ({ name: s.entry.schemeName || s.entry.scheme_name, score: s.score })));
      // pick top ones (threshold tuned)
      const THRESHOLD = 0.32;
      const topMatches = scored.filter(s => s.score >= THRESHOLD).slice(0, 5);
      picks = topMatches.length ? topMatches : scored.slice(0, 3);
    }

    if (!picks.length) {
      return res.status(200).json({
        reply: "I couldn't find suitable fund matches for that query. Try using the AMC name or a partial fund name (e.g. 'invesco' or 'nippon')."
      });
    }

    // 4) Enrich picks (fetch details & compute returns) — limit to top 3 to save calls
    const suggestions = [];
    for (const p of picks.slice(0, 3)) {
      const f = p.entry;
      const code = f.schemeCode || f.scheme_code;
      const name = f.schemeName || f.scheme_name || '';
      try {
        const details = await fetchFundDetails(code);
        const history = details?.data || [];
        const oneY = calcCAGRFromHistory(history, 1);
        const threeY = calcCAGRFromHistory(history, 3);
        const fiveY = calcCAGRFromHistory(history, 5);

        suggestions.push({
          fundName: name,
          schemeCode: code,
          sipAmount: (userText.match(/(\d{3,6})/)?.[0]) ? parseInt(userText.match(/(\d{3,6})/)[0], 10) : 5000,
          category: details?.meta?.scheme_category || details?.meta?.scheme_type || 'N/A',
          risk: details?.meta?.scheme_type || 'N/A',
          returns: {
            '1Y': oneY ? oneY.toFixed(2) + '%' : 'N/A',
            '3Y': threeY ? threeY.toFixed(2) + '%' : 'N/A',
            '5Y': fiveY ? fiveY.toFixed(2) + '%' : 'N/A'
          },
          sipLink: `${SITE_BASE_URL.replace(/\/$/, '')}/start-sip/${code}`,
          score: p.score
        });
      } catch (e) {
        if (DEBUG) console.warn('Failed to fetch details for', code, e);
      }
    }

    const replyText = suggestions.length
      ? `I found ${suggestions.length} matching fund(s). Tap Start SIP to begin.`
      : "Matched funds but couldn't fetch details right now.";

    return res.status(200).json({ reply: replyText, suggestions });

  } catch (err) {
    console.error('ai-chat error:', err);
    return res.status(500).json({ reply: '⚠️ Something went wrong. Please try again later.' });
  }
}



// import fetch from "node-fetch";

// let fundCache = null;
// let lastFetch = 0;

// async function fetchFundList() {
//   const now = Date.now();
//   if (!fundCache || now - lastFetch > 24 * 60 * 60 * 1000) {
//     const resp = await fetch("https://api.mfapi.in/mf");
//     fundCache = await resp.json();
//     lastFetch = now;
//   }
//   return fundCache;
// }

// async function fetchFundDetails(code) {
//   const resp = await fetch(`https://api.mfapi.in/mf/${code}`);
//   return resp.ok ? await resp.json() : null;
// }

// export default async function handler(req, res) {
//   if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
//   const { message } = req.body;
//   if (!message) return res.status(400).json({ error: "No message provided" });

//   try {
//     const lowerMsg = message.toLowerCase();
//     let suggestions = null;

//     // 🔹 1. Fund lookup (only if user mentions SIP or fund name)
//     if (lowerMsg.includes("sip") || lowerMsg.includes("fund")) {
//       const funds = await fetchFundList();
//       const match = funds.find(f => lowerMsg.includes(f.schemeName.toLowerCase().split(" ")[0]));
      
//       if (match) {
//         const details = await fetchFundDetails(match.schemeCode);
//         suggestions = [{
//           fundName: match.schemeName,
//           category: details?.meta?.scheme_category || "N/A",
//           risk: details?.meta?.scheme_type || "N/A",
//           returns: "Live returns not fetched here",
//           sipLink: `https://ideas2invest.in/start-sip/${match.schemeCode}`
//         }];
//       }
//     }

//     // 🔹 2. General AI response (Groq or other free LLM)
//     const aiRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         model: "llama-3.1-8b-instant",
//         messages: [
//           { role: "system", content: "You are Ideas2Invest's AI financial assistant. Be concise, accurate, and friendly. Answer general financial queries and help with SIP." },
//           { role: "user", content: message }
//         ],
//         max_tokens: 400,
//         temperature: 0.3,
//       }),
//     });

//     const data = await aiRes.json();
//     const reply = data.choices?.[0]?.message?.content || "Sorry, I have no reply.";

//     return res.status(200).json({ reply, suggestions });

//   } catch (err) {
//     console.error("AI backend error:", err);
//     return res.status(500).json({ reply: "⚠️ Something went wrong, please try again later." });
//   }
// }
