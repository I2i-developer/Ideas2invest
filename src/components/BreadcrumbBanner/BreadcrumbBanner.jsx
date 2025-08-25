"use client";
import React from "react";
import styles from "./BreadcrumbBanner.module.css";
import { motion } from "framer-motion";
import { breadcrumbData } from "@/data/breadcrumbData";
import Link from "next/link";
import { FaHome, FaChevronRight } from "react-icons/fa";

const BreadcrumbBanner = ({ pageKey }) => {
  const { title, breadcrumb, bannerImage } = breadcrumbData[pageKey] || {};

  return (
    <section
      className={styles.banner}
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className={styles.overlay}>
        <div className={styles.container}>
          {/* Left Side: Title + Breadcrumb */}
          <motion.div
            className={styles.left}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className={styles.title}>{title}</h1>

            <div className={styles.breadcrumb}>
              {breadcrumb?.map((crumb, idx) => {
                const isLast = idx === breadcrumb.length - 1;
                return (
                  <span key={idx} className={styles.breadcrumbWrapper}>
                    {idx === 0 && (
                      <FaHome className={styles.homeIcon} />
                    )}
                    {idx > 0 && <FaChevronRight className={styles.separatorIcon} />}

                    {isLast ? (
                      <span className={styles.current}>{crumb.label}</span>
                    ) : (
                      <Link href={crumb.href} className={styles.breadcrumbItem}>
                        {crumb.label}
                      </Link>
                    )}
                  </span>
                );
              })}
            </div>
          </motion.div>

          {/* Right Side: Floating Label Form */}
          
          <motion.form
            className={styles.form}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <h3 className={styles.formHeading}>Get in Touch</h3>
            <div className={styles.formGroup}>
              <input type="text" required />
              <label>Name</label>
            </div>
            <div className={styles.formGroup}>
              <input type="tel" required />
              <label>Phone</label>
            </div>
            <div className={styles.formGroup}>
              <input type="email" required />
              <label>Email</label>
            </div>
            <button type="submit" className={styles.submitBtn}>
              Submit
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default BreadcrumbBanner;
