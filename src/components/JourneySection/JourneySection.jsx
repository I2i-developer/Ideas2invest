"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./JourneySection.module.css";

const journeyData = [
  { year: "2024", title: "Equity Advisory & ESIP", desc: "Top 100 Financial Distributor (APX 1500 cr AUM)" },
  { year: "2023", title: "PE & Startup Investment", desc: "Switch to Aafps Wealth India Pvt. Ltd. With 1040+ CR AUM" },
  { year: "2020", title: "General Insurance", desc: "MDRT in HDFC Life" },
  { year: "2017", title: "PMS/AIF", desc: "Reaching 500cr Milestone" },
  { year: "2015", title: "Life Insurance", desc: "Starting Life Insurance Services" },
  { year: "2014", title: "Corporate FD & Bonds", desc: "Emerging Advisor of India Award" },
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