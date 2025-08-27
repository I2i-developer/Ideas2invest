// "use client";
// import { motion } from "framer-motion";
// import styles from "./ContactCards.module.css";
// import Image from "next/image";

// export default function ContactCards() {
//   const cards = [
//     {
//       title: "Phone Number",
//       value: "+91 98765 43210",
//       icon: "/icons/phone.svg",
//       corner: "/assets/images/icons/card-corner-top-left.png"
//     },
//     {
//       title: "Email Address",
//       value: "info@ideas2invest.com",
//       icon: "/icons/email.svg",
//       corner: "/decor/corner2.png"
//     },
//     {
//       title: "Location",
//       value: "Mumbai, India",
//       icon: "/icons/location.svg",
//       corner: "/decor/corner3.png"
//     }
//   ];

//   return (
//     <section className={styles.cardsSection}>
//       <div className={styles.cardsContainer}>
//         {cards.map((card, index) => (
//           <motion.div
//             key={index}
//             className={styles.card}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4, delay: index * 0.2 }}
//             viewport={{ once: true }}
//           >
//             <Image
//               src={card.corner}
//               alt=""
//               width={80}
//               height={80}
//               className={styles.cornerImage}
//             />
//             <div className={styles.iconWrapper}>
//               <Image src={card.icon} alt="" width={40} height={40} />
//             </div>
//             <h3>{card.title}</h3>
//             <p>{card.value}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";
import React from "react";
import styles from "./ContactCards.module.css";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone Number",
    value: "+91 98103 53354 +91 97111 19175",
    cornerImage: "/assets/images/icons/card-corner-top-left.png"
  },
  {
    icon: <FaEnvelope />,
    title: "Email Address",
    value: "info@ideas2invest.com",
    cornerImage: "/assets/images/icons/card-corner-top-left.png"
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    value: "B 244, Block B, Naraina Industrial Area Phase 1, Naraina, New Delhi, 110028",
    cornerImage: "/assets/images/icons/card-corner-top-left.png"
  }
];

export default function ContactCards() {
  return (
    <section className={styles.contactCards}>
      {/* Curved connector lines */}
      <svg
        className={styles.curves}
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
      >
        <path
          d="M0,150 C300,50 900,250 1200,150"
          stroke="url(#gradient)"
          strokeWidth="5"
          fill="transparent"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#036" />
            <stop offset="100%" stopColor="#28a745" />
          </linearGradient>
        </defs>
      </svg>

      <div className={styles.cardsWrapper}>
        {contactInfo.map((item, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className={styles.cornerImage}>
              <img src={item.cornerImage} alt="corner decoration" />
            </div>
            <div className={styles.icon}>{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.value}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
