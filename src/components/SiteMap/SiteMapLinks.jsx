"use client";
import styles from "./SiteMapLinks.module.css";
import { useState } from "react";
import { motion } from "framer-motion";

const sitemapData = [
  {
    title: "Main",
    links: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Blogs", href: "/blogs" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Mutual Funds",
    links: [
      { name: "Overview", href: "/mutual-funds" },
      { name: "Systematic Investment Plan (SIP)", href: "/mutual-funds/sip" },
      { name: "ELSS (Tax Saving)", href: "/mutual-funds/elss-tax-saving" },
      { name: "Women Investors", href: "/mutual-funds/women-investors" },
      { name: "Foreign Investors", href: "/mutual-funds/foreign-investors" },
      { name: "Retirement Income", href: "/mutual-funds/retirement-income" },
      { name: "Change Distributor", href: "/mutual-funds/change-mutual-fund-distributor" },
    ],
  },
  {
    title: "Insurance",
    links: [
      { name: "Life Insurance", href: "/services/life-insurance" },
      { name: "Health Insurance", href: "/services/health-insurance" },
      { name: "General Insurance", href: "/services/general-insurance" },
    ],
  },
  {
    title: "Investment Services",
    links: [
      { name: "Dollar Investment", href: "/services/dollar-investment" },
      { name: "Portfolio Management", href: "/services/portfolio-management" },
      { name: "Alternative Investment Funds", href: "/services/alternative-investment-funds" },
      { name: "Corporate Fixed Deposits", href: "/services/corporate-fixed-deposits" },
    ],
  },
  {
    title: "NRI Services",
    links: [
      { name: "Overview", href: "/nri-services" },
      { name: "GIFT City", href: "/nri-services/gift-city" },
      { name: "Taxation", href: "/nri-services/taxation" },
      { name: "Investment", href: "/nri-services/investment" },
    ],
  },
  {
    title: "Calculators",
    links: [
      { name: "All Calculators", href: "/calculators" },
      { name: "Financial Risk Meter", href: "/calculators/financial-risk-meter" },
      { name: "Systematic Investment Plan (SIP)", href: "/calculators/sip" },
      { name: "Lumpsum", href: "/calculators/lumpsum" },
      { name: "Inflation", href: "/calculators/inflation" },
      { name: "Dream Retirement", href: "/calculators/dream-retirement" },
      { name: "Grand Wedding", href: "/calculators/grand-wedding" },
      { name: "Dream Vacation", href: "/calculators/dream-vacation" },
      { name: "Child Education", href: "/calculators/child-education" },
      { name: "SIP Top-Up", href: "/calculators/sip-topup" },
      { name: "Limited SIP", href: "/calculators/limited-sip" },
      { name: "Life Insurance Need", href: "/calculators/life-insurance-need" },
      { name: "Home Loan vs SIP", href: "/calculators/home-loan-vs-sip" },
      { name: "EMI", href: "/calculators/emi" },
      { name: "Dream Car", href: "/calculators/dream-car" },
      { name: "Cost of Delay", href: "/calculators/cost-of-delay" },
      { name: "Birthday SIP", href: "/calculators/birthday-sip" },
      { name: "SWP", href: "/calculators/swp" },
    ],
  },
  {
    title: "Privacy",
    links: [
      { name: "Disclaimer", href: "/legal/disclaimer" },
      { name: "Privacy Policy", href: "/legal/privacy-policy" },
      { name: "Terms & Conditions", href: "/legal/terms-conditions" },
      { name: "Code of Conduct", href: "/legal/code-of-conduct" },
      { name: "Investor Grievance", href: "/legal/investor-grievance" },
    ],
  },
];

export default function Sitemap() {
  const [search, setSearch] = useState("");

  return (
    <div className={styles.sitemapWrapper}>
      {/* Hero Section */}
      <motion.header
        className={styles.hero}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Website Sitemap</h1>
        <p>Explore all sections of Ideas2Invest at a glance.</p>
        <input
          type="text"
          placeholder="Search pages..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.searchBox}
        />
      </motion.header>

      {/* Sitemap Grid */}
      <div className={styles.grid}>
        {sitemapData.map((section, idx) => (
          <motion.div
            key={idx}
            className={styles.card}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ scale: 1.03 }}
          >
            <h2>{section.title}</h2>
            <ul>
              {section.links
                .filter((link) =>
                  link.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((link, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ x: 8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a href={link.href}>{link.name}</a>
                  </motion.li>
                ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}