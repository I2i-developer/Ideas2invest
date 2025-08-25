"use client";
import React from "react";
import styles from "./AllCalculators.module.css";
import { motion } from "framer-motion";
import calculatorsData from "@/data/calculatorsData";
import Link from "next/link";

const AllCalculators = () => {
  return (
    <section className={styles.allCalculators}>
      <div className={styles.header}>
        <h2>All Investment Calculators</h2>
        <p>Explore our wide range of calculators to make smarter financial decisions.</p>
      </div>

      <div className={styles.cardsGrid}>
        {calculatorsData.map((calc, index) => (
          <motion.div
            key={index}
            className={styles.card}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link href={calc.link} className={styles.link}>
              <div className={styles.cardContent}>
                <div className={styles.cornerImage}>
                  <img src="/assets/images/icons/card-corner-top-left.png" alt="corner" />
                </div>
                <div className={styles.icon}>
                  <img src={calc.icon} alt={calc.title} />
                </div>
                <h3>{calc.title}</h3>
                <p>{calc.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AllCalculators;
