"use client";
import React, { useState, useMemo } from "react";
import styles from "./Resources.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { SAMPLE_DOCUMENTS, CATEGORIES } from "@/data/resources";

export default function ResourcesSection() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);
  const [searchQuery, setSearchQuery] = useState("");

  // const filteredDocs = useMemo(() => {
  //   return SAMPLE_DOCUMENTS.filter(
  //     (doc) =>
  //       doc.category === activeCategory &&
  //       doc.title.toLowerCase().includes(searchQuery.toLowerCase())
  //   );
  // }, [activeCategory, searchQuery]);
  
  const filteredDocs = useMemo(() => {
    return SAMPLE_DOCUMENTS.filter((doc) => {
      const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = searchQuery
        ? true // if searching → include all categories
        : doc.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section className={styles.resourcesSection}>
      <div className={styles.header}>
        <h2>Resources & Downloads</h2>
        <p>Download important investment forms, factsheets & compliance documents.</p>
      </div>

      <div className={styles.container}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          {CATEGORIES.map((cat) => (
            <div
              key={cat}
              className={`${styles.categoryItem} ${
                cat === activeCategory ? styles.active : ""
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </div>
          ))}
        </aside>

        {/* Main Content */}
        <div className={styles.contentArea}>
          <div className={styles.inputContainer}>
            <input
              type="text"
              placeholder=""
              className={styles.searchBar}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <label className={styles.floatingLabel}>Search a Document</label>
          </div>

          <div className={styles.grid}>
            <AnimatePresence>
              {filteredDocs.map((doc) => (
                <motion.a
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={doc.id}
                  className={styles.card}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <img
                    src={doc.logo}
                    alt={doc.publisher}
                    className={styles.logo}
                  />
                  <h4 className={styles.cardTitle}>{doc.title}</h4>
                  <div className={styles.docInfo}>
                    <span>{doc.type}</span>
                    <span>{doc.size}</span>
                  </div>
                  <small className={styles.date}>
                    Updated: {doc.updatedAt}
                  </small>
                </motion.a>
              ))}
            </AnimatePresence>

            {filteredDocs.length === 0 && (
              <p className={styles.noResult}>No documents found.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
