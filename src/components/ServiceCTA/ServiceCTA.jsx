"use client";
import React from "react";
import styles from "./ServiceCTA.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, x: 80 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function ServiceCTASection({
  title,
  description,
  benefits = [],
  ctaText,
  ctaLink = "#",
  image,
}) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Left Content */}
        <motion.div
          className={styles.textContent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          variants={textVariants}
        >
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>

          {benefits.length > 0 && (
            <ul className={styles.benefits}>
              {benefits.map((benefit, i) => (
                <motion.li
                  key={i}
                  className={styles.benefit}
                  whileHover={{ x: 8, scale: 1.02 }}
                >
                  ✅ {benefit}
                </motion.li>
              ))}
            </ul>
          )}

          <Link href={ctaLink} className={styles.ctaBtn} target="_blank">
            {ctaText}
          </Link>
        </motion.div>

        {/* Right Image */}
        {image && (
          <motion.div
            className={styles.imageBox}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            variants={imageVariants}
          >
            <img src={image} alt="Service CTA" className={styles.image} />
          </motion.div>
        )}
      </div>
    </section>
  );
}
