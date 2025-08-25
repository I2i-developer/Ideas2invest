"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./ServiceInfo.module.css";

const ServiceInfo = ({
  sectionTitle,
  sectionSubTitle,
  definition,
  advantages,
  howToChoose,
  waysToInvest,
  types,
}) => {
  const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

  return (
    <section className={styles.section}>
      {/* Section Title */}
      <motion.h2
        className={styles.sectionTitle}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {sectionTitle}
      </motion.h2>

      {/* Definition */}
      {definition && (
        <motion.div
          className={styles.block}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <h3 className={styles.heading}>What is {sectionSubTitle}?</h3>
          <p className={styles.text}>{definition}</p>
        </motion.div>
      )}

      {/* Advantages */}
      {advantages && (
        <motion.div
          className={styles.block}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <h3 className={styles.heading}>Advantages of {sectionSubTitle}</h3>
          <ul className={styles.list}>
            {advantages.map((adv, idx) => (
              <motion.li
                key={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: idx * 0.1 }}
              >
                {adv}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* How to Choose */}
      {howToChoose && (
        <motion.div
          className={styles.block}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <h3 className={styles.heading}>
            How to Choose the Best {sectionSubTitle}?
          </h3>
          <p className={styles.text}>{howToChoose}</p>
        </motion.div>
      )}

      {/* Ways to Invest */}
      {waysToInvest && (
        <motion.div
          className={styles.block}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <h3 className={styles.heading}>Ways to Invest in {sectionSubTitle}</h3>
          <div className={styles.subBlocks}>
            {waysToInvest.map((way, idx) => (
              <motion.div
                key={idx}
                className={styles.subBlock}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: idx * 0.1 }}
              >
                <h4>{way.title}</h4>
                <p>{way.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Types */}
      {types && (
        <motion.div
          className={styles.block}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <h3 className={styles.heading}>Types of {sectionSubTitle}</h3>
          <div className={styles.subBlocks}>
            {types.map((type, idx) => (
              <motion.div
                key={idx}
                className={styles.subBlock}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                viewport={{ once: true }}
              >
                <h4>{type.title}</h4>
                <p>{type.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default ServiceInfo;
