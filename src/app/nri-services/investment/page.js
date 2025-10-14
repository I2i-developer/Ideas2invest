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
import ComparisonSection from "@/components/Comparison/ComparisonSection";
import comparisonData from "@/data/comparisonData";
import UseCasesSection from "@/components/UseCases/UseCases";
import useCasesData from "@/data/useCasesData";
import CaseStudySection from "@/components/CaseStudy/CaseStudySection";
import caseStudyData from "@/data/caseStudyData";
import seoData from "@/data/seoData";

export const metadata = {
  title: seoData["/nri-services/investment"].title,
  description: seoData["/nri-services/investment"].description,
  keywords: seoData["/nri-services/investment"].keywords,
  alternates: {
    canonical: seoData["/nri-services/investment"].canonical,
  },
};

export default function NRIInvestment() {
    const { title, steps } = howToInvestData.nriInvestment;
    const { processTitle, processImage, processAlt } = serviceProcessData.nriInvestment;
    const {
        sectionTitle,
        sectionSubTitle,
        definition,
        advantages,
        howToChoose,
        waysToInvest,
        types,
    } = serviceInfoData.nriInvestment;

  return (
    <>
      <Topbar />
      <Navbar />
      <BannerSection pageKey="nriInvestment" />
      <BreadcrumbStrip />
      <ServiceInfo
        sectionTitle={sectionTitle}
        sectionSubTitle={sectionSubTitle}
        definition={definition}
        advantages={advantages}
        howToChoose={howToChoose}
        waysToInvest={waysToInvest}
        types={types}
      />
      <StartSIPSection />
      <ComparisonSection data={comparisonData.nriInvestment} />
      <OurAssociates />
      <BenefitsSection title="NRIs Investments" />
      <UseCasesSection data={useCasesData.nriInvestment} />
      <HowToInvest title={title} steps={steps} />
      <CtaStripSection />
      <ServiceProcess processTitle={processTitle} processImage={processImage} processAlt={processAlt}/>
      <CaseStudySection data={caseStudyData.nriInvestment} />
      <DownloadAppSection />
      <FAQContactSection />
      <Blogs />
      <Footer />
    </>
  );
}