import DownloadAppSection from "@/components/DownloadApp/DownloadAppSection";
import FAQContactSection from "@/components/FaqAndContact/FaqAndContact";
import Footer from "@/components/Footer/Footer";
import LegalLayout from "@/components/LegalLayout/LegalLayout";
import Navbar from "@/components/Navbar/Navbar";
import Topbar from "@/components/Topbar/Topbar";
import { legalContent } from "@/data/legalContent";

export default function TermsConditionsPage() {
    return (
        <>
            <Topbar />
            <Navbar />
            <LegalLayout
                title="Terms & Conditions"
                subtitle="Please read these terms carefully before using our website and services."
                content={legalContent.terms}
            />
            <DownloadAppSection />
            <FAQContactSection />
            <Footer />
        </>
    );
}
