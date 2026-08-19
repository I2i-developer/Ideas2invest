"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoMdClose, IoMdSearch } from "react-icons/io";
import { fundCategories, mutualFunds } from "@/data/mutualFunds";
import styles from "./ExploreFunds.module.css";

const ExploreMutualFunds = () => {
  const [activeCategory, setActiveCategory] = useState(fundCategories[0].id);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const fundsPerPage = 10;

  const filteredFunds = mutualFunds.filter(
    (fund) =>
      fund.category === activeCategory &&
      fund.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredFunds.length / fundsPerPage);
  const displayedFunds = filteredFunds.slice(
    (currentPage - 1) * fundsPerPage,
    currentPage * fundsPerPage
  );

  const updateCategory = (categoryId) => {
    setActiveCategory(categoryId);
    setCurrentPage(1);
  };

  const updateSearch = (value) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  return (
    <div id="explore-funds" className={styles.container}>
      <h2 className={styles.heading}>Explore Top Mutual Funds</h2>

      <div className={styles.searchWrapper}>
        <input
          type="text"
          placeholder="Search Fund name..."
          value={searchQuery}
          onChange={(event) => updateSearch(event.target.value)}
          className={styles.searchBar}
          aria-label="Search mutual funds by name"
        />
        {searchQuery ? (
          <button
            type="button"
            className={styles.clearIcon}
            onClick={() => updateSearch("")}
            aria-label="Clear fund search"
          >
            <IoMdClose />
          </button>
        ) : (
          <span className={styles.searchIcon}>
            <IoMdSearch />
          </span>
        )}
      </div>

      <div className={styles.wrapper}>
        <aside className={styles.sidebar}>
          <h3 className={styles.sidebarTitle}>Categories</h3>
          <div className={styles.categories}>
            {fundCategories.map((category) => (
              <button
                type="button"
                key={category.id}
                className={`${styles.categoryItem} ${
                  activeCategory === category.id ? styles.active : ""
                }`}
                onClick={() => updateCategory(category.id)}
                aria-pressed={activeCategory === category.id}
              >
                <img src={category.icon} alt={category.name} />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </aside>

        <div className={styles.panel}>
          <div className={styles.headerRow}>
            <span>Fund Name</span>
            <span>Fund Size (Cr)</span>
            <span>1Y Returns</span>
            <span>3Y Returns</span>
            <span>5Y Returns</span>
          </div>

          {displayedFunds.map((fund, index) => (
            <motion.div
              className={styles.fundRow}
              key={fund.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <div className={styles.fundName}>
                <div className={styles.nameWithLogo}>
                  <img src={fund.logo} alt={fund.name} className={styles.fundLogo} />
                  <div>
                    <div className={styles.fundTitle}>{fund.name}</div>
                    <div className={styles.fundType}>{fund.type}</div>
                  </div>
                </div>
              </div>

              <span>
                Rs. {fund.fundSize.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
              </span>
              <span title="1 Year Annualized Return">{fund.returns["1Y"].toFixed(2)}%</span>
              <span title="3 Years Annualized Return">{fund.returns["3Y"].toFixed(2)}%</span>
              <span title="5 Years Annualized Return">{fund.returns["5Y"].toFixed(2)}%</span>
            </motion.div>
          ))}

          {totalPages > 1 && (
            <div className={styles.pagination}>
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  type="button"
                  key={index + 1}
                  onClick={() => setCurrentPage(index + 1)}
                  className={currentPage === index + 1 ? styles.activePage : ""}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExploreMutualFunds;
