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

const MainCalculatorChildEducation = () => {
  const [name, setName] = useState("");
  const [childName, setChildName] = useState("");
  const [currentCost, setCurrentCost] = useState(1000000);
  const [currentInvestment, setCurrentInvestment] = useState(200000);

  const [childAge, setChildAge] = useState(5);
  const [educationAge, setEducationAge] = useState(18);
  const [inflation, setInflation] = useState(6);
  const [existingReturn, setExistingReturn] = useState(8);
  const [newReturn, setNewReturn] = useState(12);

  const [uploadedImage, setUploadedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [closing, setClosing] = useState(false);

  const yearsToGoal = educationAge - childAge;

  // Calculations
  const futureValueGoal =
    currentCost * Math.pow(1 + inflation / 100, yearsToGoal);

  const futureValueExisting =
    currentInvestment * Math.pow(1 + existingReturn / 100, yearsToGoal);

  const deficit = Math.max(futureValueGoal - futureValueExisting, 0);

  const lumpsumRequired = deficit / Math.pow(1 + newReturn / 100, yearsToGoal);

  const months = yearsToGoal * 12;
  const r = newReturn / 100 / 12;
  const sipRequired =
    deficit > 0
      ? deficit / (((Math.pow(1 + r, months) - 1) * (1 + r)) / r)
      : 0;

  // Chart Data
  const chartData = Array.from({ length: yearsToGoal }, (_, i) => ({
    year: i + 1,
    GoalValue: currentCost * Math.pow(1 + inflation / 100, i + 1),
    ExistingValue: currentInvestment * Math.pow(1 + existingReturn / 100, i + 1),
  }));

  // Modal open/close handlers
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
          <div className={styles.calcCards}>
            <Link href="/calculators/sip" className={styles.calcCardsLink}>
              <div className={styles.card}>SIP Calculator</div>
            </Link>
            <Link href="/calculators/lumpsum" className={styles.calcCardsLink}>
              <div className={styles.card}>Lumpsum Calculator</div>
            </Link>
            <Link
              href="/calculators/dream-retirement"
              className={styles.calcCardsLink}
            >
              <div className={styles.card}>Dream Retirement Calculator</div>
            </Link>
            <Link
              href="/calculators/grand-wedding"
              className={styles.calcCardsLink}
            >
              <div className={styles.card}>Grand Wedding Calculator</div>
            </Link>
            <Link
              href="/calculators/dream-vacation"
              className={styles.calcCardsLink}
            >
              <div className={styles.card}>Dream Vacation Calculator</div>
            </Link>
            <Link
              href="/calculators/child-education"
              className={styles.calcCardsLink}
            >
              <div className={styles.card}>Child Education Calculator</div>
            </Link>
          </div>
        </motion.div>

        {/* Main Div */}
        <motion.div
          className={styles.mainDiv}
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>Child Education Calculator</h2>

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
              <label className={styles.inputLabel} htmlFor="name">
                Your Name
              </label>
            </div>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                id="childName"
                placeholder=" "
                value={childName}
                onChange={(e) => setChildName(e.target.value)}
                required
              />
              <label className={styles.inputLabel} htmlFor="childName">
                Child Name
              </label>
            </div>
          </div>

          <div className={styles.formGroup}>
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
                Current Cost of Higher Education (₹)
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
                Current Investment for Goal (₹)
              </label>
            </div>
          </div>

          {/* Sliders */}
          <div className={styles.sliderGroup}>
            <div className={styles.slider1}>
              <label>Child Age: {childAge} Years</label>
              <input
                type="range"
                min="0"
                max="18"
                value={childAge}
                onChange={(e) => setChildAge(Number(e.target.value))}
                className={styles.rangeInput}
              />
            </div>
            <div className={styles.slider1}>
              <label>Higher Education Age: {educationAge} Years</label>
              <input
                type="range"
                min="10"
                max="30"
                value={educationAge}
                onChange={(e) => setEducationAge(Number(e.target.value))}
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
              <label>Return on Existing Investment: {existingReturn}%</label>
              <input
                type="range"
                min="1"
                max="20"
                value={existingReturn}
                onChange={(e) => setExistingReturn(Number(e.target.value))}
                className={styles.rangeInput}
              />
            </div>
            <div className={styles.slider1}>
              <label>Return on New Investment: {newReturn}%</label>
              <input
                type="range"
                min="1"
                max="20"
                value={newReturn}
                onChange={(e) => setNewReturn(Number(e.target.value))}
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
                    dx={75}
                    style={{ textAnchor: "middle" }}
                  />
                </YAxis>
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="GoalValue"
                  stroke="#4F46E5"
                  strokeWidth={3}
                />
                <Line
                  type="monotone"
                  dataKey="ExistingValue"
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
            <button className={styles.closeBtn} onClick={closeModal}>
              ×
            </button>

            {/* Email/Mobile */}
            <div className={styles.modalInputRow}>
              <div className={styles.inputWrapper}>
                <input type="email" placeholder=" " required />
                <label>Enter Email Id</label>
              </div>
              <div className={styles.inputWrapper}>
                <input type="tel" placeholder=" " required />
                <label>Enter Mobile No</label>
              </div>
              <button className={styles.sendBtn}>
                <RiMailSendFill />
                <span className={styles.tooltip}>Send Report on Email</span>
              </button>
            </div>

            {/* Results */}
            <div className={styles.calcBox}>
              <div className={styles.modalTitle}>
                <h2>Child Education Calculator</h2>
                <p className={styles.userName}>
                  Dear {name || "Investor"}, for {childName || "your child"}
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
                    <strong>Child Name</strong>
                    <br />{childName.toLocaleString()}
                </p>
                <p>
                    <strong>Child Age</strong>
                    <br />{childAge.toLocaleString()}
                </p>
                <p>
                    <strong>Current Cost</strong>
                    <br />₹ {currentCost.toLocaleString()}
                </p>
                <p>
                    <strong>Existing Investment</strong>
                    <br />₹ {currentInvestment.toLocaleString()}
                </p>
                {/* <p>
                    <strong>Years to Goal</strong>
                    <br />
                    {years}
                </p> */}
                </div>
            </div>

              <div className={styles.assumptions}>
                <p>Calculation based on above assumptions</p>
                <div className={styles.assumptionRow}>
                  <span>Future Cost of Education</span>
                  <span>₹ {futureValueGoal.toLocaleString()}</span>
                </div>
                <div className={styles.assumptionRow}>
                  <span>Future Value of Existing Investment</span>
                  <span>₹ {futureValueExisting.toLocaleString()}</span>
                </div>
                <div className={styles.assumptionRow}>
                  <span>Deficit</span>
                  <span>₹ {deficit.toLocaleString()}</span>
                </div>
              </div>

              <div className={styles.maturityBox}>
                <p>Lumpsum Required</p>
                <h3>₹ {lumpsumRequired.toLocaleString()}</h3>
              </div>

              <div className={styles.maturityBox}>
                <p>SIP Required</p>
                <h3>₹ {sipRequired.toLocaleString()}</h3>
              </div>

              <p className={styles.disclaimer}>
                Disclaimer:
                <br />
                Above calculation is only for illustrative purposes.
                Mutual fund investments are subject to market risks, read all
                scheme related documents carefully.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MainCalculatorChildEducation;
