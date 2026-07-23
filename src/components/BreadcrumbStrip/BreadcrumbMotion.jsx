"use client";

import { motion } from "framer-motion";

export default function BreadcrumbMotion({ className, children }) {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.section>
  );
}
