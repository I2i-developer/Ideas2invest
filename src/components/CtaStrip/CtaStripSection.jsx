import styles from './CtaStripSection.module.css';
import Image from 'next/image';
import Link from 'next/link';

const CtaStripSection = () => {
  return (
    <section className={styles.ctaStrip}>
      <div className={styles.container}>
        {/* Left Text Content */}
        <div className={styles.left}>
          <h2 className={styles.title}>Take Charge of Your Financial Future</h2>
          <p className={styles.subtitle}>Get expert advice and start investing with confidence today.</p>
          <Link href="/contact" className={styles.ctaButton}>Get Started</Link>
        </div>

        {/* Right Image Content */}
        <div className={styles.right}>
          <div className={styles.glowWrapper}>
            <Image
              src="/assets/images/icons/cta1.svg"
              alt="Financial Planning Visual"
              className={styles.image}
              width={500}
              height={300}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaStripSection;
