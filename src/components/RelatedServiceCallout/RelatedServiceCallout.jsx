import Link from "next/link";
import styles from "./RelatedServiceCallout.module.css";

export default function RelatedServiceCallout({ description, headingId = "related-sif-title" }) {
  return (
    <aside className={styles.callout} aria-labelledby={headingId}>
      <div>
        <p className={styles.label}>New investment category</p>
        <h2 id={headingId}>Explore Specialized Investment Funds</h2>
        <p>{description}</p>
      </div>
      <Link href="/services/specialized-investment-funds">Learn about SIF</Link>
    </aside>
  );
}

