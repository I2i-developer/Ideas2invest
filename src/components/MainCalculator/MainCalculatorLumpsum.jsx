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

const MainCalculatorLumpsum = () => {
    const [name, setName] = useState("");
    const [investment, setInvestment] = useState(100000);
    const [years, setYears] = useState(10);
    const [returnRate, setReturnRate] = useState(12);
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

    // Chart Data
    const chartData = Array.from({ length: years }, (_, i) => ({
        year: i + 1,
        Investment: investment * Math.pow(1 + returnRate / 100, i + 1),
    }));

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setUploadedImage(URL.createObjectURL(file));
        }
    };

    // Lumpsum Formula: FV = P * (1 + r)^t
    const P = investment;
    const r = returnRate / 100;
    const t = years;

    const maturityAmount = P * Math.pow(1 + r, t);
    const totalInvestment = P;
    const absoluteProfit = maturityAmount - totalInvestment;
    const absoluteGainPercent = ((absoluteProfit / totalInvestment) * 100).toFixed(2);

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
                        <Link href="/calculators/sip" className={styles.calcCardsLink}>
                            <div className={styles.card}>SIP Calculator</div>
                        </Link>
                        <Link href="/calculators/lumpsum" className={styles.calcCardsLink}>
                            <div className={styles.card}>Lumpsum Calculator</div>
                        </Link>
                        <Link href="/calculators/dream-retirement" className={styles.calcCardsLink}>
                            <div className={styles.card}>Dream Retirement Calculator</div>
                        </Link>
                        <Link href="/calculators/emi" className={styles.calcCardsLink}>
                            <div className={styles.card}>EMI Calculator</div>
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
                    <h2 className={styles.title}>Lumpsum Calculator</h2>

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
                                id="investment"
                                placeholder=" "
                                value={investment}
                                onChange={(e) => setInvestment(Number(e.target.value))}
                                required
                            />
                            <label className={styles.inputLabel} htmlFor="investment">Investment Amount</label>
                        </div>
                    </div>

                    <div className={styles.sliderGroup}>
                        <div className={styles.slider1}>
                            <label>Investment Duration: {years} Years</label>
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
                            <LineChart data={chartData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="year">
                                    <Label value="Years" offset={-5} position="insideBottom" />
                                </XAxis>
                                <YAxis>
                                    <Label
                                        value="Investment Value"
                                        angle={-90}
                                        position="insideLeft"
                                        dy={0}
                                        dx={75}
                                        style={{ textAnchor: "middle" }}
                                    />
                                </YAxis>
                                <Tooltip />
                                <Line type="monotone" dataKey="Investment" stroke="#4F46E5" strokeWidth={3} />
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
                                <h2>Your Lumpsum Calculator</h2>
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
                                        <strong>Investment Amount</strong>
                                        <br />₹ {investment.toLocaleString()}
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
                                    <span>Total Investment</span>
                                    <span>₹ {totalInvestment.toLocaleString()}</span>
                                </div>
                                <div className={styles.assumptionRow}>
                                    <span>Absolute Profit</span>
                                    <span>₹ {absoluteProfit.toLocaleString()}</span>
                                </div>
                                <div className={styles.assumptionRow}>
                                    <span>Absolute gain (%)</span>
                                    <span>{absoluteGainPercent}%</span>
                                </div>
                            </div>

                            <div className={styles.maturityBox}>
                                <p>Maturity amount</p>
                                <h3>₹ {maturityAmount.toLocaleString()}</h3>
                            </div>

                            <p className={styles.disclaimer}>
                                Disclaimer:<br />
                                Above calculation is only for illustrative purposes.
                                Mutual funds investments are subject to market risks, read all scheme
                                related documents carefully.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default MainCalculatorLumpsum;
