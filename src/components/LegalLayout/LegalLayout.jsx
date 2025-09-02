"use client";
import React from "react";
import styles from "./LegalLayout.module.css";
import { motion } from "framer-motion";
import LegalSidebar from "./LegalSidebar";

const LegalLayout = ({ title, subtitle, content }) => {
  return (
    <div className={styles.container}>
      {/* Hero Banner */}
      <motion.div
        className={styles.hero}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </motion.div>

      <div className={styles.main}>
        {/* Sidebar */}
        <div className={styles.sidebar}>
          <LegalSidebar />
        </div>

        {/* Main Content */}
        <motion.div
          className={styles.content}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {content.map((section, index) => (
            <div key={index} className={styles.section}>
              <h2>{section.heading}</h2>
              {/* <p>{section.text}</p> */}
              <p>
                {section.text.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LegalLayout;
