import Image from "next/image";
import styles from "./page.module.css";
import Topbar from "@/components/Topbar/Topbar";
import Navbar from "@/components/Navbar/Navbar";
import TickerStrip from "@/components/TickerStrip/TickerStrip";
import Hero from "@/components/Hero/Hero";
import ServicesSection from "@/components/Services/ServicesSection";
import GetStarted from "@/components/GetStarted/GetStarted";
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
import AboutValues from "@/components/ValuesSection/ValuesSection";
import FloatingSidebar from "@/components/FloatingSidebar/FloatingSidebar";

export default function Home() {
  return (
    <>
      <Topbar />
      <Navbar />
      <TickerStrip />
      <Hero />
      <ServicesSection />
      <OurAssociates />
      <GetStarted />
      <Counter />
      <InvestmentPartnerSection />
      <StartSIPSection />
      <AboutSection />
      <AboutValues />
      <StrategicPlanningProcess />
      <Benefits title="Mutual Funds" />
      <CtaStripSection />
      <ExploreFunds />
      <DownloadAppSection />
      <CalculatorSection />
      <BillionaireClub />
      {/* <SipCalculator /> */}
      <AwardsRecognition />
      <Testimonials />
      <FaqAndContact />
      <Blogs />
      <Footer />
    </>
  );
}
