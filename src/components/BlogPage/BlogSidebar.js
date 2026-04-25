"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useMemo } from "react";
import styles from "./BlogPage.module.css";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";

export default function BlogSidebar({ relatedBlogs, currentSlug }) {
  const [blogUrl, setBlogUrl] = useState("");

  useEffect(() => {
    setBlogUrl(window.location.href);
  }, []);
  const randomBlogs = useMemo(() => {
    // 1. remove current blog
    const filtered = relatedBlogs.filter(
      (blog) => blog.slug !== currentSlug
    );

    // 2. shuffle (Fisher–Yates)
    const shuffled = [...filtered];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    // 3. take 6
    return shuffled.slice(0, 6);
  }, [relatedBlogs, currentSlug]);

  return (
    <aside className={styles.sidebar}>
      <section>
        <h3>Related Blogs</h3>
        {randomBlogs.map((blog) => (
          <Link
            key={blog.slug}
            href={`/blogs/${blog.slug}`}
            className={styles.relatedItem}
          >
            <Image src={blog.poster} alt={blog.title} width={60} height={60} />
            <div>
              <p>{blog.title}</p>
              <span>{blog.date}</span>
            </div>
          </Link>
        ))}
      </section>

      <section className={styles.shareSection}>
        <h3>Share This Blog</h3>
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
            aria-label="Share on X"
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
            aria-label="Visit our Instagram"
            className={styles.instagram}
          >
            <FaInstagram />
          </a>

        </div>
      </section>
    </aside>
  );
}

// import Link from "next/link";
// import Image from "next/image";
// import styles from "./BlogPage.module.css";

// export default function BlogSidebar({ relatedBlogs }) {
//   return (
//     <aside className={styles.sidebar}>
//       <section>
//         <h3>Related Blogs</h3>
//         {relatedBlogs.slice(0, 6).map((blog) => (
//           <Link key={blog.slug} href={`/blogs/${blog.slug}`} className={styles.relatedItem}>
//             <Image src={blog.poster} alt={blog.title} width={60} height={60} />
//             <div>
//               <p>{blog.title}</p>
//               <span>{blog.date}</span>
//             </div>
//           </Link>
//         ))}
//       </section>

//       <section className={styles.shareSection}>
//         <h3>Share This Blog</h3>
//         <div className={styles.shareIcons}>
//           <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(process.env.NEXT_PUBLIC_SITE_URL + '/blog/' + relatedBlogs.slug)}`} target="_blank">FB</a>
//           <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(process.env.NEXT_PUBLIC_SITE_URL + '/blog/' + relatedBlogs.slug)}`} target="_blank">X</a>
//           <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(process.env.NEXT_PUBLIC_SITE_URL + '/blog/' + relatedBlogs.slug)}`} target="_blank">IN</a>
//         </div>
//       </section>
//     </aside>
//   );
// }
