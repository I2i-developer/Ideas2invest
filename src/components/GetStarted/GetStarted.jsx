"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./GetStarted.module.css";

const steps = [
  {
    id: 1,
    title: "Portfolio Login",
    icon: "/assets/images/icons/portfolio.png",
    link: "https://ideas2invest.wealthmagic.in/",
    // highlight: true,
  },
  {
    id: 2,
    title: "Download Application",
    icon: "/assets/images/icons/downloadapp.png",
    link: "https://play.google.com/store/apps/details?id=mobi.mywealth",
    green: true,
  },
  {
    id: 3,
    title: "Check KYC Status",
    icon: "/assets/images/icons/kyc.png",
    link: "/kyc-status",
    highlight: true,
  },
  {
    id: 4,
    title: "Need Assist?",
    icon: "/assets/images/icons/support.png",
    link: "/contact",
    green: true,
  },
];

const StepsSection = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>
        Let’s Get Started in Just <span>4 Simple Steps</span>
      </h2>

      <div className={styles.grid}>
        {steps.map((step, index) => (
          <motion.a
            key={step.id}
            href={step.link}
            className={`${styles.card} 
              ${step.highlight ? styles.highlight : ""} 
              ${step.green ? styles.green : ""}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            target="_blank"
          >
            <div className={styles.iconWrapper}>
              <Image src={step.icon} alt={step.title} width={50} height={50} />
            </div>
            <h3>{step.title}</h3>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default StepsSection;
