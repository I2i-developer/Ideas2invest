// "use client";
// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import styles from "./HowToInvest.module.css";

// const HowToInvest = ({ title, steps }) => {
//   return (
//     <section className={styles.section}>
//       <motion.h2
//         className={styles.heading}
//         initial={{ opacity: 0, y: -30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         How to Invest in {title} Through <span className={styles.primaryColor}>Ideas</span><span className={styles.secondaryColor}>2invest</span>
//       </motion.h2>

//       <div className={styles.grid}>
//         <div className={styles.left}>
//           {steps.slice(0, 2).map((step, index) => (
//             <motion.div
//               key={step.id}
//               className={styles.card}
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//             >
//               <div className={styles.iconWrapper}>
//                 <Image
//                   src={step.icon}
//                   alt={step.title}
//                   width={32}
//                   height={32}
//                   className={styles.icon}
//                 />
//               </div>
//               <div>
//                 <h3 className={styles.cardTitle}>{step.title}</h3>
//                 <p className={styles.cardDesc}>{step.description}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <div className={styles.right}>
//           {steps.slice(2).map((step, index) => (
//             <motion.div
//               key={step.id}
//               className={styles.card}
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//             >
//               <div className={styles.iconWrapper}>
//                 <Image
//                   src={step.icon}
//                   alt={step.title}
//                   width={32}
//                   height={32}
//                   className={styles.icon}
//                 />
//               </div>
//               <div>
//                 <h3 className={styles.cardTitle}>{step.title}</h3>
//                 <p className={styles.cardDesc}>{step.description}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowToInvest;

"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./HowToInvest.module.css";

const HowToInvest = ({ title, steps }) => {
  return (
    <section className={styles.section}>
      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        How to Invest in {title} Through{" "}
        <span className={styles.primaryColor}>Ideas</span>
        <span className={styles.secondaryColor}>2invest</span>
      </motion.h2>

      <div className={styles.grid}>
        {/* Left Column */}
        <div className={styles.left}>
          {steps
            .filter((_, index) => index % 2 === 0) // even indexes → left
            .map((step, index) => (
              <motion.div
                key={step.id}
                className={styles.card}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className={styles.iconWrapper}>
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={32}
                    height={32}
                    className={styles.icon}
                  />
                </div>
                <div>
                  <h3 className={styles.cardTitle}>{step.title}</h3>
                  <p className={styles.cardDesc}>{step.description}</p>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Right Column */}
        <div className={styles.right}>
          {steps
            .filter((_, index) => index % 2 === 1) // odd indexes → right
            .map((step, index) => (
              <motion.div
                key={step.id}
                className={styles.card}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className={styles.iconWrapper}>
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={32}
                    height={32}
                    className={styles.icon}
                  />
                </div>
                <div>
                  <h3 className={styles.cardTitle}>{step.title}</h3>
                  <p className={styles.cardDesc}>{step.description}</p>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HowToInvest;

