import Blogs from "@/components/Blogs/Blogs";
import BreadcrumbBanner from "@/components/BreadcrumbBanner/BreadcrumbBanner";
import ContactCards from "@/components/ContactCards/ContactCards";
import CeoAndContact from "@/components/CeoAndContact/CeoAndContact";
import DownloadAppSection from "@/components/DownloadApp/DownloadAppSection";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Topbar from "@/components/Topbar/Topbar";
import { breadcrumbData } from "@/data/breadcrumbData";
import CtaStripSection from "@/components/CtaStrip/CtaStripSection";
import MapSection from "@/components/MapSection/MapSection";
import StartSIPSection from "@/components/StartSIPSection/StartSIPSection";

export default function Contact() {
  const { contact } = breadcrumbData.contact;

  return (
    <>
      <Topbar />
      <Navbar />
      <BreadcrumbBanner pageKey="contact" />
      <ContactCards />
      <CeoAndContact />
      <MapSection />
      {/* <CtaStripSection /> */}
      <StartSIPSection />
      <DownloadAppSection />
      <Blogs />
      <Footer />
    </>
  );
}
