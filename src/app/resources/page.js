import Blogs from "@/components/Blogs/Blogs";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import ResourcesSection from "@/components/Resources/Resources";
import Topbar from "@/components/Topbar/Topbar";
import { createPageMetadata } from "@/utils/metadata";

export const metadata = createPageMetadata({
  title: "Resources & Downloads | Ideas2Invest",
  description:
    "Download important Ideas2Invest investment forms, mutual fund factsheets, compliance documents, and useful resources.",
  canonical: "https://www.ideas2invest.com/resources",
});

export default function Resources () {
  return (
      <>
        <Topbar />
        <Navbar />
        <ResourcesSection />
        <Blogs />
        <Footer />
      </>
  )
}
