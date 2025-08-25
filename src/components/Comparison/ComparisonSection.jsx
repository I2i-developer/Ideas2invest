"use client";
import React from "react";
import styles from "./ComparisonSection.module.css";
import { motion } from "framer-motion";

const ComparisonSection = ({ data }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{data.title}</h2>
      <div className={styles.tableWrapper}>
        <div className={styles.headerRow}>
          <div className={styles.colLabel}></div>
          <div className={styles.colTitle}>{data.leftTitle}</div>
          <div className={styles.colTitle}>{data.rightTitle}</div>
        </div>

        {data.rows.map((row, index) => (
          <motion.div
            key={row.id}
            className={`${styles.row} ${
              index % 2 === 0 ? styles.rowAlt : ""
            }`}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className={styles.label}>{row.label}</div>
            <div className={styles.colCard}>{row.left}</div>
            <div className={styles.colCard}>{row.right}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ComparisonSection;
