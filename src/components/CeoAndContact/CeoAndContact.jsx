"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import styles from "./CeoAndContact.module.css";

const ceoQuotes = [
    {
        name: "Anju Bansal",
        title: "Founder & Managing Director",
        img: "/assets/images/team/anju-bansal-passport.jpg",
        quote:
            "With over two decades of experience, I believe financial freedom is the true empowerment we provide to our clients.",
    },
    {
        name: "Deepak Sooden",
        title: "Founder & Managing Director",
        img: "/assets/images/team/deepak-sooden-passport.jpg",
        quote:
            "Our mission is to make investments simple, accessible, and impactful for every individual we serve.",
    },
];

const ContactSection = () => {
    return (
        <div className={styles.container}>
            {/* CEO Carousel */}
            <div className={styles.ceoSection}>
                <h3 className={styles.ceoHeading}>From Founder’s Desk</h3>
                <Swiper
                    loop={true}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 5000,       // 5 seconds
                        disableOnInteraction: false, // keeps autoplay even after user interaction
                    }}
                    modules={[Pagination, Autoplay]} // include Autoplay module
                >
                    {ceoQuotes.map((ceo, i) => (
                        <SwiperSlide key={i}>
                            <div className={styles.ceoCard}>
                                {/* Decorative Shapes */}
                                <span className={`${styles.decorShape} ${styles.topLeft}`}></span>
                                {/* <span className={`${styles.decorShape} ${styles.rightCenter}`}></span> */}

                                {/* CEO Image with glow border */}
                                <div className={styles.ceoImageWrapper}>
                                    <img src={ceo.img} alt={ceo.name} className={styles.ceoImage} />
                                </div>

                                {/* Info */}
                                <h4 className={styles.ceoName}>{ceo.name}</h4>
                                <p className={styles.ceoTitle}>{ceo.title}</p>
                                <p className={styles.ceoQuote}>“{ceo.quote}”</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>


            {/* Contact Form */}
            <div className={styles.formSection}>
                <h3>Contact Our Team</h3>
                <form className={styles.form}>
                    {/* First + Last Name Row */}
                    <div className={styles.nameRow}>
                        <div className={styles.inputBox}>
                            <input type="text" required />
                            <label>First Name*</label>
                        </div>
                        <div className={styles.inputBox}>
                            <input type="text" required />
                            <label>Last Name*</label>
                        </div>
                    </div>

                    <div className={styles.inputBox}>
                        <input type="email" required />
                        <label>Email*</label>
                    </div>

                    <div className={styles.inputBox}>
                        <input type="text" required />
                        <label>Phone Number*</label>
                    </div>

                    <div className={styles.inputBox}>
                        <textarea rows="3" required></textarea>
                        <label>Message</label>
                    </div>

                    <button type="submit" className={styles.btn}>
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactSection;