"use client";
import React from "react";
import styles from "./TeamSection.module.css";
import teamData from "@/data/teamData";
import { motion } from "framer-motion";
import Image from "next/image";

const TeamSection = () => {
  return (
    <section className={styles.section}>
      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Meet Our Team
      </motion.h2>

      <motion.p
        className={styles.subText}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        A passionate group of professionals dedicated to building your financial
        future.
      </motion.p>

      <div className={styles.cardsContainer}>
        {teamData.map((member, index) => (
          <motion.div
            key={member.id}
            className={styles.card}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={member.image}
                alt={member.name}
                width={250}
                height={250}
                className={styles.teamImage}
              />
            </div>
            <h3 className={styles.name}>{member.name}</h3>
            <p className={styles.designation}>{member.designation}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
