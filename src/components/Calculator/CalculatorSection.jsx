"use client";
import React from 'react';
import styles from './CalculatorSection.module.css';
import Image from 'next/image';
import Link from 'next/link';

const calculators = [
  { name: 'All Calculators', link: '/calculators', icon: '/assets/images/icons/calculator.png' },
  { name: 'Risk Meter', link: '/calculators/financial-risk-meter', icon: '/assets/images/icons/risk.png' },
  { name: 'SIP', link: '/calculators/sip', icon: '/assets/images/icons/sip.png' },
  { name: 'Retirement', link: '/calculators/retirement', icon: '/assets/images/icons/retirement.png' },
//   { name: 'Wedding Planner', link: '/calculators/wedding', icon: '/assets/images/icons/wedding.png' },
  { name: 'Education', link: '/calculators/child-education', icon: '/assets/images/icons/education.png' },
  { name: 'SWP', link: '/calculators/swp', icon: '/assets/images/icons/cash-withdrawal.png' },
  { name: 'Life Insurance', link: '/calculators/life-insurance-need', icon: '/assets/images/icons/insurance.png' },
  { name: 'Inflation', link: '/calculators/inflation', icon: '/assets/images/icons/inflation.png' }
]; 

const CalculatorsSection = () => {
    return (
        <section className={styles.section}>
            <h2 className={styles.heading}>We Have Multiple Calculators</h2>
            <p className={styles.subheading}>Plan your financial goals with ease</p>
            <div className={styles.flowerContainer}>
                <div className={styles.centerImage}>
                    <Image src="/assets/images/icons/all-calculators.svg" alt="Central Icon" width={280} height={280} />
                </div>
                {calculators.map((calc, index) => (
                    <Link
                        key={index}
                        href={calc.link}
                        className={`${styles.petal} ${styles[`petal${index + 1}`]}`}
                    >
                        <div className={styles.petalContent}>
                            <Image src={calc.icon} alt={calc.name} width={40} height={40} />
                            <span>{calc.name}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default CalculatorsSection;


// "use client";
// import React from 'react';
// import styles from './CalculatorSection.module.css';
// import { motion } from "framer-motion";
// import Image from 'next/image';
// import Link from 'next/link';

// const calculators = [
//     { name: 'SIP Calculator', link: '/calculators/sip', icon: '/assets/icons/sip.png' },
//     { name: 'Retirement Planner', link: '/calculators/retirement', icon: '/assets/icons/retirement.png' },
//     { name: 'Wedding Planner', link: '/calculators/wedding', icon: '/assets/icons/wedding.png' },
//     { name: 'Education Planner', link: '/calculators/education', icon: '/assets/icons/education.png' },
//     { name: 'Return Calculator', link: '/calculators/return', icon: '/assets/icons/return.png' },
//     { name: 'Income Tax Calculator', link: '/calculators/tax', icon: '/assets/icons/tax.png' },
//     { name: 'Goal Calculator', link: '/calculators/goal', icon: '/assets/icons/goal.png' },
//     { name: 'Inflation Calculator', link: '/calculators/inflation', icon: '/assets/icons/inflation.png' }
// ];

// const CalculatorsSection = () => {
//     return (
//         <section className={styles.section}>
//             <h2 className={styles.heading}>We Have Multiple Calculators</h2>
//             <p className={styles.subheading}>Plan your financial goals with ease</p>
//             <div className={styles.flowerContainer}>
//                 <motion.div
//                     className={styles.centerImage}
//                     initial={{ scale: 0, opacity: 0 }}
//                     animate={{ scale: 1, opacity: 1 }}
//                     transition={{ duration: 0.6, ease: "easeOut" }}
//                 >
//                     <Image
//                         src="/assets/images/banner/hero-finance.svg"
//                         alt="Center"
//                         width={250}
//                         height={250}
//                     />
//                 </motion.div>

//                 {/* <div className={styles.centerImage}>
//                     <Image src="/assets/images/banner/hero-finance.svg" alt="Central Icon" width={250} height={250} />
//                 </div> */}
//                 {calculators.map((calc, index) => (
//                     <Link href={calc.link} key={index}>
//                         <motion.div
//                             className={`${styles.petal} ${styles["petal" + (index + 1)]}`}
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
//                         >
//                             <div className={styles.petalContent}>
//                                 <Image src={calc.icon} alt={calc.name} width={24} height={24} />
//                                 <span>{calc.name}</span>
//                             </div>
//                         </motion.div>
//                     </Link>
//                 ))}
//                 {/* {calculators.map((calc, index) => (
//                     <Link
//                         key={index}
//                         href={calc.link}
//                         className={`${styles.petal} ${styles[`petal${index + 1}`]}`}
//                     >
//                         <div className={styles.petalContent}>
//                             <Image src={calc.icon} alt={calc.name} width={30} height={30} />
//                             <span>{calc.name}</span>
//                         </div>
//                     </Link>
//                 ))} */}
//             </div>
//         </section>
//     );
// };

// export default CalculatorsSection;
