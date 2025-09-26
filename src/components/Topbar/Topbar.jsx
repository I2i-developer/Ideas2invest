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
            <Link href="tel:9810353354" aria-label="Ideas2invest Mobile">+91 98103 53354</Link>
          </div>
          <div className={styles.infoItem}>
            <FaPhoneAlt className={styles.icon} />
            <Link href="tel:9711119175" aria-label="Ideas2invest Mobile">+91 97111 19175</Link>
          </div>
          <div className={styles.infoItem}>
            <FaEnvelope className={styles.icon} />
            <Link href="mailto:info@ideas2invest.in" aria-label="Ideas2invest Email">info@ideas2invest.in</Link>
          </div>
        </div>

        <div className={styles.right}>
          <Link href="https://www.facebook.com/ideas2investt/" aria-label="Ideas2invest facebook" target="_blank" className={`${styles.social} ${styles.facebook}`}>
            <FaFacebookF />
          </Link>
          <Link href="https://www.instagram.com/ideas2invest/" aria-label="Ideas2invest instagram" target="_blank" className={`${styles.social} ${styles.instagram}`}>
            <FaInstagram />
          </Link>
          <Link href="https://twitter.com" aria-label="Ideas2invest twitter" target="_blank" className={`${styles.social} ${styles.twitter}`}>
            <FaXTwitter />
          </Link>
          <Link href="https://in.linkedin.com/company/ideas2invest" aria-label="Ideas2invest linkedin" target="_blank" className={`${styles.social} ${styles.linkedin}`}>
            <FaLinkedinIn />
          </Link>
          <Link href="https://youtube.com" aria-label="Ideas2invest youtube" target="_blank" className={`${styles.social} ${styles.youtube}`}>
            <FaYoutube />
          </Link>
        </div>
      </div>
    </div>
  )
}
