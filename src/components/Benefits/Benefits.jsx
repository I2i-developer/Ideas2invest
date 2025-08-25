import React from "react";
import styles from "./Benefits.module.css";
import { FaPercentage, FaUserShield, FaRocket, FaLightbulb } from "react-icons/fa";

const benefits = [
  {
    icon: <FaPercentage />,
    title: "0% Commission",
    desc: "Choose from our vast investment portfolio at 0% commission and enjoy all the benefits!",
  },
  {
    icon: <FaUserShield />,
    title: "Trust",
    desc: "We have gained the faith of 2.5 Cr+ happy customers over the last 25 years.",
  },
  {
    icon: <FaLightbulb />,
    title: "Research Backed Recommendations",
    desc: "Our advisory is backed by top-grade research & analysis. We are always happy to help.",
  },
  {
    icon: <FaRocket />,
    title: "Seamless Investing",
    desc: "Enjoy hassle-free investment processes. Open your account in just a few minutes.",
  },
];

const BenefitsSection = ({ title }) => {
  return (
    <section className={styles.section}>
      <div className={styles.leftContent}>
        <h2>Benefits of Investing in {title} with <span className={styles.highlight}>Ideas<span className={styles.green}>2Invest</span></span></h2>
        <p>
          Ideas2Invest offers over 4,000 Mutual Fund schemes without any hidden charges or fees, making your investment journey safer, easier, and more rewarding.
        </p>
        <p>
          Our advanced tools and calculators offer a simple yet superior investment journey and aid your decision-making.
        </p>
        <p>
          Whether through SIP (Systematic Investment Plan) or a lump sum, you can invest in Mutual Funds seamlessly on Ideas2Invest with complete ease.
        </p>
        <p>
          Download your Ideas2Invest Super App from the Play Store or App Store on your device and start your investment journey in just a few minutes.
        </p>
      </div>

      <div className={styles.cardsGrid}>
        {benefits.map((item, index) => (
          <div
            key={index}
            className={`${styles.card} ${
              index < 2 ? styles.cardUp : styles.cardDown
            }`}
          >
            <div className={styles.icon}>{item.icon}</div>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;



// "use client";
// import React from "react";
// import styles from "./Benefits.module.css";
// import { motion } from "framer-motion";
// import { FaCoins, FaCheckCircle, FaHandshake, FaChartLine } from "react-icons/fa";

// const features = [
//   {
//     title: "0% Commission",
//     description: "Choose from our vast investment portfolio at 0% commission and enjoy all the benefits!",
//     icon: <FaCoins />
//   },
//   {
//     title: "Trust",
//     description: "We have gained the faith of 2.5 Cr+ happy customers over the last 25 years.",
//     icon: <FaCheckCircle />
//   },
//   {
//     title: "Seamless Investing",
//     description: "Enjoy hassle-free investment processes. Open your account in minutes and start investing!",
//     icon: <FaHandshake />
//   },
//   {
//     title: "Research Backed Recommendations",
//     description: "Our advisory is backed by top-grade research and analysis. We are always happy to help you.",
//     icon: <FaChartLine />
//   }
// ];

// const Benefits = () => {
//   return (
//     <div className={styles.benefitsSection}>
//       <div className={styles.left}>
//         <h2>
//           Benefits of Investing in Mutual Funds with <span className={styles.highlight}>Ideas<span className={styles.orange}>2Invest</span></span>
//         </h2>
//         <p>
//           We offer over 4,000 Mutual Fund schemes without any hidden charges or fees, making your investment journey safer,
//           easier, and more rewarding. Our advanced tools and calculators offer a superior investment journey and aid your decision-making.
//         </p>
//         <p>
//           Whether it's SIP (Systematic Investment Plan) or a lump sum, you can invest in Mutual Funds seamlessly on our platform. 
//           Create your own mutual fund portfolio based on your risk profile, investment horizon, and financial goals.
//         </p>
//         <p>
//           Download our app and start your investment journey in just a few minutes.
//         </p>
//       </div>
//       <motion.div className={styles.right}>
//         {features.map((feature, index) => (
//           <motion.div
//             className={styles.card}
//             key={index}
//             whileHover={{ scale: 1.05 }}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.1 }}
//           >
//             <div className={styles.icon}>{feature.icon}</div>
//             <h4>{feature.title}</h4>
//             <p>{feature.description}</p>
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// export default Benefits;
