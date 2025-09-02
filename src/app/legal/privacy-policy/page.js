import DownloadAppSection from "@/components/DownloadApp/DownloadAppSection";
import FAQContactSection from "@/components/FaqAndContact/FaqAndContact";
import Footer from "@/components/Footer/Footer";
import LegalLayout from "@/components/LegalLayout/LegalLayout";
import Navbar from "@/components/Navbar/Navbar";
import Topbar from "@/components/Topbar/Topbar";
import { legalContent } from "@/data/legalContent";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Topbar />
      <Navbar />
      <LegalLayout
        title="Privacy Policy"
        subtitle="Your trust matters to us. Here’s how we protect your data."
        content={legalContent.privacy}
      />
      <DownloadAppSection />
      <FAQContactSection />
      <Footer />
    </>
  );
}
