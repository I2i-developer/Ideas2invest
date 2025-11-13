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

const MainCalculatorDreamVacation = () => {
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [currentCost, setCurrentCost] = useState(500000);
  const [existingInvestment, setExistingInvestment] = useState(100000);

  const [years, setYears] = useState(10);
  const [inflation, setInflation] = useState(6);
  const [returnExisting, setReturnExisting] = useState(8);
  const [returnNew, setReturnNew] = useState(12);

  const [uploadedImage, setUploadedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [closing, setClosing] = useState(false);

  // Open & Close modal
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
      if (e.key === "Escape" && showModal) {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [showModal]);

  // Upload image
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedImage(URL.createObjectURL(file));
    }
  };

  // ------------------ Calculations ------------------

  // Future Value of Vacation
  const futureVacationValue =
    currentCost * Math.pow(1 + inflation / 100, years);

  // Future Value of Existing Investment
  const futureExistingValue =
    existingInvestment * Math.pow(1 + returnExisting / 100, years);

  // Deficit
  const deficit = futureVacationValue - futureExistingValue;

  // Lumpsum required
  const lumpsumRequired = deficit / Math.pow(1 + returnNew / 100, years);

  // SIP required
  const r = returnNew / 100 / 12;
  const n = years * 12;
  const sipRequired =
    deficit > 0
      ? (deficit * r) / (Math.pow(1 + r, n) - 1)
      : 0;

  // Chart Data
  const chartData = Array.from({ length: years }, (_, i) => ({
    year: i + 1,
    VacationCost: currentCost * Math.pow(1 + inflation / 100, i + 1),
    ExistingInvestment:
      existingInvestment * Math.pow(1 + returnExisting / 100, i + 1),
  }));

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
              <img
                src={uploadedImage}
                alt="Uploaded"
                className={styles.previewImg}
              />
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
          <h2 className={styles.title}>Dream Vacation Calculator</h2>

          {/* Input Fields */}
          <div className={styles.formGroup}>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                placeholder=" "
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label className={styles.inputLabel}>Name</label>
            </div>

            <div className={styles.inputWrapper}>
              <input
                type="text"
                placeholder=" "
                value={place}
                onChange={(e) => setPlace(e.target.value)}
              />
              <label className={styles.inputLabel}>Destination to visit</label>
            </div>
          </div>

          <div className={styles.formGroup}>
            <div className={styles.inputWrapper}>
              <input
                type="number"
                placeholder=" "
                value={currentCost}
                onChange={(e) => setCurrentCost(Number(e.target.value))}
              />
              <label className={styles.inputLabel}>Current Cost of Goal (₹)</label>
            </div>

            <div className={styles.inputWrapper}>
              <input
                type="number"
                placeholder=" "
                value={existingInvestment}
                onChange={(e) => setExistingInvestment(Number(e.target.value))}
              />
              <label className={styles.inputLabel}>Current Investment (₹)</label>
            </div>
          </div>

          {/* Sliders */}
          <div className={styles.sliderGroup}>
            <div className={styles.slider1}>
              <label>After how many years: {years} </label>
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
              <label>Inflation: {inflation}%</label>
              <input
                type="range"
                min="1"
                max="15"
                value={inflation}
                onChange={(e) => setInflation(Number(e.target.value))}
                className={styles.rangeInput}
              />
            </div>

            <div className={styles.slider1}>
              <label>Return on existing investment: {returnExisting}%</label>
              <input
                type="range"
                min="1"
                max="20"
                value={returnExisting}
                onChange={(e) => setReturnExisting(Number(e.target.value))}
                className={styles.rangeInput}
              />
            </div>

            <div className={styles.slider1}>
              <label>Return on new investment: {returnNew}%</label>
              <input
                type="range"
                min="1"
                max="20"
                value={returnNew}
                onChange={(e) => setReturnNew(Number(e.target.value))}
                className={styles.rangeInput}
              />
            </div>
          </div>

          {/* Calculate Button */}
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
                <Line
                  type="monotone"
                  dataKey="VacationCost"
                  stroke="#4F46E5"
                  strokeWidth={3}
                />
                <Line
                  type="monotone"
                  dataKey="ExistingInvestment"
                  stroke="#22C55E"
                  strokeWidth={3}
                />
              </LineChart>
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

            {/* Email Row */}
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

            {/* Report */}
            <div className={styles.calcBox}>
              <div className={styles.modalTitle}>
                <h2>Your Dream Vacation Plan</h2>
                <p className={styles.userName}>
                  Dear {name || "Investor"}, your vacation to{" "}
                  {place || "your dream destination"}
                </p>
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
                    <strong>Dream Destination</strong>
                    <br />{place.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
                  </p>
                  <p>
                    <strong>Current Cost</strong>
                    <br />₹ {currentCost.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
                  </p>
                  <p>
                    <strong>Existing Investment</strong>
                    <br />₹ {existingInvestment.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
                  </p>
                  <p>
                    <strong>Years to Goal</strong>
                    <br />
                    {years}
                  </p>
                </div>
              </div>

              <div className={styles.assumptions}>
                <p>Results based on your inputs</p>
                <div className={styles.assumptionRow}>
                  <span>Future Value of Dream Vacation</span>
                  <span>₹ {futureVacationValue.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</span>
                </div>
                <div className={styles.assumptionRow}>
                  <span>Future Value of Existing Investment</span>
                  <span>₹ {futureExistingValue.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</span>
                </div>
                <div className={styles.assumptionRow}>
                  <span>Deficit</span>
                  <span>₹ {deficit.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</span>
                </div>
              </div>

              <div className={styles.maturityBox}>
                <p>Lumpsum Required</p>
                <h3>₹ {lumpsumRequired.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</h3>
              </div>

              <div className={styles.maturityBox}>
                <p>SIP Required</p>
                <h3>₹ {sipRequired.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</h3>
              </div>

              <p className={styles.disclaimer}>
                Disclaimer:<br />
                Above calculation is only for illustrative purposes.
                Mutual funds investments are subject to market risks, read all
                scheme related documents carefully.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MainCalculatorDreamVacation;
