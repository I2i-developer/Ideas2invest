"use client";
import styles from "./InvestmentPartnerSection.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import investmentPartnerData from "@/data/investmentPartnerData";

const InvestmentPartnerSection = () => {
  return (
    <section className={styles.section}>
      {/* Section Title */}
      <div className={styles.headingWrapper}>
        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Your All-in-One Investment Partner
        </motion.h2>
        <motion.p
          className={styles.subheading}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Comprehensive & personalized solutions tailored to your financial goals.
        </motion.p>
      </div>

      <div className={styles.container}>
        {/* Left Column */}
        <div className={styles.column}>
          {investmentPartnerData.leftColumn.map((item, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className={styles.iconWrapper}>
                <Image src={item.icon} alt={item.title} width={65} height={65} />
              </div>
              <div>
                <h4 className={styles.title}>{item.title}</h4>
                <p className={styles.description}>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Center Image */}
        <div className={styles.centerColumn}>
          <Image
            src={investmentPartnerData.centerImage}
            alt="Investment Visual"
            fill
            className={styles.centerImage}
          />
        </div>

        {/* Right Column */}
        <div className={styles.column}>
          {investmentPartnerData.rightColumn.map((item, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div>
                <h4 className={styles.title}>{item.title}</h4>
                <p className={styles.description}>{item.description}</p>
              </div>
              <div className={styles.iconWrapper}>
                <Image src={item.icon} alt={item.title} width={70} height={70} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Additional Items Row */}
      <div className={styles.additionalRow}>
        {investmentPartnerData.additionalItems.map((item, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className={styles.iconWrapper}>
              <Image src={item.icon} alt={item.title} width={65} height={65} />
            </div>
            <div>
              <h4 className={styles.title}>{item.title}</h4>
              <p className={styles.description}>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default InvestmentPartnerSection;