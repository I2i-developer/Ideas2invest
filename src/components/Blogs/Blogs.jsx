"use client";
import React from "react";
import styles from "./Blogs.module.css";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const blogs = [
  {
    id: 1,
    category: "Mutual Funds",
    title: "5 Smart Mutual Fund Strategies for Beginners",
    description: "Learn how to kickstart your investment journey with these easy mutual fund strategies.",
    image: "/assets/images/blogs/blog1.jpg",
    link: "#"
  },
  {
    id: 2,
    category: "Wealth Tips",
    title: "How to Build a Retirement Corpus with SIP",
    description: "Step-by-step guide on using SIP to create long-term wealth for retirement.",
    image: "/assets/images/blogs/blog2.png",
    link: "#"
  },
  {
    id: 3,
    category: "Market Insights",
    title: "Stock vs Mutual Funds: Which Should You Choose?",
    description: "Understand the pros and cons of direct stock investment vs mutual funds.",
    image: "/assets/images/blogs/blog3.jpg",
    link: "#"
  },
  {
    id: 4,
    category: "Investment Hacks",
    title: "Top 10 High Return Funds in 2025",
    description: "Explore the best performing funds this year.",
    image: "/assets/images/blogs/blog2.png",
    link: "#"
  }
];

const Blogs = () => {
  const renderBlogCard = (blog, index) => (
    <motion.div
      key={blog.id}
      className={styles.blogCard}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
    >
      <div className={styles.imageWrapper}>
        <img src={blog.image} alt={blog.title} />
        <span className={styles.category}>{blog.category}</span>
      </div>
      <h3>{blog.title}</h3>
      <p>{blog.description}</p>
      <a href={blog.link} className={styles.readMore}>Read More</a>
    </motion.div>
  );

  const shouldUseCarousel = blogs.length > 3;

  return (
    <section className={styles.blogsSection}>
      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Latest Insights & Articles
      </motion.h2>
      <motion.p
        className={styles.subheading}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Stay updated with the latest trends in investments and financial planning.
      </motion.p>

      {shouldUseCarousel ? (
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            768: {
              slidesPerView: 3
            }
          }}
          className={styles.blogSwiper}
        >
          {blogs.map((blog, index) => (
            <SwiperSlide key={blog.id}>{renderBlogCard(blog, index)}</SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className={styles.blogGrid}>
          {blogs.map((blog, index) => renderBlogCard(blog, index))}
        </div>
      )}

      <div className={styles.viewAllWrapper}>
        <a href="/blogs" className={styles.viewAllBtn}>View All Blogs</a>
      </div>
    </section>
  );
};

export default Blogs;
