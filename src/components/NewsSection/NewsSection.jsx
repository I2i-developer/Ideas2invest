// "use client";

// import React, { useEffect, useState } from "react";
// import styles from "./NewsSection.module.css";
// import { motion, AnimatePresence } from "framer-motion";
// import dummyUpdates from "./dummyCompanyUpdates";

// export default function NewsSection() {
//   const [newsData, setNewsData] = useState([]);
//   const [category, setCategory] = useState("All");
//   const [loading, setLoading] = useState(true);

//   const categories = [
//     "All",
//     "India Markets",
//     "Mutual Funds",
//     "Trending",
//     "Global Markets",
//     "Crypto",
//     "Insurance",
//     "Company Updates",
//   ];

//   useEffect(() => {
//     fetchNews();
//   }, [category]);

//   const fetchNews = async () => {
//     if (category === "Company Updates") {
//       setNewsData([]);
//       setLoading(false);
//       return;
//     }

//     setLoading(true);

//     try {
//       const res = await fetch(`/api/financial-news`);
//       const data = await res.json();
//       setNewsData(data.articles || []);
//     } catch (err) {
//       console.log("Error fetching news:", err);
//     }

//     setLoading(false);
//   };

//   // Filter logic based on keywords
//   const filterKeywordMap = {
//     "India Markets": /(india|nifty|sensex|equity|rbi|market)/i,
//     "Mutual Funds": /(mutual|sip|amc|nav|fund)/i,
//     Trending: /(breaking|hot|trending|major|alert)/i,
//     "Global Markets": /(global|world|international|economy|us|china|europe)/i,
//     Crypto: /(crypto|bitcoin|ethereum|web3|blockchain)/i,
//     Insurance: /(insurance|policy|premium|health|life)/i,
//   };

//   const filteredNews =
//     category === "All"
//       ? newsData
//       : category === "Company Updates"
//       ? dummyUpdates
//       : newsData.filter(
//           (item) =>
//             filterKeywordMap[category]?.test(item.title || item.description || "")
//         );

//   return (
//     <section className={styles.wrapper}>
//       <motion.h2
//         initial={{ opacity: 0, y: 15 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         Market Pulse & Latest Financial News
//       </motion.h2>

//       {/* ---------- FILTER BUTTONS ---------- */}
//       <div className={styles.filters}>
//         {categories.map((c) => (
//           <button
//             key={c}
//             onClick={() => setCategory(c)}
//             className={category === c ? styles.activeFilter : ""}
//           >
//             {c}
//           </button>
//         ))}
//       </div>

//       <div className={styles.layout}>
//         {/* ---------- LEFT SIDE (COMPANY UPDATES) ---------- */}
//         <div className={styles.leftCol}>
//           <h3>Company Announcements</h3>
//           <div className={styles.companyFeed}>
//             {dummyUpdates.map((item, i) => (
//               <motion.div
//                 key={i}
//                 className={styles.companyCard}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.05 }}
//               >
//                 <span className={styles.tag}>Ideas2Invest</span>
//                 <h4>{item.title}</h4>
//                 <p>{item.shortDesc}</p>
//                 <small>{item.date}</small>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* ---------- RIGHT SIDE (NEWS FEED) ---------- */}
//         <div className={styles.rightCol}>
//           <h3>
//             {category === "Company Updates"
//               ? "Internal Company News"
//               : category === "India Markets"
//               ? "Latest India Market News"
//               : `Latest ${category === "All" ? "Financial" : category} News`}
//           </h3>

//           {loading ? (
//             <p className={styles.loading}>Fetching latest news...</p>
//           ) : filteredNews.length === 0 ? (
//             <p className={styles.noData}>No news available for this category.</p>
//           ) : (
//             <div className={styles.newsFeed}>
//               <AnimatePresence>
//                 {filteredNews.slice(0, 20).map((item, index) => (
//                   <motion.div
//                     key={index}
//                     className={styles.newsCard}
//                     initial={{ opacity: 0, x: 20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.35 }}
//                   >
//                     {item.image_url || item.image ? (
//                       <img
//                         src={item.image_url || item.image}
//                         alt="news"
//                         className={styles.newsImg}
//                       />
//                     ) : null}

//                     <div>
//                       <h4 className={styles.headline}>{item.title}</h4>
//                       {/* <p className={styles.summary}>
//                         {(item.description || item.content)?.slice(0, 120)}...
//                       </p> */}

//                       <a
//                         href={item.link || item.url}
//                         target="_blank"
//                         className={styles.readLink}
//                       >
//                         Read Full Article →
//                       </a>
//                     </div>
//                   </motion.div>
//                 ))}
//               </AnimatePresence>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import React, { useEffect, useState } from "react";
import styles from "./NewsSection.module.css";
import { motion, AnimatePresence } from "framer-motion";
import dummyUpdates from "./dummyCompanyUpdates";

export default function NewsSection() {
  const [newsData, setNewsData] = useState([]);
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // News categories
  const categories = [
    "All",
    "India Markets",
    "Mutual Funds",
    "Trending",
    "Global Markets",
    "Crypto",
    "Insurance",
    "Company Updates",
  ];

  useEffect(() => {
    fetchNews();
  }, [category]);

  // Fetch news from backend API
  const fetchNews = async () => {
    if (category === "Company Updates") {
      setNewsData([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch(`/api/financial-news?category=${category}`, {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch news");
      }

      const response = await res.json();
      setNewsData(response.results || []);
    } catch (err) {
      console.error("❌ Error fetching news:", err);
      setError("Unable to load news. Please try again later.");
    }

    setLoading(false);
  };

  // Keyword Filter Logic
  const filterKeywordMap = {
    "India Markets": /(india|sensex|nifty|rbi|market|economy|stocks)/i,
    "Mutual Funds": /(mutual|sip|amc|nav|fund|mf)/i,
    Trending: /(breaking|hot|trending|alert|massive|rally)/i,
    "Global Markets": /(global|world|international|us|china|europe)/i,
    Crypto: /(crypto|bitcoin|ethereum|web3|blockchain)/i,
    Insurance: /(insurance|policy|premium|life|health)/i,
  };

  const filteredNews =
    category === "All"
      ? newsData
      : category === "Company Updates"
      ? dummyUpdates
      : newsData.filter((item) =>
          filterKeywordMap[category]?.test(
            item.title || item.description || item.content || ""
          )
        );

  return (
    <section className={styles.wrapper}>
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Market Pulse & Latest Financial News
      </motion.h2>

      {/* ---------- CATEGORY FILTER BUTTONS ---------- */}
      <div className={styles.filters}>
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={category === c ? styles.activeFilter : ""}
          >
            {c}
          </button>
        ))}
      </div>

      <div className={styles.layout}>

        {/* ---------- LEFT SIDE: COMPANY INTERNAL NEWS ---------- */}
        <div className={styles.leftCol}>
          <h3>Company Announcements</h3>
          <div className={styles.companyFeed}>
            {dummyUpdates.map((item, i) => (
              <motion.div
                key={i}
                className={styles.companyCard}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <span className={styles.tag}>Ideas2Invest</span>
                <h4>{item.title}</h4>
                <p>{item.shortDesc}</p>
                <small>{item.date}</small>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ---------- RIGHT SIDE: LIVE FINANCIAL NEWS ---------- */}
        <div className={styles.rightCol}>
          <h3>
            {category === "Company Updates"
              ? "Internal Updates"
              : `Latest ${category === "All" ? "Financial" : category} News`}
          </h3>

          {loading ? (
            <p className={styles.loading}>Fetching latest news...</p>
          ) : error ? (
            <p className={styles.error}>{error}</p>
          ) : filteredNews?.length === 0 ? (
            <p className={styles.noData}>No news available for this category.</p>
          ) : (
            <div className={styles.newsFeed}>
              <AnimatePresence>
                {filteredNews.slice(0, 20).map((item, index) => (
                  <motion.div
                    key={index}
                    className={styles.newsCard}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                  >
                    {item.image_url && (
                      <img src={item.image_url} className={styles.newsImg} alt="news" />
                    )}

                    <div>
                      <h4 className={styles.headline}>{item.title}</h4>
                      <a
                        href={item.link}
                        target="_blank"
                        className={styles.readLink}
                        rel="noreferrer"
                      >
                        Read Full Article →
                      </a>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}



// "use client";

// import React, { useEffect, useState } from "react";
// import styles from "./NewsSection.module.css";
// import { motion, AnimatePresence } from "framer-motion";
// import dummyUpdates from "./dummyCompanyUpdates";

// export default function NewsSection() {
//   const [newsData, setNewsData] = useState([]);
//   const [category, setCategory] = useState("All");
//   const [loading, setLoading] = useState(true);

//   const categories = [
//     "All",
//     "India Markets",
//     "Mutual Funds",
//     "Trending",
//     "Global Markets",
//     "Company Updates",
//     "Insurance",
//   ];

//   useEffect(() => {
//     fetchNews();
//   }, [category]);

//   const fetchNews = async () => {
//     setLoading(true);

//     const endpoint =
//       category === "India Markets"
//         ? "/api/financial-news?filter=india"
//         : "/api/financial-news";

//     try {
//       const res = await fetch(endpoint);
//       const data = await res.json();
//       setNewsData(data);
//     } catch (err) {
//       console.log("Error fetching news:", err);
//     }

//     setLoading(false);
//   };

//   const filteredNews =
//     category === "All" || category === "India Markets"
//       ? newsData
//       : category === "Company Updates"
//       ? dummyUpdates
//       : newsData.filter((item) => item.category === category);

//   return (
//     <section className={styles.wrapper}>
//       <motion.h2
//         initial={{ opacity: 0, y: 15 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         Market Pulse & Latest Financial News
//       </motion.h2>

//       {/* Filters */}
//       <div className={styles.filters}>
//         {categories.map((c) => (
//           <button
//             key={c}
//             onClick={() => setCategory(c)}
//             className={category === c ? styles.activeFilter : ""}
//           >
//             {c}
//           </button>
//         ))}
//       </div>

//       <div className={styles.layout}>
//         {/* LEFT SIDE - Company Updates */}
//         <div className={styles.leftCol}>
//           <h3>Company Announcements</h3>
//           <div className={styles.companyFeed}>
//             {dummyUpdates.map((item, i) => (
//               <motion.div
//                 key={i}
//                 className={styles.companyCard}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.05 }}
//               >
//                 <span className={styles.tag}>Ideas2Invest</span>
//                 <h4>{item.title}</h4>
//                 <p>{item.shortDesc}</p>
//                 <small>{item.date}</small>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* RIGHT SIDE - News Feed */}
//         <div className={styles.rightCol}>
//           <h3>
//             {category === "Company Updates"
//               ? "Internal Company News"
//               : category === "India Markets"
//               ? "Latest India Market News"
//               : "Latest Financial News"}
//           </h3>

//           {loading ? (
//             <p>Fetching latest news...</p>
//           ) : (
//             <div className={styles.newsFeed}>
//               <AnimatePresence>
//                 {filteredNews.slice(0, 20).map((item, index) => (
//                   <motion.div
//                     key={index}
//                     className={styles.newsCard}
//                     initial={{ opacity: 0, x: 20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.35 }}
//                   >
//                     {item.image && (
//                       <img src={item.image} alt="news" className={styles.newsImg} />
//                     )}

//                     <div>
//                       <h4 className={styles.headline}>{item.headline || item.title}</h4>
//                       <p className={styles.summary}>
//                         {(item.summary || item.shortDesc)?.slice(0, 120)}...
//                       </p>

//                       <a href={item.url} target="_blank" className={styles.readLink}>
//                         Read Full Article →
//                       </a>
//                     </div>
//                   </motion.div>
//                 ))}
//               </AnimatePresence>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";
// import React, { useEffect, useState } from "react";
// import styles from "./NewsSection.module.css";
// import { motion } from "framer-motion";
// import dummyUpdates from "./dummyCompanyUpdates";

// export default function NewsSection() {
//   const [globalNews, setGlobalNews] = useState([]);
//   const [category, setCategory] = useState("all");
//   const [loading, setLoading] = useState(true);

//   // Fetch Financial News (API Example)
//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const res = await fetch("/api/financial-news");
//         const data = await res.json();
//         setGlobalNews(data.articles || []);
//       } catch (error) {
//         console.error("News API Error:", error);
//       }
//       setLoading(false);
//     };

//     fetchNews();
//     const interval = setInterval(fetchNews, 1000 * 60 * 30); // refresh every 30 mins
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className={styles.wrapper}>
//       <motion.h2
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.4 }}
//       >
//         Latest Updates & Market News
//       </motion.h2>

//       <div className={styles.filters}>
//         {["all", "company", "india", "global", "markets"].map((item) => (
//           <button
//             key={item}
//             onClick={() => setCategory(item)}
//             className={category === item ? styles.activeFilter : ""}
//           >
//             {item.toUpperCase()}
//           </button>
//         ))}
//       </div>

//       <div className={styles.layout}>
//         {/* Left - Company Updates */}
//         <div className={styles.companyUpdates}>
//           <h3>Company Announcements</h3>
//           <div className={styles.cardContainer}>
//             {dummyUpdates.map((news, i) => (
//               <motion.div
//                 key={i}
//                 className={styles.card}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.1 }}
//               >
//                 <span className={styles.tag}>Ideas2Invest</span>
//                 <h4>{news.title}</h4>
//                 <p>{news.shortDesc}</p>
//                 <small>{news.date}</small>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Right - Financial News */}
//         <div className={styles.liveNews}>
//           <h3>Live Financial News</h3>

//           {loading ? (
//             <p>Loading news...</p>
//           ) : (
//             <div className={styles.scrollFeed}>
//               {globalNews.map((item, idx) => (
//                 <motion.div
//                   key={idx}
//                   className={styles.liveCard}
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ duration: 0.4 }}
//                 >
//                   <h4>{item.title}</h4>
//                   <p>{item.description?.slice(0, 120)}...</p>
//                   <a href={item.url} target="_blank" rel="noopener noreferrer">
//                     Read more →
//                   </a>
//                 </motion.div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }
