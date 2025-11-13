"use client";
import React, { useState } from 'react';
import styles from "./ExploreFunds.module.css";
import { fundCategories, mutualFunds } from "@/data/mutualFunds";
import { IoMdSearch } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { motion } from 'framer-motion';

const ExploreMutualFunds = () => {
    const [activeCategory, setActiveCategory] = useState(fundCategories[0].id);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const fundsPerPage = 10;

    const filteredFunds = mutualFunds.filter(f =>
        f.category === activeCategory &&
        f.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const totalPages = Math.ceil(filteredFunds.length / fundsPerPage);
    const displayedFunds = filteredFunds.slice((currentPage - 1) * fundsPerPage, currentPage * fundsPerPage);

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Explore Top Mutual Funds</h2>
            <div className={styles.searchWrapper}>
                <input
                    type="text"
                    placeholder="Search Fund name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={styles.searchBar}
                />
                {searchQuery ? (
                    <span className={styles.clearIcon} onClick={() => setSearchQuery("")}>
                        <IoMdClose />
                    </span>
                ) : (
                    <span className={styles.searchIcon}>
                        <IoMdSearch />
                    </span>
                )}
            </div>

            <div className={styles.wrapper}>
                <div className={styles.sidebar}>
                    <h3 className={styles.sidebarTitle}>Categories</h3>
                    <div className={styles.categories}>
                        {fundCategories.map(cat => (
                            <div
                                key={cat.id}
                                className={`${styles.categoryItem} ${activeCategory === cat.id ? styles.active : ''}`}
                                onClick={() => { setActiveCategory(cat.id); setCurrentPage(1); }}
                            >
                                <img src={cat.icon} alt={cat.name} />
                                <span>{cat.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.panel}>
                    <div className={styles.headerRow}>
                        <span>Fund Name</span>
                        <span>Fund Size (Cr)</span>
                        <span>1Y Returns</span>
                        <span>3Y Returns</span>
                        <span>5Y Returns</span>
                    </div>

                    {displayedFunds.map((fund, idx) => (
                        <motion.div
                            className={styles.fundRow}
                            key={fund.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                        >
                            <span className={styles.fundName}>
                                <div className={styles.nameWithLogo}>
                                    <img src={fund.logo} alt={fund.name} className={styles.fundLogo} />
                                    <div>
                                        <div className={styles.fundTitle}>{fund.name}</div>
                                        <div className={styles.fundType}>{fund.type}</div>
                                    </div>
                                </div>
                            </span>

                            <span>₹ {fund.fundSize.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</span>
                            <span title="1 Year Annualized Return">{fund.returns["1Y"].toFixed(2)}%</span>
                            <span title="3 Years Annualized Return">{fund.returns["3Y"].toFixed(2)}%</span>
                            <span title="5 Years Annualized Return">{fund.returns["5Y"].toFixed(2)}%</span>
                        </motion.div>
                    ))}

                    {totalPages > 1 && (
                        <div className={styles.pagination}>
                            {Array.from({ length: totalPages }, (_, i) => (
                                <button
                                    key={i + 1}
                                    onClick={() => setCurrentPage(i + 1)}
                                    className={currentPage === i + 1 ? styles.activePage : ''}
                                >
                                    {i + 1}
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


// "use client";
// import React, { useState } from "react";
// import styles from "./ExploreFunds.module.css";
// import mutualFundData from "@/data/mutualFunds";
// import Image from "next/image";
// import { Tooltip } from "react-tooltip";

// const ExploreFunds = () => {
//   const [selectedCategory, setSelectedCategory] = useState("sip100");
//   const [searchQuery, setSearchQuery] = useState("");

//   const filteredFunds = mutualFundData.funds.filter(
//     (fund) =>
//       fund.category === selectedCategory &&
//       fund.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <section className={styles.exploreSection}>
//       <h2 className={styles.heading}>Explore Mutual Funds</h2>

//       <div className={styles.searchWrapper}>
//         <input
//           type="text"
//           placeholder="Search Fund Name..."
//           className={styles.searchBar}
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//       </div>

//       <div className={styles.container}>
//         {/* Sidebar */}
//         <aside className={styles.sidebar}>
//           <p className={styles.sidebarTitle}>Categories</p>
//           {mutualFundData.categories.map((cat) => (
//             <div
//               key={cat.id}
//               className={`${styles.categoryItem} ${
//                 cat.id === selectedCategory ? styles.active : ""
//               }`}
//               onClick={() => setSelectedCategory(cat.id)}
//             >
//               <Image src={cat.icon} alt={cat.label} width={24} height={24} />
//               <span>{cat.label}</span>
//             </div>
//           ))}
//         </aside>

//         {/* Fund Table */}
//         <div className={styles.fundPanel}>
//           <div className={styles.tableHeader}>
//             <span>Fund Name</span>
//             <span>Fund Size (Cr)</span>
//             <span>1Y Returns</span>
//             <span>3Y Returns</span>
//             <span>5Y Returns</span>
//           </div>

//           {filteredFunds.map((fund) => (
//             <div className={styles.fundRow} key={fund.id}>
//               <div className={styles.fundDetails}>
//                 <Image src={fund.logo} alt={fund.name} width={30} height={30} />
//                 <div>
//                   <strong>{fund.name}</strong>
//                   <div className={styles.fundType}>{fund.type}</div>
//                 </div>
//               </div>
//               <div>₹{fund.fundSize.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</div>
//               <div data-tooltip-id="tooltip" data-tooltip-content="Annualized Return">
//                 {fund.returns["1Y"].toFixed(2)}%
//               </div>
//               <div data-tooltip-id="tooltip" data-tooltip-content="Annualized Return">
//                 {fund.returns["3Y"].toFixed(2)}%
//               </div>
//               <div data-tooltip-id="tooltip" data-tooltip-content="Annualized Return">
//                 {fund.returns["5Y"].toFixed(2)}%
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <Tooltip id="tooltip" />
//       <div className={styles.allFundsBtn}>
//         <button>Explore All Mutual Funds</button>
//       </div>
//     </section>
//   );
// };

// export default ExploreFunds;
