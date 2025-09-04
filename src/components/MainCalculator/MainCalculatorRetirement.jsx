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

const MainCalculatorRetirement = () => {
    const [name, setName] = useState("");
    const [monthlyExpense, setMonthlyExpense] = useState(40000);
    const [existingInvestment, setExistingInvestment] = useState(500000);

    const [currentAge, setCurrentAge] = useState(30);
    const [retirementAge, setRetirementAge] = useState(60);
    const [lifeExpectancy, setLifeExpectancy] = useState(85);

    const [inflation, setInflation] = useState(6);
    const [postInflation, setPostInflation] = useState(5);
    const [riskFreeReturn, setRiskFreeReturn] = useState(6);
    const [returnExisting, setReturnExisting] = useState(8);
    const [returnNew, setReturnNew] = useState(12);

    const [uploadedImage, setUploadedImage] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [closing, setClosing] = useState(false);

    // Modal Open/Close
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

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) setUploadedImage(URL.createObjectURL(file));
    };

    // ----------------------------
    // Retirement Calculations
    // ----------------------------

    const yearsToRetirement = retirementAge - currentAge;
    const postRetirementYears = lifeExpectancy - retirementAge;

    // Monthly expense at retirement
    const monthlyExpenseAtRetirement =
        monthlyExpense * Math.pow(1 + inflation / 100, yearsToRetirement);

    const yearlyExpenseAtRetirement = monthlyExpenseAtRetirement * 12;

    // Future value of existing investment
    const futureValueExisting =
        existingInvestment *
        Math.pow(1 + returnExisting / 100, yearsToRetirement);

    // Corpus required
    const realRate =
        (1 + riskFreeReturn / 100) / (1 + postInflation / 100) - 1;

    const corpusRequired =
        yearlyExpenseAtRetirement *
        ((1 - Math.pow(1 + realRate, -postRetirementYears)) / realRate);

    // Gap to be filled
    const shortfall = Math.max(corpusRequired - futureValueExisting, 0);

    // Lumpsum required
    const lumpsumRequired =
        shortfall / Math.pow(1 + returnNew / 100, yearsToRetirement);

    // SIP required
    const r = returnNew / 100 / 12;
    const n = yearsToRetirement * 12;
    const sipRequired =
        (shortfall * r) / ((Math.pow(1 + r, n) - 1) * (1 + r));

    // Chart Data
    const chartData = Array.from({ length: yearsToRetirement }, (_, i) => ({
        year: currentAge + i + 1,
        Corpus: existingInvestment * Math.pow(1 + returnExisting / 100, i + 1),
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
                    <h2 className={styles.title}>Dream Retirement Calculator</h2>

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
                                id="monthlyExpense"
                                placeholder=" "
                                value={monthlyExpense}
                                onChange={(e) => setMonthlyExpense(Number(e.target.value))}
                                required
                            />
                            <label className={styles.inputLabel} htmlFor="monthlyExpense">
                                Current Monthly Expenses (₹)
                            </label>
                        </div>

                        <div className={styles.inputWrapper}>
                            <input
                                type="number"
                                id="existingInvestment"
                                placeholder=" "
                                value={existingInvestment}
                                onChange={(e) => setExistingInvestment(Number(e.target.value))}
                                required
                            />
                            <label className={styles.inputLabel} htmlFor="existingInvestment">
                                Existing Investment (₹)
                            </label>
                        </div>
                    </div>

                    {/* Sliders */}
                    <div className={styles.sliderGroup}>
                        <div className={styles.slider1}>
                            <label>Current Age: {currentAge}</label>
                            <input
                                type="range"
                                min="18"
                                max="60"
                                value={currentAge}
                                onChange={(e) => setCurrentAge(Number(e.target.value))}
                                className={styles.rangeInput}
                            />
                        </div>
                        <div className={styles.slider1}>
                            <label>Retirement Age: {retirementAge}</label>
                            <input
                                type="range"
                                min="40"
                                max="70"
                                value={retirementAge}
                                onChange={(e) => setRetirementAge(Number(e.target.value))}
                                className={styles.rangeInput}
                            />
                        </div>
                        <div className={styles.slider1}>
                            <label>Life Expectancy: {lifeExpectancy} Years</label>
                            <input
                                type="range"
                                min="60"
                                max="100"
                                value={lifeExpectancy}
                                onChange={(e) => setLifeExpectancy(Number(e.target.value))}
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
                            <label>Post Retirement Inflation: {postInflation}%</label>
                            <input
                                type="range"
                                min="1"
                                max="15"
                                value={postInflation}
                                onChange={(e) => setPostInflation(Number(e.target.value))}
                                className={styles.rangeInput}
                            />
                        </div>
                        <div className={styles.slider1}>
                            <label>Post Retirement Risk Free Return: {riskFreeReturn}%</label>
                            <input
                                type="range"
                                min="1"
                                max="15"
                                value={riskFreeReturn}
                                onChange={(e) => setRiskFreeReturn(Number(e.target.value))}
                                className={styles.rangeInput}
                            />
                        </div>
                        <div className={styles.slider1}>
                            <label>Return on Existing Investment: {returnExisting}%</label>
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
                            <label>Return on New Investment: {returnNew}%</label>
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
                                margin={{ top: 20, right: 30, left: 40, bottom: 20 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="year">
                                    <Label value="Age" offset={-5} position="insideBottom" />
                                </XAxis>
                                <YAxis>
                                    <Label
                                        value="Corpus Value"
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
                                    dataKey="Corpus"
                                    stroke="#4F46E5"
                                    strokeWidth={3}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                    {/* <div className={styles.chartWrapper}>
                        <ResponsiveContainer width="70%" height={300}>
                            <LineChart
                data={chartData}
                margin={{ top: 0, right: 5, left: 40, bottom: 10 }}
              >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="year">
                                    <Label value="Age" offset={-5} position="insideBottom" />
                                </XAxis>
                                <YAxis>
                                    <Label
                                        value="Corpus Value"
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
                                    dataKey="Corpus"
                                    stroke="#4F46E5"
                                    strokeWidth={3}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div> */}
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
                                <h2>Your Retirement Calculator</h2>
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
                                        {currentAge} years
                                    </p>
                                    <p>
                                        <strong>Retirement Age</strong>
                                        <br />
                                        {retirementAge} years
                                    </p>
                                    <p>
                                        <strong>Life Expectancy</strong>
                                        <br />
                                        {lifeExpectancy} years
                                    </p>
                                </div>
                            </div>

                            <div className={styles.assumptions}>
                                <p>Results based on your inputs:</p>
                                <div className={styles.assumptionRow}>
                                    <span>Monthly Expense at Retirement</span>
                                    <span>₹ {monthlyExpenseAtRetirement.toLocaleString()}</span>
                                </div>
                                <div className={styles.assumptionRow}>
                                    <span>Yearly Expense at Retirement</span>
                                    <span>₹ {yearlyExpenseAtRetirement.toLocaleString()}</span>
                                </div>
                                <div className={styles.assumptionRow}>
                                    <span>Future Value of Current Investment</span>
                                    <span>₹ {futureValueExisting.toLocaleString()}</span>
                                </div>
                                <div className={styles.assumptionRow}>
                                    <span>Corpus Required</span>
                                    <span>₹ {corpusRequired.toLocaleString()}</span>
                                </div>
                            </div>

                            <div className={styles.maturityBox}>
                                <p>Lumpsum Investment Required</p>
                                <h3>₹ {lumpsumRequired.toLocaleString()}</h3>
                            </div>

                            <div className={styles.maturityBox}>
                                <p>Monthly SIP Required</p>
                                <h3>₹ {sipRequired.toLocaleString()}</h3>
                            </div>

                            <p className={styles.disclaimer}>
                                Disclaimer:
                                <br />
                                Above calculation is for illustrative purposes only.
                                Mutual fund investments are subject to market risks. Please
                                read all scheme-related documents carefully.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default MainCalculatorRetirement;
