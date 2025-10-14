import DownloadAppSection from "@/components/DownloadApp/DownloadAppSection";
import FAQContactSection from "@/components/FaqAndContact/FaqAndContact";
import Footer from "@/components/Footer/Footer";
import LegalLayout from "@/components/LegalLayout/LegalLayout";
import Navbar from "@/components/Navbar/Navbar";
import Topbar from "@/components/Topbar/Topbar";
import { legalContent } from "@/data/legalContent";
import seoData from "@/data/seoData";

export const metadata = {
  title: seoData["/legal/investor-grievance"].title,
  description: seoData["/legal/investor-grievance"].description,
  keywords: seoData["/legal/investor-grievance"].keywords,
  alternates: {
    canonical: seoData["/legal/investor-grievance"].canonical,
  },
};

export default function InvestorGrievancePage() {
    return (
        <>
            <Topbar />
            <Navbar />
            <LegalLayout
                title="Investor Grievance Redressal"
                subtitle="We are committed to resolving investor concerns fairly, transparently, and in a timely manner."
                content={legalContent.grievance}
            />
            <DownloadAppSection />
            <FAQContactSection />
            <Footer />
        </>
    );
}
