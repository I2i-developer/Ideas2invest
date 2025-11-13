import { blogs } from "@/data/blogs";
import BlogMain from "@/components/BlogPage/BlogMain";
import BlogSidebar from "@/components/BlogPage/BlogSidebar";
import styles from "@/components/BlogPage/BlogPage.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Topbar from "@/components/Topbar/Topbar";
import Footer from "@/components/Footer/Footer";
import BreadcrumbStrip from "@/components/BreadcrumbStrip/BreadcrumbStrip";

export async function generateMetadata({ params }) {
  const blog = blogs.find((b) => b.slug === params.slug);
  return {
    title: blog?.title || "Ideas2Invest Blog",
    description: blog?.description || "",
    openGraph: {
      title: blog?.title,
      description: blog?.description,
      images: [blog?.poster],
    },
    twitter: {
      card: "summary_large_image",
      title: blog?.title,
      description: blog?.description,
      images: [blog?.poster],
    },
  };
}

export default function BlogPage({ params }) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) return <p>Blog not found.</p>;

  const relatedBlogs = blogs.filter((b) => b.slug !== blog.slug);

  return (
    <>
      <Topbar />
      <Navbar />
      {/* <BreadcrumbStrip /> */}
      <div className={styles.blogContainer}>
        <div className={styles.left}>
          <BlogMain blog={blog} />
        </div>
        <div className={styles.right}>
          <BlogSidebar relatedBlogs={relatedBlogs} />
        </div>
      </div>
      <Footer />
    </>
  );
}
