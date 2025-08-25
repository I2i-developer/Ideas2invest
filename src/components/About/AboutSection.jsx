"use client";
import styles from "./AboutSection.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const images = [
  "/assets/images/banner/hero-finance.svg",
  "/assets/images/banner/hero-finance.svg",
  "/assets/images/banner/hero-finance.svg",
];

export default function About() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <motion.div
          className={styles.left}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>About Ideas2Invest</h2>
          <p>
            "At Ideas2Invest, we are dedicated to helping you make the most of
            your financial journey.
          </p>
          <p>
            Our team of experts provides personalized investment strategies
            tailored to your unique goals.
          </p>
          <p>
            Whether you are planning for retirement, saving for a major goal,
            or just looking to grow your wealth, we’re here to guide you.
          </p>
          <p>
            Focused on innovation and client-centric services, Ideas 2 Invest delivers personalized financial strategies to create long-term value for individuals and businesses."
          </p>
          <button className={styles.ctaBtn}>Open Free Account Now</button>
        </motion.div>

        <motion.div
          className={styles.right}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            slidesPerView={1}
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={img}
                  alt={`About Slide ${index + 1}`}
                  width={450}
                  height={300}
                  className={styles.slideImage}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
