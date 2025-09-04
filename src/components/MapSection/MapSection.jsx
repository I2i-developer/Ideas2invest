"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./MapSection.module.css";
import { MapPin, Phone, Mail } from "lucide-react";

const MapSection = () => {
  return (
    <section className={styles.mapSection}>
      <div className={styles.container}>
        {/* Left Contact Info */}
        <motion.div
          className={styles.infoBox}
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className={styles.heading}>Visit Our Office</h3>
          <p className={styles.subText}>We’d love to meet you in person</p>

          <div className={styles.infoItem}>
            <MapPin className={styles.icon} />
            <span>B 244, Block B, Naraina Industrial Area Phase 1, Naraina, New Delhi, 110028</span>
          </div>
          <div className={styles.infoItem}>
            <Phone className={styles.icon} />
            <Link href="tel:9810353354">+91 9810353354</Link>
            <Link href="tel:9711119175">+91 9711119175</Link>
          </div>
          <div className={styles.infoItem}>
            <Mail className={styles.icon} />
            <Link href="mailto:info@ideas2invest.in">info@ideas2invest.in</Link>
          </div>
          <p className={styles.timings}>Mon - Sat : 10:00 AM - 7:00 PM</p>
        </motion.div>

        {/* Map with Overlay */}
        <motion.div
          className={styles.mapWrapper}
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.85750269822!2d77.22029647468543!3d28.612916575672983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37fbbf2e31%3A0xa35b7fcd9d0f3f72!2sConnaught%20Place%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1691566564893!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe> */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.893574703202!2d77.13649029999999!3d28.632951599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0370e5c96aa7%3A0xcbb82d4e1528361c!2sIdeas%202%20Invest!5e0!3m2!1sen!2sin!4v1755592851354!5m2!1sen!2sin" 
          width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy">
          </iframe>

          {/* Overlay Card */}
          <div className={styles.overlayCard}>
            <h4>Come Say Hello 👋</h4>
            <p>Schedule a visit with our financial experts and explore how we can help grow your wealth.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MapSection;
