import Blogs from "@/components/Blogs/Blogs";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import NewsSection from "@/components/NewsSection/NewsSection";
import Topbar from "@/components/Topbar/Topbar";
import { createPageMetadata } from "@/utils/metadata";

export const metadata = createPageMetadata({
  title: "News & Updates | Ideas2Invest",
  description:
    "Read Ideas2Invest market updates, financial news, and recent investment insights to stay informed.",
  canonical: "https://www.ideas2invest.com/news-updates",
});

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
