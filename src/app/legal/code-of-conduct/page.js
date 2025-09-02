import DownloadAppSection from "@/components/DownloadApp/DownloadAppSection";
import FAQContactSection from "@/components/FaqAndContact/FaqAndContact";
import Footer from "@/components/Footer/Footer";
import LegalLayout from "@/components/LegalLayout/LegalLayout";
import Navbar from "@/components/Navbar/Navbar";
import Topbar from "@/components/Topbar/Topbar";
import { legalContent } from "@/data/legalContent";

export default function CodeOfConductPage() {
    return (
        <>
            <Topbar />
            <Navbar />
            <LegalLayout
                title="Code of Conduct"
                subtitle="Our commitment to integrity, transparency, and ethical business practices."
                content={legalContent.code_of_conduct}
            />
            <DownloadAppSection />
            <FAQContactSection />
            <Footer />
        </>
    );
}
