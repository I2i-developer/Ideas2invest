"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import styles from "./Footer.module.css";
import { footerData } from "@/data/footerData";
import {
    FaFacebookF,
    FaLinkedinIn,
    FaInstagram,
    FaYoutube,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaFileAlt,
    FaPercentage,
    FaUserShield,
    FaFileContract,
    FaBook,
    FaBalanceScale,
    FaUsers,
    FaSitemap
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const iconMap = {
    FaFacebookF: <FaFacebookF />,
    FaXTwitter: <FaXTwitter />,
    FaLinkedinIn: <FaLinkedinIn />,
    FaInstagram: <FaInstagram />,
    FaYoutube: <FaYoutube />,
    FaFileAlt: <FaFileAlt />,
    FaPercentage: <FaPercentage />,
    FaUserShield: <FaUserShield />,
    FaFileContract: <FaFileContract />,
    FaBook: <FaBook />,
    FaBalanceScale: <FaBalanceScale />,
    FaUsers: <FaUsers />,
    FaSitemap: <FaSitemap />,
};

const Footer = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess("");

        if (!email) {
            setError("Please enter a valid email.");
            return;
        }
        setLoading(true);
        try {
            const res = await fetch("/api/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.error || "Something went wrong");

            setSuccess(data.success);
            setEmail("");
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <footer className={styles.footer}>
            {/* Row 1 */}
            <div className={styles.topRow}>
                {/* Column 1: Company Info */}
                <div className={styles.col}>
                    <Link href="/">
                        <img
                            src={footerData.company.logo}
                            alt="Ideas2Invest Logo"
                            className={styles.logo}
                        />
                    </Link>
                    <p className={styles.desc}>{footerData.company.description}</p>
                    <p className={styles.contact}>
                        <FaMapMarkerAlt className={styles.contactIcon} /> {footerData.company.address}
                    </p>
                    <p>
                        <Link href="mailto:info@ideas2invest.in" className={styles.contact}>
                            <FaEnvelope className={styles.contactIcon} /> {footerData.company.email}
                        </Link>
                    </p>
                    <p className={styles.phones}>
                        <Link href="tel:9810353354" className={styles.contact}>
                            <FaPhone className={styles.contactIcon} /> {footerData.company.phone1}
                        </Link>
                        <Link href="tel:9711119175" className={styles.contact}>
                            <FaPhone className={styles.contactIcon} /> {footerData.company.phone2}
                        </Link>
                    </p>
                    <div className={styles.social}>
                        {footerData.company.socialLinks.map((s, i) => (
                            <a key={i} href={s.url} target="_blank" rel="noopener noreferrer">
                                {iconMap[s.icon]}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div className={styles.col}>
                    <h4>Quick Links</h4>
                    <ul>
                        {footerData.quickLinks.map((link, i) => (
                            <li key={i}>
                                <a href={link.url}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Services */}
                <div className={styles.col}>
                    <h4>Services</h4>
                    <ul>
                        {footerData.services.map((link, i) => (
                            <li key={i}>
                                <a href={link.url}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mutual Funds */}
                <div className={styles.col}>
                    <h4>Mutual Funds</h4>
                    <ul>
                        {footerData.mutualFunds.map((link, i) => (
                            <li key={i}>
                                <a href={link.url}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Calculators */}
                <div className={styles.col}>
                    <h4>Calculators</h4>
                    <ul>
                        {footerData.calculators.map((link, i) => (
                            <li key={i}>
                                <a href={link.url}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className={styles.newsletter}>
                        <p>Subscribe to our Newsletter</p>
                        <form onSubmit={handleSubmit} className={styles.formNewsletter}>
                            <div className={styles.inputGroup}>
                                <input
                                    className={styles.inputField}
                                    type="email"
                                    placeholder="Your Email Address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <button type="submit" disabled={loading}>
                                    {loading ? "Subscribing..." : "Subscribe"}
                                </button>
                            </div>

                            {error && <p className={styles.errorMsg}>{error}</p>}
                            {success && <p className={styles.successMsg}>{success}</p>}
                        </form>

                    </div>
                </div>
            </div>

            {/* Row 2 */}
            <div className={styles.middleRow}>
                <p className={styles.amfi}>
                    <span><span className={styles.certified}>{footerData.amfi.text}</span></span> | <span className={styles.certified}> ARN - {footerData.amfi.arn} </span> | <span className={styles.certified}> Date of initial
                        Registration: {footerData.amfi.registrationDate} </span> 
                        {/* | <span className={styles.certified}>Current validity:{" "}
                        {footerData.amfi.validity} </span> */}
                </p>

                <p className={styles.risk}>
                    Risk Factors – Investments in Mutual Funds are subject to Market Risks. Read all scheme
                    related documents carefully before investing. Mutual Fund Schemes do not assure or guarantee
                    any returns. Past performances of any Mutual Fund Scheme may or may not be sustained in
                    future. There is no guarantee that the investment objective of any suggested scheme shall be
                    achieved. All existing and prospective investors are advised to check and evaluate the Exit
                    loads and other cost structure (TER) applicable at the time of making the investment before
                    finalizing on any investment decision for Mutual Funds schemes. We deal in Regular Plans only
                    for Mutual Fund Schemes and earn a Trailing Commission on client investments. Disclosure For
                    Commission earnings is made to clients at the time of investments. Option of Direct Plan for
                    every Mutual Fund Scheme is available to investors offering advantage of lower expense ratio.
                    We are not entitled to earn any commission on Direct plans. Hence we do not deal in Direct
                    Plans.
                </p>

                <div className={styles.policyLinks}>
                    {footerData.policies.map((p, i) => (
                        <React.Fragment key={i}>
                            <a href={p.url}>
                                {iconMap[p.icon]} <span>{p.label}</span>
                            </a>
                            {i < footerData.policies.length - 1 && <span> | </span>}
                        </React.Fragment>
                    ))}
                </div>
            </div>

            {/* Row 3 */}
            <div className={styles.bottomRow}>
                <p>© {new Date().getFullYear()} <Link href="https://www.ideas2invest.com"> Ideas2Invest</Link>. All Rights Reserved.</p>
                {/* <p className={styles.disclaimer}>
                    Investments in securities market are subject to market risks, read all the related
                    documents carefully before investing.
                </p> */}
            </div>
        </footer>
    );
};

export default Footer;
