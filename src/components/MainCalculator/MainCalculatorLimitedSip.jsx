"use client";
import React, { useState, useEffect } from "react";
import styles from "./MainCalculator.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { RiMailSendFill } from "react-icons/ri";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import CalculatorSidebar from "./CalculatorSidebar";

const MainCalculatorLimitedSip = () => {
  const [name, setName] = useState("");
  const [sipAmount, setSipAmount] = useState(5000);
  const [limitedYears, setLimitedYears] = useState(10);
  const [totalYears, setTotalYears] = useState(20);
  const [returnRate, setReturnRate] = useState(12);
  const [uploadedImage, setUploadedImage] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [closing, setClosing] = useState(false);

  // Open Modal
  const openModal = () => {
    setClosing(false);
    setShowModal(true);
  };

  // Close Modal
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

  // ===============================
  // CALCULATIONS
  // ===============================
  const r = returnRate / 100 / 12;
  let maturityAmount = 0;
  let totalInvestment = 0;

  // Contribution for limited years, grows until total horizon
  for (let month = 1; month <= limitedYears * 12; month++) {
    const remainingMonths = totalYears * 12 - month + 1;
    maturityAmount += sipAmount * Math.pow(1 + r, remainingMonths);
    totalInvestment += sipAmount;
  }

  const chartData = Array.from({ length: totalYears }, (_, i) => {
    let value = 0;
    let invested = 0;
    for (let m = 1; m <= Math.min((i + 1) * 12, limitedYears * 12); m++) {
      invested += sipAmount;
      const remainingMonths = totalYears * 12 - m + 1 - (i * 12);
      value += sipAmount * Math.pow(1 + r, remainingMonths >= 0 ? remainingMonths : 0);
    }
    return { year: i + 1, Investment: invested, Value: value };
  });

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
          <h2 className={styles.title}>Limited Period SIP Calculator</h2>

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
              <label className={styles.inputLabel} htmlFor="name">Name</label>
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
              <label className={styles.inputLabel} htmlFor="sipAmount">Monthly Invest Amount</label>
            </div>
          </div>

          <div className={styles.sliderGroup}>
            <div className={styles.slider1}>
              <label>Limited Investment Term: {limitedYears} Years</label>
              <input
                type="range"
                min="1"
                max="30"
                value={limitedYears}
                onChange={(e) => setLimitedYears(Number(e.target.value))}
                className={styles.rangeInput}
              />
            </div>
            <div className={styles.slider1}>
              <label>Total Investment Horizon: {totalYears} Years</label>
              <input
                type="range"
                min={limitedYears}
                max="40"
                value={totalYears}
                onChange={(e) => setTotalYears(Number(e.target.value))}
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
          </div>

          <div className={styles.centerBtn}>
            <button className={styles.calculateBtn} onClick={openModal}>
              Calculate
            </button>
          </div>

          {/* Chart */}
          <div className={styles.chartWrapper}>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={chartData}
                margin={{ top: 0, right: 5, left: 40, bottom: 10 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year">
                  <Label value="Years" offset={-5} position="insideBottom" />
                </XAxis>
                <YAxis>
                  <Label
                    value="Value (₹)"
                    angle={-90}
                    position="insideLeft"
                    dy={0}
                    dx={75}
                    style={{ textAnchor: "middle" }}
                  />
                </YAxis>
                <Tooltip />
                <Line type="monotone" dataKey="Investment" stroke="#4F46E5" strokeWidth={2} />
                <Line type="monotone" dataKey="Value" stroke="#16A34A" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className={`${styles.modalOverlay} ${closing ? styles.modalOverlayClosing : styles.fadeIn}`}
          onClick={closeModal}
        >
          <div
            className={`${styles.modalContent} ${closing ? styles.modalContentClosing : styles.slideIn}`}
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
                <h2>Your Limited Period SIP Calculator</h2>
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
                    <strong>SIP Amount</strong>
                    <br />₹ {sipAmount.toLocaleString()}
                  </p>
                  <p>
                    <strong>Limited Term</strong>
                    <br />
                    {limitedYears} years
                  </p>
                  <p>
                    <strong>Total Horizon</strong>
                    <br />
                    {totalYears} years
                  </p>
                  <p>
                    <strong>Expected returns</strong>
                    <br />
                    {returnRate}%
                  </p>
                </div>
              </div>

              <div className={styles.assumptions}>
                <p>Calculation based on above assumptions</p>
                <div className={styles.assumptionRow}>
                  <span>Total Investment</span>
                  <span>₹ {totalInvestment.toLocaleString()}</span>
                </div>
              </div>

              <div className={styles.maturityBox}>
                <p>Maturity amount</p>
                <h3>₹ {maturityAmount.toLocaleString()}</h3>
              </div>

              <p className={styles.disclaimer}>
                Disclaimer:<br />
                Above calculation is only for illustrative purposes.
                Mutual funds investments are subject to market risks, read all scheme related documents carefully.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MainCalculatorLimitedSip;
