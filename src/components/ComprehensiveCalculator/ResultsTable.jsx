import React from "react";
import styles from "./ComprehensiveCalculator.module.css";

export default function ResultsTable({ results }) {
  if (!results) return null;

  return (
    <div className={styles.card}>
      <h3>Goals Breakdown</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Goal</th>
            <th>Type</th>
            <th>Years</th>
            <th>Future Value (₹)</th>
            <th>Lumpsum (₹)</th>
            <th>Monthly SIP (₹)</th>
          </tr>
        </thead>
        <tbody>
          {results.goals.map((g) => (
            <tr key={g.id}>
              <td>{g.name}</td>
              <td>{g.type}</td>
              <td>{g.years}</td>
              <td>{g.futureValue.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</td>
              <td>{(g.allocatedLumpsum || g.lumpsum).toLocaleString("en-IN", { maximumFractionDigits: 0 })}</td>
              <td>{(g.sip || 0).toLocaleString("en-IN", { maximumFractionDigits: 0 })}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
