"use client";
import React from "react";
import styles from "./CaseStudySection.module.css";
import { motion } from "framer-motion";
import Image from "next/image";

const CaseStudySection = ({ data }) => {
  if (!data) return null;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Heading */}
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {data.title}
        </motion.h2>
        <motion.p
          className={styles.subTitle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {data.subTitle}
        </motion.p>

        {/* Timeline Steps */}
        <div className={styles.timeline}>
          {data.scenarios.map((step, index) => (
            <motion.div
              key={step.id}
              className={`${styles.card} ${index % 2 === 0 ? styles.left : styles.right}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={styles.iconWrapper}>
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={50}
                  height={50}
                  className={styles.icon}
                />
              </div>
              <div className={styles.content}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                {step.highlight && (
                  <div className={styles.highlightBox}>
                    <strong>{step.highlight}</strong>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
