"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./AwardsRecognition.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const awardsData = {
  2022: [
    {
      title: "Bronze in ET Brand Disruption",
      desc: "ET Brand Equity Smart API Launch Award 2022",
      logo: "/assets/images/etbrand.png",
    },
    {
      title: "Gold at Indian Digital Awards",
      desc: "India Digital Awards, IAMAI 2022",
      logo: "/assets/images/iamai.png",
    },
    {
      title: "Bronze for best PR in BFSI Category",
      desc: "Kaleido Awards by ET Brand Equity 2022",
      logo: "/assets/images/kaleido.png",
    },
    {
      title: "Extra Award for Testing",
      desc: "Another Award in 2022",
      logo: "/assets/images/extra.png",
    },
  ],
  2021: [
    {
      title: "Best Fintech Startup",
      desc: "Startup Awards 2021",
      logo: "/assets/images/startup.png",
    },
  ],
};

const AwardsRecognition = () => {
  const [activeYear, setActiveYear] = useState(2022);

  // Refs for Swiper nav buttons
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const hasMoreThanThree = awardsData[activeYear].length > 3;

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        {/* <p className={styles.subTitle}>OUR ACHIEVEMENTS</p> */}
        <h2 className={styles.title}>Awards & Recognition</h2>
        <p className={styles.desc}>
          Our biggest achievement is the happiness of our customers
        </p>
      </div>

      {/* Year Tabs */}
      <div className={styles.tabs}>
        {Object.keys(awardsData)
          .sort((a, b) => b - a)
          .map((year) => (
            <button
              key={year}
              onClick={() => setActiveYear(Number(year))}
              className={`${styles.tabBtn} ${activeYear === Number(year) ? styles.active : ""
                }`}
            >
              {year}
            </button>
          ))}
      </div>

      {/* Swiper Carousel */}
      <div className={styles.carouselWrapper}>
        {/* Custom Always-Visible Arrows */}
        <div
          ref={prevRef}
          className={`${styles.navButton} ${styles.prevBtn} ${!hasMoreThanThree ? styles.disabled : ""
            }`}
        >
          <FaChevronLeft />
        </div>
        <div
          ref={nextRef}
          className={`${styles.navButton} ${styles.nextBtn} ${!hasMoreThanThree ? styles.disabled : ""
            }`}
        >
          <FaChevronRight />
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          autoplay={
            hasMoreThanThree
              ? { delay: 2500, disableOnInteraction: false }
              : false
          }
          loop={hasMoreThanThree}
          spaceBetween={20}
          slidesPerView={3}
          style={{ maxWidth: "1100px" }}
          breakpoints={{
            0: {
              slidesPerView: 1, // ✅ Mobile
            },
            768: {
              slidesPerView: 2, // ✅ Tablet
            },
            1024: {
              slidesPerView: 3, // ✅ Desktop
            },
          }}
          className={styles.swiper}
        >
          {awardsData[activeYear].map((award, index) => (
            <SwiperSlide key={index}>
              <div className={styles.card}>
                <div className={styles.cardTop}>
                  <span className={styles.wreath}>🏆</span>
                </div>
                <h3>{award.title}</h3>
                <p>{award.desc}</p>
                <img src={award.logo} alt="logo" className={styles.logo} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default AwardsRecognition;
