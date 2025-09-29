"use client";
import { useState } from "react";
import styles from "./NriServices.module.css";

export default function Faq() {
  const faqs = [
    {
      q: "Can NRIs invest in Gift City?",
      a: "Yes, NRIs can invest in Gift City which offers tax-efficient and globally accessible financial products designed for international investors.",
    },
    {
      q: "How is NRI taxation different from resident taxation?",
      a: "NRI taxation in India follows specific rules under the Income Tax Act. Income earned or accrued in India is taxable, while foreign income is exempt.",
    },
    {
      q: "What are the best investment options for NRIs in India?",
      a: "Mutual funds, NRE/NRO deposits, equity investments, and Gift City opportunities are among the most preferred investment avenues for NRIs.",
    },
    {
      q: "Do NRIs need to file income tax in India?",
      a: "NRIs must file income tax returns in India if their taxable income in India exceeds the basic exemption limit or if they have capital gains.",
    },
    {
      q: "Can NRIs repatriate their investment returns abroad?",
      a: "Yes, NRIs can repatriate their investment returns abroad, subject to FEMA regulations and the type of account (NRE/NRO/FCNR).",
    },
  ];

  const [active, setActive] = useState(null);

  return (
    <section className={styles.faq}>
      <h2>Frequently Asked Questions</h2>
      <div className={styles.faqList}>
        {faqs.map((item, index) => (
          <div
            key={index}
            className={`${styles.faqItem} ${
              active === index ? styles.active : ""
            }`}
          >
            <button
              className={styles.faqQuestion}
              onClick={() => setActive(active === index ? null : index)}
              aria-expanded={active === index}
            >
              {item.q}
            </button>
            {active === index && (
              <div className={styles.faqAnswer}>
                <p>{item.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
