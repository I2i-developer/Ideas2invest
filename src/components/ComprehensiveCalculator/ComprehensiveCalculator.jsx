"use client";
import React, { useState, useRef } from "react";
import styles from "./ComprehensiveCalculator.module.css";
import UserInfoForm from "./UserInfoForm";
import GoalSelector from "./GoalSelector";
import ResultSummary from "./ResultSummary";
import ChartsSection from "./ChartsSection";
import ResultsTable from "./ResultsTable";
import ReportExport from "./ReportExport";
import { motion } from "framer-motion";

/* Helper math utilities */
const toNumber = (v) => Number(v) || 0;
const monthsFromYears = (y) => Math.max(0, Math.round(y * 12));

function futureValuePresentAmount(present, inflationPercent, years) {
  const r = inflationPercent / 100;
  return Math.round(toNumber(present) * Math.pow(1 + r, Math.max(0, toNumber(years))));
}

function monthlySIPForFV(fv, years, annualReturnPercent) {
  const n = monthsFromYears(years);
  if (n <= 0) return 0;
  const r = annualReturnPercent / 100 / 12;
  if (r <= 0) return Math.round(fv / n);
  const factor = Math.pow(1 + r, n) - 1;
  const pmt = (fv * r) / factor;
  return Math.round(pmt);
}

/* Simple lumpsum optimizer:
   - Sort goals by urgency (years ascending)
   - Allocate existingSavings to earliest goals proportionally to their futureValue until exhausted.
*/
function optimizeLumpsumAllocation(goals, existingSavings) {
  let remaining = existingSavings;
  // copy goals and sort
  const goalsByUrgency = [...goals].sort((a, b) => a.years - b.years);
  const allocation = {}; // id -> lumpsum allocated

  // allocate to each goal proportional to its futureValue, but prefer nearest (weighting)
  // compute weights inversely proportional to years (1/(years+1))
  const weights = goalsByUrgency.map((g) => (g.years > 0 ? 1 / (g.years + 0.5) : 1));
  const totalWeight = weights.reduce((s, w) => s + w, 0);

  for (let i = 0; i < goalsByUrgency.length; i++) {
    const g = goalsByUrgency[i];
    if (remaining <= 0) {
      allocation[g.id] = 0;
      continue;
    }
    // ideal allocation proportionally
    const ideal = Math.round((weights[i] / totalWeight) * existingSavings);
    // but do not allocate more than required futureValue
    const maxNeed = Math.max(0, g.futureValue - (g.lumpsum || 0));
    const allocated = Math.min(ideal, maxNeed, remaining);
    allocation[g.id] = allocated;
    remaining -= allocated;
  }

  // if leftover, give to the most urgent goal until exhausted
  if (remaining > 0) {
    for (const g of goalsByUrgency) {
      if (remaining <= 0) break;
      const need = Math.max(0, g.futureValue - (allocation[g.id] || 0));
      const give = Math.min(need, remaining);
      allocation[g.id] = (allocation[g.id] || 0) + give;
      remaining -= give;
    }
  }

  return allocation;
}

export default function ComprehensiveCalculator() {
  const [userInfo, setUserInfo] = useState({
    name: "",
    age: "",
    spouseAge: "",
    childrenCount: 0,
    existingSavings: 0,
    expectedReturn: 10,
    expectedInflation: 6,
  });

  const [goals, setGoals] = useState([]);
  const [results, setResults] = useState(null);
  const reportRef = useRef(null);
  const rightSectionRef = useRef(null);

  const addGoal = (goal) => {
    // add id, default fields
    const id = `g_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
    setGoals((prev) => [...prev, { id, ...goal }]);
    setResults(null);
  };

  const updateGoal = (id, patch) => {
    setGoals((prev) => prev.map((g) => (g.id === id ? { ...g, ...patch } : g)));
    setResults(null);
  };

  const removeGoal = (id) => {
    setGoals((prev) => prev.filter((g) => g.id !== id));
    setResults(null);
  };

  const calculateAll = () => {
    // compute per-goal future value, SIP based on expectedReturn per-goal or user default
    const enriched = goals.map((g) => {
      const years = Math.max(0, toNumber(g.targetInYears));
      const inflation = toNumber(g.inflation) || toNumber(userInfo.expectedInflation);
      const presentCost = toNumber(g.currentCost) || 0;
      const futureValue = futureValuePresentAmount(presentCost, inflation, years);
      const expectedReturn = toNumber(g.expectedReturn) || toNumber(userInfo.expectedReturn) || 10;

      // determine allocation approach
      let lumpsum = 0;
      let sip = 0;

      if (g.investmentType === "lumpsum") {
        lumpsum = futureValue;
        sip = 0;
      } else if (g.investmentType === "sip") {
        sip = monthlySIPForFV(futureValue, years, expectedReturn);
        lumpsum = 0;
      } else {
        // mixed default: 20% lumpsum, 80% via SIP
        lumpsum = Math.round(futureValue * 0.20);
        const remainder = Math.max(0, futureValue - lumpsum);
        sip = monthlySIPForFV(remainder, years, expectedReturn);
      }

      return {
        ...g,
        years,
        inflation,
        futureValue,
        expectedReturn,
        lumpsum,
        sip,
      };
    });

    // optimize lumpsum allocation from existing savings
    const savings = toNumber(userInfo.existingSavings);
    let allocation = {};
    if (savings > 0) {
      allocation = optimizeLumpsumAllocation(enriched, savings);
    }

    // apply allocation and recompute necessary SIP if lumpsum applied reduces requirement
    const final = enriched.map((g) => {
      const alloc = allocation[g.id] || 0;
      if (alloc > 0) {
        // remaining required = futureValue - alloc
        const remainingFV = Math.max(0, g.futureValue - alloc);
        // if goal was lumpsum, reduce lumpsum by allocated (allocated counts toward lumpsum)
        if (g.investmentType === "lumpsum") {
          return { ...g, lumpsum: alloc, sip: 0, allocatedLumpsum: alloc };
        } else {
          // recalc SIP for remainingFV
          const recalcedSip = monthlySIPForFV(remainingFV, g.years, g.expectedReturn);
          return { ...g, lumpsum: alloc + (g.investmentType === "mixed" ? Math.round(g.futureValue * 0.2) : 0), sip: recalcedSip, allocatedLumpsum: alloc };
        }
      }
      // no allocation
      return g;
    });

    // aggregate totals
    const totalSIP = final.reduce((s, g) => s + toNumber(g.sip), 0);
    const totalLumpsum = final.reduce((s, g) => s + toNumber(g.lumpsum || 0), 0);
    const totalFuture = final.reduce((s, g) => s + toNumber(g.futureValue), 0);

    setResults({
      goals: final,
      totals: {
        totalSIP,
        totalLumpsum,
        totalFuture,
      },
      generatedAt: new Date().toISOString(),
      note: "Assumptions: inflation and returns are nominal. This is an indicative plan.",
    });

    // Smooth scroll to the results section after setting results
    setTimeout(() => {
      rightSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const loadExampleBalu = () => {
    setUserInfo((u) => ({ ...u, name: "Balu & Nidhi", existingSavings: 2000000, expectedReturn: 10, expectedInflation: 6 }));
    setGoals([
      { id: "ex1", type: "Retirement", name: "Balu Retirement", currentCost: 7200000 / 1e0, targetInYears: 9, inflation: 4, investmentType: "mixed", expectedReturn: 8 },
      { id: "ex2", type: "Child Education", name: "Bani Education", currentCost: 25000000 / 1e0, targetInYears: 6, inflation: 7, investmentType: "sip", expectedReturn: 12 },
      { id: "ex3", type: "Child Education", name: "Mehar Education", currentCost: 25000000 / 1e0, targetInYears: 10, inflation: 7, investmentType: "sip", expectedReturn: 12 },
      { id: "ex4", type: "Marriage", name: "Bani Marriage", currentCost: 20000000 / 1e0, targetInYears: 15, inflation: 6, investmentType: "sip", expectedReturn: 10 },
      { id: "ex5", type: "Marriage", name: "Mehar Marriage", currentCost: 30000000 / 1e0, targetInYears: 20, inflation: 6, investmentType: "sip", expectedReturn: 10 },
      { id: "ex6", type: "Term Plan", name: "Family Term Cover", currentCost: 30000000 / 1e0, targetInYears: 34, inflation: 0, investmentType: "lumpsum", expectedReturn: 0 },
    ]);
    setResults(null);
  };

  return (
    <div className={styles.page}>
      <motion.header initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className={styles.hero}>
        <h1>Comprehensive Financial Planner</h1>
        <p>Combine <strong>Retirement</strong>, <strong>Education</strong>, <strong>Marriage</strong>, <strong>Vacations</strong>, <strong>Term Cover</strong> and <strong>Custom Goals</strong> into a single plan. Inflation-adjusted targets, SIP + lumpsum mix and optimization for existing savings.</p>
        <div className={styles.heroActions}>
          <button className={styles.secondaryBtn} onClick={loadExampleBalu}>Load an Example</button>
          {/* <button className={styles.primaryBtn} onClick={calculateAll}>Calculate Plan</button> */}
        </div>
      </motion.header>

      <main className={styles.container}>
        <section className={styles.left} ref={rightSectionRef}>
          <UserInfoForm userInfo={userInfo} setUserInfo={setUserInfo} />
          <GoalSelector addGoal={addGoal} />
          {goals.map((g) => (
            <div key={g.id} className={styles.goalWrapper}>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                {/* GoalCard is inline simple form */}
                <div className={styles.goalCard}>
                  <div className={styles.goalHeader}>
                    <strong>{g.type}</strong>
                    <div className={styles.goalActions}>
                      <button className={styles.smallBtn} onClick={() => removeGoal(g.id)}>Remove</button>
                    </div>
                  </div>

                  {/* Minimal editable fields */}
                  <div className={styles.goalFormRow}>
                    <label>Goal Name: </label>
                    <input value={g.name || ""} onChange={(e) => updateGoal(g.id, { name: e.target.value })} className={styles.goalInput} />
                  </div>

                  <div className={styles.row}>
                    <div className={styles.col}>
                      <label>Current Cost (₹)</label>
                      <input type="number" value={g.currentCost || ""} onChange={(e) => updateGoal(g.id, { currentCost: e.target.value })} />
                    </div>

                    <div className={styles.col}>
                      <label>Years from now</label>
                      <input type="number" value={g.targetInYears || ""} onChange={(e) => updateGoal(g.id, { targetInYears: e.target.value })} />
                    </div>

                    <div className={styles.col}>
                      <label>Inflation %</label>
                      <input type="number" value={g.inflation || userInfo.expectedInflation} onChange={(e) => updateGoal(g.id, { inflation: e.target.value })} />
                    </div>
                  </div>

                  <div className={styles.row}>
                    <div className={styles.col}>
                      <label>Investment Type</label>
                      <select value={g.investmentType || "mixed"} onChange={(e) => updateGoal(g.id, { investmentType: e.target.value })}>
                        <option value="sip">SIP</option>
                        <option value="lumpsum">Lumpsum</option>
                        <option value="mixed">Mixed</option>
                      </select>
                    </div>

                    <div className={styles.col}>
                      <label>Expected Return %</label>
                      <input type="number" value={g.expectedReturn || userInfo.expectedReturn} onChange={(e) => updateGoal(g.id, { expectedReturn: e.target.value })} />
                    </div>

                    <div className={styles.col}>
                      <label>Optional note</label>
                      <input type="text" value={g.note || ""} onChange={(e) => updateGoal(g.id, { note: e.target.value })} />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </section>

        <section className={styles.right}>
          <ResultSummary results={results} />
          <ResultsTable results={results} />
          <ChartsSection results={results} />
          <ReportExport results={results} reportRef={reportRef} userInfo={userInfo} />
          {/* Hidden report area for PDF generation */}
          <div style={{ display: "none" }}>
            <div ref={reportRef} id="report-to-pdf" />
          </div>
        </section>
      <button className={styles.primaryBtn} onClick={calculateAll}>Calculate Plan</button>
      </main>
    </div>
  );
}
