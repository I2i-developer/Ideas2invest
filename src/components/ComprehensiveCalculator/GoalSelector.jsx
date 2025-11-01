import React, { useState } from "react";
import styles from "./ComprehensiveCalculator.module.css";

const GOAL_TYPES = ["Retirement", "Child Education", "Marriage", "Vacation", "Term Plan", "Custom Goal"];

export default function GoalSelector({ addGoal }) {
  const [selected, setSelected] = useState(GOAL_TYPES[0]);

  const onAdd = () => {
    // default fields per type
    const base = {
      type: selected,
      name: selected,
      currentCost: 0,
      targetInYears: 1,
      inflation: 6,
      investmentType: "mixed",
      expectedReturn: 10,
    };
    addGoal(base);
  };

  return (
    <div className={styles.card}>
      <h3>Add Goals</h3>
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <select value={selected} onChange={(e) => setSelected(e.target.value)}>
          {GOAL_TYPES.map((g) => (
            <option key={g} value={g}>{g}</option>
          ))}
        </select>
        <button className={styles.addBtn} onClick={onAdd}>Add</button>
      </div>
    </div>
  );
}
