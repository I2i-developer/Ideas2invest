import Image from "next/image";
import styles from "./page.module.css";
import Topbar from "@/components/Topbar/Topbar";
import Navbar from "@/components/Navbar/Navbar";
import TickerStrip from "@/components/TickerStrip/TickerStrip";
import Hero from "@/components/Hero/Hero";
import ServicesSection from "@/components/Services/ServicesSection";
import InvestmentPartnerSection from "@/components/InvestmentPartner/InvestmentPartnerSection";
import Counter from "@/components/Counter/Counter";
import StrategicPlanningProcess from "@/components/StrategicPlanning/StrategicPlanningProcess";
import DownloadAppSection from "@/components/DownloadApp/DownloadAppSection";
import CtaStripSection from "@/components/CtaStrip/CtaStripSection";
import CalculatorSection from "@/components/Calculator/CalculatorSection";
import SipCalculator from "@/components/SipCalculator/SipCalculator";
import AboutSection from "@/components/About/AboutSection";
import OurAssociates from "@/components/OurAssociates/OurAssociates";
import ExploreFunds from "@/components/ExploreFunds/ExploreFunds";
import Benefits from "@/components/Benefits/Benefits";
import StartSIPSection from "@/components/StartSIPSection/StartSIPSection";
import Footer from "@/components/Footer/Footer";
import FaqAndContact from "@/components/FaqAndContact/FaqAndContact";
import Blogs from "@/components/Blogs/Blogs";
import Testimonials from "@/components/Testimonials/Testimonials";
import BillionaireClub from "@/components/BillionaireClub/BillionaireClub";
import AwardsRecognition from "@/components/AwardsRecognition/AwardsRecognition";

export default function Home() {
  return (
    <>
      <Topbar />
      <Navbar />
      <TickerStrip />
      <Hero />
      <ServicesSection />
      <Counter />
      <InvestmentPartnerSection />
      <CtaStripSection />
      <StrategicPlanningProcess />
      <DownloadAppSection />
      <CalculatorSection />
      <SipCalculator />
      <AboutSection />
      <OurAssociates />
      <ExploreFunds />
      <BillionaireClub />
      <Benefits title="Mutual Funds" />
      <AwardsRecognition />
      <StartSIPSection />
      <Testimonials />
      <FaqAndContact />
      <Blogs />
      <Footer />
    </>
  );
}
