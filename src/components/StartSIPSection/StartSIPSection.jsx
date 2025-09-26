import React from "react";
import styles from "./StartSIPSection.module.css";
import Image from "next/image";

const StartSIPSection = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <Image
                    src="/assets/images/icons/sip.jpg"
                    alt="Illustration representing SIP investment"
                    width={294}
                    height={176}
                />
            </div>
            <div className={styles.center}>
                <h3 className={styles.heading}>Grow your wealth with SIP</h3>
                <p className={styles.subheading}>4,000+ Mutual Funds to choose from</p>
            </div>
            <div className={styles.right}>
                <div className={styles.inputWrapper}>
                    <span className={styles.prefix}>+91</span>
                    <input
                        type="tel"
                        placeholder="Enter your Mobile no."
                        className={styles.input}
                        maxLength={10}
                        aria-label="Mobile number"
                    />
                </div>
                <button className={styles.button} aria-label="Start SIP">Start SIP</button>
            </div>
        </div>
    );
};

export default StartSIPSection;
