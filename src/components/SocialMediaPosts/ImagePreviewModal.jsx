'use client';

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import styles from "./SocialMediaPosts.module.css";

const ImagePreviewModal = ({ image, onClose }) => {
  return (
    <AnimatePresence>
      {image && (
        <motion.div
          className={styles.modalOverlay}
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.85 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.85 }}
          >
            <button className={styles.closeBtn} onClick={onClose}>✕</button>
            <Image src={image} alt="Post Preview" fill className={styles.modalImage} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImagePreviewModal;
