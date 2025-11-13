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
    Legend,
} from "recharts";
import CalculatorSidebar from "./CalculatorSidebar";

const MainCalculator = () => {
    const [name, setName] = useState("");
    const [carName, setCarName] = useState("");
    const [currentCost, setCurrentCost] = useState(1000000);
    const [existingInvestment, setExistingInvestment] = useState(200000);

    const [years, setYears] = useState(5);
    const [inflation, setInflation] = useState(6);
    const [returnExisting, setReturnExisting] = useState(8);
    const [returnNew, setReturnNew] = useState(12);

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

    // Chart + Calculations
    const [futureCost, setFutureCost] = useState(0);
    const [futureExisting, setFutureExisting] = useState(0);
    const [deficit, setDeficit] = useState(0);
    const [lumpsumRequired, setLumpsumRequired] = useState(0);
    const [sipRequired, setSipRequired] = useState(0);
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const fvCar = currentCost * Math.pow(1 + inflation / 100, years);

        const fvExisting =
            existingInvestment * Math.pow(1 + returnExisting / 100, years);

        const deficitValue = fvCar - fvExisting;

        const lumpsum = deficitValue / Math.pow(1 + returnNew / 100, years);

        const r = returnNew / 100 / 12;
        const n = years * 12;
        const sip =
            (deficitValue * r) / (Math.pow(1 + r, n) - 1);

        const data = Array.from({ length: years }, (_, i) => {
            const year = i + 1;
            return {
                year: year,
                "Future Car Cost": currentCost * Math.pow(1 + inflation / 100, year),
                "Future Existing Investment":
                    existingInvestment * Math.pow(1 + returnExisting / 100, year),
            };
        });

        setFutureCost(fvCar);
        setFutureExisting(fvExisting);
        setDeficit(deficitValue);
        setLumpsumRequired(lumpsum);
        setSipRequired(sip);
        setChartData(data);
    }, [currentCost, existingInvestment, years, inflation, returnExisting, returnNew]);

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
                    <h2 className={styles.title}>Dream Car Calculator 🚗</h2>

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
                            <label htmlFor="name">Name</label>
                        </div>

                        <div className={styles.inputWrapper}>
                            <input
                                type="text"
                                id="carName"
                                placeholder=" "
                                value={carName}
                                onChange={(e) => setCarName(e.target.value)}
                                required
                            />
                            <label htmlFor="carName">Dream Car Name</label>
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
                            <label htmlFor="currentCost">Current Cost of Dream Car</label>
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
                            <label htmlFor="existingInvestment">Current Investment for Goal</label>
                        </div>
                    </div>

                    {/* Sliders */}
                    <div className={styles.sliderGroup}>
                        <div className={styles.slider1}>
                            <label>After how many years? {years}</label>
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
                            <label>Return on Existing Investment: {returnExisting}%</label>
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
                                margin={{ top: 0, right: 5, left: 40, bottom: 10 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="year">
                                    <Label value="Years" offset={-5} position="insideBottom" />
                                </XAxis>
                                <YAxis>
                                    <Label
                                        value="Future Value"
                                        angle={-90}
                                        position="insideLeft"
                                        dx={50}
                                        style={{ textAnchor: "middle" }}
                                    />
                                </YAxis>
                                <Tooltip />
                                <Legend />
                                <Line
                                    type="monotone"
                                    dataKey="Future Car Cost"
                                    stroke="#4F46E5"
                                    strokeWidth={3}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="Future Existing Investment"
                                    stroke="#22c55e"
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
                    className={`${styles.modalOverlay} ${closing ? styles.modalOverlayClosing : styles.fadeIn}`}
                    onClick={closeModal}
                >
                    <div
                        className={`${styles.modalContent} ${closing ? styles.modalContentClosing : styles.slideIn}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className={styles.closeBtn} onClick={closeModal}>
                            ×
                        </button>

                        <div className={styles.calcBox}>
                            <div className={styles.modalTitle}>
                                <h2>Your Dream Car Plan</h2>
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
                                        <strong>Dream Car</strong> <br /> {carName || "Not specified"}
                                    </p>
                                    <p>
                                        <strong>Years</strong> <br /> {years}
                                    </p>
                                    <p>
                                        <strong>Inflation</strong> <br /> {inflation}%
                                    </p>
                                </div>
                            </div>

                            <div className={styles.assumptions}>
                                <p>Calculation based on above assumptions</p>
                                <div className={styles.assumptionRow}>
                                    <span>Future Value of Dream Car</span>
                                    <span>₹ {futureCost.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</span>
                                </div>
                                <div className={styles.assumptionRow}>
                                    <span>Future Value of Existing Investment</span>
                                    <span>₹ {futureExisting.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</span>
                                </div>
                                <div className={styles.assumptionRow}>
                                    <span>Deficit</span>
                                    <span>₹ {deficit.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</span>
                                </div>
                            </div>

                            <div className={styles.maturityBox}>
                                <p>Lumpsum Investment Required</p>
                                <h3>₹ {lumpsumRequired.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</h3>
                            </div>
                            <div className={styles.maturityBox}>
                                <p>SIP Required to Achieve Goal</p>
                                <h3>₹ {sipRequired.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</h3>
                            </div>

                            <p className={styles.disclaimer}>
                                Disclaimer:<br />
                                Above calculation is only for illustrative purposes. Mutual fund
                                investments are subject to market risks, read all scheme-related
                                documents carefully.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default MainCalculator;
