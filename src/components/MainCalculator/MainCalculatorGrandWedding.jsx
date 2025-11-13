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

const MainCalculatorGrandWedding = () => {
  const [name, setName] = useState("");
  const [currentCost, setCurrentCost] = useState(1000000); // 10L default
  const [currentInvestment, setCurrentInvestment] = useState(200000); // 2L default
  const [age, setAge] = useState(25);
  const [marriageAge, setMarriageAge] = useState(30);
  const [inflation, setInflation] = useState(6);
  const [returnExisting, setReturnExisting] = useState(7);
  const [returnNew, setReturnNew] = useState(12);

  const [uploadedImage, setUploadedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [closing, setClosing] = useState(false);

  const yearsToMarriage = marriageAge - age;

  // Chart Data (projection of marriage cost)
  const chartData = Array.from({ length: yearsToMarriage }, (_, i) => ({
    year: i + 1,
    "Marriage Cost": currentCost * Math.pow(1 + inflation / 100, i + 1),
  }));

  // Calculations
  const fvMarriage = currentCost * Math.pow(1 + inflation / 100, yearsToMarriage);
  const fvExisting =
    currentInvestment * Math.pow(1 + returnExisting / 100, yearsToMarriage);
  const deficit = fvMarriage - fvExisting;

  // Lumpsum required
  const lumpsumRequired =
    deficit / Math.pow(1 + returnNew / 100, yearsToMarriage);

  // SIP required
  const r = returnNew / 100 / 12;
  const n = yearsToMarriage * 12;
  const sipRequired = (deficit * r) / (Math.pow(1 + r, n) - 1);

  // Modal control
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

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedImage(URL.createObjectURL(file));
    }
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
          <h2 className={styles.title}>Grand Wedding Calculator</h2>

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
                id="currentCost"
                placeholder=" "
                value={currentCost}
                onChange={(e) => setCurrentCost(Number(e.target.value))}
                required
              />
              <label className={styles.inputLabel} htmlFor="currentCost">
                Current Cost of Marriage
              </label>
            </div>

            <div className={styles.inputWrapper}>
              <input
                type="number"
                id="currentInvestment"
                placeholder=" "
                value={currentInvestment}
                onChange={(e) => setCurrentInvestment(Number(e.target.value))}
                required
              />
              <label className={styles.inputLabel} htmlFor="currentInvestment">
                Current Investment for Goal
              </label>
            </div>
          </div>

          {/* Sliders */}
          <div className={styles.sliderGroup}>
            <div className={styles.slider1}>
              <label>Current Age: {age}</label>
              <input
                type="range"
                min="18"
                max="50"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                className={styles.rangeInput}
              />
            </div>

            <div className={styles.slider1}>
              <label>Marriage Age: {marriageAge}</label>
              <input
                type="range"
                min="20"
                max="60"
                value={marriageAge}
                onChange={(e) => setMarriageAge(Number(e.target.value))}
                className={styles.rangeInput}
              />
            </div>

            <div className={styles.slider1}>
              <label>Inflation (%): {inflation}</label>
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
              <label>Return on Existing Investment (%): {returnExisting}</label>
              <input
                type="range"
                min="1"
                max="15"
                value={returnExisting}
                onChange={(e) => setReturnExisting(Number(e.target.value))}
                className={styles.rangeInput}
              />
            </div>

            <div className={styles.slider1}>
              <label>Return on New Investment (%): {returnNew}</label>
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
                    value="Marriage Cost"
                    angle={-90}
                    position="insideLeft"
                    dx={75}
                    style={{ textAnchor: "middle" }}
                  />
                </YAxis>
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="Marriage Cost"
                  stroke="#E91E63"
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
            <button className={styles.closeBtn} onClick={closeModal}>
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
                <h2>Your Grand Wedding Calculator</h2>
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
                    <strong>Current Age</strong>
                    <br />
                    {age} years
                  </p>
                  <p>
                    <strong>Marriage Age</strong>
                    <br />
                    {marriageAge} years
                  </p>
                  <p>
                    <strong>Inflation</strong>
                    <br />
                    {inflation}%
                  </p>
                </div>
              </div>

              <div className={styles.assumptions}>
                <p>Calculation based on above assumptions</p>
                <div className={styles.assumptionRow}>
                  <span>Future Marriage Cost</span>
                  <span>₹ {fvMarriage.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</span>
                </div>
                <div className={styles.assumptionRow}>
                  <span>Future Value of Existing Investment</span>
                  <span>₹ {fvExisting.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</span>
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
                <p>Monthly SIP Required</p>
                <h3>₹ {sipRequired.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</h3>
              </div>

              <p className={styles.disclaimer}>
                Disclaimer:
                <br />
                Above calculation is only for illustrative purposes. Mutual funds
                investments are subject to market risks, read all scheme related
                documents carefully.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MainCalculatorGrandWedding;
