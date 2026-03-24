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

  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScroll(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderHTML = (text) => (
    <span dangerouslySetInnerHTML={{ __html: text }} />
  );

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
    <>
    {/* Progress Bar Container */}
    <div className={styles.progressContainer}>
      <div 
        className={styles.progressBar} 
        style={{ width: `${scroll}%` }} 
      />
    </div>
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

      {/* <Image
        src={blog.poster}
        alt={blog.title}
        width={700}
        height={300}
        className={styles.poster}
      /> */}
      <div className={styles.imageWrapper}>
        <Image
          src={blog.poster}
          alt={blog.title}
          fill
          className={styles.poster}
        />
      </div>

      <div className={styles.content}>
        {blog.content.map((block, i) => {
          switch (block.type) {

            case "heading":
              return <h2 key={i}>{renderHTML(block.text)}</h2>;

            case "paragraph":
              return <p key={i}>{renderHTML(block.text)}</p>;

            case "subheading":
              return (
                <h3 key={i}>
                  <span className={styles.points}>• </span>
                  {renderHTML(block.text)}
                </h3>
              );

            case "quote":
              return (
                <blockquote key={i} className={styles.quote}>
                  <p>{renderHTML(block.text)}</p>
                  {block.author && <span>- {block.author}</span>}
                </blockquote>
              );

            case "highlight":
              return (
                <div key={i} className={styles.highlight}>
                  {renderHTML(block.text)}
                </div>
              );

            case "warning":
              return (
                <div key={i} className={styles.warning}>
                  ⚠️ {renderHTML(block.text)}
                </div>
              );

            case "tip":
              return (
                <div key={i} className={styles.tipBox}>
                  💡 {renderHTML(block.text)}
                </div>
              );

            case "conclusion":
              return (
                <div key={i} className={styles.conclusionBox}>
                  <h3>Conclusion</h3>
                  <p>{renderHTML(block.text)}</p>
                </div>
              );

            case "tooltip":
              return (
                <div key={i} className={styles.tooltipBox}>
                  <span className={styles.tooltipLabel}>{block.label}</span>
                  <span className={styles.tooltipText}>
                    {renderHTML(block.text)}
                  </span>
                </div>
              );

            case "faq":
              return (
                <div key={i} className={styles.faq}>
                  <h4>{block.question}</h4>
                  <p>{renderHTML(block.answer)}</p>
                </div>
              );

            case "cta":
              return (
                <div key={i} className={styles.ctaBox}>
                  <p>{renderHTML(block.text)}</p>
                  <a href={block.href} className={styles.ctaButton} target="_blank">
                    {block.buttonText}
                  </a>
                </div>
              );

            default:
              return null;
          }
        })}
      </div>
      {blog.actions && (
        <div className={styles.ctaActions}>
          {blog.actions.primary && (
            <a
              href={blog.actions.primary.href}
              className={styles.primaryBtn}
              target="_blank"
            >
              {blog.actions.primary.label}
            </a>
          )}
          {blog.actions.secondary && (
            <a
              href={blog.actions.secondary.href}
              className={styles.secondaryBtn}
              target="_blank"
            >
              {blog.actions.secondary.label}
              <span className={styles.arrow}>›</span>
            </a>
          )}
        </div>
      )}
    </article>
    </>
  );
}
