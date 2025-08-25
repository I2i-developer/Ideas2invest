'use client';

import React, { useEffect, useState } from 'react';
import styles from './ScrollToTop.module.css';
import { FaArrowCircleUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return isVisible ? (
    <div className={styles.wrapper} onClick={scrollToTop}>
      <div className={styles.buttonWrapper}>
        <FaArrowCircleUp className={styles.icon} />
        <span className={styles.tooltip}>Back to top</span>
      </div>
    </div>
  ) : null;
};

export default ScrollToTopButton;

// "use client";
// import React, { useState, useEffect } from "react";
// import styles from "./ScrollToTop.module.css";
// import { FaArrowUp } from "react-icons/fa";

// const ScrollToTop = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const toggleVisibility = () => {
//       if (window.scrollY > 300) {
//         setIsVisible(true);
//       } else {
//         setIsVisible(false);
//       }
//     };

//     window.addEventListener("scroll", toggleVisibility);
//     return () => window.removeEventListener("scroll", toggleVisibility);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth"
//     });
//   };

//   return (
//     isVisible && (
//       <button onClick={scrollToTop} className={styles.scrollToTop}>
//         <FaArrowUp />
//       </button>
//     )
//   );
// };

// export default ScrollToTop;
