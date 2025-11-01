import React from "react";
import styles from "./ComprehensiveCalculator.module.css";

export default function UserInfoForm({ userInfo, setUserInfo }) {
  const update = (k, v) => setUserInfo((u) => ({ ...u, [k]: v }));

  return (
    <div className={styles.card}>
      <h3>Personal & Household</h3>
      <div className={styles.row}>
        <div className={styles.col}>
          <label>Name</label>
          <input value={userInfo.name} onChange={(e) => update("name", e.target.value)} />
        </div>
        <div className={styles.col}>
          <label>Age</label>
          <input type="number" value={userInfo.age} onChange={(e) => update("age", e.target.value)} />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.col}>
          <label>Spouse Age</label>
          <input type="number" value={userInfo.spouseAge} onChange={(e) => update("spouseAge", e.target.value)} />
        </div>
        <div className={styles.col}>
          <label>Children</label>
          <input type="number" value={userInfo.childrenCount} onChange={(e) => update("childrenCount", e.target.value)} />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.col}>
          <label>Existing Savings (₹)</label>
          <input type="number" value={userInfo.existingSavings} onChange={(e) => update("existingSavings", e.target.value)} />
        </div>
        <div className={styles.col}>
          <label>Expected Return % (ann.)</label>
          <input type="number" value={userInfo.expectedReturn} onChange={(e) => update("expectedReturn", e.target.value)} />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.col}>
          <label>Default Inflation %</label>
          <input type="number" value={userInfo.expectedInflation} onChange={(e) => update("expectedInflation", e.target.value)} />
        </div>
      </div>
    </div>
  );
}
