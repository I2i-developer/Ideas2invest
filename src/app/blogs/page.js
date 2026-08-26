import Navbar from "@/components/Navbar/Navbar";
import Topbar from "@/components/Topbar/Topbar";
import StartSIPSection from "@/components/StartSIPSection/StartSIPSection";
import DownloadAppSection from "@/components/DownloadApp/DownloadAppSection";
import BlogListing from "@/components/BlogListing/BlogListing";
import Footer from "@/components/Footer/Footer";
import FAQContactSection from "@/components/FaqAndContact/FaqAndContact";
import BannerSection from "@/components/BannerSection/BannerSection";
import BreadcrumbStrip from "@/components/BreadcrumbStrip/BreadcrumbStrip";
import seoData from "@/data/seoData";
import { createPageMetadata } from "@/utils/metadata";

export const metadata = createPageMetadata(seoData["/blogs"]);

export default function Blogs() {
  return (
    <>
      <Topbar />
      <Navbar />
      <BannerSection pageKey="blogs" />
      <BreadcrumbStrip pageKey="blogs" />
      <BlogListing />
      <StartSIPSection />
      <DownloadAppSection />
      <FAQContactSection />
      <Footer />
    </>
  );
}
