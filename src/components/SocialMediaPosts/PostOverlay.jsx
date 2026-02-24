'use client';

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./SocialMediaPosts.module.css";

const PostOverlay = ({ post, onClose }) => {
  return (
    <AnimatePresence>
      {post && (
        <motion.div
          className={styles.overlayBackdrop}
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={styles.overlayContent}
            onClick={(e) => e.stopPropagation()}
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 60, opacity: 0 }}
          >
            <button className={styles.closeBtn} onClick={onClose}>✕</button>

            <div className={styles.overlayImage}>
              <Image src={post.image} alt={post.headline} fill />
            </div>

            <div className={styles.overlayBody}>
              <h3>{post.headline}</h3>
              <p>{post.body}</p>

              <div className={styles.hashtags}>
                {post.hashtags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>

              {post.buttonLink && (
                <Link href={post.buttonLink} className={styles.button}>
                  {post.buttonText || "Learn More"}
                </Link>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PostOverlay;
