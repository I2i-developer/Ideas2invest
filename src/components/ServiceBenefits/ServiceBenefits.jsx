"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ServiceBenefits.module.css";

const fadeSlide = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, x: -50, transition: { duration: 0.6 } },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const BenefitsSection = ({ title, benefits, autoSlide = true, slideInterval = 8000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  // Auto-slide logic
  useEffect(() => {
    if (!autoSlide) return;

    const startAutoSlide = () => {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % benefits.length);
      }, slideInterval);
    };

    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, [autoSlide, benefits.length, slideInterval]);

  const handleCardClick = (index) => {
    setActiveIndex(index);
    if (autoSlide && intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % benefits.length);
      }, slideInterval);
    }
  };

  return (
    <motion.div
      className={styles.section}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeSlide}
    >
      {/* Heading */}
      <motion.h2 className={styles.heading} variants={fadeSlide}>
        {title}
      </motion.h2>

      <div
        className={styles.contentWrapper}
        onMouseEnter={() => autoSlide && clearInterval(intervalRef.current)}
        onMouseLeave={() => {
          if (autoSlide) {
            intervalRef.current = setInterval(() => {
              setActiveIndex((prev) => (prev + 1) % benefits.length);
            }, slideInterval);
          }
        }}
      >
        {/* Left side - Animated content */}
        <motion.div className={styles.left}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              variants={fadeSlide}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={styles.leftContent}
            >
              <div className={styles.imagePlaceholder}>
                <img src={benefits[activeIndex].image} alt="Benefit Visual" />
              </div>
              <h3 className={styles.benefitTitle}>{benefits[activeIndex].title}</h3>
              <p className={styles.benefitDescription}>
                {benefits[activeIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Right side - Cards */}
        <motion.div
          className={styles.right}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className={`${styles.card} ${activeIndex === index ? styles.active : ""}`}
              onClick={() => handleCardClick(index)}
              variants={fadeSlide}
            >
              <img src={benefit.icon} alt={benefit.title} />
              <p>{benefit.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BenefitsSection;
