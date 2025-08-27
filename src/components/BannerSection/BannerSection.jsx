"use client";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./BannerSection.module.css";
import { bannerData } from "@/data/bannerData";

const BannerSection = ({ pageKey }) => {
  const content = bannerData[pageKey];
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState({ message: "", type: "" }); // type: 'success' | 'error'
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const phoneRegex = /^[6-9]\d{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) return "Full name is required.";
    if (!phoneRegex.test(formData.phone)) return "Enter a valid Indian phone number.";
    if (!emailRegex.test(formData.email)) return "Enter a valid email address.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ message: "", type: "" });

    const error = validateForm();
    if (error) {
      setIsSubmitting(false);
      setStatus({ message: error, type: "error" });
      setTimeout(() => setStatus({ message: "", type: "" }), 20000);
      return;
    }

    try {
      const res = await fetch("/api/home-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus({ message: "✅ Thank you! Your message has been sent.\n➡️ We will get back to you shortly.", type: "success" });
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        setStatus({ message: `❌ ${data.error}`, type: "error" });
      }
    } catch {
      setStatus({ message: "❌ Something went wrong. Please try again later.", type: "error" });
    } finally {
      setIsSubmitting(false);
    }
    setTimeout(() => setStatus({ message: "", type: "" }), 10000);
  };
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
            <form className={styles.floatingForm} onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <input type="text" name="name" placeholder=" " value={formData.name} onChange={handleChange} required />
                <label>Name</label>
              </div>
              <div className={styles.inputGroup}>
                <input type="email" name="email" placeholder=" " value={formData.email} onChange={handleChange} required />
                <label>Email</label>
              </div>
              <div className={styles.inputGroup}>
                <input type="tel" name="phone" placeholder=" " value={formData.phone} onChange={handleChange} required />
                <label>Phone Number</label>
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? "Sending..." : "SEND"}
              </motion.button>
              {status.message && (
                <p className={`${styles.statusMessage} ${status.type === "success" ? styles.success : styles.error}`}>
                  {status.message}
                </p>
              )}
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
