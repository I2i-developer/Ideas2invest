import DownloadAppSection from "@/components/DownloadApp/DownloadAppSection";
import FAQContactSection from "@/components/FaqAndContact/FaqAndContact";
import Footer from "@/components/Footer/Footer";
import LegalLayout from "@/components/LegalLayout/LegalLayout";
import Navbar from "@/components/Navbar/Navbar";
import Topbar from "@/components/Topbar/Topbar";
import { legalContent } from "@/data/legalContent";
import seoData from "@/data/seoData";

export const metadata = {
  title: seoData["/legal/disclaimer"].title,
  description: seoData["/legal/disclaimer"].description,
  keywords: seoData["/legal/disclaimer"].keywords,
  alternates: {
    canonical: seoData["/legal/disclaimer"].canonical,
  },
};

export default function DisclaimerPage() {
    return (
        <>
            <Topbar />
            <Navbar />
            <LegalLayout
                title="Disclaimer"
                subtitle="Important information and legal notices regarding your use of our website."
                content={legalContent.disclaimer}
            />
            <DownloadAppSection />
            <FAQContactSection />
            <Footer />
        </>
    );
}
