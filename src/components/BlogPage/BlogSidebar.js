import Link from "next/link";
import Image from "next/image";
import styles from "./BlogPage.module.css";

export default function BlogSidebar({ relatedBlogs }) {
  return (
    <aside className={styles.sidebar}>
      <section>
        <h3>Related Blogs</h3>
        {relatedBlogs.slice(0, 4).map((blog) => (
          <Link key={blog.slug} href={`/blog/${blog.slug}`} className={styles.relatedItem}>
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
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(process.env.NEXT_PUBLIC_SITE_URL + '/blog/' + relatedBlogs.slug)}`} target="_blank">FB</a>
          <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(process.env.NEXT_PUBLIC_SITE_URL + '/blog/' + relatedBlogs.slug)}`} target="_blank">X</a>
          <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(process.env.NEXT_PUBLIC_SITE_URL + '/blog/' + relatedBlogs.slug)}`} target="_blank">IN</a>
        </div>
      </section>
    </aside>
  );
}
