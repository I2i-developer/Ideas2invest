import BannerSection from "@/components/BannerSection/BannerSection";
import BenefitsSection from "@/components/Benefits/Benefits";
import BreadcrumbStrip from "@/components/BreadcrumbStrip/BreadcrumbStrip";
import ExploreMutualFunds from "@/components/ExploreFunds/ExploreFunds";
import Footer from "@/components/Footer/Footer";
import HowToInvest from "@/components/HowToInvest/HowToInvest";
import howToInvestData from "@/data/howToInvestData";
import Navbar from "@/components/Navbar/Navbar";
import OurAssociates from "@/components/OurAssociates/OurAssociates";
import StartSIPSection from "@/components/StartSIPSection/StartSIPSection";
import Topbar from "@/components/Topbar/Topbar";
import ServiceProcess from "@/components/ServiceProcess/ServiceProcess";
import serviceProcessData from "@/data/serviceProcessData";
import FAQContactSection from "@/components/FaqAndContact/FaqAndContact";
import Blogs from "@/components/Blogs/Blogs";
import DownloadAppSection from "@/components/DownloadApp/DownloadAppSection";
import ServiceInfo from "@/components/ServiceInfo/ServiceInfo";
import serviceInfoData from "@/data/serviceInfoData";
import CtaStripSection from "@/components/CtaStrip/CtaStripSection";
import seoData from "@/data/seoData";
import { createPageMetadata } from "@/utils/metadata";
import RelatedServiceCallout from "@/components/RelatedServiceCallout/RelatedServiceCallout";

export const metadata = createPageMetadata(seoData["/mutual-funds"]);

export default function MutualFunds() {
    const { title, steps } = howToInvestData.mutualFunds;
    const { processTitle, processImage, processAlt } = serviceProcessData.mutualFunds;
    const {
        sectionTitle,
        sectionSubTitle,
        definition,
        advantages,
        howToChoose,
        waysToInvest,
        types,
    } = serviceInfoData.mutualFunds;

  return (
    <>
      <Topbar />
      <Navbar />
      <BannerSection pageKey="mutualFunds" />
      <BreadcrumbStrip pageKey="mutual-funds" />
      <ServiceInfo
        sectionTitle={sectionTitle}
        sectionSubTitle={sectionSubTitle}
        definition={definition}
        advantages={advantages}
        howToChoose={howToChoose}
        waysToInvest={waysToInvest}
        types={types}
      />
      <RelatedServiceCallout
        headingId="mutual-funds-related-sif"
        description="Looking for greater strategy flexibility than conventional mutual funds? Learn how SIFs use specialised approaches within the SEBI mutual fund framework."
      />
      <OurAssociates />
      <ExploreMutualFunds />
      <StartSIPSection />
      <BenefitsSection title="Mutual Funds" />
      <HowToInvest title={title} steps={steps} />
      <CtaStripSection />
      <ServiceProcess processTitle={processTitle} processImage={processImage} processAlt={processAlt}/>
      <DownloadAppSection />
      <FAQContactSection />
      <Blogs />
      <Footer />
    </>
  );
}
