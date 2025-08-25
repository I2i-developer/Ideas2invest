"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Serviceprocess.module.css";

const Serviceprocess = ({ processTitle, processImage, processAlt }) => {
    return (
        <section className={styles.section}>
            <motion.h2
                className={styles.heading}
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                {processTitle}
            </motion.h2>

            <motion.div
                className={styles.imageWrapper}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                <Image
                    src={processImage}
                    alt={processAlt}
                    width={1200}   // give large enough width
                    height={0}     // height auto adjusts
                    className={styles.image}
                    unoptimized
                />

            </motion.div>
        </section>
    );
};

export default Serviceprocess;
