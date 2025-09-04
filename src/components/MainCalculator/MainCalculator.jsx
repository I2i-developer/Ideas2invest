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
    const [sipAmount, setSipAmount] = useState(5000);
    const [years, setYears] = useState(10);
    const [returnRate, setReturnRate] = useState(12);
    const [uploadedImage, setUploadedImage] = useState(null);

    const [showModal, setShowModal] = useState(false);
    const [closing, setClosing] = useState(false);

    // Open Modal handler
    const openModal = () => {
        setClosing(false); // reset closing state each time you open
        setShowModal(true);
    };

    // Close Modal handler
    const closeModal = () => {
        setClosing(true); // trigger closing animation
        setTimeout(() => {
            setShowModal(false); // actually remove modal after animation
            setClosing(false);   // reset for next time
        }, 300); // match CSS animation duration
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
        Investment: sipAmount * (i + 1) * (1 + returnRate / 100),
    }));

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setUploadedImage(URL.createObjectURL(file));
        }
    };

    // Calculations
    const P = sipAmount;
    const N = years * 12;
    const r = returnRate / 100 / 12;

    // SIP Formula
    const maturityAmount = P * (((Math.pow(1 + r, N) - 1) * (1 + r)) / r);

    // Derived values
    const totalInvestment = P * N;
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

                        <Link href="/calculators/dream-retirement" className={styles.calcCardsLink}>
                            <div className={styles.card}>Dream Retirement Calculator</div>
                        </Link>

                        <Link href="/calculators/grand-wedding" className={styles.calcCardsLink}>
                            <div className={styles.card}>Grand Wedding Calculator</div>
                        </Link>

                        <Link href="/calculators/dream-vacation" className={styles.calcCardsLink}>
                            <div className={styles.card}>Dream Vacation Calculator</div>
                        </Link>

                        <Link href="/calculators/child-education" className={styles.calcCardsLink}>
                            <div className={styles.card}>Child Education Calculator</div>
                        </Link>

                        <Link href="/calculators/sip-topup" className={styles.calcCardsLink}>
                            <div className={styles.card}>SIP Topup Calculator</div>
                        </Link>

                        <Link href="/calculators/limited-period-sip" className={styles.calcCardsLink}>
                            <div className={styles.card}>Limited Period SIP Calculator</div>
                        </Link>

                        <Link href="/calculators/life-insurance-need" className={styles.calcCardsLink}>
                            <div className={styles.card}>Life Insurance Need Calculator</div>
                        </Link>

                        <Link href="/calculators/home-loan-vs-sip" className={styles.calcCardsLink}>
                            <div className={styles.card}>Home Loan vs SIP Calculator</div>
                        </Link>

                        <Link href="/calculators/emi" className={styles.calcCardsLink}>
                            <div className={styles.card}>EMI Calculator</div>
                        </Link>

                        <Link href="/calculators/dream-car" className={styles.calcCardsLink}>
                            <div className={styles.card}>Dream Car Calculator</div>
                        </Link>

                        <Link href="/calculators/cost-of-delay" className={styles.calcCardsLink}>
                            <div className={styles.card}>Cost of Delay Calculator</div>
                        </Link>

                        <Link href="/calculators/birthday-sip" className={styles.calcCardsLink}>
                            <div className={styles.card}>Birthday SIP Calculator</div>
                        </Link>

                        <Link href="/calculators/swp" className={styles.calcCardsLink}>
                            <div className={styles.card}>SWP Calculator</div>
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
                    <h2 className={styles.title}>SIP Calculator</h2>

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
                                id="sipAmount"
                                placeholder=" "
                                value={sipAmount}
                                onChange={(e) => setSipAmount(Number(e.target.value))}
                                required
                            />
                            <label className={styles.inputLabel} htmlFor="sipAmount">Monthly SIP Amount</label>
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
                        <button
                            className={styles.calculateBtn}
                            onClick={() => setShowModal(true)}
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
                                <Line
                                    type="monotone"
                                    dataKey="Investment"
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
                    onClick={closeModal} // clicking outside closes modal
                >
                    <div
                        className={`${styles.modalContent} ${closing ? styles.modalContentClosing : styles.slideIn}`}
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
                                <h2>Your SIP Calculator</h2>
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
                                        <strong>SIP Amount</strong>
                                        <br />₹ {sipAmount.toLocaleString()}
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

export default MainCalculator;
