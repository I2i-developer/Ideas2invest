"use client";
import React, { useState, useEffect } from "react";
import styles from "./MainCalculator.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { RiMailSendFill } from "react-icons/ri";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Cell,
    Label,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import CalculatorSidebar from "./CalculatorSidebar";

const GoalSipCalculator = () => {
    const [name, setName] = useState("");
    // const [goalAmount, setGoalAmount] = useState(5000000);
    const [goalAmount, setGoalAmount] = useState("5000000");
    const [years, setYears] = useState(15);
    const [returnRate, setReturnRate] = useState(12);
    const [uploadedImage, setUploadedImage] = useState(null);
    const [activeBarIndex, setActiveBarIndex] = useState(null);

    const [showModal, setShowModal] = useState(false);
    const [closing, setClosing] = useState(false);

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

    // Format number in Indian style
    const formatIndianNumber = (value) => {
        if (!value) return "";
        return Number(value.replace(/,/g, "")).toLocaleString("en-IN");
    };

    // Handle input change
    const handleGoalAmountChange = (e) => {
        const rawValue = e.target.value.replace(/,/g, "");

        // Allow only numbers
        if (/^\d*$/.test(rawValue)) {
            setGoalAmount(rawValue);
        }
    };

    /* ===============================
       Goal SIP Calculation
    =============================== */
    const PMT = (rate, nper, pv, fv = 0, type = 0) => {
        if (rate === 0) return -(fv + pv) / nper;
        const pow = Math.pow(1 + rate, nper);
        let pmt =
            (rate * (fv + pow * pv)) /
            ((1 + rate * type) * (pow - 1));

        return -pmt;
    };

    const r = returnRate / 100 / 12;
    const n = years * 12;

    const numericGoalAmount = Number(goalAmount.replace(/,/g, "") || 0);
    const rawSip = Math.abs(PMT(r, n, 0, numericGoalAmount, 0));
    // const rawSip = Math.abs(PMT(r, n, 0, goalAmount, 0));
    const requiredSip = Number(rawSip.toFixed(2));

    const totalInvestment = Number((requiredSip * n).toFixed(2));
    // const wealthGained = Number((goalAmount - totalInvestment).toFixed(2));
    const wealthGained = Number((numericGoalAmount - totalInvestment).toFixed(2));

    /* ===============================
       Bar Chart Data
    =============================== */
    const chartData = [
        {
            name: "Your Total Investment",
            value: totalInvestment,
        },
        {
            name: "Monthly SIP Amount",
            value: requiredSip,
        },
    ];

    const getGradientId = (entry) => {
        if (entry.name === "Monthly SIP Amount") return "sipGradient";
        return "investmentGradient";
    };

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const barName = payload[0].payload.name;

            const color =
            barName === "Monthly SIP Amount" ? "#00D200" : "#FF9F00";

            return (
            <div
                style={{
                background: "#fff",
                padding: "10px 14px",
                borderRadius: "8px",
                boxShadow: "0 4px 14px rgba(0,0,0,0.12)",
                border: `1px solid ${color}`,
                }}
            >
                <p style={{ margin: 0, fontSize: 13, color: "#555" }}>
                {barName}
                </p>
                <p
                style={{
                    margin: 0,
                    fontWeight: 700,
                    fontSize: 15,
                    color: color, // ✅ SAME COLOR AS BAR
                }}
                >
                ₹{" "}
                {payload[0].value.toLocaleString("en-IN", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                })}
                </p>
            </div>
            );
        }
        return null;
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

                {/* Main */}
                <motion.div
                    className={styles.mainDiv}
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className={styles.title}>Goal SIP Calculator</h2>
                    <p className={styles.subTitle}>
                        Find out the monthly SIP needed to achieve your goal.
                    </p>

                    <div className={styles.formGroup}>
                        <div className={styles.inputWrapper}>
                            <input
                                type="text"
                                id="name"
                                placeholder=" "
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <label htmlFor="name">Name</label>
                        </div>

                        <div className={styles.inputWrapper}>
                            {/* <input
                                type="number"
                                id="goalAmount"
                                placeholder=" "
                                value={goalAmount}
                                onChange={(e) => setGoalAmount(Number(e.target.value))}
                            /> */}
                            <input
                                type="text"
                                id="goalAmount"
                                placeholder=" "
                                value={formatIndianNumber(goalAmount)}
                                onChange={handleGoalAmountChange}
                            />
                            <label htmlFor="goalAmount">Target Goal Amount (₹)</label>
                        </div>
                    </div>

                    <div className={styles.sliderGroup}>
                        <div className={styles.slider1}>
                            <label>Investment Duration: {years} Years</label>
                            <input
                                type="range"
                                min="1"
                                max="50"
                                value={years}
                                onChange={(e) => setYears(Number(e.target.value))}
                                className={styles.rangeInput}
                            />
                        </div>

                        <div className={styles.slider1}>
                            <label>Expected Rate of Return (p.a.): {returnRate}%</label>
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

                    {/* Bar Chart */}
                    <div className={styles.chartWrapper}>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={chartData} barCategoryGap="40%">
                                <defs>
                                    {/* Green Gradient – Monthly SIP */}
                                    <linearGradient id="sipGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#00D200" stopOpacity={1} />
                                        <stop offset="100%" stopColor="#009900" stopOpacity={1} />
                                    </linearGradient>

                                    {/* Yellow → Orange Gradient – Total Investment */}
                                    <linearGradient id="investmentGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#FFD700" stopOpacity={1} />
                                        <stop offset="100%" stopColor="#FF9F00" stopOpacity={1} />
                                    </linearGradient>
                                </defs>

                                <CartesianGrid strokeDasharray="3 3" />

                                <XAxis dataKey="name" />

                                <YAxis>
                                    <Label
                                        value="Amount (₹)"
                                        angle={-90}
                                        position="insideLeft"
                                        dx={70}
                                    />
                                </YAxis>

                                <Tooltip content={<CustomTooltip />} />

                                <Bar
                                    dataKey="value"
                                    barSize={75}
                                    radius={[6, 6, 0, 0]}
                                    onMouseEnter={(_, index) => setActiveBarIndex(index)}
                                    onMouseLeave={() => setActiveBarIndex(null)}
                                    >
                                    {chartData.map((entry, index) => (
                                        <Cell
                                        key={`cell-${index}`}
                                        fill={`url(#${getGradientId(entry)})`}
                                        />
                                    ))}
                                </Bar>
                            </BarChart>
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
                        <button className={styles.closeBtn} onClick={closeModal}>×</button>

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

                        <div className={styles.calcBox}>
                            <div className={styles.modalTitle}>
                                <h2>Your Goal SIP Plan</h2>
                                <p className={styles.userName}>Dear {name || "Investor"}</p>
                            </div>

                            <div className={styles.assumptions}>
                                <div className={styles.assumptionRow}>
                                    <span>Target Goal</span>
                                    <span>₹ {numericGoalAmount.toLocaleString("en-IN")}</span>
                                </div>
                                <div className={styles.assumptionRow}>
                                    <span>Total Investment</span>
                                    <span>₹ {totalInvestment.toLocaleString("en-IN")}</span>
                                </div>
                                <div className={styles.assumptionRow}>
                                    <span>Wealth Gained</span>
                                    <span>₹ {wealthGained.toLocaleString("en-IN")}</span>
                                </div>
                            </div>
                            <div className={styles.maturityBox}>
                                <p>Required Monthly SIP</p>
                                <h3>
                                    ₹ {requiredSip.toLocaleString("en-IN", { maximumFractionDigits: 2 })}
                                </h3>
                            </div>

                            <p className={styles.disclaimer}>
                                Disclaimer: Calculations are for illustrative purposes only.
                                Mutual fund investments are subject to market risks.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default GoalSipCalculator;