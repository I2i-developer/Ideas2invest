import DownloadAppSection from "@/components/DownloadApp/DownloadAppSection";
import FAQContactSection from "@/components/FaqAndContact/FaqAndContact";
import Footer from "@/components/Footer/Footer";
import LegalLayout from "@/components/LegalLayout/LegalLayout";
import Navbar from "@/components/Navbar/Navbar";
import Topbar from "@/components/Topbar/Topbar";
import { legalContent } from "@/data/legalContent";
import seoData from "@/data/seoData";

export const metadata = {
  title: seoData["/legal/privacy-policy"].title,
  description: seoData["/legal/privacy-policy"].description,
  keywords: seoData["/legal/privacy-policy"].keywords,
  alternates: {
    canonical: seoData["/legal/privacy-policy"].canonical,
  },
};

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
