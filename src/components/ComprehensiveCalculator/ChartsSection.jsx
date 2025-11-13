import React from "react";
import styles from "./ComprehensiveCalculator.module.css";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["#004aad", "#0062e0", "#0ea5e9", "#34d399", "#f59e0b", "#f97316"];

export default function ChartsSection({ results }) {
  if (!results) return null;

  const pieData = results.goals.map((g) => ({ name: g.name, value: g.futureValue }));

  return (
    <div className={styles.card} id="chart-section">
      <h3>Visual Allocation</h3>
      <div style={{ height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={110} label>
              {pieData.map((entry, i) => <Cell key={`c-${i}`} fill={COLORS[i % COLORS.length]} />)}
            </Pie>
            <Tooltip formatter={(v) => `₹${v.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
