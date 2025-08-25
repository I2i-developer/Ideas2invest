"use client";
import React from "react";
import styles from "./CalculatorInfoSection.module.css";
import { motion } from "framer-motion";

const CalculatorInfoSection = ({ title, description, image }) => {
  return (
    <section className={styles.infoSection}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>{title}</h2>
          <p>{description}</p>
        </motion.div>

        <motion.div
          className={styles.imageWrapper}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img src={image} alt={title} />
        </motion.div>
      </div>
    </section>
  );
};

export default CalculatorInfoSection;
