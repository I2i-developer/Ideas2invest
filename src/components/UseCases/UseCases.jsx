"use client";
import React from "react";
import styles from "./UseCasesSection.module.css";
import { motion } from "framer-motion";
import Image from "next/image";

const UseCasesSection = ({ data }) => {
  if (!data) return null;

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{data.title}</h2>
      <div className={styles.grid}>
        {data.cases.map((item, index) => (
          <motion.div
            key={item.id}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className={styles.iconWrapper}>
              {/* <Image src={item.icon} alt={item.title} width={60} height={60} /> */}
            </div>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.desc}>{item.description}</p>
            <div className={styles.cornerImage}>
              <img src="/assets/images/icons/card-corner.png" alt="corner decoration" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default UseCasesSection;
