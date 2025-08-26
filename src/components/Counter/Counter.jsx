"use client";
import styles from "./Counter.module.css";
import { useEffect, useState, useRef } from "react";
import counterData from "@/data/counterData";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const Counter = ({ number, suffix, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const end = parseInt(number);
    const duration = 3000;
    const incrementTime = 20;
    const increment = Math.ceil(end / (duration / incrementTime));

    const timer = setInterval(() => {
      start += increment;
      if (start > end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [number, inView]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const CounterSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.4 });

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.overlay} />

      <div className={styles.content}>
        <h2 className={styles.heading}>By the Numbers</h2>
        <p className={styles.subheading}>
          Our proven track record and trusted partnerships speak for themselves
        </p>

        {/* <div className={styles.container}>
          {counterData.map((item, index) => (
            <motion.div
              key={item.id + "-" + inView}
              className={styles.counterCard}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={styles.icon}>{item.icon}</div>
              <h3 className={styles.counter}>
                <Counter number={item.number} suffix={item.suffix} inView={inView} />
              </h3>
              <p className={styles.label}>{item.label}</p>
            </motion.div>
          ))}
        </div> */}
        <div className={styles.container}>
          {counterData.map((item, index) => (
            <motion.div
              key={item.id}
              className={styles.counterCard}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={styles.iconWrap}>
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={60}
                  height={60}
                  className={styles.counterIcon}
                />
              </div>

              <h3 className={styles.counter}>
                <Counter number={item.number} suffix={item.suffix} inView={inView} />
              </h3>
              <p className={styles.label}>{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
