"use client";
import React, { useState, useEffect } from "react";
import styles from "./MainCalculator.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { RiMailSendFill } from "react-icons/ri";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import CalculatorSidebar from "./CalculatorSidebar";

const MainCalculator = () => {
  const [name, setName] = useState("");
  const [sipAmount, setSipAmount] = useState(5000);
  const [years, setYears] = useState(10);
  const [returnRate, setReturnRate] = useState(12);
  const [delayMonths, setDelayMonths] = useState(12);
  const [uploadedImage, setUploadedImage] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [closing, setClosing] = useState(false);

  // Open Modal handler
  const openModal = () => {
    setClosing(false);
    setShowModal(true);
  };

  // Close Modal handler
  const closeModal = () => {
    setClosing(true);
    setTimeout(() => {
      setShowModal(false);
      setClosing(false);
    }, 300);
  };

  // ESC key close
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape" && showModal) {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [showModal]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedImage(URL.createObjectURL(file));
    }
  };

  // --- Calculations ---
  const r = returnRate / 100 / 12;
  const n = years * 12;

  const sipFutureValue = (A, r, n) => {
    if (r === 0) return A * n;
    return A * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
  };

  const maturityToday = sipFutureValue(sipAmount, r, n);
  const maturityDelayed = sipFutureValue(
    sipAmount,
    r,
    Math.max(n - delayMonths, 0)
  );
  const costOfDelay = maturityToday - maturityDelayed;

  // Chart Data for Pie
  const chartData = [
    { name: "Maturity if SIP Started Today", value: Math.round(maturityToday) },
    { name: "Maturity if SIP Delayed", value: Math.round(maturityDelayed) },
    { name: "Cost of Delay", value: Math.round(costOfDelay) },
  ];

  // Colors
  const COLORS = ["#4F46E5", "#22C55E", "#EF4444"];

  return (
    <section id="calculator" className={styles.calculatorSection}>
      <div className={styles.container}>
        {/* Sidebar */}
        <motion.div
          className={styles.sidebar}
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Your Profile</h3>
          <div className={styles.imageUpload}>
            {uploadedImage ? (
              <img src={uploadedImage} alt="Uploaded" className={styles.previewImg} />
            ) : (
              <label className={styles.uploadBox}>
                Upload Image
                <input type="file" onChange={handleImageUpload} hidden />
              </label>
            )}
          </div>

          <h4>Other Calculators</h4>
          <CalculatorSidebar />
        </motion.div>

        {/* Main Div */}
        <motion.div
          className={styles.mainDiv}
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>Cost of Delay Calculator</h2>

          <div className={styles.formGroup}>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                id="name"
                placeholder=" "
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label className={styles.inputLabel} htmlFor="name">
                Name
              </label>
            </div>

            <div className={styles.inputWrapper}>
              <input
                type="number"
                id="sipAmount"
                placeholder=" "
                value={sipAmount}
                onChange={(e) => setSipAmount(Number(e.target.value))}
                required
              />
              <label className={styles.inputLabel} htmlFor="sipAmount">
                Monthly Invest Amount
              </label>
            </div>
          </div>

          <div className={styles.sliderGroup}>
            <div className={styles.slider1}>
              <label>Investment Duration: {years} Years</label>
              <input
                type="range"
                min="1"
                max="40"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className={styles.rangeInput}
              />
            </div>
            <div className={styles.slider1}>
              <label>Expected Annual Return: {returnRate}%</label>
              <input
                type="range"
                min="1"
                max="30"
                value={returnRate}
                onChange={(e) => setReturnRate(Number(e.target.value))}
                className={styles.rangeInput}
              />
            </div>
            <div className={styles.slider1}>
              <label>Delay in starting SIP: {delayMonths} Months</label>
              <input
                type="range"
                min="0"
                max={n}
                value={delayMonths}
                onChange={(e) => setDelayMonths(Number(e.target.value))}
                className={styles.rangeInput}
              />
            </div>
          </div>

          <div className={styles.centerBtn}>
            <button className={styles.calculateBtn} onClick={() => setShowModal(true)}>
              Calculate
            </button>
          </div>

          {/* Chart */}
          <div className={styles.chartWrapper}>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={105}
                  label={({ name, value }) => `${name}: ₹${value.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`}
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `₹ ${value.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className={`${styles.modalOverlay} ${closing ? styles.modalOverlayClosing : styles.fadeIn
            }`}
          onClick={closeModal}
        >
          <div
            className={`${styles.modalContent} ${closing ? styles.modalContentClosing : styles.slideIn
              }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeBtn} onClick={closeModal} aria-label="Close modal">
              ×
            </button>

            {/* Input row */}
            <div className={styles.modalInputRow}>
              <div className={styles.inputWrapper}>
                <input type="email" id="email" placeholder=" " required />
                <label htmlFor="email">Enter Email Id</label>
              </div>
              <div className={styles.inputWrapper}>
                <input type="tel" id="mobile" placeholder=" " required />
                <label htmlFor="mobile">Enter Mobile No</label>
              </div>
              <button className={styles.sendBtn}>
                <RiMailSendFill />
                <span className={styles.tooltip}>Send Report on Email</span>
              </button>
            </div>

            {/* Calculator Box */}
            <div className={styles.calcBox}>
              <div className={styles.modalTitle}>
                <h2>Your Cost of Delay Calculator</h2>
                <p className={styles.userName}>Dear {name || "Investor"}</p>
              </div>

              <div className={styles.userInfo}>
                <div className={styles.profilePic}>
                  {uploadedImage ? (
                    <img src={uploadedImage} alt="User" />
                  ) : (
                    <div className={styles.placeholderPic}>👤</div>
                  )}
                </div>
                <div className={styles.infoGrid}>
                  <p>
                    <strong>Monthly Invest Amount</strong>
                    <br />₹ {sipAmount.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
                  </p>
                  <p>
                    <strong>No of years</strong>
                    <br />
                    {years} years
                  </p>
                  <p>
                    <strong>Expected returns</strong>
                    <br />
                    {returnRate}%
                  </p>
                  <p>
                    <strong>Delay</strong>
                    <br />
                    {delayMonths} months
                  </p>
                </div>
              </div>

              <div className={styles.assumptions}>
                <p>Calculation based on above assumptions</p>
                <div className={styles.assumptionRow}>
                  <span>Maturity amount – if SIP started today</span>
                  <span>₹ {maturityToday.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</span>
                </div>
                <div className={styles.assumptionRow}>
                  <span>Maturity amount – if SIP delayed</span>
                  <span>₹ {maturityDelayed.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</span>
                </div>
                <div className={styles.assumptionRow}>
                  <span>By delaying your SIP you may lose</span>
                  <span className={styles.highlight}>₹ {costOfDelay.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</span>
                </div>
              </div>

              <div className={styles.maturityBox}>
                <p>Cost of Delay</p>
                <h3>₹ {costOfDelay.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</h3>
              </div>

              <p className={styles.disclaimer}>
                Disclaimer:
                <br />
                Above calculation is only for illustrative purposes. Mutual fund investments are
                subject to market risks, read all scheme related documents carefully.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MainCalculator;
