"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./BlogPage.module.css";
import { FaWhatsapp, FaFacebookF, FaLinkedinIn, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { FiShare2 } from "react-icons/fi";
import { FiCopy } from "react-icons/fi";

export default function BlogMain({ blog }) {
  const [showShare, setShowShare] = useState(false);
  const [copied, setCopied] = useState(false);
  const shareRef = useRef(null);
//   const blogUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${blog.slug}`;
  const blogUrl = typeof window !== "undefined" ? window.location.href : "";

  // 📌 Handle Copy
  const handleCopy = () => {
    navigator.clipboard.writeText(blogUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

   // 📌 Detect click outside to close share popup
  useEffect(() => {
    function handleClickOutside(e) {
      if (shareRef.current && !shareRef.current.contains(e.target)) {
        setShowShare(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <article className={styles.blogMain}>
      <h1 className={styles.title}>{blog.title}</h1>
      <div className={styles.meta}>
        <span>{blog.date} </span>
        <span>• {blog.readTime}</span>
      </div>
      
      <div className={styles.tagsWrapper}>
      <div className={styles.tags}>
        {blog.category.map((tag, i) => (
          <span key={i} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>

      <div className={styles.shareContainer} ref={shareRef}>
        <div className={styles.tooltipWrapper}>
            <button
            className={styles.shareButton}
            onClick={() => setShowShare((prev) => !prev)}
            aria-label="Share this blog"
            >
          <FiShare2 size={18} />
          </button>
          <span className={styles.tooltip}> Share this blog</span>
        </div>

        {showShare && (
          <div className={styles.sharePopup}>
            <div className={styles.shareIcons}>
              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(blogUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on WhatsApp"
                className={styles.whatsapp}
              >
                <FaWhatsapp />
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(blogUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Facebook"
                className={styles.facebook}
              >
                <FaFacebookF />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(blogUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on X (Twitter)"
                className={styles.twitter}
              >
                <FaXTwitter />
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(blogUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on LinkedIn"
                className={styles.linkedin}
              >
                <FaLinkedinIn />
              </a>
              <a
                href={`https://www.instagram.com/?url=${encodeURIComponent(blogUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Instagram"
                className={styles.instagram}
              >
                <FaInstagram />
              </a>
            </div>

            <div className={styles.copySection}>
              <span className={styles.blogUrl}>{blogUrl}</span>
              <button onClick={handleCopy} className={styles.copyButton}>
                <FiCopy size={16} /> {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>

      <Image
        src={blog.poster}
        alt={blog.title}
        width={700}
        height={300}
        className={styles.poster}
      />

      <div className={styles.content}>
        {blog.content.map((section, i) => (
          <div key={i} className={styles.section}>
            <h2>{section.heading}</h2>
            {section.paragraph && <p>{section.paragraph}</p>}
            {section.subheadings &&
              section.subheadings.map((sub, j) => (
                <div key={j} className={styles.subsection}>
                  <h3><span  className={styles.points}>• </span>{sub.title}</h3>
                  <p>{sub.paragraph}</p>
                </div>
              ))}
          </div>
        ))}
      </div>
    </article>
  );
}
