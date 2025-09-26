'use client'

import { useState, useEffect } from 'react'
import styles from './Hero.module.css'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const slides = [
  {
    // bg: '/assets/images/banner/hero1.jpg',
    heading: 'Empowering Your Wealth Journey',
    subheading: 'Make smarter investment decisions and secure financial future with expert guidance.',
  },
  {
    heading: 'Mutual Funds & SIP Investments in India',
    subheading:
      'Ideas2Invest helps individuals and NRIs build wealth through Mutual Funds, SIP plans, and expert financial planning.',
  },
  {
    // bg: '/assets/images/services/2.jpg',
    heading: 'Trusted by NRIs for Financial Planning',
    subheading: 'Helping you with taxation, wealth growth, peace of mind from anywhere in the world.',
  },
  {
    // bg: '/assets/images/banner/hero1.jpg',
    heading: 'Build Wealth. Save Tax. Plan Smart.',
    subheading: 'Ideas2Invest simplifies your journey toward financial independence.',
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const slide = slides[current]

  return (
    <section className={styles.hero} style={{ backgroundImage: `url(${slide.bg})` }}>
      <div className={styles.overlay} />

      <div className={styles.contentWrapper}>
        <motion.h1
          key={slide.heading}
          className={styles.heading}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {slide.heading}
        </motion.h1>

        <motion.p
          key={slide.subheading}
          className={styles.subheading}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          {slide.subheading}
        </motion.p>

        <motion.div
          className={styles.ctaWrapper}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Link href="https://calendly.com/ideas2invest/30min" className={styles.cta} target='_blank'>
            Book Free Consultation
          </Link>
        </motion.div>

        <motion.div
          className={styles.trustedBy}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <p className={styles.trustText}>Partnered with</p>
          <div className={styles.logos}>
            <Image src="/assets/images/banner/hdfc-life.svg" alt="HDFC Life Partner" width={100} height={50} />
            <Image src="/assets/images/banner/bajaj.png" alt="Bajaj Partner" width={180} height={54} />
            <Image src="/assets/images/banner/hdfc-ergo.png" alt="HDFC Ergo Partner" width={55} height={54} />
            <Image src="/assets/images/banner/niva-bupa.png" alt="Niva Bupa Partner" width={110} height={50} />
            <Image src="/assets/images/banner/pnb-housing.png" alt="PNB Housing Partner" width={140} height={50} />
            <Image src="/assets/images/banner/nuvama.jpg" alt="Nuvama Partner" width={120} height={34} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}


// 'use client'

// import styles from './Hero.module.css'
// import Link from 'next/link'
// import Image from 'next/image'
// import { motion } from 'framer-motion'

// export default function Hero() {
//   return (
//     <section className={styles.hero}>
//       <div className={styles.container}>
//         {/* Left Side */}
//         <motion.div
//           className={styles.content}
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h1 className={styles.title}>
//             Empowering Your Wealth Journey
//           </h1>
//           <p className={styles.subtitle}>
//             Ideas2Invest helps you make smarter investment decisions, optimize taxation, and achieve your financial goals — whether you’re in India or an NRI.
//           </p>
//           <Link href="/contact" className={styles.cta}>
//             Book Free Consultation
//           </Link>

//           {/* Trust Badges */}
//           <div className={styles.trustedBy}>
//             <p className={styles.trustText}>Trusted by partners like</p>
//             <div className={styles.logos}>
//               <Image src="/assets/images/banner/sbi.png" alt="SBI" width={80} height={34} />
//               <Image src="/assets/images/banner/hdfc.png" alt="HDFC" width={160} height={34} />
//               <Image src="/assets/images/banner/icici.png" alt="ICICI" width={160} height={34} />
//               {/* Add more logos as needed */}
//             </div>
//           </div>
//         </motion.div>

//         {/* Right Side Image */}
//         <motion.div
//           className={styles.imageWrapper}
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//         >
//           <Image
//             src="/assets/images/banner/hero-finance.svg"
//             alt="Financial planning"
//             width={400}
//             height={400}
//             className={styles.image}
//             priority
//           />
//         </motion.div>
//       </div>
//     </section>
//   )
// }
