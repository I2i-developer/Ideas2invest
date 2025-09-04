"use client";
import React from "react";
import styles from "./CalculatorFeatures.module.css";
import { motion } from "framer-motion";

const CalculatorFeaturesSection = ({ howItWorks, timeline, benefits, ctaText }) => {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.container}>
        {/* How it works */}
        <motion.div
          className={styles.howItWorks}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>How the Financial Planning Calculator Works?</h2>
          <p>{howItWorks}</p>

          {/* Timeline (Horizontal & Visual) */}
          <div className={styles.timelineWrapper}>
            <div className={styles.timelineLine}></div>
            <div className={styles.timeline}>
              {timeline.map((point, index) => (
                <motion.div
                  key={index}
                  className={styles.timelineItem}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className={styles.circle}>{index + 1}</div>
                  <div className={styles.timelineContent}>
                    <h4>{point.year}</h4>
                    <p>{point.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          className={styles.benefits}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Why to use this Calculator?</h2>
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className={styles.benefitCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                {/* <div className={styles.icon}>
                  <img src={benefit.icon} alt={benefit.title} />
                </div> */}
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            className={styles.ctaWrapper}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
          >
            <button
              className={styles.ctaButton}
              onClick={() => {
                const section = document.getElementById("calculator");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {ctaText}
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CalculatorFeaturesSection;
