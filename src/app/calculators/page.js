import AllCalculatorsSection from "@/components/AllCalculators/AllCalculators";
import BannerSection from "@/components/BannerSection/BannerSection";
import Blogs from "@/components/Blogs/Blogs";
import BreadcrumbStrip from "@/components/BreadcrumbStrip/BreadcrumbStrip";
import CtaStripSection from "@/components/CtaStrip/CtaStripSection";
import FaqAndContact from "@/components/FaqAndContact/FaqAndContact";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import StartSIPSection from "@/components/StartSIPSection/StartSIPSection";
import Topbar from "@/components/Topbar/Topbar";
import seoData from "@/data/seoData";

export const metadata = {
  title: seoData["/calculators"].title,
  description: seoData["/calculators"].description,
  keywords: seoData["/calculators"].keywords,
  alternates: {
    canonical: seoData["/calculators"].canonical,
  },
};

export default function AllCalculators() {

  return (
    <>
      <Topbar />
      <Navbar />
      <BannerSection pageKey="allCalculators" />
      <BreadcrumbStrip />
      <AllCalculatorsSection />
      <CtaStripSection />
      <StartSIPSection />
      <FaqAndContact />
      <Blogs />
      <Footer />
    </>
  );
}