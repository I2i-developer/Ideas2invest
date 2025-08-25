'use client'

import Link from 'next/link'
import styles from './Topbar.module.css'
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'

export default function Topbar() {
  return (
    <div className={styles.topbar}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.infoItem}>
            <FaPhoneAlt className={styles.icon} />
            <span>+91 98765 43210</span>
          </div>
          <div className={styles.infoItem}>
            <FaEnvelope className={styles.icon} />
            <span>support@ideas2invest.com</span>
          </div>
        </div>

        <div className={styles.right}>
          <Link href="https://facebook.com" target="_blank" className={styles.social}>
            <FaFacebookF />
          </Link>
          <Link href="https://linkedin.com" target="_blank" className={styles.social}>
            <FaLinkedinIn />
          </Link>
        </div>
      </div>
    </div>
  )
}
