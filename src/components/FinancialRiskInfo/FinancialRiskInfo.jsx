'use client';

import { motion } from 'framer-motion';
import styles from './FinancialRiskInfo.module.css';
import Image from 'next/image';
import RiskProfileCalculator from '../RiskProfileCalculator/RiskProfileCalculator';

const FinancialRiskInfo = () => {
  return (
    <section className={styles.riskInfoSection}>
      {/* 1. What is a Financial Risk Meter */}
      <motion.div
        className={styles.block}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className={styles.text}>
          <h2 className={styles.heading}>What is a Financial Risk Meter?</h2>
          <p className={styles.description}>
            A <strong>Financial Risk Meter</strong> is a simple yet powerful tool that
            evaluates your risk appetite based on your investment goals, financial
            situation, and behavioral preferences. It helps you understand whether you
            are a <em>Conservative</em>, <em>Moderate</em>, or <em>Aggressive</em> investor.
            By knowing your profile, you can make smarter investment choices that align
            with your comfort level and long-term goals.
          </p>
        </div>

        {/* ✅ only one imageBox wrapper */}
        <div className={styles.imageBox}>
          <Image
            src="/assets/images/calculators/risk-meter-one.png"
            alt="Risk Meter"
            fill
            quality={100}
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
      </motion.div>

      <RiskProfileCalculator />

      {/* 2. Benefits */}
      <motion.div
        className={styles.benefitsSection}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {/* Left column - Heading + Image */}
        <div className={styles.left}>
          <h2 className={styles.heading}>Benefits of the Financial Risk Meter</h2>
          <div className={styles.benefitsImage}>
            <Image
              src="/assets/images/calculators/risk-meter-benefits.png"
              alt="Benefits"
              width={425}
              height={200}
            />
          </div>
        </div>

        {/* Right column - Grid */}
        <div className={styles.right}>
          <div className={styles.benefitsGrid}>
            <motion.div className={styles.card} whileHover={{ scale: 1.05 }}>
              <i className={`fas fa-lightbulb ${styles.icon}`} />
              <h3>Personalized Insights</h3>
              <p>Get a tailored understanding of your risk-taking capacity and investment style.</p>
            </motion.div>
            <motion.div className={styles.card} whileHover={{ scale: 1.05 }}>
              <i className={`fas fa-chart-line ${styles.icon}`} />
              <h3>Smarter Planning</h3>
              <p>Align your financial goals with the right asset allocation strategy for balanced growth.</p>
            </motion.div>
            <motion.div className={styles.card} whileHover={{ scale: 1.05 }}>
              <i className={`fas fa-shield-alt ${styles.icon}`} />
              <h3>Risk Protection</h3>
              <p>Avoid overexposure by understanding the right balance of equity, debt, and gold.</p>
            </motion.div>
            <motion.div className={styles.card} whileHover={{ scale: 1.05 }}>
              <i className={`fas fa-user-shield ${styles.icon}`} />
              <h3>Confidence in Decisions</h3>
              <p>Invest with clarity and confidence, knowing your portfolio suits your profile.</p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* 3. How to use */}
      <motion.div
        className={styles.block}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h2 className={styles.heading}>How to Use a Financial Risk Meter?</h2>
        <div className={styles.steps}>
          <div className={styles.step}>
            <span className={styles.stepNumber}>1</span>
            <p>Answer a few simple questions about your financial goals and preferences.</p>
          </div>
          <div className={styles.step}>
            <span className={styles.stepNumber}>2</span>
            <p>Get your personalized <strong>Risk Profile</strong> with visual charts.</p>
          </div>
          <div className={styles.step}>
            <span className={styles.stepNumber}>3</span>
            <p>Explore recommended funds that match your risk appetite.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FinancialRiskInfo;
