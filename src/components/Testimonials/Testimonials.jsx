"use client";
import React, { useRef, useEffect } from "react";
import styles from "./Testimonials.module.css";
import { testimonials } from "@/data/testimonialData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} className={styles.star} />);
    } else if (rating >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} className={styles.star} />);
    } else {
      stars.push(<FaStar key={i} className={`${styles.star} ${styles.empty}`} />);
    }
  }
  return stars;
};

const Testimonials = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;

      swiperRef.current.navigation.destroy();
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <section className={styles.testimonialSection}>
      <motion.div
        className={styles.heading}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>What Our Clients Say</h2>
      </motion.div>

      <div className={styles.swiperWrapper}>
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 4000 }}
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
          //   navigation={{ enabled: true }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className={styles.swiperContainer}
          loop={true}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className={styles.card}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={styles.quoteIcon}>
                  <FaQuoteLeft />
                </div>
                <div className={styles.profile}>
                  <img src={item.image} alt={item.name} />
                </div>
                <p className={styles.text}>{item.text}</p>
                <div className={styles.ratingRow}>
                  <div className={styles.googleStars}>
                    <FcGoogle className={styles.googleIcon} />
                    <div className={styles.stars}>{renderStars(item.rating)}</div>
                  </div>
                </div>
                <h4 className={styles.title}>{item.name}</h4>
                <span className={styles.designation}>{item.designation}</span>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* navigation buttons */}
        <div
          ref={prevRef}
          className={`${styles.navButton} ${styles.testimonialPrev}`}
          aria-hidden="true"
        >
          ‹
        </div>
        <div
          ref={nextRef}
          className={`${styles.navButton} ${styles.testimonialNext}`}
          aria-hidden="true"
        >
          ›
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
