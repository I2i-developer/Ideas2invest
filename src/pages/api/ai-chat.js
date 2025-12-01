// import funds from '../../data/funds.json';

// export default async function handler(req, res) {
//   if (req.method !== 'POST') return res.status(405).end()
//   const { message } = req.body
//   if (!message) return res.status(400).json({ error: 'No message' })

//   try {
//     const topFunds = funds.slice(0, 6).map(f => `${f.fundName} (${f.category}) — 1Y: ${f['1y']}%, 3Y: ${f['3y']}%`).join('\n')

//     const systemPrompt = `You are Ideas2Invest's AI financial assistant. Provide concise, accurate, and friendly answers. If the user asks for fund recommendations, return a JSON array under key 'suggestions' with objects {fundName, sipAmount, category, risk, returns}. Always ask one confirmation question before starting any transaction.`

//     // Call Groq API (Llama-3 model)
//     const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization": `Bearer ${process.env.GROQ_API_KEY}`
//       },
//       body: JSON.stringify({
//         model: "llama3-70b-8192",
//         messages: [
//           { role: "system", content: systemPrompt },
//           { role: "system", content: `Top funds data:\n${topFunds}` },
//           { role: "user", content: message }
//         ],
//         max_tokens: 600,
//         temperature: 0.2
//       })
//     })

//     if (!response.ok) throw new Error('Groq API error')
//     const data = await response.json()

//     const reply = data.choices?.[0]?.message?.content || 'Sorry, no reply.'

//     let suggestions = null
//     const ask = message.toLowerCase()
//     if (ask.includes('recommend') || ask.includes('suggest') || ask.includes('start sip') || ask.includes('sip in')) {
//       const m = message.match(/(\d{3,6})/)
//       const amount = m ? parseInt(m[0], 10) : 5000

//       const picks = funds
//         .sort((a, b) => b['3y'] - a['3y'])
//         .slice(0, 3)
//         .map(f => ({
//           fundName: f.fundName,
//           sipAmount: amount,
//           category: f.category,
//           risk: f.risk,
//           returns: `${f['1y']}% / ${f['3y']}%`
//         }))
//       suggestions = picks
//     }

//     return res.status(200).json({ reply, suggestions })

//   } catch (err) {
//     console.error(err)
//     return res.status(500).json({ error: 'server error' })
//   }
// }


// /pages/api/ai-chat.js
import funds from '../../data/funds.json'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'No message provided' });
  }
  try {
    const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        messages: [
          { role: 'system', content: `You are Ideas2Invest's AI financial assistant. Provide concise, accurate, friendly guidance. If the user asks for recommendations, return suggestions.` },
          { role: 'system', content: `Top funds data:\n${funds.slice(0, 6).map(f => `${f.fundName} (${f.category}) — 1Y: ${f['1y']}%, 3Y: ${f['3y']}%`).join('\n')}` },
          { role: 'user', content: message },
        ],
        max_tokens: 500,
        temperature: 0.2,
      }),
    })

    const data = await groqRes.json()
    console.log('Groq API response:', JSON.stringify(data, null, 2))

    if (!groqRes.ok) {
      return res.status(groqRes.status).json({
        reply: 'Sorry, I could not process your request at the moment (model issue).',
        error: data.error || 'Groq API error',
      })
    }

    const reply = data.choices?.[0]?.message?.content || 'Sorry, I have no reply.'

    const lowerMsg = message.toLowerCase();

    let suggestions = [];
    if (lowerMsg.includes('recommend') || lowerMsg.includes('suggest') || lowerMsg.includes('sip')) {
      // Detect AMC/fund keywords
      const amcs = ['motilal oswal', 'parag parikh', 'ppfas', 'invesco india', 'quant', 'dsp', 'hdfc', 'mirae', 'sbi'];
      const matchedAMC = amcs.find(amc => lowerMsg.includes(amc));

      const filteredFunds = matchedAMC
        ? funds.filter(f => f.fundName.toLowerCase().includes(matchedAMC) || f.category.toLowerCase().includes(matchedAMC))
        : funds;

      const matched = message.match(/(\d{3,6})/);
      const amount = matched ? parseInt(matched[0], 10) : 5000;

      suggestions = filteredFunds
        .sort((a, b) => (b['3y'] || 0) - (a['3y'] || 0))
        .slice(0, 3)
        .map(f => ({
          fundName: f.fundName,
          sipAmount: amount,
          category: f.category,
          risk: f.risk,
          returns: `${f['1y'] || 'N/A'}% / ${f['3y'] || 'N/A'}%`,
          sipLink: f.sipLink
        }));
    }

    return res.status(200).json({ reply, suggestions });

  } catch (err) {
    console.error('AI backend error:', err)
    return res.status(500).json({
      reply: 'Sorry, something went wrong with the AI service. Please try again later.',
    })
  }
}
