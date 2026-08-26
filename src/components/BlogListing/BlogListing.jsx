import Link from "next/link";
import { blogs } from "@/data/blogs";
import styles from "./BlogListing.module.css";

const getPrimaryCategory = (category) => {
  if (Array.isArray(category)) return category[0];
  return category || "Insights";
};

const getIsoDate = (date) => {
  if (!date) return undefined;
  const match = date.match(/^(\d{2})-(\d{2})-(\d{4})$/);
  if (!match) return date;
  const [, day, month, year] = match;
  return `${year}-${month}-${day}`;
};

export default function BlogListing() {
  return (
    <section className={styles.section} aria-labelledby="blogs-heading">
      <div className={styles.header}>
        <span className={styles.eyebrow}>Ideas2Invest Blog</span>
        <h2 id="blogs-heading">Latest Financial Insights & Articles</h2>
        <p>
          Explore practical guides on mutual funds, SIPs, investing behaviour, tax planning,
          portfolio strategy, and long-term wealth building.
        </p>
      </div>

      <div className={styles.grid}>
        {blogs.map((blog) => {
          const category = getPrimaryCategory(blog.category);
          const isoDate = getIsoDate(blog.date);

          return (
            <article className={styles.card} key={blog.slug}>
              <Link href={`/blogs/${blog.slug}`} className={styles.imageLink} aria-label={blog.title}>
                <img src={blog.poster} alt={blog.title} />
                <span className={styles.category}>{category}</span>
              </Link>

              <div className={styles.content}>
                {(blog.date || blog.readTime) && (
                  <div className={styles.meta}>
                    {blog.date && <time dateTime={isoDate}>{blog.date}</time>}
                    {blog.date && blog.readTime && <span aria-hidden="true">•</span>}
                    {blog.readTime && <span>{blog.readTime}</span>}
                  </div>
                )}

                <h3>
                  <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
                </h3>

                <p>{blog.description}</p>

                <Link href={`/blogs/${blog.slug}`} className={styles.readMore}>
                  Read More
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
