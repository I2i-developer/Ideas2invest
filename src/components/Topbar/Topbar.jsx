'use client'

import Link from 'next/link'
import styles from './Topbar.module.css'
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";

export default function Topbar() {
  return (
    <div className={styles.topbar}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.infoItem}>
            <FaPhoneAlt className={styles.icon} />
            <Link href="tel:9810353354">+91 98103 53354</Link>
          </div>
          <div className={styles.infoItem}>
            <FaPhoneAlt className={styles.icon} />
            <Link href="tel:9711119175">+91 97111 19175</Link>
          </div>
          <div className={styles.infoItem}>
            <FaEnvelope className={styles.icon} />
            <Link href="mailto:info@ideas2invest.in">info@ideas2invest.in</Link>
          </div>
        </div>

        <div className={styles.right}>
          <Link href="https://facebook.com" target="_blank" className={`${styles.social} ${styles.facebook}`}>
            <FaFacebookF />
          </Link>
          <Link href="https://instagram.com" target="_blank" className={`${styles.social} ${styles.instagram}`}>
            <FaInstagram />
          </Link>
          <Link href="https://twitter.com" target="_blank" className={`${styles.social} ${styles.twitter}`}>
            <FaXTwitter />
          </Link>
          <Link href="https://linkedin.com" target="_blank" className={`${styles.social} ${styles.linkedin}`}>
            <FaLinkedinIn />
          </Link>
          <Link href="https://youtube.com" target="_blank" className={`${styles.social} ${styles.youtube}`}>
            <FaYoutube />
          </Link>
        </div>
      </div>
    </div>
  )
}
