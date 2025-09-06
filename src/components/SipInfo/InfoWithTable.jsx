"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./InfoWithTable.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // delay between child animations
    },
  },
};

const InfoWithTableSection = ({ title, description, columns, rows }) => {
  return (
    <motion.div
      className={styles.section}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
    >
      {/* Heading */}
      <motion.h2 className={styles.heading} variants={fadeUp}>
        {title}
      </motion.h2>

      {/* Description */}
      <motion.p className={styles.description} variants={fadeUp}>
        {description}
      </motion.p>

      {/* Table */}
      {columns?.length > 0 && rows?.length > 0 && (
        <motion.div className={styles.tableWrapper} variants={fadeUp}>
          <table className={styles.table}>
            <thead>
              <tr>
                {columns.map((col, idx) => (
                  <th key={idx}>{col}</th>
                ))}
              </tr>
            </thead>
            <motion.tbody
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {rows.map((row, rowIndex) => (
                <motion.tr key={rowIndex} variants={fadeUp}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </motion.tr>
              ))}
            </motion.tbody>
          </table>
        </motion.div>
      )}
    </motion.div>
  );
};

export default InfoWithTableSection;





// import styles from "./SipInfoSection.module.css";

// export default function SipInfoSection() {
//   return (
//     <div className={styles.section}>
//       <h2 className={styles.heading}>What is a Systematic Investment Plan</h2>
//       <p className={styles.description}>
//         An SIP, or Systematic Investment Plan, is an investment method by which mutual
//         funds allow their investors to invest in a disciplined / systematic manner. By
//         using the SIP facility, an investor can invest a fixed amount of money at
//         predetermined intervals in a mutual fund scheme. The instalment amount can be
//         as low as Rs.100, while the pre-defined SIP intervals can be daily, weekly,
//         monthly, or yearly. Investing in SIP can be a time-bound manner and may provide
//         an opportunity for investors to build their investment over the long term due to
//         the power of compounding and average costing.
//       </p>

//       <div className={styles.tableWrapper}>
//         <table className={styles.table}>
//           <thead>
//             <tr>
//               <th>Frequency under SIP Facility</th>
//               <th>Minimum Installments</th>
//               <th>Minimum SIP amount</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>Daily</td>
//               <td>6 Installments</td>
//               <td>Rs. 100/- and in multiple of Re. 1/-</td>
//             </tr>
//             <tr>
//               <td>Weekly</td>
//               <td>6 Installments</td>
//               <td>Rs. 100/- and in multiple of Re. 1/-</td>
//             </tr>
//             <tr>
//               <td>Monthly</td>
//               <td>6 Installments</td>
//               <td>Rs. 100/- and in multiple of Re. 1/-</td>
//             </tr>
//             <tr>
//               <td>Yearly</td>
//               <td>3 Installments</td>
//               <td>Rs. 12,000/- and in multiple of Re. 1/-</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
