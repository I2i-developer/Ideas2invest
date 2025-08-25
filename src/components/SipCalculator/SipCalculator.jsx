"use client"
import React, { useState } from 'react';
import styles from './SipCalculator.module.css';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
import Link from 'next/link';

const SipCalculator = () => {
    const [monthlyAmount, setMonthlyAmount] = useState(54500);
    const [interestRate, setInterestRate] = useState(8);
    const [years, setYears] = useState(5);

    const months = years * 12;
    const invested = monthlyAmount * months;
    const futureValue = monthlyAmount * (((Math.pow(1 + interestRate / 100 / 12, months) - 1) / (interestRate / 100 / 12)) * (1 + interestRate / 100 / 12));
    const returns = futureValue - invested;

    const data = [
        { name: 'Total', value: futureValue, color: '#FFA500' },
        { name: 'Invested', value: invested, color: '#28a745' },
        { name: 'Return', value: returns, color: '#003388' },
    ];

    return (
        <section className={styles.calculatorSection}>
            <h2 className={styles.heading}>SIP Calculator</h2>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.inputGroup}>
                        <label>Money Per month : <strong>₹{monthlyAmount.toLocaleString()}</strong></label>
                        <input type="range" min="100" max="100000" value={monthlyAmount} onChange={(e) => setMonthlyAmount(+e.target.value)} />
                        <input type="number" min="0" value={monthlyAmount} onChange={(e) => setMonthlyAmount(+e.target.value)} />
                    </div>

                    <div className={styles.inputGroup}>
                        <label>Interest Rate : <strong>{interestRate}%</strong></label>
                        <input type="range" min="1" max="20" step="0.1" value={interestRate} onChange={(e) => setInterestRate(+e.target.value)} />
                        <input type="number" min="1" value={interestRate} onChange={(e) => setInterestRate(+e.target.value)} />
                    </div>

                    <div className={styles.inputGroup}>
                        <label>Year(s) : <strong>{years}</strong></label>
                        <input type="range" min="1" max="30" value={years} onChange={(e) => setYears(+e.target.value)} />
                        <input type="number" min="1" value={years} onChange={(e) => setYears(+e.target.value)} />
                    </div>

                    <div className={styles.values}>
                        <div className={styles.valueBox}>
                            <strong>₹{invested.toLocaleString()}</strong><br />Invested
                        </div>
                        <div className={styles.valueBox}>
                            <strong>₹{returns.toLocaleString()}</strong><br />Returns
                        </div>
                        <div className={styles.valueBox}>
                            <strong>₹{futureValue.toLocaleString()}</strong><br />Total
                        </div>
                    </div>

                </div>

                <div className={styles.right}>
                    <PieChart width={400} height={400}>
                        <Pie
                            data={data}
                            dataKey="value"
                            innerRadius={100}
                            outerRadius={160}
                            paddingAngle={5}
                            stroke="#000"
                            strokeWidth={1}
                        >
                            {data.map((entry, index) => (
                                <Cell key={index} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip
                            contentStyle={{ backgroundColor: '#ffffff', borderRadius: '8px', borderColor: '#ccc' }}
                            formatter={(value, name) => [`₹${Math.round(value).toLocaleString()}`, name]}
                        />
                        <Legend verticalAlign="bottom" height={36} />
                    </PieChart>
                </div>
            </div>
            <div className={styles.moreBtnWrapper}>
                <Link href="/calculators" className={styles.moreBtn}>
                    More Calculators
                </Link>
            </div>
        </section>
    );
};

export default SipCalculator;
