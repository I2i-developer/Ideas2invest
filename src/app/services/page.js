import BannerSection from "@/components/BannerSection/BannerSection";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Topbar from "@/components/Topbar/Topbar";
import Blogs from "@/components/Blogs/Blogs";
import StartSIPSection from "@/components/StartSIPSection/StartSIPSection";
import DownloadAppSection from "@/components/DownloadApp/DownloadAppSection";
import FAQContactSection from "@/components/FaqAndContact/FaqAndContact";
import BreadcrumbStrip from "@/components/BreadcrumbStrip/BreadcrumbStrip";
import ServicesSection from "@/components/Services/ServicesSection";
import CtaStripSection from "@/components/CtaStrip/CtaStripSection";
import AboutValues from "@/components/ValuesSection/ValuesSection";
import StrategicPlanningProcessSection from "@/components/StrategicPlanning/StrategicPlanningProcess";
import seoData from "@/data/seoData";

export const metadata = {
  title: seoData["/services"].title,
  description: seoData["/services"].description,
  keywords: seoData["/services"].keywords,
  alternates: {
    canonical: seoData["/services"].canonical,
  },
};

export default function Services() {

  return (
    <>
      <Topbar />
      <Navbar />
      <BannerSection pageKey="services" />
      <BreadcrumbStrip />
      <ServicesSection />
      <AboutValues />
      <CtaStripSection />
      <StrategicPlanningProcessSection />
      <StartSIPSection />
      <DownloadAppSection />
      <FAQContactSection />
      <Blogs />
      <Footer />
    </>
  );
}