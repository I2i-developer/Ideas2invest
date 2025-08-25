'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import services from '@/data/service'
import styles from './ServicesSection.module.css'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

export default function ServicesSection() {
    const [activeIndex, setActiveIndex] = useState(null)

    const toggleSubServices = (index) => {
        setActiveIndex((prev) => (prev === index ? null : index))
    }

    return (
        <section className={styles.servicesSection}>
            <div className={styles.waveTop}>
                <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <path fill="#cc1212ff" fillOpacity="1" d="M0,64L80,96C160,128,320,192,480,192C640,192,800,128,960,96C1120,64,1280,64,1360,64L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" />
                </svg>
            </div>
            <div className={styles.container}>
                <h2 className={styles.title}>Our Services</h2>
                <div className={styles.cardsGrid}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.card}>
                            <Link href={`/services/${service.slug}`} className={styles.cardContent}>
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        width={960}
                                        height={540}
                                        className={styles.image}
                                        quality={85} // Higher quality (default is 75)
                                        priority={index === 0} // Only first image loads eagerly
                                    />
                                </div>
                                {/* <div className={styles.imageWrapper}>
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        width={64}
                                        height={64}
                                        className={styles.image}
                                    />
                                </div> */}
                                <h3 className={styles.cardTitle}>{service.title}</h3>
                                <p className={styles.cardDescription}>{service.description}</p>
                            </Link>

                            {service.subServices && (
                                <div className={styles.subServicesWrapper}>
                                    <button
                                        className={styles.subToggle}
                                        onClick={() => toggleSubServices(index)}
                                    >
                                        {activeIndex === index ? 'Hide Details' : 'View All'}
                                        {activeIndex === index ? (
                                            <FaChevronUp size={14} />
                                        ) : (
                                            <FaChevronDown size={14} />
                                        )}
                                    </button>

                                    <AnimatePresence>
                                        {activeIndex === index && (
                                            <motion.ul
                                                className={styles.subServicesList}
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                {service.subServices.map((sub, subIndex) => (
                                                    <li key={subIndex} className={styles.subServiceItem}>
                                                        {sub}
                                                    </li>
                                                ))}
                                            </motion.ul>
                                        )}
                                    </AnimatePresence>
                                </div>
                            )}
                            <div className={styles.cardRibbon}></div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.waveBottom}>
                <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <path fill="#003366" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,160C672,171,768,213,864,224C960,235,1056,213,1152,192C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
                </svg>
            </div>

        </section>
    )
}
