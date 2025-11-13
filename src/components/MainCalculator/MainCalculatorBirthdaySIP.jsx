"use client";
import React, { useState, useEffect } from "react";
import styles from "./MainCalculator.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { RiMailSendFill } from "react-icons/ri";
import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
} from "recharts";
import CalculatorSidebar from "./CalculatorSidebar";

const MainCalculatorBirthdaySIP = () => {
    const [name, setName] = useState("");
    const [sipAmount, setSipAmount] = useState(5000);
    const [birthDate, setBirthDate] = useState("");
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

    // Image Upload
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setUploadedImage(URL.createObjectURL(file));
        }
    };

    // Birthday SIP Calculation
    const today = new Date();
    const birth = birthDate ? new Date(birthDate) : null;

    let months = 0;
    if (birth && birth < today) {
        const diffYears = today.getFullYear() - birth.getFullYear();
        const diffMonths = today.getMonth() - birth.getMonth();
        months = diffYears * 12 + diffMonths;
    }

    const r = returnRate / 100 / 12;
    const n = months;

    const sipFutureValue = (A, r, n) => {
        if (r === 0) return A * n;
        return A * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    };

    const maturityAmount = sipFutureValue(sipAmount, r, n);

    // Chart Data
    const chartData = [
        { name: "Total Invested", value: sipAmount * n },
        { name: "Wealth Created", value: maturityAmount - sipAmount * n },
    ];

    const COLORS = ["#4F46E5", "#22C55E"];

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
                    <h2 className={styles.title}>Birthday SIP Calculator 🎂</h2>

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
                            <label className={styles.inputLabel} htmlFor="name">Your Name</label>
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

                    <div className={styles.formGroup}>
                        <div className={styles.inputWrapper}>
                            <input
                                type="date"
                                id="birthDate"
                                placeholder=" "
                                value={birthDate}
                                onChange={(e) => setBirthDate(e.target.value)}
                                max={new Date(
                                    new Date().setMonth(new Date().getMonth() - 6)
                                )
                                    .toISOString()
                                    .split("T")[0]} // ensures date is at least 6 months earlier
                                required
                            />
                            <label htmlFor="birthDate">Enter Birth Date</label>
                        </div>

                        {/* <div className={styles.inputWrapper}>
                            <input
                                type="date"
                                id="birthDate"
                                value={birthDate}
                                onChange={(e) => setBirthDate(e.target.value)}
                                required
                            />
                            <label className={styles.inputLabel} htmlFor="birthDate">Birth Date</label>
                        </div> */}
                    </div>
                    <p className={styles.note}>Note: Please select a date at least 6 months earlier than the current date.</p>

                    <div className={styles.sliderGroup}>
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
                        <button className={styles.calculateBtn} onClick={() => setShowModal(true)}>
                            Calculate & View Report
                        </button>
                    </div>

                    {/* Chart */}
                    <div className={styles.chartWrapper}>
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={chartData}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={105}
                                    label={({ name, value }) => `${name}: ₹${value.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`}
                                >
                                    {chartData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip formatter={(value) => `₹ ${value.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`} />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </motion.div>
            </div>

            {/* Modal */}
            {showModal && (
                <div
                    className={`${styles.modalOverlay} ${closing ? styles.modalOverlayClosing : styles.fadeIn
                        }`}
                    onClick={closeModal} // clicking outside closes modal
                >
                    <div
                        className={`${styles.modalContent} ${closing ? styles.modalContentClosing : styles.slideIn
                            }`}
                        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
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
                                <h2>Birthday SIP Calculator</h2>
                                <p className={styles.userName}>Dear {name || "Investor"}</p>
                            </div>

                            <div className={styles.userInfo}>
                                <div className={styles.profilePic}>
                                    {uploadedImage ? (
                                        <img src={uploadedImage} alt="User" />
                                    ) : (
                                        <div className={styles.placeholderPic}>🎂</div>
                                    )}
                                </div>
                                <div className={styles.infoGrid}>
                                    <p>
                                        <strong>SIP Amount</strong>
                                        <br />₹ {sipAmount.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
                                    </p>
                                    <p>
                                        <strong>Birth Date</strong>
                                        <br />
                                        {birthDate}
                                    </p>
                                    <p>
                                        <strong>Expected Returns</strong>
                                        <br />
                                        {returnRate}%
                                    </p>
                                </div>
                            </div>
                            <div className={styles.maturityBox}>
                                <p>
                                    Many many happy returns of the day! Today is a memorable day for you. You can make it even more special by giving yourself and your family a gift that grows and compounds with time.
                                </p>
                                <p>
                                    A SIP of <strong>₹{sipAmount.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</strong> started in the same month and year of your birthday <strong>{birthDate || "--"}</strong> would have amassed a wealth of <strong>₹{maturityAmount.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</strong> by now.
                                </p>
                                <p>
                                    Of course, we cannot go back and change our past, but we can surely take wise steps to secure the future of ourselves and our loved ones.
                                </p>
                                <p>Enjoy the day! 🎂 Cheers!</p>
                            </div>

                            {/* Custom Output Paragraph */}
                            {/* <div className={styles.assumptions}>
                                <p>
                                    Many many happy returns of the day! Today is a memorable day for
                                    you. You can make it even more special by giving yourself and your
                                    family a gift that grows and compounds with time.
                                </p>
                                <p>
                                    A Systematic Investment Plan (SIP) can do that wonderfully and many
                                    of us have already realised it. A SIP of Rs.{" "}
                                    <strong>{sipAmount.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</strong> started in the same
                                    month and year of your birthday <strong>{birthDate}</strong> would
                                    have amassed a wealth of Rs.{" "}
                                    <strong>{maturityAmount.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</strong> by now.
                                </p>
                                <p>
                                    Of course, we cannot go back and change our past, but we can surely
                                    take wise steps to secure the future of ourselves and our loved
                                    ones.
                                </p>
                                <p>Enjoy the day! 🎉 Cheers!</p>
                            </div> */}

                            <p className={styles.disclaimer}>
                                Disclaimer:
                                <br /> Above calculation is only for illustrative purposes. Mutual
                                funds investments are subject to market risks, read all scheme related
                                documents carefully.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default MainCalculatorBirthdaySIP;
