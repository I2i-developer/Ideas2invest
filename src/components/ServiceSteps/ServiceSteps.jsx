"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./ServiceSteps.module.css";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1.5, ease: "easeInOut" },
  },
};

const verticalLineVariants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 1.5, ease: "easeInOut" },
  },
};

const StepsSection = ({ title, steps }) => {
  return (
    <motion.div
      className={styles.section}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
    >
      <h2 className={styles.heading}>{title}</h2>

      <div className={styles.timeline}>
        {/* Connector Line */}
        <motion.div
          className={`${styles.line} ${styles.desktopLine}`}
          variants={lineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        ></motion.div>

        <motion.div
          className={`${styles.line} ${styles.mobileLine}`}
          variants={verticalLineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        ></motion.div>

        {/* Steps */}
        {steps.map((step, index) => (
          <motion.div key={index} className={styles.step} variants={stepVariants}>
            <div className={styles.circle}>
              <span>{index + 1}</span>
            </div>
            <div className={styles.content}>
              <img src={step.icon} alt={step.title} className={styles.icon} />
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default StepsSection;
