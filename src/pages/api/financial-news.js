// // Must run Node, NOT Edge:
// export const config = {
//   runtime: "nodejs",
// };

// import Parser from "rss-parser";

// const parser = new Parser();

// // NewsData.io API (Indian Finance Focus)
// const NEWS_API_URL = `https://newsdata.io/api/1/news?apikey=${process.env.NEWSDATA_API_KEY}&q=finance&country=in&category=business`;

// // RSS Sources
// const rssFeeds = [
//   "https://economictimes.indiatimes.com/markets/rssfeeds/1977021501.cms",
//   "https://www.livemint.com/rss/markets",
//   "https://www.moneycontrol.com/rss/latestnews.xml",
//   "https://www.moneycontrol.com/rss/mfnews.xml",
//   "https://www.financialexpress.com/market/feed/",
// ];

// // Keyword filters for categories
// const categoryKeywords = {
//   "India Markets": /(sensex|nifty|rbi|india|shares|stocks|market|economy)/i,
//   "Mutual Funds": /(mutual|sip|nav|fund|amc)/i,
//   Trending: /(breaking|major|hot|alert|rally|crash)/i,
//   "Global Markets": /(global|world|us|china|asia|europe|international)/i,
//   Crypto: /(crypto|bitcoin|ethereum|web3|blockchain)/i,
//   Insurance: /(insurance|policy|premium|health|life)/i,
// };

// export default async function handler(req, res) {
//   try {
//     const category = req.query.category || "All";

//     // ---- Fetch NewsData.io ----
//     const ndRes = await fetch(NEWS_API_URL);
//     const ndJson = await ndRes.json();
    
//     const apiNews =
//       ndJson?.results?.map((item) => ({
//         title: item.title,
//         link: item.link,
//         image_url: item.image_url || null,
//         description: item.description || "",
//         source: item.source_id || "NewsData.io",
//         published: item.pubDate,
//       })) || [];

//     // ---- Fetch RSS ----
//     const rssAll = await Promise.all(
//       rssFeeds.map(async (url) => {
//         try {
//           const feed = await parser.parseURL(url);
//           return feed.items.map((item) => ({
//             title: item.title,
//             link: item.link,
//             image_url: item.enclosure?.url || null,
//             description: item.contentSnippet || "",
//             source: feed.title || "RSS",
//             published: item.pubDate || item.isoDate || null,
//           }));
//         } catch (err) {
//           console.warn(`RSS failed: ${url}`);
//           return [];
//         }
//       })
//     );

//     let combinedNews = [...apiNews, ...rssAll.flat()];

//     // ----- Category Filter -----
//     if (category !== "All") {
//       combinedNews = combinedNews.filter((news) =>
//         categoryKeywords[category]?.test(
//           (news.title || "") + (news.description || "")
//         )
//       );
//     }

//     // ---- Remove duplicates by title ----
//     const uniqueNews = Array.from(
//       new Map(combinedNews.map((n) => [n.title, n])).values()
//     );

//     // Sort by date (latest first)
//     uniqueNews.sort((a, b) => new Date(b.published || 0) - new Date(a.published || 0));

//     return res.status(200).json({
//       status: "success",
//       total: uniqueNews.length,
//       category,
//       results: uniqueNews.slice(0, 50),
//     });

//   } catch (error) {
//     console.error("❌ ERROR FETCHING NEWS:", error);
//     return res.status(500).json({
//       status: "error",
//       message: error.message || "Something went wrong",
//     });
//   }
// }


// ---- RUNTIME ----
export const config = {
  runtime: "nodejs",
};

import Parser from "rss-parser";

const parser = new Parser();

// ---- MEMORY CACHE (fallback until Redis is plugged in) ----
let CACHE = { data: null, time: 0 };
const CACHE_DURATION = 1000 * 60 * 60 * 3; // 3 hours cache

// ---- NewsData.io ----
const NEWS_API_URL = `https://newsdata.io/api/1/news?apikey=${process.env.NEWSDATA_API_KEY}&q=finance&country=in&language=en`;

// ---- RSS FEEDS ----
const rssFeeds = [
  "https://economictimes.indiatimes.com/markets/rssfeeds/1977021501.cms",
  "https://www.livemint.com/rss/markets",
  "https://www.moneycontrol.com/rss/latestnews.xml",
  "https://www.moneycontrol.com/rss/mfnews.xml",
  "https://www.financialexpress.com/market/feed/",
  "https://www.business-standard.com/rss/markets-106.rss",
  "https://www.cnbctv18.com/rss/latest.xml",
];

const categoryKeywords = {
  "India Markets": /(sensex|nifty|rbi|india|shares|stocks|market|economy)/i,
  "Mutual Funds": /(mutual|sip|nav|fund|amc)/i,
  Trending: /(breaking|major|hot|alert|rally|crash|surge|falls)/i,
  "Global Markets": /(global|world|us|china|asia|europe|inflation|fed)/i,
  Crypto: /(crypto|bitcoin|ethereum|web3|mining|token)/i,
  Insurance: /(insurance|policy|premium|health|life)/i,
};

export default async function handler(req, res) {
  try {
    const category = req.query.category || "All";

    // ---- Return Cached Data (if valid) ----
    if (CACHE.data && Date.now() - CACHE.time < CACHE_DURATION) {
      console.log("🟢 Serving from cache");
      return sendFilteredResults(res, CACHE.data, category);
    }

    console.log("🔄 Fetching fresh news...");

    // ---- Fetch NewsData.io ----
    const newsRes = await fetch(NEWS_API_URL);
    const newsJson = await newsRes.json();

    const apiNews =
      newsJson?.results?.map((item) => ({
        title: item.title,
        link: item.link,
        image_url: item.image_url || null,
        description: item.description || "",
        published: item.pubDate || null,
        source: item.source_id || "NewsData.io",
      })) || [];

    // ---- RSS Fetch ----
    const rssParsed = await Promise.all(
      rssFeeds.map(async (url) => {
        try {
          const feed = await parser.parseURL(url);
          return feed.items.map((item) => ({
            title: item.title,
            link: item.link,
            image_url: item.enclosure?.url || null,
            description: item.contentSnippet || "",
            published: item.pubDate || item.isoDate || null,
            source: feed.title || "RSS",
          }));
        } catch (err) {
          return [];
        }
      })
    );

    let combinedNews = [...apiNews, ...rssParsed.flat()];


    // ---- Remove Clickbait ----
    combinedNews = combinedNews.filter(
      (n) => !/watch|viral|video|celebrity|bollywood/i.test(n.title)
    );


    // ---- Remove duplicates ----
    combinedNews = Array.from(new Map(combinedNews.map((i) => [i.title.trim(), i])).values());


    // ---- Sort: First by freshness then category relevance ----
    combinedNews.sort((a, b) => new Date(b.published || 0) - new Date(a.published || 0));


    // ---- Cache Result ----
    CACHE = { data: combinedNews, time: Date.now() };

    return sendFilteredResults(res, combinedNews, category);

  } catch (error) {
    console.error("❌ ERROR:", error);
    return res.status(500).json({ status: "error", message: error.message });
  }
}

function sendFilteredResults(res, news, category) {
  let filtered = [...news];

  if (category !== "All") {
    filtered = filtered.filter((item) =>
      categoryKeywords[category]?.test(item.title + item.description)
    );
  }

  return res.status(200).json({
    status: "success",
    total: filtered.length,
    category,
    results: filtered.slice(0, 100), // now returns up to 100 items
  });
}


// export const runtime = "edge";

// export default async function GET(request) {
//   try {
//     const { searchParams } = new URL(request.url);
//     const filter = searchParams.get("filter") || "all";

//     const API_KEY = process.env.NEWSDATA_API_KEY;

//     const queryMap = {
//       indiamarkets: "nifty OR sensex OR stock market India OR NSE OR BSE",
//       mutualfunds: "mutual fund OR SIP OR ELSS OR equity funds",
//       insurance: "insurance OR IRDAI OR life insurance OR health insurance",
//       stockmarket: "stock market OR ipo OR trading",
//       crypto: "crypto OR bitcoin OR ethereum OR blockchain",
//       global: "dow jones OR nasdaq OR forex OR gold prices OR world economy",
//       trending: "breaking finance OR trending finance OR world business",
//       all: "business OR finance OR stock market OR investment",
//     };

//     const query = queryMap[filter] || queryMap["all"];
//     const isIndia = filter !== "crypto" && filter !== "global";

//     let allArticles = [];
//     let page = 1;
//     const maxPages = 3; // Fetch more pages for more results

//     while (page <= maxPages) {
//       const url = `https://newsdata.io/api/1/news?apikey=${API_KEY}&q=${encodeURIComponent(
//         query
//       )}${isIndia ? "&country=in" : ""}&language=en&category=business&page=${page}`;

//       const response = await fetch(url);

//       if (!response.ok) break;

//       const data = await response.json();

//       if (!data.results || data.results.length === 0) break;

//       allArticles = [...allArticles, ...data.results];
//       page++;

//       if (!data.nextPage) break;
//     }

//     // Remove duplicate URLs
//     const uniqueArticles = [
//       ...new Map(allArticles.map((item) => [item.link, item])).values(),
//     ];

//     const formatted = uniqueArticles.map((article) => ({
//       title: article.title,
//       headline: article.title,
//       url: article.link,
//       summary: article.description,
//       image: article.image_url,
//       category: filter,
//       date: article.pubDate,
//     }));

//     return new Response(JSON.stringify({ articles: formatted }), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (error) {
//     return new Response(JSON.stringify({ error: error.message }), {
//       status: 500,
//     });
//   }
// }


// const categoryRules = {
//   india: [
//     "india", "indian", "sensex", "nifty", "bse", "nse", "rbi", "sebi",
//     "lic", "sbi", "hdfc", "icici", "tatamotors", "reliance",
//     "tata", "budget", "rupee", "upi", "fintech", "india markets"
//   ],

//   mutualFunds: [
//     "mutual fund", "sip", "nav", "aum", "elss", "equity fund", "amc",
//     "hdfc mf", "tata mf", "sbi mf", "aif", "pms"
//   ],

// //   global: [
// //     "wall street", "nasdaq", "dow", "fed", "china", "europe", "global",
// //     "world economy", "interest rates", "us market"
// //   ],

//   insurance: [
//     "insurance", "irdai", "premium", "health insurance", "life insurance",
//     "lic", "policyholders"
//   ],
// };

// function detectCategory(text) {
//   text = text.toLowerCase();

//   if (categoryRules.india.some((k) => text.includes(k))) return "India Markets";
//   if (categoryRules.mutualFunds.some((k) => text.includes(k))) return "Mutual Funds";
// //   if (categoryRules.global.some((k) => text.includes(k))) return "Global Markets";
//   if (categoryRules.insurance.some((k) => text.includes(k))) return "Insurance";

//   return "Trending";
// }

// function isIndiaNews(item) {
//   const content = `${item.headline} ${item.summary}`.toLowerCase();
//   return categoryRules.india.some((k) => content.includes(k));
// }

// export default async function handler(req, res) {
//   try {
//     const response = await fetch(
//       `https://finnhub.io/api/v1/news?category=general&token=${process.env.FINNHUB_KEY}`
//     );

//     let data = await response.json();

//     // Assign category tags
//     data = data.map((item) => ({
//       ...item,
//       category: detectCategory(`${item.headline} ${item.summary}`),
//       isIndia: isIndiaNews(item),
//     }));

//     // If requesting only India News
//     if (req.query.filter === "india") {
//       data = data.filter((item) => item.isIndia === true);
//     }

//     res.status(200).json(data);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to fetch news", details: err.message });
//   }
// }



// export default async function handler(req, res) {
//   try {

//     // Primary: India Finance / Business
//     const indiaRes = await fetch(
//       `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${process.env.FINANCE_NEWS_API_KEY}&language=en`
//     );
//     const indiaJson = await indiaRes.json();

//     let indiaArticles = indiaJson.articles || [];

//     // Optional Filtering by finance keywords
//     indiaArticles = indiaArticles.filter((a) =>
//       /(finance|market|investment|sensex|nifty|mutual|economy)/i.test(
//         a.title || "" + a.description || ""
//       )
//     );

//     // Secondary Source (Global Finance)
//     // const globalRes = await fetch(
//     //   `https://newsapi.org/v2/everything?q=stock market OR global finance OR investments&language=en&sortBy=publishedAt&apiKey=${process.env.FINANCE_NEWS_API_KEY}`
//     // );
//     // const globalJson = await globalRes.json();

//     const finalArticles = [
//       ...indiaArticles,      // PRIORITY
//       // ...globalJson.articles // fallback
//     ];

//     res.status(200).json({
//       status: "success",
//       total: finalArticles.length,
//       articles: finalArticles.slice(0, 50),
//     });

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Unable to fetch financial news" });
//   }
// }
