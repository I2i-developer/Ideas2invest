"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { blogs } from "@/data/blogs";
import styles from "./Blogs.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const getPrimaryCategory = (category) => {
  if (Array.isArray(category)) return category[0];
  return category;
};

const Blogs = () => {
  const renderBlogCard = (blog, index) => (
    <motion.article
      className={styles.blogCard}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: Math.min(index, 3) * 0.08, duration: 0.4 }}
    >
      <div className={styles.imageWrapper}>
        <img src={blog.poster} alt={blog.title} />
        <span className={styles.category}>{getPrimaryCategory(blog.category)}</span>
      </div>

      <Link href={`/blogs/${blog.slug}`} className={styles.blogLink}>
        {blog.title}
      </Link>

      <p>{blog.description}</p>

      <Link href={`/blogs/${blog.slug}`} className={styles.readMore}>
        Read More
      </Link>
    </motion.article>
  );

  return (
    <section className={styles.blogsSection}>
      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Latest Insights & Articles
      </motion.h2>

      <motion.p
        className={styles.subheading}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Stay updated with the latest trends in investments and financial planning.
      </motion.p>

      <Swiper
        modules={[Navigation, Pagination]}
        className={styles.blogSwiper}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {blogs.map((blog, index) => (
          <SwiperSlide key={blog.slug} className={styles.blogSlide}>
            {renderBlogCard(blog, index)}
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.viewAllWrapper}>
        <Link href="/blogs" className={styles.viewAllBtn}>
          View All Blogs
        </Link>
      </div>
    </section>
  );
};

export default Blogs;
