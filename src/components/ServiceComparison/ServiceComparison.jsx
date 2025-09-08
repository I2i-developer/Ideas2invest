// "use client";
// import React from "react";
// import styles from "./ServiceComparison.module.css";
// import { motion } from "framer-motion";
// import { CheckCircle, XCircle, Star } from "lucide-react";

// const containerVariants = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: { staggerChildren: 0.2 },
//   },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 40 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// };

// export default function ComparisonCardsSection({ title, description, options }) {
//   return (
//     <section className={styles.section}>
//       <div className={styles.container}>
//         <motion.h2
//           className={styles.title}
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: false, amount: 0.3 }}
//         >
//           {title}
//         </motion.h2>

//         <motion.p
//           className={styles.description}
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           viewport={{ once: false, amount: 0.3 }}
//         >
//           {description}
//         </motion.p>

//         <motion.div
//           className={styles.cards}
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: false, amount: 0.3 }}
//         >
//           {options.map((opt, idx) => (
//             <motion.div
//               key={idx}
//               className={`${styles.card} ${
//                 opt.highlight ? styles.highlight : ""
//               }`}
//               variants={cardVariants}
//               whileHover={{ scale: 1.03 }}
//             >
//               {opt.highlight && (
//                 <div className={styles.badge}>
//                   <Star size={16} /> Recommended
//                 </div>
//               )}
//               <div className={styles.icon}>{opt.icon}</div>
//               <h3 className={styles.cardTitle}>{opt.title}</h3>
//               <p className={styles.tagline}>{opt.tagline}</p>

//               <div className={styles.lists}>
//                 {opt.pros?.length > 0 && (
//                   <ul className={styles.pros}>
//                     {opt.pros.map((p, i) => (
//                       <li key={i}>
//                         <CheckCircle size={16} color="#16a34a" /> {p}
//                       </li>
//                     ))}
//                   </ul>
//                 )}

//                 {opt.cons?.length > 0 && (
//                   <ul className={styles.cons}>
//                     {opt.cons.map((c, i) => (
//                       <li key={i}>
//                         <XCircle size={16} color="#dc2626" /> {c}
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";
import React from "react";
import styles from "./ServiceComparison.module.css";
import { motion } from "framer-motion";
import { CheckCircle, XCircle, Star } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ComparisonCardsSection({
  title,
  description,
  options,
  graphTitle = "", // optional
  lines = [], // optional
  graphData = null, // optional
}) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Title */}
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {title}
        </motion.h2>

        {/* Description */}
        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {description}
        </motion.p>

        {/* Comparison Cards */}
        <motion.div
          className={styles.cards}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          {options.map((opt, idx) => (
            <motion.div
              key={idx}
              className={`${styles.card} ${
                opt.highlight ? styles.highlight : ""
              }`}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
            >
              {opt.highlight && (
                <div className={styles.badge}>
                  <Star size={16} /> Recommended
                </div>
              )}
              <div className={styles.icon}>{opt.icon}</div>
              <h3 className={styles.cardTitle}>{opt.title}</h3>
              <p className={styles.tagline}>{opt.tagline}</p>

              <div className={styles.lists}>
                {opt.pros?.length > 0 && (
                  <div>
                    <h4 className={styles.listHeadingPros}>Pros</h4>
                    <ul className={styles.pros}>
                      {opt.pros.map((p, i) => (
                        <li key={i}>
                          <CheckCircle size={16} color="#16a34a" /> {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {opt.cons?.length > 0 && (
                  <div>
                    <h4 className={styles.listHeadingCons}>Cons</h4>
                    <ul className={styles.cons}>
                      {opt.cons.map((c, i) => (
                        <li key={i}>
                          <XCircle size={16} color="#dc2626" /> {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Optional Graph */}
        {graphData && lines && lines.length > 0 && (
        <motion.div
            className={styles.graphWrapper}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false, amount: 0.3 }}
        >
            <h3 className={styles.graphTitle}>{graphTitle}</h3>
            <ResponsiveContainer width="100%" height={300}>
            <LineChart data={graphData}>
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                {lines.map((line, index) => (
                <Line
                    key={index}
                    type="monotone"
                    dataKey={line.dataKey}
                    stroke={line.color}
                    strokeWidth={3}
                    dot={false}
                />
                ))}
            </LineChart>
            </ResponsiveContainer>
        </motion.div>
        )}

        {/* {graphData && (
          <motion.div
            className={styles.graphWrapper}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h3 className={styles.graphTitle}>{graphTitle}</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={graphData}>
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="main"
                  stroke="#4338ca"
                  strokeWidth={3}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="comparison"
                  stroke="#16a34a"
                  strokeWidth={3}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        )} */}
      </div>
    </section>
  );
}
