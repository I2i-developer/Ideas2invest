import AllCalculatorsSection from "@/components/AllCalculators/AllCalculators";
import BannerSection from "@/components/BannerSection/BannerSection";
import Blogs from "@/components/Blogs/Blogs";
import BreadcrumbStrip from "@/components/BreadcrumbStrip/BreadcrumbStrip";
import CalculatorsSection from "@/components/Calculator/CalculatorSection";
import CtaStripSection from "@/components/CtaStrip/CtaStripSection";
import FaqAndContact from "@/components/FaqAndContact/FaqAndContact";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import StartSIPSection from "@/components/StartSIPSection/StartSIPSection";
import Topbar from "@/components/Topbar/Topbar";
import seoData from "@/data/seoData";
import { createPageMetadata } from "@/utils/metadata";

export const metadata = createPageMetadata(seoData["/calculators"]);

export default function AllCalculators() {

  return (
    <>
      <Topbar />
      <Navbar />
      <BannerSection pageKey="allCalculators" />
      <BreadcrumbStrip pageKey="calculators" />
      <AllCalculatorsSection />
      <CtaStripSection />
      <CalculatorsSection />
      <StartSIPSection />
      <FaqAndContact />
      <Blogs />
      <Footer />
    </>
  );
}