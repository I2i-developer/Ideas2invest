import { blogs } from "@/data/blogs";
import BlogMain from "@/components/BlogPage/BlogMain";
import BlogSidebar from "@/components/BlogPage/BlogSidebar";
import styles from "@/components/BlogPage/BlogPage.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Topbar from "@/components/Topbar/Topbar";
import Footer from "@/components/Footer/Footer";
import BreadcrumbStrip from "@/components/BreadcrumbStrip/BreadcrumbStrip";
import JsonLd from "@/components/JsonLd/JsonLd";
import { createArticleSchema } from "@/utils/schema";
import { createArticleMetadata, createPageMetadata } from "@/utils/metadata";

// export async function generateMetadata({ params }) {
//   const { slug } = await params;
//   const blog = blogs.find((b) => b.slug === slug);
//   return {
//     title: blog?.title || "Ideas2Invest Blog",
//     description: blog?.description || "",
//     openGraph: {
//       title: blog?.title,
//       description: blog?.description,
//       images: [blog?.poster],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: blog?.title,
//       description: blog?.description,
//       images: [blog?.poster],
//     },
//   };
// }

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
  // Await params to access slug
  const { slug } = await params;

  // Find the blog post
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return <p>Blog not found.</p>;

  // Get related blogs
  const relatedBlogs = blogs.filter((b) => b.slug !== blog.slug);

  return (
    <>
      <JsonLd data={createArticleSchema(blog)} />
      <Topbar />
      <Navbar />
      {/* <BreadcrumbStrip pageKey="blogs/[slug]" /> */}
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
// export default function BlogPage({ params }) {
  
//   const blog = blogs.find((b) => b.slug === params.slug);

//   if (!blog) return <p>Blog not found.</p>;

//   const relatedBlogs = blogs.filter((b) => b.slug !== blog.slug);

//   return (
//     <>
//       <Topbar />
//       <Navbar />
//       {/* <BreadcrumbStrip pageKey="blogs/[slug]" /> */}
//       <div className={styles.blogContainer}>
//         <div className={styles.left}>
//           <BlogMain blog={blog} />
//         </div>
//         <div className={styles.right}>
//           <BlogSidebar relatedBlogs={relatedBlogs} />
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }
