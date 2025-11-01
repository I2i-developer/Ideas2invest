import React from "react";
import styles from "./ComprehensiveCalculator.module.css";

export default function ResultSummary({ results }) {
  if (!results) {
    return (
      <div className={styles.card}>
        <h3>Summary</h3>
        <p className={styles.muted}>No calculation yet. Click “Calculate Plan” to get a combined result.</p>
      </div>
    );
  }

  const { totalSIP, totalLumpsum } = { totalSIP: results.totals.totalSIP, totalLumpsum: results.totals.totalLumpsum };

  return (
    <div className={styles.card}>
      <h3>Plan Summary</h3>
      <div className={styles.summaryGrid}>
        <div className={styles.summaryItem}>
          <div className={styles.k}>₹ {results.totals.totalFuture.toLocaleString()}</div>
          <div className={styles.label}>Total Future Value</div>
        </div>

        <div className={styles.summaryItem}>
          <div className={styles.k}>₹ {totalSIP.toLocaleString()}</div>
          <div className={styles.label}>Total Monthly SIP</div>
        </div>

        <div className={styles.summaryItem}>
          <div className={styles.k}>₹ {totalLumpsum.toLocaleString()}</div>
          <div className={styles.label}>Total Lump-sum Required</div>
        </div>
      </div>
      <div className={styles.noteSmall}>{results.note}</div>
    </div>
  );
}
