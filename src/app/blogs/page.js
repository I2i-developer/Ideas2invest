import BreadcrumbBanner from "@/components/BreadcrumbBanner/BreadcrumbBanner";
import { breadcrumbData } from "@/data/breadcrumbData";
import Navbar from "@/components/Navbar/Navbar";
import Topbar from "@/components/Topbar/Topbar";
import StartSIPSection from "@/components/StartSIPSection/StartSIPSection";
import DownloadAppSection from "@/components/DownloadApp/DownloadAppSection";
import BlogSection from "@/components/Blogs/Blogs";
import Footer from "@/components/Footer/Footer";
import FAQContactSection from "@/components/FaqAndContact/FaqAndContact";
import BannerSection from "@/components/BannerSection/BannerSection";
import BreadcrumbStrip from "@/components/BreadcrumbStrip/BreadcrumbStrip";

export default function Blogs() {
  const { blogs } = breadcrumbData.blogs;

  return (
    <>
      <Topbar />
      <Navbar />
      <BannerSection pageKey="blogs" />
      {/* <BreadcrumbBanner pageKey="blogs" /> */}
      <BreadcrumbStrip />
      <BlogSection />
      <StartSIPSection />
      <DownloadAppSection />
      <FAQContactSection />
      <Footer />
    </>
  );
}
