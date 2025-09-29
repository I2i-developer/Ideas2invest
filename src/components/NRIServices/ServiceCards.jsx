import Link from "next/link";
import styles from "./NriServices.module.css";

export default function ServiceCards() {
  const services = [
    {
      title: "Gift City",
      desc: "Leverage India’s International Financial Services Centre for tax-efficient investments and global opportunities.",
      link: "/nri-services/gift-city",
      img: "/images/nri/gift-city.jpg",
      alt: "Gift City for NRIs"
    },
    {
      title: "NRI Taxation",
      desc: "Navigate Indian and global taxation with clarity and compliance, tailored for NRIs across the globe.",
      link: "/nri-services/nri-taxation",
      img: "/images/nri/taxation.jpg",
      alt: "NRI Taxation Guidance"
    },
    {
      title: "Investments for NRIs",
      desc: "Explore safe and high-return investment options in India curated exclusively for Non-Resident Indians.",
      link: "/nri-services/investments-for-nris",
      img: "/images/nri/investments.jpg",
      alt: "NRI Investment Options"
    },
  ];

  return (
    <section id="services" className={styles.services}>
      <h2>Our Specialized NRI Services</h2>
      <div className={styles.cardGrid}>
        {services.map((s, i) => (
          <article key={i} className={styles.card}>
            <div className={styles.cardBody}>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <Link href={s.link} className={styles.cardBtn}>
                Learn More →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
