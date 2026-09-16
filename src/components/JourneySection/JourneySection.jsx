"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./JourneySection.module.css";

const journeyData = [
  {
    year: "Roots",
    title: "ICICI Bank Roots",
    desc: "Our founders built their early careers at ICICI Bank, serving in leadership roles including Associate Vice President and Associate Regional Manager.",
  },
  {
    year: "Start",
    title: "Ideas2Invest Begins",
    desc: "They carried that institutional experience into an independent, relationship-led financial distribution firm focused on disciplined investor support.",
  },
  {
    year: "Life",
    title: "Life Insurance Foundation",
    desc: "The first step was life insurance, helping families protect income, responsibilities, and long-term financial goals.",
  },
  {
    year: "MF",
    title: "Mutual Funds Added",
    desc: "Ideas2Invest then expanded into mutual fund distribution, bringing SIPs, goal-based investing, and disciplined wealth-building solutions to clients.",
  },
  {
    year: "FDs",
    title: "Investment Products Expanded",
    desc: "Corporate fixed deposits, bonds, and other investment products were added to support income, stability, and portfolio diversification needs.",
  },
  {
    year: "Health",
    title: "Health Insurance & Risk Cover",
    desc: "Health and general insurance strengthened the platform, giving clients broader protection for medical, asset, and everyday financial risks.",
  },
  {
    year: "Next",
    title: "Advanced Financial Solutions",
    desc: "The offering widened to include PMS, AIF, GIFT City opportunities, loan facilitation, and other specialized solutions for eligible clients.",
  },
  {
    year: "SIF",
    title: "SIF Services Added",
    desc: "This year, Specialized Investment Funds were added to help eligible investors explore a new regulated category between mutual funds and PMS.",
  },
  {
    year: "Today",
    title: "Complete Financial Platform",
    desc: "Today, Ideas2Invest brings protection, investments, global access, and financing support together through one trusted client-first platform.",
  },
];

// Variants for left/right slide-in
const itemVariants = {
  hiddenLeft: { opacity: 0, x: -100 },
  hiddenRight: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// const JourneySection = () => {
//   return (
//     <section className={styles.timelineSection}>
//       <motion.h2
//         className={styles.heading}
//         initial={{ opacity: 0, y: -30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: false }}
//       >
//         Big Journeys Begin With Small Steps
//       </motion.h2>

//       <div className={styles.timeline}>
//         {journeyData.map((item, index) => (
//           <motion.div
//             key={index}
//             className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}
//             variants={itemVariants}
//             initial={index % 2 === 0 ? "hiddenLeft" : "hiddenRight"}
//             whileInView="visible"
//             viewport={{ once: false, amount: 0.2 }}
//           >
//             {/* ✅ Only content zooms on hover */}
//             <motion.div
//               className={styles.content}
//               whileHover={{
//                 scale: 1.05,
//                 boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
//               }}
//               transition={{ type: "spring", stiffness: 200 }}
//             >
//               <h3>{item.title}</h3>
//               <p>{item.desc}</p>
//             </motion.div>

//             {/* ✅ Dot/year badge stays fixed */}
//             <span className={styles.yearBadge}>{item.year}</span>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default JourneySection;

const JourneySection = () => {
  return (
    <section className={styles.timelineSection}>
      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        Big Journeys Begin With Small Steps
      </motion.h2>

      <div className={styles.timeline}>
        {journeyData.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={index}
              className={`${styles.timelineItem} ${isLeft ? styles.left : styles.right}`}
              variants={itemVariants}
              initial={isLeft ? "hiddenLeft" : "hiddenRight"}
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              {/* ✅ Card content with corner image */}
              <motion.div
                className={styles.content}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {/* ✅ Corner Image */}
                <div
                  className={`${styles.cornerImage} ${
                    isLeft ? styles.cornerLeft : styles.cornerRight
                  }`}
                >
                  <Image
                    src={isLeft ? "/assets/images/icons/card-corner-top-left.png" : "/assets/images/icons/card-corner-top-left.png"}
                    alt="corner decoration"
                    width={120}
                    height={120}
                  />
                </div>

                <h3 className={styles.journeyTitle}>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>

              <span className={styles.yearBadge}>{item.year}</span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default JourneySection;