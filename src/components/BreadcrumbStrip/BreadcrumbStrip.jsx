import React from "react";
import breadcrumbStripData from "@/data/breadcrumbStripData";
import styles from "./BreadcrumbStrip.module.css";
import BreadcrumbMotion from "./BreadcrumbMotion";
import { FaHome, FaChevronRight } from "react-icons/fa";

const BreadcrumbStrip = ({ pageKey }) => {
  const data = breadcrumbStripData[pageKey];

  if (!data) return null;

  return (
    <BreadcrumbMotion className={styles.breadcrumbStrip}>
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
    </BreadcrumbMotion>
  );
};

export default BreadcrumbStrip;
