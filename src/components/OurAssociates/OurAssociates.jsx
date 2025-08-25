// 'use client';
// import React, { useRef } from 'react';
// import styles from './OurAssociates.module.css';

// const logos = [
//   '/assets/images/mutual-logos/amf.png',
//   '/assets/images/mutual-logos/bajaj_amc_1.png',
//   '/assets/images/mutual-logos/boi-new-logo.webp',
//   '/assets/images/mutual-logos/canararobecopng-1538742737113.png',
//   '/assets/images/mutual-logos/capitalmind_groww.webp',
//   '/assets/images/mutual-logos/logo-big.png',
//   '/assets/images/mutual-logos/invesco.avif',
//   '/assets/images/mutual-logos/logo.svg',
//   '/assets/images/mutual-logos/amf.png',
//   '/assets/images/mutual-logos/NEW_GROWW_AMC_LIGHT.1e410cc7.svg',
// ];

// const OurAssociates = () => {
//   const repeatedLogos = [...logos, ...logos]; // For infinite scroll
//   const trackRef = useRef(null);
//   let isDragging = false;
//   let startX;
//   let scrollLeft;

//   const handleMouseDown = (e) => {
//     isDragging = true;
//     startX = e.pageX - trackRef.current.offsetLeft;
//     scrollLeft = trackRef.current.scrollLeft;
//     trackRef.current.classList.add(styles.dragging);
//   };

//   const handleMouseLeave = () => {
//     isDragging = false;
//     trackRef.current.classList.remove(styles.dragging);
//   };

//   const handleMouseUp = () => {
//     isDragging = false;
//     trackRef.current.classList.remove(styles.dragging);
//   };

//   const handleMouseMove = (e) => {
//     if (!isDragging) return;
//     e.preventDefault();
//     const x = e.pageX - trackRef.current.offsetLeft;
//     const walk = (x - startX) * 1; // scroll speed
//     trackRef.current.scrollLeft = scrollLeft - walk;
//   };

//   return (
//     <section className={styles.associatesSection}>
//       <h2 className={styles.heading}>Our Associates</h2>
//       <div className={styles.slider}>
//         <div
//           className={styles.slideTrack}
//           ref={trackRef}
//           onMouseDown={handleMouseDown}
//           onMouseLeave={handleMouseLeave}
//           onMouseUp={handleMouseUp}
//           onMouseMove={handleMouseMove}
//         >
//           {repeatedLogos.map((logo, index) => (
//             <div className={styles.slide} key={index}>
//               <img src={logo} alt={`Logo ${index + 1}`} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurAssociates;

"use client";
import React from "react";
import { motion } from 'framer-motion';
import styles from "./OurAssociates.module.css";
import Image from "next/image";

const logos = [
  "/assets/images/mutual-logos/axis mf.png",
  '/assets/images/mutual-logos/bajaj mf.png',
  '/assets/images/mutual-logos/baroda bpn paribas.png',
  '/assets/images/mutual-logos/boi mf.webp',
  '/assets/images/mutual-logos/canara robeco mf.png',
  '/assets/images/mutual-logos/trust mf.png',
  '/assets/images/mutual-logos/capitalmind mf.webp',
  '/assets/images/mutual-logos/edelweiss mf.svg',
  '/assets/images/mutual-logos/groww mf.svg',
  '/assets/images/mutual-logos/invesco mf.avif',
  '/assets/images/mutual-logos/iti mf.jpeg',
  '/assets/images/mutual-logos/jm financial mf.png',
  '/assets/images/mutual-logos/lic mf.png',
  '/assets/images/mutual-logos/mirae asset mf.webp',
  '/assets/images/mutual-logos/motilal mf.webp',
  '/assets/images/mutual-logos/NAVI Mutul Fund.jpg',
  '/assets/images/mutual-logos/taurus mf.png',
  '/assets/images/mutual-logos/uti mf.jpg',
];

const logos2 = [
  "/assets/images/mutual-logos/nippon india mf.png",
  "/assets/images/mutual-logos/hsbc mf.png",
  "/assets/images/mutual-logos/icici-prudential mf.png",
  '/assets/images/mutual-logos/360 one mf.png',
  '/assets/images/mutual-logos/aditya birla sun life.webp',
  '/assets/images/mutual-logos/bandhan mf.svg',
  '/assets/images/mutual-logos/dsp mf.png',
  '/assets/images/mutual-logos/franklin templeton mf.png',
  '/assets/images/mutual-logos/hdfc mf.jpg',
  '/assets/images/mutual-logos/og-img-mf.jpg',
  '/assets/images/mutual-logos/old bridge mf.gif',
  '/assets/images/mutual-logos/pgim mf.png',
  '/assets/images/mutual-logos/ppfas mf.jpg',
  '/assets/images/mutual-logos/principal mf.jpg',
  '/assets/images/mutual-logos/quant mf.png',
  '/assets/images/mutual-logos/quantum mf.webp',
  '/assets/images/mutual-logos/samco mf.png',
  '/assets/images/mutual-logos/sundaram mf.png',
  '/assets/images/mutual-logos/tata mf.png',
];

const OurAssociates = () => {
  const duplicatedLogos = [...logos, ...logos,]; // Duplicate 3x for smooth loop
  const duplicatedLogos2 = [...logos2, ...logos2,];

  return (
    <section className={styles.associatesSection}>
      <h2 className={styles.heading}>Our Associates</h2>

      {/* First scroll (left to right) */}
      <div className={styles.scrollerWrapper}>
        <div className={`${styles.track} ${styles.leftToRight}`}>
          {duplicatedLogos.map((logo, index) => (
            <div key={`ltr-${index}`} className={styles.slide}>
              <Image src={logo} alt="Logo" width={180} height={100} />
            </div>
          ))}
        </div>
      </div>

      {/* Second scroll (right to left) */}
      <div className={styles.scrollerWrapper}>
        <div className={`${styles.track} ${styles.rightToLeft}`}>
          {duplicatedLogos2.map((logo, index) => (
            <div key={`rtl-${index}`} className={styles.slide}>
              <Image src={logo} alt="Logo" width={180} height={100} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurAssociates;
