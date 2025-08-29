import BannerSection from "@/components/BannerSection/BannerSection";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Topbar from "@/components/Topbar/Topbar";
import Blogs from "@/components/Blogs/Blogs";
import StartSIPSection from "@/components/StartSIPSection/StartSIPSection";
import DownloadAppSection from "@/components/DownloadApp/DownloadAppSection";
import FAQContactSection from "@/components/FaqAndContact/FaqAndContact";
import BreadcrumbStrip from "@/components/BreadcrumbStrip/BreadcrumbStrip";


export default function Services() {

  return (
    <>
      <Topbar />
      <Navbar />
      <BannerSection pageKey="services" />
      <BreadcrumbStrip />
      <StartSIPSection />
      <DownloadAppSection />
      <FAQContactSection />
      <Blogs />
      <Footer />
    </>
  );
}