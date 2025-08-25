"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./BannerSection.module.css";
import { bannerData } from "@/data/bannerData";

const BannerSection = ({ pageKey }) => {
  const content = bannerData[pageKey];
  return (
    <section
      className={styles.bannerSection}
      style={{ backgroundImage: `url(${content?.bannerImage})` }}
    >
      <div className={styles.overlay}>
        <div className={styles.contentWrapper}>
          {/* Left Content */}
          <motion.div
            className={styles.leftContent}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              {content?.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              {content?.description}
            </motion.p>
          </motion.div>

          {/* Right Form */}
          <motion.div
            className={styles.rightForm}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: "easeOut" }}
          >
            <h2>GET IN TOUCH</h2>
            <form className={styles.floatingForm}>
              <div className={styles.inputGroup}>
                <input type="text" placeholder=" " required />
                <label>Name</label>
              </div>
              <div className={styles.inputGroup}>
                <input type="email" placeholder=" " required />
                <label>Email</label>
              </div>
              <div className={styles.inputGroup}>
                <input type="tel" placeholder=" " required />
                <label>Phone Number</label>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                SEND
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;


// "use client";
// import React from "react";
// import styles from "./BannerSection.module.css";
// import { motion } from "framer-motion";

// const BannerSection = () => {
//   return (
//     <section className={styles.banner}>
//       <div className={styles.overlay}></div>

//       <div className={styles.container}>
//         {/* LEFT CONTENT */}
//         <motion.div
//           className={styles.left}
//           initial={{ x: -50, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h1>
//             How To Calculate Your <span>Retirement Corpus?</span>
//           </h1>
//           <p>
//             Plan your retirement effortlessly with the help of a retirement planner.
//             Use our calculator to manage your finances and secure your future.
//           </p>
//         </motion.div>

//         {/* RIGHT FORM */}
//         <motion.div
//           className={styles.right}
//           initial={{ x: 50, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//         >
//           <div className={styles.formBox}>
//             <h3>Get In Touch</h3>
//             <form>
//               <div className={styles.row}>
//                 <input type="text" placeholder="First Name" required />
//                 <input type="text" placeholder="Last Name" required />
//               </div>
//               <input type="email" placeholder="Enter your Email" required />
//               <input type="tel" placeholder="Enter Phone Number" required />
//               <button type="submit">Send OTP</button>
//             </form>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default BannerSection;
