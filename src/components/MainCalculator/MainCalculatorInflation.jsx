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

const MainCalculator = () => {
    const [name, setName] = useState("");
    const [initialAmount, setInitialAmount] = useState(100000);
    const [inflationRate, setInflationRate] = useState(6);
    const [years, setYears] = useState(10);
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

    // ESC key close
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape" && showModal) closeModal();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [showModal]);

    // Formula
    const r = inflationRate / 100;
    const futureCost = initialAmount * Math.pow(1 + r, years);
    const priceIncrease = futureCost - initialAmount;

    // Chart Data
    const chartData = Array.from({ length: years }, (_, i) => ({
        year: i + 1,
        "Future Cost": initialAmount * Math.pow(1 + r, i + 1),
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
                    <div className={styles.calcCards}>
                        <Link href="/calculators/inflation" className={styles.calcCardsLink}>
                            <div className={styles.card}>Inflation Calculator</div>
                        </Link>
                        <Link href="/calculators/sip" className={styles.calcCardsLink}>
                            <div className={styles.card}>SIP Calculator</div>
                        </Link>
                        <Link href="/calculators/lumpsum" className={styles.calcCardsLink}>
                            <div className={styles.card}>Lumpsum Calculator</div>
                        </Link>
                        <Link href="/calculators/swp" className={styles.calcCardsLink}>
                            <div className={styles.card}>SWP Calculator</div>
                        </Link>
                    </div>
                </motion.div>

                {/* Main Section */}
                <motion.div
                    className={styles.mainDiv}
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className={styles.title}>Inflation Calculator</h2>

                    <div className={styles.formGroup}>
                        <div className={styles.inputWrapper}>
                            <input
                                type="text"
                                id="name"
                                placeholder=" "
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <label className={styles.inputLabel} htmlFor="name">
                                Name
                            </label>
                        </div>

                        <div className={styles.inputWrapper}>
                            <input
                                type="number"
                                id="initialAmount"
                                placeholder=" "
                                value={initialAmount}
                                onChange={(e) => setInitialAmount(Number(e.target.value))}
                            />
                            <label className={styles.inputLabel} htmlFor="initialAmount">
                                Initial Amount ₹
                            </label>
                        </div>
                    </div>

                    <div className={styles.sliderGroup}>
                        <div className={styles.slider1}>
                            <label>Inflation Rate: {inflationRate}%</label>
                            <input
                                type="range"
                                min="1"
                                max="15"
                                value={inflationRate}
                                onChange={(e) => setInflationRate(Number(e.target.value))}
                                className={styles.rangeInput}
                            />
                        </div>

                        <div className={styles.slider1}>
                            <label>Number of Years: {years}</label>
                            <input
                                type="range"
                                min="1"
                                max="40"
                                value={years}
                                onChange={(e) => setYears(Number(e.target.value))}
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
                            <LineChart data={chartData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="year">
                                    <Label value="Years" offset={-5} position="insideBottom" />
                                </XAxis>
                                <YAxis>
                                    <Label
                                        value="Future Cost (₹)"
                                        angle={-90}
                                        position="insideLeft"
                                        style={{ textAnchor: "middle" }}
                                    />
                                </YAxis>
                                <Tooltip />
                                <Line type="monotone" dataKey="Future Cost" stroke="#4F46E5" strokeWidth={3} />
                            </LineChart>
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
                                <h2>Inflation Calculator</h2>
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
                                        <strong>Initial Amount</strong> <br />₹{" "}
                                        {initialAmount.toLocaleString()}
                                    </p>
                                    <p>
                                        <strong>Inflation Rate</strong> <br />
                                        {inflationRate}%
                                    </p>
                                    <p>
                                        <strong>Number of Years</strong> <br />
                                        {years}
                                    </p>
                                </div>
                            </div>

                            {/* Assumptions in rows (like SIP) */}
                            <div className={styles.assumptions}>
                                <p>Calculation based on above assumptions</p>
                                <div className={styles.assumptionRow}>
                                    <span>Current Cost</span>
                                    <span>₹ {initialAmount.toLocaleString()}</span>
                                </div>
                                <div className={styles.assumptionRow}>
                                    <span>Price Increase due to Inflation</span>
                                    <span>₹ {(futureCost - initialAmount).toLocaleString()}</span>
                                </div>
                            </div>

                            {/* Final Result */}
                            <div className={styles.maturityBox}>
                                <p>Future Cost</p>
                                <h3>₹ {futureCost.toLocaleString()}</h3>
                            </div>

                            <p className={styles.disclaimer}>
                                Disclaimer:
                                <br /> Above calculation is only for illustrative purposes. Inflation
                                rate is assumed and actual future cost may vary.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default MainCalculator;
