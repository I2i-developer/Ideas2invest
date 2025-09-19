'use client';
import { useState, useRef } from 'react';
import Link from 'next/link';
import styles from './RiskProfileCalculator.module.css';
import GaugeChart from 'react-gauge-chart';
import { motion, AnimatePresence } from 'framer-motion';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import html2pdf from 'html2pdf.js';

const questions = [
  {
    question: "How many dependents do you financially support?",
    options: [
      { text: "None", score: 4 },
      { text: "1–2 dependents", score: 3 },
      { text: "3 dependents", score: 2 },
      { text: "More than 3 dependents", score: 1 },
    ],
  },
  {
    question: "What portion of your monthly income goes towards EMIs/loans?",
    options: [
      { text: "None", score: 4 },
      { text: "Less than 25%", score: 3 },
      { text: "25% – 50%", score: 2 },
      { text: "More than 50%", score: 1 },
    ],
  },
  {
    question: "How much investment knowledge do you have?",
    options: [
      { text: "None – I don’t understand investments", score: 1 },
      { text: "Basic – I know the basics but rely on advice", score: 2 },
      { text: "Intermediate – I invest in different options myself", score: 3 },
      { text: "Advanced – I actively trade & understand strategies", score: 4 },
    ],
  },
  {
    question: "If the market falls 20% and your equity investments decline, how would you react?",
    options: [
      { text: "Sell everything immediately", score: 1 },
      { text: "Switch part of portfolio to safer options", score: 2 },
      { text: "Stay invested, it’s part of the cycle", score: 3 },
      { text: "Invest more to take advantage of lower prices", score: 4 },
    ],
  },
  {
    question: "What percentage of your monthly income do you save/invest?",
    options: [
      { text: "Less than 10%", score: 1 },
      { text: "10% – 20%", score: 2 },
      { text: "20% – 40%", score: 3 },
      { text: "More than 40%", score: 4 },
    ],
  },
  {
    question: "What is your age group?",
    options: [
      { text: "Above 60 years", score: 1 },
      { text: "50 – 60 years", score: 2 },
      { text: "35 – 50 years", score: 3 },
      { text: "20 – 35 years", score: 4 },
    ],
  },
  {
    question: "What is your investment horizon?",
    options: [
      { text: "Less than 1 year", score: 1 },
      { text: "1 – 3 years", score: 2 },
      { text: "3 – 5 years", score: 3 },
      { text: "More than 5 years", score: 4 },
    ],
  },
  {
    question: "If you could lose X% for a chance to gain Y%, which would you choose?",
    options: [
      { text: "No loss accepted", score: 1 },
      { text: "Loss up to 5% for gain of 10%", score: 2 },
      { text: "Loss up to 15% for gain of 30%", score: 3 },
      { text: "Loss up to 25% for gain of 50%", score: 4 },
    ],
  },
  {
    question: "If your overall portfolio falls 15% in a year, how would you react?",
    options: [
      { text: "Redeem everything into cash", score: 1 },
      { text: "Change strategy, move into safer assets", score: 2 },
      { text: "Stay invested, confident in my plan", score: 3 },
      { text: "Invest more to take advantage of lower prices", score: 4 },
    ],
  },
  {
    question: "How would you describe yourself as an investor?",
    options: [
      { text: "Very Conservative – Cannot tolerate losses", score: 1 },
      { text: "Conservative – Prefer safety over growth", score: 2 },
      { text: "Balanced – Want mix of safety and growth", score: 3 },
      { text: "Aggressive – Want maximum returns, accept big losses", score: 4 },
    ],
  },
];

const RiskProfileCalculator = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [reviewing, setReviewing] = useState(false);
  const [finished, setFinished] = useState(false);
  const [userName, setUserName] = useState('');
  const resultRef = useRef();
  const quizRef = useRef(null);
  const reviewRef = useRef(null);

  // Calculate score
  const calculateScore = () => {
    let total = 0;
    answers.forEach((ans, i) => {
      if (ans !== null) total += questions[i].options[ans].score;
    });
    setScore(total);
  };

  // Restart
  const restartQuiz = () => {
    setCurrentQ(0);
    setScore(0);
    setAnswers(Array(questions.length).fill(null));
    setReviewing(false);
    setFinished(false);
    setUserName('');
    
    setTimeout(() => scrollToElement(quizRef), 300);
  };

  // Risk Profile mapping
  let riskLevel = '';
  let allocation = [];

  if (finished) {
    if (score <= 18) {
      riskLevel = 'Conservative';
      allocation = [
        { name: 'Equity', value: 20 },
        { name: 'Fixed Income', value: 70 },
        { name: 'Gold', value: 10 },
      ];
    } else if (score <= 28) {
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

  const scrollToResult = () => {
    if (resultRef.current) {
      const yOffset = -120; // tweak offset to control "bit more up"
      const y =
        resultRef.current.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const scrollToElement = (ref) => {
    if (ref && ref.current) {
      const yOffset = -120; // adjust spacing
      const y =
        ref.current.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // PDF Download
//   const downloadPDF = () => {
//     const element = resultRef.current;
//     const opt = {
//       margin: 0.5,
//       filename: `${userName || 'Risk_Profile'}_Report.pdf`,
//       image: { type: 'jpeg', quality: 0.98 },
//       html2canvas: { scale: 2 },
//       jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
//     };
//     html2pdf().from(element).set(opt).save();
//   };

    const pdfContentRef = useRef();

    const downloadPDF = () => {
    const element = pdfContentRef.current; // 👈 only this content
    const opt = {
        margin: 0.5,
        filename: `${userName || 'Risk_Profile'}_Report.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 5 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'landscape' },
    };
    html2pdf().from(element).set(opt).save();
    };

  return (
    <div className={styles.calculatorContainer}>
      {!finished && !reviewing ? (
        <div className={styles.quizBox} ref={quizRef}>
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
                    className={`${styles.optionCard} ${
                      answers[currentQ] === idx ? styles.selected : ''
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

              {/* Navigation */}
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
                      // Ensure score is computed and go to review mode
                      calculateScore();
                      setReviewing(true);
                      setTimeout(() => scrollToElement(reviewRef), 300);
                    }}
                    disabled={answers[currentQ] === null}
                  >
                    Review Answers
                  </button>
                )}
              </div>

              <p className={styles.progressText}>
                Question {currentQ + 1} of {questions.length}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      ) : reviewing ? (
        <div className={styles.reviewBox} ref={reviewRef}>
            <h2 className={styles.heading}>Review Your Answers</h2>
            <ul className={styles.reviewList}>
            {questions.map((q, i) => (
                <li key={i}>
                <strong>{q.question}</strong>
                <p>{answers[i] !== null ? q.options[answers[i]].text : 'Not answered'}</p>
                </li>
            ))}
            </ul>
            <div className={styles.navBtns}>
            <button className={styles.backBtn} onClick={() => setReviewing(false)}>
                ⬅ Edit Answers
            </button>

            {/* Animate to Result */}
            <button
                className={styles.submitBtn}
                onClick={() => {
                calculateScore();
                setReviewing(false);
                setFinished(true);
                setTimeout(scrollToResult, 300); // smooth scroll after animation mounts
              }}
            >
                Confirm & See Results ✅
            </button>
            </div>
        </div>
        ) : (
        <AnimatePresence mode="wait">
        {finished && (
            <motion.div
            key="result"
            ref={resultRef}
            className={styles.resultBox}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
            >
            {/* === Only this goes to PDF === */}
            <div ref={pdfContentRef} className={styles.pdfContent}>
                {/* <h2 className={styles.heading}>
                {userName
                    ? `${userName}, Your Risk Profile: ${riskLevel} Risk Analyzer`
                    : `Your Risk Profile: ${riskLevel} Risk Analyzer`}
                </h2> */}
                <h2 className={styles.heading}>
                    {userName
                        ? `${userName}, Your Risk Profile: ` 
                        : `Your Risk Profile: `}
                    <span className={styles[riskLevel.toLowerCase()]}>
                        {riskLevel} 
                    </span> Risk Analyzer
                </h2>
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
                        <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                        />
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
                    </div>
                    ))}
                </div>
                </div>
            </div>

            {/* === EXCLUDED from PDF === */}
            <div className={styles.reportActions}>
                <div className={styles.formGroup}>
                <div className={styles.inputWrapper}>
                    <input
                    type="text"
                    id="investorNameInput"
                    placeholder=" "
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                    />
                    <label className={styles.inputLabel} htmlFor="name">
                    Investor Name
                    </label>
                </div>
                </div>
                <button className={styles.downloadBtn} onClick={downloadPDF}>
                📄 Download PDF Report
                </button>
            </div>

            <div className={styles.actions}>
                <button className={styles.retryBtn} onClick={restartQuiz}>
                Retake Questionnaire
                </button>
                <Link href="/mutual-funds" className={styles.buyBtn}>
                Explore Funds
                </Link>
            </div>
            </motion.div>
        )}
        </AnimatePresence>
        )}
    </div>
  );
};

export default RiskProfileCalculator;


// 'use client';
// import { useState, useRef } from 'react';
// import Link from 'next/link';
// import styles from './RiskProfileCalculator.module.css';
// import GaugeChart from 'react-gauge-chart';
// import { motion, AnimatePresence } from 'framer-motion';
// import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
// import html2pdf from 'html2pdf.js';

// const questions = [
//   {
//     question: "What is your investment horizon?",
//     options: [
//       { text: "Less than 1 year", score: 1 },
//       { text: "1 - 3 years", score: 2 },
//       { text: "3 - 5 years", score: 3 },
//       { text: "More than 5 years", score: 4 },
//     ],
//   },
//   {
//     question: "How do you react to market volatility?",
//     options: [
//       { text: "I panic and withdraw", score: 1 },
//       { text: "I feel uncomfortable but stay invested", score: 2 },
//       { text: "I see it as an opportunity to buy more", score: 3 },
//       { text: "I love volatility, higher risk = higher return", score: 4 },
//     ],
//   },
//   {
//     question: "What % of your monthly income do you invest?",
//     options: [
//       { text: "Less than 10%", score: 1 },
//       { text: "10 - 20%", score: 2 },
//       { text: "20 - 40%", score: 3 },
//       { text: "More than 40%", score: 4 },
//     ],
//   },
//   {
//     question: "How much investment knowledge do you have?",
//     options: [
//       { text: "None", score: 1 },
//       { text: "Basic", score: 2 },
//       { text: "Intermediate", score: 3 },
//       { text: "Advanced", score: 4 },
//     ],
//   },
//   {
//     question: "What is your primary investment goal?",
//     options: [
//       { text: "Capital Protection", score: 1 },
//       { text: "Regular Income", score: 2 },
//       { text: "Wealth Creation", score: 3 },
//       { text: "High Growth", score: 4 },
//     ],
//   },
//   {
//     question: "How would you describe your risk tolerance?",
//     options: [
//       { text: "Very Low", score: 1 },
//       { text: "Low", score: 2 },
//       { text: "Moderate", score: 3 },
//       { text: "High", score: 4 },
//     ],
//   },
// ];

// const RiskProfileCalculator = () => {
//   const [currentQ, setCurrentQ] = useState(0);
//   const [score, setScore] = useState(0);
//   const [answers, setAnswers] = useState(Array(questions.length).fill(null));
//   const [reviewing, setReviewing] = useState(false);
//   const [finished, setFinished] = useState(false);
//   const [userName, setUserName] = useState('');
//   const resultRef = useRef();

//   // Calculate score
//   const calculateScore = () => {
//     let total = 0;
//     answers.forEach((ans, i) => {
//       total += questions[i].options[ans].score;
//     });
//     setScore(total);
//   };

//   // Restart
//   const restartQuiz = () => {
//     setCurrentQ(0);
//     setScore(0);
//     setAnswers(Array(questions.length).fill(null));
//     setReviewing(false);
//     setFinished(false);
//     setUserName('');
//   };

//   // Risk Profile mapping
//   let riskLevel = '';
//   let allocation = [];
//   if (finished) {
//     if (score <= 10) {
//       riskLevel = 'Conservative';
//       allocation = [
//         { name: 'Equity', value: 20 },
//         { name: 'Fixed Income', value: 70 },
//         { name: 'Gold', value: 10 },
//       ];
//     } else if (score <= 16) {
//       riskLevel = 'Moderate';
//       allocation = [
//         { name: 'Equity', value: 45 },
//         { name: 'Fixed Income', value: 45 },
//         { name: 'Gold', value: 10 },
//       ];
//     } else {
//       riskLevel = 'Aggressive';
//       allocation = [
//         { name: 'Equity', value: 70 },
//         { name: 'Fixed Income', value: 20 },
//         { name: 'Gold', value: 10 },
//       ];
//     }
//   }

//   const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

//   // PDF Download
//   const downloadPDF = () => {
//     const element = resultRef.current;
//     const opt = {
//       margin: 0.5,
//       filename: `${userName || 'Risk_Profile'}_Report.pdf`,
//       image: { type: 'jpeg', quality: 0.98 },
//       html2canvas: { scale: 2 },
//       jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
//     };
//     html2pdf().from(element).set(opt).save();
//   };

//   return (
//     <div className={styles.calculatorContainer}>
//       {!finished && !reviewing ? (
//         <div className={styles.quizBox}>
//           <h2 className={styles.heading}>Financial Risk Meter</h2>
//           {/* Progress Bar */}
//           <div className={styles.progressWrapper}>
//             <div
//               className={styles.progressBar}
//               style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
//             ></div>
//           </div>

//           <AnimatePresence mode="wait">
//             <motion.div
//               key={currentQ}
//               initial={{ opacity: 0, x: 40 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -40 }}
//               transition={{ duration: 0.4 }}
//               className={styles.questionCard}
//             >
//               <h2 className={styles.question}>{questions[currentQ].question}</h2>
//               <div className={styles.options}>
//                 {questions[currentQ].options.map((opt, idx) => (
//                   <button
//                     key={idx}
//                     className={`${styles.optionCard} ${
//                       answers[currentQ] === idx ? styles.selected : ''
//                     }`}
//                     onClick={() => {
//                       const newAnswers = [...answers];
//                       newAnswers[currentQ] = idx;
//                       setAnswers(newAnswers);
//                     }}
//                   >
//                     {opt.text}
//                   </button>
//                 ))}
//               </div>

//               {/* Navigation */}
//               <div className={styles.navBtns}>
//                 {currentQ > 0 && (
//                   <button
//                     className={styles.backBtn}
//                     onClick={() => setCurrentQ(currentQ - 1)}
//                   >
//                     ⬅ Back
//                   </button>
//                 )}
//                 {currentQ < questions.length - 1 ? (
//                   <button
//                     className={styles.nextBtn}
//                     onClick={() => {
//                       if (answers[currentQ] !== null) setCurrentQ(currentQ + 1);
//                     }}
//                     disabled={answers[currentQ] === null}
//                   >
//                     Next ➡
//                   </button>
//                 ) : (
//                   <button
//                     className={styles.submitBtn}
//                     onClick={() => {
//                       calculateScore();
//                       setReviewing(true);
//                     }}
//                     disabled={answers[currentQ] === null}
//                   >
//                     Review Answers ✅
//                   </button>
//                 )}
//               </div>

//               <p className={styles.progressText}>
//                 Question {currentQ + 1} of {questions.length}
//               </p>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       ) : reviewing ? (
//         <div className={styles.reviewBox}>
//           <h2 className={styles.heading}>Review Your Answers</h2>
//           <ul className={styles.reviewList}>
//             {questions.map((q, i) => (
//               <li key={i}>
//                 <strong>{q.question}</strong>
//                 <p>{answers[i] !== null ? q.options[answers[i]].text : 'Not answered'}</p>
//               </li>
//             ))}
//           </ul>
//           <div className={styles.navBtns}>
//             <button className={styles.backBtn} onClick={() => setReviewing(false)}>
//               ⬅ Edit Answers
//             </button>
//             <button className={styles.submitBtn} onClick={() => setFinished(true)}>
//               Confirm & See Results ✅
//             </button>
//           </div>
//         </div>
//       ) : (
//         <div className={styles.resultBox} ref={resultRef}>
//           <h2 className={styles.heading}>
//             {userName ? `${userName}, Your Risk Profile: ${riskLevel}` : `Your Risk Profile: ${riskLevel}`}
//           </h2>

//           <div className={styles.charts}>
//             <div className={styles.gauge}>
//               <GaugeChart
//                 id="gauge-chart"
//                 nrOfLevels={3}
//                 colors={['#00C49F', '#FFBB28', '#FF4444']}
//                 arcWidth={0.3}
//                 percent={score / (questions.length * 4)}
//                 textColor="#333"
//               />
//               <div className={styles.label}>{riskLevel}</div>
//             </div>
//             <div className={styles.pie}>
//               <PieChart width={280} height={250}>
//                 <Pie
//                   data={allocation}
//                   cx="50%"
//                   cy="50%"
//                   outerRadius={70}
//                   fill="#8884d8"
//                   dataKey="value"
//                   label
//                 >
//                   {allocation.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                   ))}
//                 </Pie>
//                 <Tooltip />
//                 <Legend />
//               </PieChart>
//             </div>
//           </div>

//           <div className={styles.suggestions}>
//             <h3>As {riskLevel} Investor, Suggested Investment Options:</h3>
//             <div className={styles.cards}>
//               {allocation.map((a, idx) => (
//                 <div key={idx} className={styles.card}>
//                   <h4>{a.name} Asset Class</h4>
//                   <p>Recommended Allocation: {a.value}%</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* User Name + PDF Download */}
//           <div className={styles.reportActions}>
//             {/* <input
//               type="text"
//               placeholder="Investor Name"
//               value={userName}
//               onChange={(e) => setUserName(e.target.value)}
//               className={styles.nameInput}
//             /> */}
//             <div className={styles.formGroup}>
//                 <div className={styles.inputWrapper}>
//                     <input
//                         type="text"
//                         id="investorNameInput"
//                         placeholder=" "  // Placeholder is blank so the label can float correctly
//                         value={userName}
//                         onChange={(e) => setUserName(e.target.value)}
//                         required
//                     />
//                     <label className={styles.inputLabel} htmlFor="name">Name</label>
//                 </div>
//             </div>
//             <button className={styles.downloadBtn} onClick={downloadPDF}>
//               Download PDF
//             </button>
//           </div>

//           <div className={styles.actions}>
//             <button className={styles.retryBtn} onClick={restartQuiz}>
//               Retake Questionnaire
//             </button>
//             <Link href="/mutual-funds" className={styles.buyBtn}>
//               Explore Funds
//             </Link>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default RiskProfileCalculator;
