import { blogs } from "@/data/blogs";
import BlogMain from "@/components/BlogPage/BlogMain";
import BlogSidebar from "@/components/BlogPage/BlogSidebar";
import styles from "@/components/BlogPage/BlogPage.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Topbar from "@/components/Topbar/Topbar";
import Footer from "@/components/Footer/Footer";
import JsonLd from "@/components/JsonLd/JsonLd";
import { createBlogSchemaGraph } from "@/utils/schema";
import { createArticleMetadata, createPageMetadata } from "@/utils/metadata";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

function parseDateValue(date) {
  const match = /^(\d{2})-(\d{2})-(\d{4})$/.exec(date || "");
  if (!match) return 0;
  return new Date(`${match[3]}-${match[2]}-${match[1]}T00:00:00Z`).getTime();
}

function getRelatedBlogs(currentBlog) {
  const currentCategories = new Set(currentBlog.category || []);

  return blogs
    .filter((blog) => blog.slug !== currentBlog.slug)
    .map((blog) => ({
      blog,
      score: (blog.category || []).filter((category) =>
        currentCategories.has(category)
      ).length,
    }))
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return parseDateValue(b.blog.date) - parseDateValue(a.blog.date);
    })
    .slice(0, 6)
    .map(({ blog }) => blog);
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return createPageMetadata({
      title: "Ideas2Invest Blog",
      description: "",
      canonical: "https://www.ideas2invest.com/blogs",
    });
  }

  return {
    metadataBase: new URL('https://www.ideas2invest.com'),
    ...createArticleMetadata(blog),
  };
}

export default async function BlogPage({ params }) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) notFound();

  const relatedBlogs = getRelatedBlogs(blog);

  return (
    <>
      <JsonLd data={createBlogSchemaGraph(blog)} />
      <Topbar />
      <Navbar />
      <div className={styles.blogContainer}>
        <div className={styles.left}>
          <BlogMain blog={blog} />
        </div>
        <div className={styles.right}>
          <BlogSidebar relatedBlogs={relatedBlogs} currentSlug={blog.slug} />
        </div>
      </div>
      <Footer />
    </>
  );
}
