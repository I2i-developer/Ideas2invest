'use client'

import Link from 'next/link'
import styles from './Topbar.module.css'
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

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
            <Link href="mailto:info@ideas2invest.com">info@ideas2invest.com</Link>
          </div>
        </div>

        <div className={styles.right}>
          <Link href="https://facebook.com" target="_blank" className={styles.social}>
            <FaFacebookF />
          </Link>
          <Link href="https://instagram.com" target="_blank" className={styles.social}>
            <FaInstagram />
          </Link>
          <Link href="https://linkedin.com" target="_blank" className={styles.social}>
            <FaLinkedinIn />
          </Link>
          <Link href="https://youtube.com" target="_blank" className={styles.social}>
            <FaYoutube />
          </Link>
          <Link href="https://twitter.com" target="_blank" className={styles.social}>
            <FaTwitter />
          </Link>
        </div>
      </div>
    </div>
  )
}
