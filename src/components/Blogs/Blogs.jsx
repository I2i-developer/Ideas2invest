// "use client";
// import React from "react";
// import Link from 'next/link';
// import styles from "./Blogs.module.css";
// import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const blogs = [
//   {
//     id: 1,
//     category: "Mutual Funds",
//     title: "Understanding Mutual Funds: The Ultimate Guide to Smarter Investing",
//     description: "Learn what mutual funds are, how they work, and how to start investing today.",
//     image: "/assets/images/blogs/understanding-mutual-fund-blog.png",
//     link: "/blogs/understanding-mutual-funds-ultimate-guide"
//   },
//   {
//     id: 2,
//     category: "Mutual Funds",
//     title: "Mastering the Market: A Complete Guide to the Different Types of Mutual Funds in India (2026 Edition)",
//     description: "Navigate the updated 2026 SEBI landscape, from Equity and Debt to the new Life Cycle Funds.",
//     image: "/assets/images/blogs/types-mutual-funds.png",
//     link: "/blogs/mastering-the-market-guide-different-types-mutual-funds-india-2026"
//   },
//   {
//     id: 3,
//     category: "Investment Strategy",
//     title: "4 Smart Ways to Maximize Your SIP Returns in 2026",
//     description: "Is your SIP on autopilot? Discover how simple shifts like 'Step-Up' and 'Goal Labeling' can double your wealth.",
//     image: "/assets/images/blogs/4-smart-ways-to-maximize-sip.png",
//     link: "/blogs/maximize-sip-returns-smart-strategies-2026"
//   },
//   {
//     id: 4,
//     category: "Financial Basics",
//     title: "Savings vs Investing: The Simple Path to Building Long-Term Wealth",
//     description: "Stop letting inflation eat your savings. Learn how to balance safety and growth to secure your family's future.",
//     image: "/assets/images/blogs/savings-vs-investing.png",
//     link: "/blogs/savings-vs-investing-guide-2026"
//   },
// ];

// const Blogs = () => {
//   const renderBlogCard = (blog, index) => (
//     <motion.div
//       key={blog.id}
//       className={styles.blogCard}
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ delay: index * 0.15, duration: 0.5 }}
//     >
//       <div className={styles.imageWrapper}>
//         <img src={blog.image} alt={blog.title} />
//         <span className={styles.category}>{blog.category}</span>
//       </div>
//       {/* <h3>{blog.title}</h3> */}
//       <Link href={blog.link} className={styles.blogLink}>
//         {blog.title}
//       </Link>
//       <p>{blog.description}</p>
//       <a href={blog.link} className={styles.readMore}>Read More</a>
//     </motion.div>
//   );

//   const shouldUseCarousel = blogs.length > 3;

//   return (
//     <section className={styles.blogsSection}>
//       <motion.h2
//         className={styles.heading}
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         Latest Insights & Articles
//       </motion.h2>
//       <motion.p
//         className={styles.subheading}
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ delay: 0.2, duration: 0.5 }}
//       >
//         Stay updated with the latest trends in investments and financial planning.
//       </motion.p>

//       {shouldUseCarousel ? (
//         <Swiper
//           modules={[Navigation, Pagination]}
//           spaceBetween={20}
//           slidesPerView={1}
//           pagination={{ clickable: true }}
//           navigation
//           breakpoints={{
//             768: {
//               slidesPerView: 3
//             }
//           }}
//           className={styles.blogSwiper}
//         >
//           {blogs.map((blog, index) => (
//             <SwiperSlide key={blog.id}>{renderBlogCard(blog, index)}</SwiperSlide>
//           ))}
//         </Swiper>
//       ) : (
//         <div className={styles.blogGrid}>
//           {blogs.map((blog, index) => renderBlogCard(blog, index))}
//         </div>
//       )}

//       <div className={styles.viewAllWrapper}>
//         <a href="/blogs" className={styles.viewAllBtn}>View All Blogs</a>
//       </div>
//     </section>
//   );
// };

// export default Blogs;

"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Blogs.module.css";
import { motion } from "framer-motion";

const blogs = [
  {
    id: 1,
    category: "Mutual Funds",
    title: "Understanding Mutual Funds: The Ultimate Guide to Smarter Investing",
    description: "Learn what mutual funds are, how they work, and how to start investing today.",
    image: "/assets/images/blogs/understanding-mutual-fund-blog.png",
    link: "/blogs/understanding-mutual-funds-ultimate-guide"
  },
  {
    id: 2,
    category: "Mutual Funds",
    title: "Mastering the Market: A Complete Guide to the Different Types of Mutual Funds in India (2026 Edition)",
    description: "Navigate the updated 2026 SEBI landscape, from Equity and Debt to the new Life Cycle Funds.",
    image: "/assets/images/blogs/types-mutual-funds.png",
    link: "/blogs/mastering-the-market-guide-different-types-mutual-funds-india-2026"
  },
  {
    id: 3,
    category: "Investment Strategy",
    title: "4 Smart Ways to Maximize Your SIP Returns in 2026",
    description: "Is your SIP on autopilot? Discover how simple shifts like 'Step-Up' and 'Goal Labeling' can double your wealth.",
    image: "/assets/images/blogs/4-smart-ways-to-maximize-sip.png",
    link: "/blogs/maximize-sip-returns-smart-strategies-2026"
  },
  {
    id: 4,
    category: "Financial Basics",
    title: "Savings vs Investing: The Simple Path to Building Long-Term Wealth",
    description: "Stop letting inflation eat your savings. Learn how to balance safety and growth to secure your family's future.",
    image: "/assets/images/blogs/savings-vs-investing.png",
    link: "/blogs/savings-vs-investing-guide-2026"
  },
  {
    id: 5,
    category: "Investment Philosophy",
    title: "The Honest Way to Wealth: How to Master the Rules of Investing",
    description: "Stop falling for hidden fees and 'sure-shot' tips. Learn the ethical rules to grow your wealth safely in the 2026 Indian economy.",
    image: "/assets/images/blogs/way-to-wealth-investing-rules.png",
    link: "/blogs/way-to-wealth-investing-rules"
  },
  {
    id: 6,
    category: "Wealth Building",
    title: "Magic of Compounding for Long-Term Wealth",
    description: "Learn how the 'doubling paisa' effect can turn small savings into Crores and how to protect your growth from 2026 tax rules.",
    image: "/assets/images/blogs/magic-of-compounding.png",
    link: "/blogs/magic-of-compounding"
  },
  {
    id: 7,
    category: "Market Strategy",
    title: "Preserving Wealth When the Sensex Gives Zero Returns in 2 Years",
    description: "A flat market can silently destroy your purchasing power. Learn how to navigate time corrections and use Alpha-driven strategies to stay ahead.",
    image: "/assets/images/blogs/navigating-zero-return-market.jpeg",
    link: "/blogs/preserving-wealth-zero-return-market"
  },
  {
    id: 8,
    category: "Investment Strategy",
    title: "Active vs. Passive Funds: Choosing the Right Philosophy",
    description: "Stop paying premium prices for average results. Discover the ethical 'Core-Satellite' approach to navigate high fees and the new SEBI MF Lite framework.",
    image: "/assets/images/blogs/active-vs-passive-funds.jpg",
    link: "/blogs/active-vs-passive-funds"
  },
  {
    id: 9,
    category: "Financial Planning",
    title: "Goal-Based Financial Planning: Building Wealth with Purpose",
    description: "Investing without a target is like driving blindfolded. Align your money with your life milestones to build lasting, stress-free wealth.",
    image: "/assets/images/blogs/goal-based-planning.jpeg",
    link: "/blogs/goal-based-financial-planning"
  },
  {
    id: 10,
    category: "Investment Strategy",
    title: "The SIP Paradox: Why You Should Double Down in a Panic",
    description: "Investors are stopping their SIPs right when they should be doubling them. Learn how to use hard data to turn market fear into your greatest advantage.",
    image: "/assets/images/blogs/sip-paradox-market-panic-strategy.jpg",
    link: "/blogs/sip-paradox-market-panic-strategy"
  },
  // {
  //   id: 11,
  //   category: "Tax Planning",
  //   title: "Smart Ways to Save Tax and Build Wealth",
  //   description: "Stop letting taxes eat your hard-earned money. Learn how to combine ELSS and tax-free income products to build a bulletproof financial fortress.",
  //   image: "/assets/images/blogs/smart-ways-to-save-tax-and-build-wealth.jpg",
  //   link: "/blogs/smart-ways-to-save-tax-and-build-wealth"
  // },
];

const Blogs = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev >= blogs.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1; // load 1 blog at a time
      });
    }, 1000); // ⏱️ every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const renderBlogCard = (blog, index) => (
    <motion.div
      key={blog.id}
      className={styles.blogCard}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
    >
      <div className={styles.imageWrapper}>
        <img src={blog.image} alt={blog.title} />
        <span className={styles.category}>{blog.category}</span>
      </div>

      <Link href={blog.link} className={styles.blogLink} target="_blank">
        {blog.title}
      </Link>

      <p>{blog.description}</p>

      <a href={blog.link} className={styles.readMore} target="_blank">
        Read More
      </a>
    </motion.div>
  );

  return (
    <section className={styles.blogsSection}>
      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Latest Insights & Articles
      </motion.h2>

      <motion.p
        className={styles.subheading}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        Stay updated with the latest trends in investments and financial planning.
      </motion.p>

      <div className={styles.blogGrid}>
        {blogs.slice(0, visibleCount).map((blog, index) =>
          renderBlogCard(blog, index)
        )}
      </div>

      {visibleCount < blogs.length && (
        <p className={styles.loadingText}>Loading more blogs...</p>
      )}
    </section>
  );
};

export default Blogs;