"use client";
import React from "react";
import { usePathname } from "next/navigation";
import breadcrumbStripData from "@/data/breadcrumbStripData";
import styles from "./BreadcrumbStrip.module.css";
import { motion } from "framer-motion";
import { FaHome, FaChevronRight } from "react-icons/fa";

const BreadcrumbStrip = () => {
  const pathname = usePathname();
  const key = pathname.replace("/", "") || "home";
  const data = breadcrumbStripData[key];

  if (!data) return null;

  return (
    <motion.section
      className={styles.breadcrumbStrip}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.container}>
        <h2 className={styles.title}>{data.title}</h2>
        <nav className={styles.breadcrumb}>
          <ul>
            {data.breadcrumb.map((item, index) => {
              const isLast = index === data.breadcrumb.length - 1;
              return (
                <li key={index} className={isLast ? styles.active : styles.inactive}>
                  {index === 0 && <FaHome size={18} className={styles.icon} />}
                  {!isLast ? (
                    <a href={item.href}>{item.label}</a>
                  ) : (
                    <span>{item.label}</span>
                  )}
                  {!isLast && <span className={styles.separator}><FaChevronRight /></span>}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </motion.section>
  );
};

export default BreadcrumbStrip;
