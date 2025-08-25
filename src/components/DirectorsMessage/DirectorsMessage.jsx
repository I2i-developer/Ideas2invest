"use client";
import React from "react";
import styles from "./DirectorsMessage.module.css";
import directorsData from "@/data/directorsData";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaEnvelope, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";

const DirectorsMessage = () => {
    return (
        <section className={styles.section}>
            <div className={styles.headingWrapper}>
                <motion.h2
                    className={styles.heading}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    A <span className={styles.green}> Message</span> From Our <span className={styles.blue}>Founders </span>
                </motion.h2>
                <motion.p
                    className={styles.subText}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    Empowering you to make smarter investment choices for a financially
                    free future.
                </motion.p>
            </div>

            <div className={styles.cardsContainer}>
                {directorsData.map((director, index) => (
                    <motion.div
                        key={director.id}
                        className={styles.card}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className={styles.imageWrapper}>
                            <Image
                                src={director.image}
                                alt={director.name}
                                width={350}
                                height={500}
                                className={styles.directorImage}
                            />
                        </div>

                        <div className={styles.info}>
                            <h3 className={styles.name}>{director.name}</h3>
                            <p className={styles.title}>{director.title}</p>

                            <div className={styles.socials}>
                                {director.socials.twitter && (
                                    <a href={director.socials.twitter} target="_blank">
                                        <FaFacebookF />
                                    </a>
                                )}
                                {director.socials.linkedin && (
                                    <a href={director.socials.linkedin} target="_blank">
                                        <FaLinkedinIn />
                                    </a>
                                )}
                                {director.socials.twitter && (
                                    <a href={director.socials.twitter} target="_blank">
                                        <FaTwitter />
                                    </a>
                                )}
                                {director.socials.email && (
                                    <a href={director.socials.email}>
                                        <FaEnvelope />
                                    </a>
                                )}
                            </div>

                            <blockquote className={styles.message}>
                                ❝ {director.message} ❞
                            </blockquote>

                            <p className={styles.signature}>— {director.name}</p>
                        </div>
                        <div className={styles.cornerImage}>
                            <Image
                                src="/assets/images/icons/card-corner.png"
                                alt="Decoration"
                                fill
                                className={styles.cornerImg}
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default DirectorsMessage;
