"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./InvestorPersona.module.css";

const fadeVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -30, transition: { duration: 0.4 } },
};

const InvestorPersonaSection = ({ title, personas, autoSlide = true, interval = 10000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    if (!autoSlide) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % personas.length);
    }, interval);
    return () => clearInterval(timer);
  }, [personas.length, autoSlide, interval]);

  return (
    <div className={styles.section}>
      <h2 className={styles.heading}>{title}</h2>
      <div className={styles.wrapper}>
        {/* Persona List */}
        <div className={styles.personaList}>
          {personas.map((persona, index) => (
            <div
              key={index}
              className={`${styles.card} ${activeIndex === index ? styles.active : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              <img src={persona.avatar} alt={persona.name} className={styles.avatar} />
              <h3>{persona.name}</h3>
              <p className={styles.tagline}>{persona.tagline}</p>
            </div>
          ))}
        </div>

        {/* Active Persona Detail */}
        <div className={styles.detail}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              variants={fadeVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={styles.detailContent}
            >
              <img
                src={personas[activeIndex].image}
                alt={personas[activeIndex].name}
                className={styles.detailImage}
              />
              <div>
                <h3>{personas[activeIndex].title}</h3>
                <p>{personas[activeIndex].description}</p>
                <ul className={styles.benefits}>
                  {personas[activeIndex].benefits.map((benefit, i) => (
                    <li key={i}>✔ {benefit}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default InvestorPersonaSection;
