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

const MainCalculatorSWP = () => {
    const [name, setName] = useState("");
    const [lumpsum, setLumpsum] = useState(500000);
    const [swpAmount, setSwpAmount] = useState(10000);
    const [returnRate, setReturnRate] = useState(10);
    const [tenure, setTenure] = useState(10);
    const [deferred, setDeferred] = useState(0);
    const [uploadedImage, setUploadedImage] = useState(null);

    const [showModal, setShowModal] = useState(false);
    const [closing, setClosing] = useState(false);

    // ---- Handlers ----
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
            if (e.key === "Escape" && showModal) {
                closeModal();
            }
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [showModal]);

    // ---- Calculations ----
    const r = returnRate / 100 / 12;
    const n = tenure * 12;
    const d = deferred * 12;

    // FV after deferred period
    const fvDeferred = lumpsum * Math.pow(1 + r, d);

    let balance = fvDeferred;
    let totalWithdrawals = 0;
    const chartData = [];

    for (let i = 1; i <= n; i++) {
        balance = balance * (1 + r);
        if (balance > swpAmount) {
            balance -= swpAmount;
            totalWithdrawals += swpAmount;
        } else {
            totalWithdrawals += balance;
            balance = 0;
        }
        chartData.push({
            month: i,
            "Fund Value": Math.round(balance),
        });
        if (balance <= 0) break;
    }

    const fundValue = balance;

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
                    <h2 className={styles.title}>SWP Calculator</h2>

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
                                id="lumpsum"
                                placeholder=" "
                                value={lumpsum}
                                onChange={(e) => setLumpsum(Number(e.target.value))}
                                required
                            />
                            <label className={styles.inputLabel} htmlFor="lumpsum">Overall Lumpsum Investment (₹)</label>
                        </div>

                        <div className={styles.inputWrapper}>
                            <input
                                type="number"
                                id="swpAmount"
                                placeholder=" "
                                value={swpAmount}
                                onChange={(e) => setSwpAmount(Number(e.target.value))}
                                required
                            />
                            <label className={styles.inputLabel} htmlFor="swpAmount">Monthly SWP Amount (₹)</label>
                        </div>
                    </div>

                    <div className={styles.sliderGroup}>
                        <div className={styles.slider1}>
                            <label>Assumed Annual Return: {returnRate}%</label>
                            <input
                                type="range"
                                min="1"
                                max="20"
                                value={returnRate}
                                onChange={(e) => setReturnRate(Number(e.target.value))}
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
                            <label>Deferred Period: {deferred} Years</label>
                            <input
                                type="range"
                                min="0"
                                max="10"
                                value={deferred}
                                onChange={(e) => setDeferred(Number(e.target.value))}
                                className={styles.rangeInput}
                            />
                        </div>
                    </div>

                    <div className={styles.centerBtn}>
                        <button
                            className={styles.calculateBtn}
                            onClick={openModal}
                        >
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
                                <XAxis dataKey="month">
                                    <Label value="Months" offset={-5} position="insideBottom" />
                                </XAxis>
                                <YAxis>
                                    <Label
                                        value="Fund Value"
                                        angle={-90}
                                        position="insideLeft"
                                        dx={65}
                                        style={{ textAnchor: "middle" }}
                                    />
                                </YAxis>
                                <Tooltip />
                                <Line
                                    type="monotone"
                                    dataKey="Fund Value"
                                    stroke="#4F46E5"
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
                                <h2>Your SWP Calculator</h2>
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
                                        <strong>Lumpsum Investment</strong>
                                        <br />₹ {lumpsum.toLocaleString()}
                                    </p>
                                    <p>
                                        <strong>SWP Amount</strong>
                                        <br />₹ {swpAmount.toLocaleString()}
                                    </p>
                                    <p>
                                        <strong>Expected returns</strong>
                                        <br />{returnRate}%
                                    </p>
                                    <p>
                                        <strong>Tenure</strong>
                                        <br />{tenure} years
                                    </p>
                                    <p>
                                        <strong>Deferred Period</strong>
                                        <br />{deferred} years
                                    </p>
                                </div>
                            </div>

                            <div className={styles.assumptions}>
                                <p>Calculation based on above assumptions</p>
                                <div className={styles.assumptionRow}>
                                    <span>FV after deferred period</span>
                                    <span>₹ {fvDeferred.toLocaleString()}</span>
                                </div>
                                <div className={styles.assumptionRow}>
                                    <span>Total Withdrawal through SWP</span>
                                    <span>₹ {totalWithdrawals.toLocaleString()}</span>
                                </div>
                                <div className={styles.assumptionRow}>
                                    <span>Fund Value at the end of tenure</span>
                                    <span>₹ {fundValue.toLocaleString()}</span>
                                </div>
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

export default MainCalculatorSWP;
