import React from "react";
import styles from "./FloatingSidebar.module.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLogin } from "react-icons/md";

export default function FloatingSidebar() {
  const links = [
    { label: "Facebook", href: "https://www.facebook.com/ideas2investt/", icon: <FaFacebookF />, color: "#1877f2" },
    { label: "Instagram", href: "https://www.instagram.com/ideas2invest/", icon: <FaInstagram />, color: "linear-gradient(45deg,#f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)" },
    { label: "X Twitter", href: "https://twitter.com", icon: <FaTwitter />, color: "#202020" },
    { label: "LinkedIn", href: "https://in.linkedin.com/company/ideas2invest", icon: <FaLinkedinIn />, color: "#0077b5" },
    { label: "YouTube", href: "https://youtube.com", icon: <FaYoutube />, color: "#ff0000" },
    { label: "Login", href: "https://ideas2invest.wealthmagic.in/", icon: <MdLogin />, color: "#16a34a" },
    // { label: "Mutual Funds", href: "/mutual-funds", icon: "💰", color: "#16a34a" },
  ];

  return (
    <div className={styles.sidebar}>
      {links.map((item, index) => (
        <a
          key={index}
          href={item.href}
          target={item.href.startsWith("http") ? "_blank" : "_self"}
          rel="noopener noreferrer"
          className={styles.sidebarItem}
          style={{ background: item.color }}
        >
          {/* <div className={styles.iconWrapper} style={{ color: item.color }}> */}
          <div className={styles.iconWrapper} style={{ color: item.color.includes("gradient") ? "#e1306c" : item.color }}>
            {item.icon}
          </div>
          <span className={styles.label}>{item.label}</span>
        </a>
      ))}
    </div>
  );
}
