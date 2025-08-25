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

export default function LifeInsurance() {
    const { title, steps } = howToInvestData.lifeInsurance;
    const { processTitle, processImage, processAlt } = serviceProcessData.lifeInsurance;
    const {
        sectionTitle,
        sectionSubTitle,
        definition,
        advantages,
        howToChoose,
        waysToInvest,
        types,
    } = serviceInfoData.lifeInsurance;

  return (
    <>
      <Topbar />
      <Navbar />
      <BannerSection pageKey="lifeInsurance" />
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
      <ComparisonSection data={comparisonData.lifeInsurance} />
      <OurAssociates />
      <BenefitsSection title="Dollar Investments" />
      <UseCasesSection data={useCasesData.lifeInsurance} />
      <HowToInvest title={title} steps={steps} />
      <CtaStripSection />
      <ServiceProcess processTitle={processTitle} processImage={processImage} processAlt={processAlt}/>
      <CaseStudySection data={caseStudyData.lifeInsurance} />
      <DownloadAppSection />
      <FAQContactSection />
      <Blogs />
      <Footer />
    </>
  );
}