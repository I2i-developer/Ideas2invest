import BannerSection from "@/components/BannerSection/BannerSection";
import Blogs from "@/components/Blogs/Blogs";
import BreadcrumbStrip from "@/components/BreadcrumbStrip/BreadcrumbStrip";
import DownloadAppSection from "@/components/DownloadApp/DownloadAppSection";
import FAQContactSection from "@/components/FaqAndContact/FaqAndContact";
import FinancialRiskInfo from "@/components/FinancialRiskInfo/FinancialRiskInfo";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import RiskProfileCalculator from "@/components/RiskProfileCalculator/RiskProfileCalculator";
import StartSIPSection from "@/components/StartSIPSection/StartSIPSection";
import Topbar from "@/components/Topbar/Topbar";

export default function FinancialRiskMeter() {
    return (
        <>
          <Topbar />
          <Navbar />
          <BannerSection pageKey="financialRiskMeter" />
          <BreadcrumbStrip />
          {/* <RiskProfileCalculator /> */}
          <FinancialRiskInfo />
          <StartSIPSection />
          <DownloadAppSection />
          <FAQContactSection />
          <Footer />
        </>
    );
}