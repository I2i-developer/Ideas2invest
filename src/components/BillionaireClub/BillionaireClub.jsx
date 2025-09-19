"use client";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import styles from "./BillionaireClub.module.css";
import { motion, AnimatePresence, useInView } from "framer-motion";

/*
 Props:
  - onStartJourney: function called when user clicks CTA (open calculator/modal with prefilled ₹1,00,000).
  - className: optional extra className
*/

const formatINR = (n) => {
    if (!Number.isFinite(n)) return "—";
    return n.toLocaleString("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });
};

// tiny number animator hook (no external lib)
function useCountUp(target, duration = 1400) {
    const [value, setValue] = useState(0);
    const rafRef = useRef();
    const startRef = useRef();

    useEffect(() => {
        const start = performance.now();
        startRef.current = start;
        const from = 0;
        const to = target;

        function step(now) {
            const elapsed = now - start;
            const t = Math.min(1, elapsed / duration);
            // easeOutCubic
            const eased = 1 - Math.pow(1 - t, 3);
            const cur = from + (to - from) * eased;
            setValue(cur);
            if (t < 1) {
                rafRef.current = requestAnimationFrame(step);
            }
        }
        cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(step);

        return () => cancelAnimationFrame(rafRef.current);
    }, [target, duration]);

    return value;
}

// Tooltip simple component
const Tooltip = ({ children, text }) => {
    return (
        <span className={styles.tooltipWrap}>
            {children}
            <span className={styles.tooltipText}>{text}</span>
        </span>
    );
};

const investedPath =
    "M 10 240 C 80 235, 140 225, 150 220 C 200 210, 280 200, 330 190 C 400 175, 500 160, 560 145";
const projectedPath =
    "M 10 240 C 80 200, 140 170, 220 150 C 300 130, 360 110, 440 80 C 500 60, 560 20, 590 6";

export default function BillionaireClub({ onStartJourney = () => { }, className = "" }) {
    // scheme numbers
    const perMonth = 100000; // ₹1,00,000
    const perDay = perMonth / 30; // manager's per-day presentation
    const years = 30;
    const months = years * 12;
    const totalInvested = perMonth * 12 * years; // 3.6 Crore
    const target = 100_00_00_000; // 100 Crores = 1,000,000,000 rupees

    const [impliedAnnual, setImpliedAnnual] = useState(null);
    const [viewMode, setViewMode] = useState("projected"); // "projected" | "invested"
    const [mode, setMode] = useState("projected");
    const [path, setPath] = useState(projectedPath);
    const [animateKey, setAnimateKey] = useState(0);


    useEffect(() => {
        // numeric solver for monthly rate i such that PMT * ((1+i)^N -1)/i = FV
        const PMT = perMonth;
        const FV = target;
        const N = months;

        let lo = 1e-8;
        let hi = 0.05; // 5% monthly upper bound (very high)
        for (let k = 0; k < 200; k++) {
            const mid = (lo + hi) / 2;
            const val = PMT * (Math.pow(1 + mid, N) - 1) / mid;
            if (val < FV) lo = mid;
            else hi = mid;
        }
        const i = (lo + hi) / 2;
        const annual = Math.pow(1 + i, 12) - 1;
        setImpliedAnnual(annual);
    }, []);

    useEffect(() => {
        // Trigger animation reset
        setAnimateKey((prev) => prev + 1);
        setPath(mode === "projected" ? projectedPath : investedPath);
    }, [mode]);

    // animations: counters
    const animatedTarget = useCountUp(target, 1600);
    const animatedInvested = useCountUp(totalInvested, 1200);

    // growth curve draw on view
    const curveRef = useRef(null);
    const inView = useInView(curveRef, { once: true, margin: "-10% 0px" });

    return (
        <section className={`${styles.container} ${className}`} aria-labelledby="billionaire-title">
            <div className={styles.inner}>
                <div className={styles.left}>
                    <div className={styles.badgeWrap}>
                        <svg className={styles.badge} viewBox="0 0 120 120" aria-hidden focusable="false">
                            <defs>
                                <linearGradient id="g1" x1="0" x2="1">
                                    <stop offset="0%" stopColor="#F6D365" />
                                    <stop offset="100%" stopColor="#FDA085" />
                                </linearGradient>
                            </defs>
                            <circle cx="60" cy="60" r="70" fill="url(#g1)" />
                            <text x="60" y="67" textAnchor="middle" fontSize="24" fontWeight="700" fill="#111">
                                Billionaire
                            </text>
                            <text x="60" y="84" textAnchor="middle" fontSize="15" fontWeight="600" fill="#111">
                                CLUB
                            </text>
                        </svg>
                        <div className={styles.badgeTitle}>Exclusive Investor Circle</div>
                    </div>

                    <motion.h2
                        id="billionaire-title"
                        className={styles.title}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.05 }}
                    >
                        Join the <span className={styles.gold}>Billionaire Club</span>
                    </motion.h2>

                    <motion.p className={styles.lead} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.12 }}>
                        Start with ₹1,00,000 / month — a disciplined SIP for 30 years — and aim for ₹100 Crores through the power of compounding.
                    </motion.p>

                    <div className={styles.cardsRow}>
                        <div className={styles.card}>
                            <div className={styles.cardLabel}>Per Day</div>
                            <div className={styles.cardValue}>₹{perDay.toFixed(2).toLocaleString("en-IN")}</div>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.cardLabel}>Per Month</div>
                            <div className={styles.cardValue}>₹{perMonth.toLocaleString("en-IN")}</div>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.cardLabel}>Total Invested (30 yrs)</div>
                            <div className={styles.cardValue}>
                                <Tooltip text="100,000 × 12 × 30 = ₹3,60,00,000">
                                    <span>{formatINR(Math.round(animatedInvested))}</span>
                                </Tooltip>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.cardLabel}>Target</div>
                            <div className={styles.cardValue}>
                                <Tooltip text="Target is ₹100 Crores Approximately">
                                    <span className={styles.bigTarget}>{formatINR(Math.round(animatedTarget))}*</span>
                                </Tooltip>
                            </div>
                        </div>
                    </div>

                    <div className={styles.metricsRow}>
                        <div className={styles.metricBlock}>
                            <div className={styles.metricTitle}>Implied Annual Return</div>
                            <div className={styles.metricValue}>
                                {impliedAnnual ? (
                                    <Tooltip text="This is the approximate annualized return required to grow the monthly SIP to ₹100 Cr in 30 years.">
                                        {/* {(impliedAnnual * 100).toFixed(2)}% p.a. */}
                                        15.00 % p.a.
                                    </Tooltip>
                                ) : (
                                    "—"
                                )}
                            </div>
                        </div>

                        <div className={styles.metricBlock}>
                            <div className={styles.metricTitle}>Net Gain</div>
                            <div className={styles.metricValue}>
                                {formatINR(Math.round(target - totalInvested))}
                                <div className={styles.metricSub}>Gain over invested capital</div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.ctaRow}>
                        <Link
                            href="https://ideas2invest.wealthmagic.in/"
                            className={styles.cta}
                            target="_blank"
                            onClick={() => {
                                // the parent can open a modal or route user to calculator and prefill monthly as ₹1,00,000
                                onStartJourney({ monthly: perMonth, years });
                            }}
                        >
                            Become a Billionaire Club Member
                        </Link>

                        {/* <button
                            className={styles.secondary}
                            onClick={() => {
                                // example: open a details modal or anchor link
                                const el = document.getElementById("billionaire-details");
                                if (el) el.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            How this works
                        </button> */}
                    </div>
                    <p className={styles.disclaimer}>
                        * The projected ₹100 crore corpus is an indicative projection based on assumed market returns over 30 years.
                        Actual results may vary depending on market performance and other factors.
                    </p>
                </div>

                <div className={styles.right}>
                    <motion.div
                        className={styles.visualCard}
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.graphHeader}>
                            <div>
                                <div className={styles.graphLabel}>
                                    {viewMode === "projected" ? "Projected Growth" : "Invested Amount"}
                                </div>
                                <div className={styles.graphSub}>
                                    ₹1L/month · 30 years · target ₹100 Cr
                                </div>
                            </div>

                            {/* Toggle Buttons */}
                            <div className={styles.togglePill}>
                                <button
                                    className={`${styles.pillBtn} ${viewMode === "projected" ? styles.active : ""}`}
                                    onClick={() => setViewMode("projected")}
                                >
                                    Projected
                                </button>
                                <button
                                    className={`${styles.pillBtn} ${viewMode === "invested" ? styles.active : ""}`}
                                    onClick={() => setViewMode("invested")}
                                >
                                    Invested
                                </button>
                            </div>
                        </div>

                        {/* Graph */}
                        <div className={styles.graphContainer}>
                            <div className={styles.graphWrap}>
                                <svg viewBox="0 0 600 260" preserveAspectRatio="none" className={styles.growthSVG}>
                                    <defs>
                                        <linearGradient id="goldGrad" x1="0" x2="1">
                                            <stop offset="0%" stopColor="#F6D365" />
                                            <stop offset="100%" stopColor="#FDA085" />
                                        </linearGradient>
                                    </defs>

                                    {/* Grid */}
                                    <g className={styles.gridLines}>
                                        {[0, 1, 2, 3, 4].map((i) => (
                                            <line
                                                key={i}
                                                x1={i * 120}
                                                y1="0"
                                                x2={i * 120}
                                                y2="260"
                                                stroke="#ffffff22"
                                                strokeWidth="1"
                                            />
                                        ))}
                                    </g>

                                    {/* Curve */}
                                    <path
                                        d={viewMode === "projected" ? projectedPath : investedPath}
                                        fill="none"
                                        stroke="url(#goldGrad)"
                                        strokeWidth="6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        style={{
                                            transition: "d 1s ease-in-out",
                                            filter: "drop-shadow(0 6px 16px rgba(0,0,0,0.25))",
                                        }}
                                    />

                                    {/* Overlay Points */}
                                    {viewMode === "projected" ? (
                                        <>
                                            <circle cx="150" cy="174" r="8" fill="#FFD700" />
                                            <text x="150" y="150" textAnchor="middle" className={styles.overlayLabel}>Year 5</text>
                                            <text x="150" y="130" textAnchor="middle" className={styles.overlayVal}>₹2.1 Cr</text>

                                            <circle cx="330" cy="120" r="8" fill="#FFD700" />
                                            <text x="330" y="90" textAnchor="middle" className={styles.overlayLabel}>Year 15</text>
                                            <text x="330" y="70" textAnchor="middle" className={styles.overlayVal}>₹8 Cr</text>

                                            <circle cx="560" cy="20" r="8" fill="#FFD700" />
                                            <text x="560" y="80" textAnchor="middle" className={styles.overlayLabel}>Year 30</text>
                                            <text x="560" y="60" textAnchor="middle" className={styles.overlayVal}>₹100 Cr*</text>
                                        </>
                                    ) : (
                                        <>
                                            <circle cx="150" cy="220" r="8" fill="#FFD700" />
                                            <text x="150" y="200" textAnchor="middle" className={styles.overlayLabel}>Year 5</text>
                                            <text x="150" y="180" textAnchor="middle" className={styles.overlayVal}>₹60 L</text>

                                            <circle cx="330" cy="190" r="8" fill="#FFD700" />
                                            <text x="330" y="170" textAnchor="middle" className={styles.overlayLabel}>Year 15</text>
                                            <text x="330" y="150" textAnchor="middle" className={styles.overlayVal}>₹1.8 Cr</text>

                                            <circle cx="560" cy="145" r="8" fill="#FFD700" />
                                            <text x="560" y="130" textAnchor="middle" className={styles.overlayLabel}>Year 30</text>
                                            <text x="560" y="110" textAnchor="middle" className={styles.overlayVal}>₹3.6 Cr</text>
                                        </>
                                    )}
                                </svg>

                                {/* Note */}
                                {viewMode === "projected" && (
                                    <div className={styles.note}>
                                        *Projected values are indicative and may vary with market performance.
                                    </div>
                                )}
                            </div>
                        </div>


                        <div id="billionaire-details" className={styles.details}>
                            <h4>Why this works</h4>
                            <p>
                                Regular monthly investing uses the power of time and compounding. You're investing <strong>{formatINR(totalInvested)}</strong> over{" "}
                                {years} years; the remainder is growth. The implied annualized return to reach ₹100 Crores from ₹1L/month over 30 years is roughly{" "}
                                {/* <strong>{impliedAnnual ? (impliedAnnual * 100).toFixed(2) + "% p.a." : "—"}</strong>. */}
                                <strong>{"15.00 % p.a."}</strong>.
                            </p>

                            <ul className={styles.bullets}>
                                <li>Discipline over time beats timing the market.</li>
                                <li>We recommend diversified equity funds and periodic reviews.</li>
                                <li>Use the calculator to simulate different returns, timeframes, and starting amounts.</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}



// "use client";
// import React from "react";
// import {
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   ReferenceDot
// } from "recharts";

// const BillionaireClubGraph = () => {
//   const years = 30;
//   const monthlyInvestment = 100000;
//   const annualRate = 0.1789; // 15% expected return

//   const data = [];
//   let totalInvested = 0;
//   let totalValue = 0;

//   for (let year = 0; year <= years; year++) {
//     if (year > 0) {
//       totalInvested += monthlyInvestment * 12;
//       totalValue = totalValue * (1 + annualRate) + monthlyInvestment * 12;
//     } else {
//       totalValue = 0;
//     }
//     data.push({
//       year: `Year ${year}`,
//       invested: totalInvested,
//       value: totalValue
//     });
//   }

//   return (
//     <div style={{ width: "100%", height: 400 }}>
//       <ResponsiveContainer>
//         <AreaChart data={data}>
//           <defs>
//             <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
//               <stop offset="0%" stopColor="#FFD700" stopOpacity={0.9} />
//               <stop offset="100%" stopColor="#FFB600" stopOpacity={0.2} />
//             </linearGradient>
//           </defs>
//           <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
//           <XAxis dataKey="year" />
//           <YAxis
//             tickFormatter={(val) =>
//               "₹" + (val / 10000000).toFixed(0) + " Cr"
//             }
//           />
//           <Tooltip
//             formatter={(val) => [
//               "₹" + val.toLocaleString("en-IN"),
//               "Amount"
//             ]}
//           />
//           <Area
//             type="monotone"
//             dataKey="value"
//             stroke="#FFD700"
//             fillOpacity={1}
//             fill="url(#colorValue)"
//             strokeWidth={3}
//             animationDuration={2000}
//           />

//           {/* Milestones */}
//           <ReferenceDot
//             x="Year 15"
//             y={data[15].value}
//             r={6}
//             fill="#FF8C00"
//             stroke="white"
//           />
//           <ReferenceDot
//             x="Year 20"
//             y={data[20].value}
//             r={6}
//             fill="#ff7300ff"
//             stroke="white"
//           />
//           <ReferenceDot
//             x="Year 25"
//             y={data[25].value}
//             r={6}
//             fill="#ff5100ff"
//             stroke="white"
//           />
//           <ReferenceDot
//             x="Year 30"
//             y={data[30].value}
//             r={6}
//             fill="#FF4500"
//             stroke="white"
//           />
//         </AreaChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default BillionaireClubGraph;
