import Blogs from "@/components/Blogs/Blogs";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import NewsSection from "@/components/NewsSection/NewsSection";
import Topbar from "@/components/Topbar/Topbar";

export default function NewsUpdates() {
  return (
    <>
      <Topbar />
      <Navbar />
      <NewsSection />
      <Blogs />
      <Footer />
    </>
  )
}