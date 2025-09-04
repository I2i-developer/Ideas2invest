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
  ResponsiveContainer,
  Legend,
} from "recharts";
import CalculatorSidebar from "./CalculatorSidebar";

const MainCalculator = () => {
  const [name, setName] = useState("");
  const [loanAmount, setLoanAmount] = useState(1000000);
  const [years, setYears] = useState(10);
  const [interestRate, setInterestRate] = useState(8);
  const [uploadedImage, setUploadedImage] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [closing, setClosing] = useState(false);

  // Modal open/close
  const openModal = () => {
    setClosing(false);
    setShowModal(true);
  };
  const closeModal = () => {
    setClosing(true);
    setTimeout(() => {
      setShowModal(false);
      setClosing(false);
    }, 300);
  };

  // ESC close
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape" && showModal) closeModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [showModal]);

  // Upload Image
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setUploadedImage(URL.createObjectURL(file));
  };

  // EMI Formula
  const P = loanAmount;
  const N = years * 12; // months
  const r = interestRate / 100 / 12;

  const emi =
    r === 0 ? P / N : (P * r * Math.pow(1 + r, N)) / (Math.pow(1 + r, N) - 1);

  const totalRepayment = emi * N;
  const totalInterest = totalRepayment - P;

  // Pie Chart Data
  const chartData = [
    { name: "Principal", value: P },
    { name: "Interest", value: totalInterest },
  ];

  const COLORS = ["#4F46E5", "#F59E0B"];

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
          <h2 className={styles.title}>EMI Calculator</h2>

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
                id="loanAmount"
                placeholder=" "
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                required
              />
              <label className={styles.inputLabel} htmlFor="loanAmount">
                Loan Amount
              </label>
            </div>
          </div>

          <div className={styles.sliderGroup}>
            <div className={styles.slider1}>
              <label>Loan Tenure: {years} Years</label>
              <input
                type="range"
                min="1"
                max="30"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className={styles.rangeInput}
              />
            </div>
            <div className={styles.slider1}>
              <label>Interest Rate: {interestRate}%</label>
              <input
                type="range"
                min="1"
                max="20"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className={styles.rangeInput}
              />
            </div>
          </div>

          <div className={styles.centerBtn}>
            <button className={styles.calculateBtn} onClick={openModal}>
              Calculate
            </button>
          </div>

          {/* Chart */}
          <div className={styles.chartWrapper}>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  // labelLine={true}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, value }) => `${name}: ₹${value.toLocaleString()}`}
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(val) => `₹ ${val.toLocaleString()}`} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className={`${styles.modalOverlay} ${
            closing ? styles.modalOverlayClosing : styles.fadeIn
          }`}
          onClick={closeModal}
        >
          <div
            className={`${styles.modalContent} ${
              closing ? styles.modalContentClosing : styles.slideIn
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeBtn}
              onClick={closeModal}
              aria-label="Close modal"
            >
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
                <h2>Your EMI Calculator</h2>
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
                    <strong>Loan Amount</strong>
                    <br />₹ {loanAmount.toLocaleString()}
                  </p>
                  <p>
                    <strong>Tenure</strong>
                    <br />
                    {years} years
                  </p>
                  <p>
                    <strong>Interest Rate</strong>
                    <br />
                    {interestRate}%
                  </p>
                </div>
              </div>

              {/* Results */}
              <div className={styles.assumptions}>
                <p>Calculation Results</p>
                <div className={styles.assumptionRow}>
                  <span>EMI Amount</span>
                  <span>₹ {emi.toFixed(0).toLocaleString()}</span>
                </div>
                <div className={styles.assumptionRow}>
                  <span>Total Repayment</span>
                  <span>₹ {totalRepayment.toFixed(0).toLocaleString()}</span>
                </div>
                <div className={styles.assumptionRow}>
                  <span>Total Interest</span>
                  <span>₹ {totalInterest.toFixed(0).toLocaleString()}</span>
                </div>
              </div>

              <p className={styles.disclaimer}>
                Disclaimer:<br />
                Above calculation is only for illustrative purposes. Actual EMI may vary
                based on bank/NBFC policies and charges.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MainCalculator;
