'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './RiskProfileCalculator.module.css';
import GaugeChart from 'react-gauge-chart';
import { motion, AnimatePresence } from 'framer-motion';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const questions = [
    {
        question: "What is your investment horizon?",
        options: [
            { text: "Less than 1 year", score: 1 },
            { text: "1 - 3 years", score: 2 },
            { text: "3 - 5 years", score: 3 },
            { text: "More than 5 years", score: 4 },
        ],
    },
    {
        question: "How do you react to market volatility?",
        options: [
            { text: "I panic and withdraw", score: 1 },
            { text: "I feel uncomfortable but stay invested", score: 2 },
            { text: "I see it as an opportunity to buy more", score: 3 },
            { text: "I love volatility, higher risk = higher return", score: 4 },
        ],
    },
    {
        question: "What % of your monthly income do you invest?",
        options: [
            { text: "Less than 10%", score: 1 },
            { text: "10 - 20%", score: 2 },
            { text: "20 - 40%", score: 3 },
            { text: "More than 40%", score: 4 },
        ],
    },
    {
        question: "How much investment knowledge do you have?",
        options: [
            { text: "None", score: 1 },
            { text: "Basic", score: 2 },
            { text: "Intermediate", score: 3 },
            { text: "Advanced", score: 4 },
        ],
    },
    {
        question: "What is your primary investment goal?",
        options: [
            { text: "Capital Protection", score: 1 },
            { text: "Regular Income", score: 2 },
            { text: "Wealth Creation", score: 3 },
            { text: "High Growth", score: 4 },
        ],
    },
    {
        question: "How would you describe your risk tolerance?",
        options: [
            { text: "Very Low", score: 1 },
            { text: "Low", score: 2 },
            { text: "Moderate", score: 3 },
            { text: "High", score: 4 },
        ],
    },
];

const RiskProfileCalculator = () => {
    const [currentQ, setCurrentQ] = useState(0);
    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);
    const [answers, setAnswers] = useState(Array(questions.length).fill(null));

    const handleAnswer = (points) => {
        setScore(score + points);
        if (currentQ + 1 < questions.length) {
            setCurrentQ(currentQ + 1);
        } else {
            setFinished(true);
        }
    };

    const restartQuiz = () => {
        setCurrentQ(0);
        setScore(0);
        setFinished(false);
    };

    // Determine Risk Profile
    let riskLevel = '';
    let allocation = [];
    if (finished) {
        if (score <= 10) {
            riskLevel = 'Conservative';
            allocation = [
                { name: 'Equity', value: 20 },
                { name: 'Fixed Income', value: 70 },
                { name: 'Gold', value: 10 },
            ];
        } else if (score <= 16) {
            riskLevel = 'Moderate';
            allocation = [
                { name: 'Equity', value: 45 },
                { name: 'Fixed Income', value: 45 },
                { name: 'Gold', value: 10 },
            ];
        } else {
            riskLevel = 'Aggressive';
            allocation = [
                { name: 'Equity', value: 70 },
                { name: 'Fixed Income', value: 20 },
                { name: 'Gold', value: 10 },
            ];
        }
    }

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

    return (
        <div className={styles.calculatorContainer}>
            {!finished ? (
                <div className={styles.quizBox}>
                    <h2 className={styles.heading}>Financial Risk Meter</h2>
                    {/* Progress Bar */}
                    <div className={styles.progressWrapper}>
                        <div
                            className={styles.progressBar}
                            style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
                        ></div>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentQ}
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -40 }}
                            transition={{ duration: 0.4 }}
                            className={styles.questionCard}
                        >
                            <h2 className={styles.question}>{questions[currentQ].question}</h2>
                            <div className={styles.options}>
                                {questions[currentQ].options.map((opt, idx) => (
                                    <button
                                        key={idx}
                                        className={`${styles.optionCard} ${answers[currentQ] === idx ? styles.selected : ''
                                            }`}
                                        onClick={() => {
                                            const newAnswers = [...answers];
                                            newAnswers[currentQ] = idx;
                                            setAnswers(newAnswers);
                                        }}
                                    >
                                        {opt.text}
                                    </button>
                                ))}
                            </div>

                            {/* Navigation Buttons */}
                            <div className={styles.navBtns}>
                                {currentQ > 0 && (
                                    <button
                                        className={styles.backBtn}
                                        onClick={() => setCurrentQ(currentQ - 1)}
                                    >
                                        ⬅ Back
                                    </button>
                                )}
                                {currentQ < questions.length - 1 ? (
                                    <button
                                        className={styles.nextBtn}
                                        onClick={() => {
                                            if (answers[currentQ] !== null) setCurrentQ(currentQ + 1);
                                        }}
                                        disabled={answers[currentQ] === null}
                                    >
                                        Next ➡
                                    </button>
                                ) : (
                                    <button
                                        className={styles.submitBtn}
                                        onClick={() => {
                                            let total = 0;
                                            answers.forEach((ans, i) => {
                                                total += questions[i].options[ans].score;
                                            });
                                            setScore(total);
                                            setFinished(true);
                                        }}
                                        disabled={answers[currentQ] === null}
                                    >
                                        Submit ✅
                                    </button>
                                )}
                            </div>

                            <p className={styles.progressText}>
                                Question {currentQ + 1} of {questions.length}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>
            ) : (
                <div className={styles.resultBox}>
                    <h2 className={styles.heading}>Your Risk Profile: {riskLevel} Risk Analyzer</h2>

                    <div className={styles.charts}>
                        <div className={styles.gauge}>
                            <GaugeChart
                                id="gauge-chart"
                                nrOfLevels={3}
                                colors={['#00C49F', '#FFBB28', '#FF4444']}
                                arcWidth={0.3}
                                percent={score / (questions.length * 4)}
                                textColor="#333"
                            />
                            <div className={styles.label}>{riskLevel}</div>
                        </div>
                        <div className={styles.pie}>
                            <PieChart width={280} height={250}>
                                <Pie
                                    data={allocation}
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={70}
                                    fill="#8884d8"
                                    dataKey="value"
                                    label
                                >
                                    {allocation.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </div>
                    </div>

                    <div className={styles.suggestions}>
                        <h3>As {riskLevel} Investor, Suggested Investment Options:</h3>
                        <div className={styles.cards}>
                            {allocation.map((a, idx) => (
                                <div key={idx} className={styles.card}>
                                    <h4>{a.name} Asset Class</h4>
                                    <p>Recommended Allocation: {a.value}%</p>
                                    {/* <button className={styles.viewBtn}>View Details</button> */}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.actions}>
                        <button className={styles.retryBtn} onClick={restartQuiz}>
                            Retake Questionnaire
                        </button>
                        <Link href="/mutual-funds" className={styles.buyBtn}>Explore Funds</Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RiskProfileCalculator;
