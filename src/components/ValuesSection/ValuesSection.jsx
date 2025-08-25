// "use client";
// import React from "react";
// import styles from "./ValuesSection.module.css";
// import Image from "next/image";

// const values = [
//   {
//     title: "Customer Centricity",
//     description: "We keep our customers at the center of all our decisions to create meaningful experiences.",
//     icon: "/assets/icons/customer.png",
//   },
//   {
//     title: "Trust",
//     description: "We champion transparency, honesty and integrity.",
//     icon: "/assets/icons/trust.png",
//   },
//   {
//     title: "Collaboration",
//     description: "We forge partnerships and work together as One Team.",
//     icon: "/assets/icons/collaboration.png",
//   },
//   {
//     title: "Thinking Big",
//     description: "We pursue infinite possibilities and create breakthrough strategies.",
//     icon: "/assets/icons/thinking.png",
//   },
//   {
//     title: "Speed",
//     description: "We execute quickly; having planned meticulously.",
//     icon: "/assets/icons/speed.png",
//   },
//   {
//     title: "Innovation",
//     description: "We disrupt processes, products and industries.",
//     icon: "/assets/icons/innovation.png",
//   },
// ];

// const AboutValues = () => {
//   return (
//     <section className={styles.section}>
//       <div className={styles.container}>
        
//         {/* Left stacked images */}
//         <div className={styles.imageStack}>
//           <div className={styles.imgWrapper}>
//             <Image src="/assets/images/about/value1.webp" alt="Value 1" width={300} height={300} />
//           </div>
//         </div>

//         {/* Right text content */}
//         <div className={styles.content}>
//           <h2>Our Values</h2>
//           <p className={styles.subtitle}>
//             To become a trusted fintech brand that empowers a billion lives by leveraging the power of data and technology.
//           </p>
//           <div className={styles.valuesGrid}>
//             {values.map((val, index) => (
//               <div key={index} className={styles.valueCard}>
//                 <Image src={val.icon} alt={val.title} width={30} height={30} />
//                 <div>
//                   <h3>{val.title}</h3>
//                   <p>{val.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default AboutValues;


"use client";
import React from "react";
import styles from "./ValuesSection.module.css";
import Image from "next/image";

const values = [
  {
    title: "Customer Centricity",
    description:
      "We keep our customers at the center of all our decisions to create meaningful experiences.",
    icon: "/assets/icons/customer.png",
  },
  {
    title: "Trust",
    description: "We champion transparency, honesty and integrity.",
    icon: "/assets/icons/trust.png",
  },
  {
    title: "Collaboration",
    description: "We forge partnerships and work together as One Team.",
    icon: "/assets/icons/collaboration.png",
  },
  {
    title: "Thinking Big",
    description:
      "We pursue infinite possibilities and create breakthrough strategies.",
    icon: "/assets/icons/thinking.png",
  },
  {
    title: "Speed",
    description: "We execute quickly; having planned meticulously.",
    icon: "/assets/icons/speed.png",
  },
  {
    title: "Innovation",
    description: "We disrupt processes, products and industries.",
    icon: "/assets/icons/innovation.png",
  },
];

const AboutValues = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Left single image */}
        <div className={styles.imageWrapper}>
          <Image
            src="/assets/images/about/value1.webp"
            alt="Our Values"
            width={400}
            height={400}
          />
        </div>

        {/* Right text content */}
        <div className={styles.content}>
          <h2>Our Values</h2>
          <p className={styles.subtitle}>
            To become a trusted fintech brand that empowers a billion lives by leveraging the power of data and technology.
          </p>
          <div className={styles.valuesGrid}>
            {values.map((val, index) => (
              <div key={index} className={styles.valueCard}>
                <Image src={val.icon} alt={val.title} width={28} height={28} />
                <div>
                  <h3>{val.title}</h3>
                  <p>{val.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutValues;
