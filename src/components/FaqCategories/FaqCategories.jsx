'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./FaqCategories.module.css";
import { faqData } from "@/data/faqData";

export default function FaqPage() {
  const [selectedCategory, setSelectedCategory] = useState(faqData[0].category);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeIndex, setActiveIndex] = useState(null);

  const filteredItems = faqData
    .find((cat) => cat.category === selectedCategory)
    ?.items.filter((item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  const toggleAnswer = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className={styles.faqContainer}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          Frequently Asked Questions (FAQs)
        </motion.h1>
        <p>
          Get answers to commonly asked questions about Mutual Funds, Insurance,
          and Investments.
        </p>
      </section>

      {/* Search */}
      {/* <div className={styles.searchWrapper}>
        <input
          type="text"
          placeholder="Search your question..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
      </div> */}

      {/* Category Tabs */}
      <div className={styles.categories}>
        {faqData.map((cat) => (
          <button
            key={cat.category}
            className={`${styles.categoryBtn} ${
              selectedCategory === cat.category ? styles.active : ""
            }`}
            onClick={() => {
              setSelectedCategory(cat.category);
              setActiveIndex(null);
              setSearchTerm("");
            }}
          >
            {cat.category}
          </button>
        ))}
      </div>

      {/* FAQ Accordion */}
      <div className={styles.accordion}>
        {filteredItems.length > 0 ? (
          filteredItems.map((faq, index) => (
            <motion.div
              key={index}
              className={styles.faqItem}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div
                className={styles.question}
                onClick={() => toggleAnswer(index)}
              >
                <span>{faq.question}</span>
                <span className={styles.icon}>
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    className={styles.answer}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))
        ) : (
          <p className={styles.noResult}>No questions found.</p>
        )}
      </div>

      {/* CTA */}
      <div className={styles.cta}>
        <h3>Still have questions?</h3>
        <p>Contact our support team for personalized guidance.</p>
        <a href="/contact" className={styles.ctaBtn}>Contact Us</a>
      </div>
    </div>
  );
}
