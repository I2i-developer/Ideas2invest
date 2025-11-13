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

const MainCalculator = () => {
  const [name, setName] = useState("");
  const [loanAmount, setLoanAmount] = useState(5000000);
  const [sipAmount, setSipAmount] = useState(10000);
  const [loanInterest, setLoanInterest] = useState(8);
  const [tenure, setTenure] = useState(20);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [uploadedImage, setUploadedImage] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [closing, setClosing] = useState(false);

  // Modal handlers
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
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape" && showModal) closeModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [showModal]);

  // EMI calculation
  const calculateEMI = (P, annualRate, years) => {
    const r = annualRate / 100 / 12;
    const n = years * 12;
    return (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  };

  // SIP maturity calculation
  const calculateSipMaturity = (A, annualRate, years) => {
    const r = annualRate / 100 / 12;
    const n = years * 12;
    return A * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
  };

  // Core values
  const emi = calculateEMI(loanAmount, loanInterest, tenure);
  const totalLoanRepayment = emi * tenure * 12;
  const sipMaturity = calculateSipMaturity(sipAmount, expectedReturn, tenure);
  const totalSipInvestment = sipAmount * tenure * 12;
  const totalPayment = totalLoanRepayment + totalSipInvestment;
  const recoveryPercent = (sipMaturity / totalPayment) * 100;

  // Chart data (Loan repayment vs SIP maturity over years)
  const chartData = Array.from({ length: tenure }, (_, i) => ({
    year: i + 1,
    LoanRepayment: emi * (i + 1) * 12,
    SIPValue: calculateSipMaturity(sipAmount, expectedReturn, i + 1),
  }));

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setUploadedImage(URL.createObjectURL(file));
  };

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
          <h2 className={styles.title}>Home Loan vs SIP Calculator</h2>

          {/* Inputs */}
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
                id="loanAmount"
                placeholder=" "
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                required
              />
              <label className={styles.inputLabel} htmlFor="loanAmount">Loan Amount</label>
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
              <label className={styles.inputLabel} htmlFor="sipAmount">SIP Amount</label>
            </div>
          </div>

          {/* Sliders */}
          <div className={styles.sliderGroup}>
            <div className={styles.slider1}>
              <label>Loan Interest: {loanInterest}%</label>
              <input
                type="range"
                min="1"
                max="20"
                value={loanInterest}
                onChange={(e) => setLoanInterest(Number(e.target.value))}
                className={styles.rangeInput}
              />
            </div>
            <div className={styles.slider1}>
              <label>Tenure: {tenure} Years</label>
              <input
                type="range"
                min="1"
                max="30"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className={styles.rangeInput}
              />
            </div>
            <div className={styles.slider1}>
              <label>Expected Return: {expectedReturn}%</label>
              <input
                type="range"
                min="1"
                max="20"
                value={expectedReturn}
                onChange={(e) => setExpectedReturn(Number(e.target.value))}
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
                    value="Amount"
                    angle={-90}
                    position="insideLeft"
                    dx={75}
                    style={{ textAnchor: "middle" }}
                  />
                </YAxis>
                <Tooltip />
                <Line type="monotone" dataKey="LoanRepayment" stroke="#ef4444" strokeWidth={3} />
                <Line type="monotone" dataKey="SIPValue" stroke="#4f46e5" strokeWidth={3} />
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
                <h2>Your Home Loan vs SIP Calculator</h2>
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
                  <p><strong>Loan amount</strong><br />₹ {loanAmount.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</p>
                  <p><strong>Loan interest</strong><br />{loanInterest}%</p>
                  <p><strong>Tenure (Year)</strong><br />{tenure}</p>
                  <p><strong>EMI</strong><br />₹ {emi.toFixed(2)}</p>
                </div>
              </div>

              <div className={styles.assumptions}>
                <p>Along with home loan also start an SIP</p>
                {/* <h4 className={styles.subHeading}>Along with home loan also start an SIP</h4> */}
                <div className={styles.infoGrid}>
                  <p><strong>SIP amount</strong><br />₹ {sipAmount.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</p>
                  <p><strong>Tenure</strong><br />{tenure} Years</p>
                  <p><strong>Expected return</strong><br />{expectedReturn}%</p>
                </div>
              </div>

              <div className={styles.assumptions}>
                <p>Calculation based on above assumptions</p>
                {/* <h4 className={styles.subHeading}>Calculation based on above assumptions</h4> */}
                <div className={styles.assumptionRow}>
                  <span>Total loan repayment amount</span>
                  <span>₹ {totalLoanRepayment.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</span>
                </div>
                <div className={styles.assumptionRow}>
                  <span>Total investment through an SIP</span>
                  <span>₹ {totalSipInvestment.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</span>
                </div>
                <div className={styles.assumptionRow}>
                  <span>Total payment (EMI+SIP)</span>
                  <span>₹ {totalPayment.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</span>
                </div>
                <div className={styles.assumptionRow}>
                  <span>% of recovery of total payment</span>
                  <span>{recoveryPercent.toFixed(2)}%</span>
                </div>
              </div>

              <div className={styles.maturityBox}>
                <p>Maturity amount of an SIP</p>
                <h3>₹ {sipMaturity.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</h3>
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

export default MainCalculator;
