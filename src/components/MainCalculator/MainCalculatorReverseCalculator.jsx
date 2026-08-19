"use client";

import React, { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  CartesianGrid,
  Label,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { RiMailSendFill } from "react-icons/ri";
import CalculatorSidebar from "./CalculatorSidebar";
import styles from "./MainCalculator.module.css";

const formatCurrency = (value) =>
  Number(value || 0).toLocaleString("en-IN", { maximumFractionDigits: 0 });

const MainCalculatorReverseCalculator = () => {
  const [name, setName] = useState("");
  const [targetAmount, setTargetAmount] = useState(5000000);
  const [years, setYears] = useState(10);
  const [returnRate, setReturnRate] = useState(12);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [closing, setClosing] = useState(false);

  const closeModal = useCallback(() => {
    setClosing(true);
    setTimeout(() => {
      setShowModal(false);
      setClosing(false);
    }, 300);
  }, []);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape" && showModal) closeModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [closeModal, showModal]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) setUploadedImage(URL.createObjectURL(file));
  };

  const annualRate = returnRate / 100;
  const monthlyRate = annualRate / 12;
  const totalMonths = years * 12;
  const requiredInvestment = targetAmount / Math.pow(1 + annualRate, years);
  const estimatedGain = targetAmount - requiredInvestment;
  const gainPercent =
    requiredInvestment > 0 ? (estimatedGain / requiredInvestment) * 100 : 0;
  const sipGrowthFactor =
    monthlyRate === 0
      ? totalMonths
      : ((Math.pow(1 + monthlyRate, totalMonths) - 1) * (1 + monthlyRate)) / monthlyRate;
  const requiredMonthlySip = sipGrowthFactor > 0 ? targetAmount / sipGrowthFactor : 0;

  const getSipValueAtMonth = (months) => {
    if (months <= 0) return 0;
    if (monthlyRate === 0) return requiredMonthlySip * months;
    return (
      requiredMonthlySip *
      ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
      (1 + monthlyRate)
    );
  };

  const chartData = Array.from({ length: years + 1 }, (_, index) => ({
    year: index,
    LumpsumPath: requiredInvestment * Math.pow(1 + annualRate, index),
    SipPath: getSipValueAtMonth(index * 12),
  }));

  return (
    <section id="calculator" className={styles.calculatorSection}>
      <div className={styles.container}>
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

        <motion.div
          className={styles.mainDiv}
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>Reverse Calculator</h2>
          <p className={styles.subTitle}>
            Find the one-time investment or monthly SIP needed today to reach a future target amount.
          </p>

          <div className={styles.formGroup}>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                id="name"
                placeholder=" "
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <label className={styles.inputLabel} htmlFor="name">
                Name
              </label>
            </div>

            <div className={styles.inputWrapper}>
              <input
                type="number"
                id="targetAmount"
                placeholder=" "
                min="10000"
                step="10000"
                value={targetAmount}
                onChange={(event) => setTargetAmount(Number(event.target.value))}
                required
              />
              <label className={styles.inputLabel} htmlFor="targetAmount">
                Future Target Amount
              </label>
            </div>
          </div>

          <div className={styles.sliderGroup}>
            <div className={styles.slider1}>
              <label htmlFor="reverseYears">Investment Duration: {years} Years</label>
              <input
                type="range"
                id="reverseYears"
                min="1"
                max="40"
                value={years}
                onChange={(event) => setYears(Number(event.target.value))}
                className={styles.rangeInput}
              />
            </div>
            <div className={styles.slider1}>
              <label htmlFor="reverseReturn">Expected Annual Return: {returnRate}%</label>
              <input
                type="range"
                id="reverseReturn"
                min="1"
                max="30"
                value={returnRate}
                onChange={(event) => setReturnRate(Number(event.target.value))}
                className={styles.rangeInput}
              />
            </div>
          </div>

          <div className={styles.centerBtn}>
            <button className={styles.calculateBtn} onClick={() => setShowModal(true)}>
              Calculate
            </button>
          </div>

          <div className={styles.quickResults}>
            <div className={styles.quickResultCard}>
              <span>Invest today</span>
              <strong>Rs. {formatCurrency(requiredInvestment)}</strong>
            </div>
            <div className={styles.quickResultCard}>
              <span>Monthly SIP needed</span>
              <strong>Rs. {formatCurrency(requiredMonthlySip)}</strong>
            </div>
          </div>

          <div className={styles.chartWrapper}>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData} margin={{ top: 0, right: 5, left: 40, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year">
                  <Label value="Years" offset={-5} position="insideBottom" />
                </XAxis>
                <YAxis>
                  <Label
                    value="Projected Value"
                    angle={-90}
                    position="insideLeft"
                    dx={75}
                    style={{ textAnchor: "middle" }}
                  />
                </YAxis>
                <Tooltip
                  formatter={(value, name) => [
                    `Rs. ${formatCurrency(value)}`,
                    name === "LumpsumPath" ? "Lumpsum Path" : "SIP Path",
                  ]}
                  labelFormatter={(value) => `Year ${value}`}
                />
                <Line type="monotone" dataKey="LumpsumPath" stroke="#4F46E5" strokeWidth={3} />
                <Line type="monotone" dataKey="SipPath" stroke="#0F766E" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {showModal && (
        <div
          className={`${styles.modalOverlay} ${closing ? styles.modalOverlayClosing : styles.fadeIn}`}
          onClick={closeModal}
        >
          <div
            className={`${styles.modalContent} ${closing ? styles.modalContentClosing : styles.slideIn}`}
            onClick={(event) => event.stopPropagation()}
          >
            <button className={styles.closeBtn} onClick={closeModal} aria-label="Close modal">
              x
            </button>

            <div className={styles.modalInputRow}>
              <div className={styles.inputWrapper}>
                <input type="email" id="reverseEmail" placeholder=" " />
                <label htmlFor="reverseEmail">Enter Email Id</label>
              </div>
              <div className={styles.inputWrapper}>
                <input type="tel" id="reverseMobile" placeholder=" " />
                <label htmlFor="reverseMobile">Enter Mobile No</label>
              </div>
              <button className={styles.sendBtn}>
                <RiMailSendFill />
                <span className={styles.tooltip}>Send Report on Email</span>
              </button>
            </div>

            <div className={styles.calcBox}>
              <div className={styles.modalTitle}>
                <h2>Your Reverse Investment Plan</h2>
                <p className={styles.userName}>Dear {name || "Investor"}</p>
              </div>

              <div className={styles.userInfo}>
                <div className={styles.profilePic}>
                  {uploadedImage ? (
                    <img src={uploadedImage} alt="User" />
                  ) : (
                    <div className={styles.placeholderPic}>I2I</div>
                  )}
                </div>
                <div className={styles.infoGrid}>
                  <p>
                    <strong>Target Amount</strong>
                    <br />
                    Rs. {formatCurrency(targetAmount)}
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
                </div>
              </div>

              <div className={styles.assumptions}>
                <p>Calculation based on above assumptions</p>
                <div className={styles.assumptionRow}>
                  <span>Required One-Time Investment</span>
                  <span>Rs. {formatCurrency(requiredInvestment)}</span>
                </div>
                <div className={styles.assumptionRow}>
                  <span>Required Monthly SIP</span>
                  <span>Rs. {formatCurrency(requiredMonthlySip)}</span>
                </div>
                <div className={styles.assumptionRow}>
                  <span>Estimated Wealth Created</span>
                  <span>Rs. {formatCurrency(estimatedGain)}</span>
                </div>
                <div className={styles.assumptionRow}>
                  <span>Absolute Gain</span>
                  <span>{gainPercent.toFixed(2)}%</span>
                </div>
              </div>

              <div className={styles.maturityBox}>
                <p>Invest today as a one-time amount</p>
                <h3>Rs. {formatCurrency(requiredInvestment)}</h3>
                <p>or start a monthly SIP of</p>
                <h3>Rs. {formatCurrency(requiredMonthlySip)}</h3>
              </div>

              <p className={styles.disclaimer}>
                Disclaimer: Above calculation is only for illustrative purposes. Mutual fund
                investments are subject to market risks, read all scheme related documents carefully.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MainCalculatorReverseCalculator;
