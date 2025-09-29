import styles from "./NriServices.module.css";

export default function WhyChoose() {
  const benefits = [
    {
      id: 1,
      title: "15+ Years of Expertise",
      description:
        "Proven experience in NRI wealth management, investment advisory, and tax compliance.",
      icon: "/assets/images/icons/expertise.svg",
    },
    {
      id: 2,
      title: "Trusted by NRIs Worldwide",
      description:
        "Serving clients across 20+ countries with secure, compliant, and personalized investment solutions.",
      icon: "/assets/images/icons/trusted.svg",
    },
    {
      id: 3,
      title: "Tailored Solutions",
      description:
        "Customized strategies for wealth creation, retirement planning, and cross-border investment management.",
      icon: "/assets/images/icons/tailored.svg",
    },
    {
      id: 4,
      title: "Global Compliance & Tax Efficiency",
      description:
        "Expert guidance on NRI taxation, DTAA benefits, and repatriation under FEMA regulations.",
      icon: "/assets/images/icons/compliance.svg",
    },
    {
      id: 5,
      title: "Seamless Access to GIFT City Investments",
      description:
        "Invest in USD-denominated Indian equities, bonds, mutual funds, and AIFs through IFSC with ease.",
      icon: "/assets/images/icons/giftcity.svg",
    },
  ];

  return (
    <section className={styles.whyChoose}>
      <h2 className={styles.heading}>
        Why Choose Ideas2Invest for NRI Financial Services?
      </h2>
      <p className={styles.subHeading}>
        Unlock hassle-free investment, taxation, and compliance solutions tailored for Non-Resident Indians.
      </p>
      <div className={styles.whyGrid}>
        {benefits.map((benefit) => (
          <article key={benefit.id} className={styles.card}>
            {/* <img src={benefit.icon} alt={`${benefit.title} icon`} className={styles.icon} /> */}
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
