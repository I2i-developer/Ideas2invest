import BannerSection from "@/components/BannerSection/BannerSection";
import BreadcrumbStrip from "@/components/BreadcrumbStrip/BreadcrumbStrip";
import AboutSection from "@/components/About/AboutSection";
import Navbar from "@/components/Navbar/Navbar";
import Topbar from "@/components/Topbar/Topbar";
import CounterSection from "@/components/Counter/Counter";
import Footer from "@/components/Footer/Footer";
import DownloadAppSection from "@/components/DownloadApp/DownloadAppSection";
import FAQContactSection from "@/components/FaqAndContact/FaqAndContact";
import StrategicPlanningProcessSection from "@/components/StrategicPlanning/StrategicPlanningProcess";
import OurAssociates from "@/components/OurAssociates/OurAssociates";
import BenefitsSection from "@/components/Benefits/Benefits";
import Blogs from "@/components/Blogs/Blogs";
import DirectorsMessage from "@/components/DirectorsMessage/DirectorsMessage";
import TeamSection from "@/components/TeamSection/TeamSection";
import JourneySection from "@/components/JourneySection/JourneySection";
import CtaStripSection from "@/components/CtaStrip/CtaStripSection";
import ValuesSection from "@/components/ValuesSection/ValuesSection";
import AwardsRecognition from "@/components/AwardsRecognition/AwardsRecognition";

export const metadata = {
  title: 'About Ideas2Invest | Trusted Investment & Wealth Management Partner',
  description: 'Learn about Ideas2Invest, your trusted partner in mutual funds, SIPs, insurance, and wealth management. Discover how we help individuals & NRIs achieve financial freedom.',
}

export default function About() {
  return (
    <>
      <Topbar />  
      <Navbar />
      <BannerSection pageKey="about" />
      <BreadcrumbStrip />
      <AboutSection />
      <OurAssociates />
      <CounterSection />
      <ValuesSection />
      <JourneySection />
      <StrategicPlanningProcessSection />
      <CtaStripSection />
      <BenefitsSection />
      <DirectorsMessage />
      {/* <TeamSection /> */}
      <AwardsRecognition />
      <DownloadAppSection />
      <FAQContactSection />
      {/* <Blogs /> */}
      <Footer />
    </>
  );
} 