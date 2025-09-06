"use client";
import React from "react";
import styles from "./ServiceCaseStudy.module.css";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, type: "spring" } },
};

export default function CaseStudySection({ title, description, caseStudies }) {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={styles.heading}>{title}</h2>
        <p className={styles.subheading}>{description}</p>
      </motion.div>

      <motion.div
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >
        {caseStudies.map((cs, i) => (
          <motion.div
            key={i}
            className={styles.card}
            variants={cardVariants}
            whileHover={{ scale: 1.05, rotate: "-1deg" }}
          >
            <div className={styles.headerBox}>
              <div className={styles.avatar}>{cs.avatar || cs.name[0]}</div>
              <div>
                <h3 className={styles.name}>{cs.name}</h3>
                <p className={styles.role}>{cs.role}</p>
              </div>
            </div>

            <div className={styles.content}>
              {cs.problem && (
                <div className={styles.block}>
                  <p><strong>Problem:</strong> {cs.problem}</p>
                </div>
              )}
              {cs.strategy && (
                <div className={styles.block}>
                  <p><strong>Strategy:</strong> {cs.strategy}</p>
                </div>
              )}
              {cs.outcome && (
                <div className={styles.block}>
                  <p><strong>Outcome:</strong> {cs.outcome}</p>
                </div>
              )}
            </div>

            {cs.learning && <span className={styles.learning}>✨ {cs.learning}</span>}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
