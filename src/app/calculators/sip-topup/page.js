import BannerSection from "@/components/BannerSection/BannerSection";
import BreadcrumbStrip from "@/components/BreadcrumbStrip/BreadcrumbStrip";
import CalculatorFeatures from "@/components/CalculatorFeatures/CalculatorFeatures";
import CalculatorInfoSection from "@/components/CalculatorInfoSection/CalculatorInfoSection";
import Footer from "@/components/Footer/Footer";
import FaqAndContact from "@/components/FaqAndContact/FaqAndContact";
import Navbar from "@/components/Navbar/Navbar";
import Topbar from "@/components/Topbar/Topbar";
import DownloadAppSection from "@/components/DownloadApp/DownloadAppSection";
import Blogs from "@/components/Blogs/Blogs";
import MainCalculatorSipTopup from "@/components/MainCalculator/MainCalculatorSipTopup";
import seoData from "@/data/seoData";

export const metadata = {
  title: seoData["/calculators/sip-topup"].title,
  description: seoData["/calculators/sip-topup"].description,
  keywords: seoData["/calculators/sip-topup"].keywords,
  alternates: {
    canonical: seoData["/calculators/sip-topup"].canonical,
  },
};

export default function SipTopupCalculator() {
    const sipTopupHowItWorks =
        "The SIP Top-Up Calculator estimates your future wealth when you increase your SIP amount at regular intervals, combining compounding with incremental contributions.";

    const sipTopupTimeline = [
        { year: "Year 1", text: "Begin with your initial SIP and small incremental top-ups." },
        { year: "Year 5", text: "Notice how regular top-ups accelerate your wealth creation." },
        { year: "Year 10", text: "Experience exponential growth as compounding and top-ups work together." },
    ];

    const sipTopupBenefits = [
        {
            title: "Accelerated Wealth Creation",
            description: "Top-ups allow you to build a larger corpus faster compared to regular SIPs.",
            icon: "/assets/icons/accelerate.png",
        },
        {
            title: "Flexibility in Investments",
            description: "Increase your SIPs as your income grows without disturbing your finances.",
            icon: "/assets/icons/flexibility.png",
        },
        {
            title: "Goal-Oriented Growth",
            description: "Achieve big financial goals like retirement or children’s education sooner.",
            icon: "/assets/icons/goal-growth.png",
        },
    ];

    return (
        <>
            <Topbar />
            <Navbar />
            <BannerSection pageKey="sipTopUpCalculator" />
            <BreadcrumbStrip />
            <CalculatorInfoSection
                title="SIP Top-Up Calculator"
                description="A SIP Top-Up Calculator helps you estimate the future value of your investments when you increase your monthly SIP at fixed intervals. By combining the power of compounding with step-up contributions, this tool shows how small increases in your SIP can lead to significant wealth creation over time."
                image="/assets/images/calculators/sip-topup-info.jpg"
            />
            <MainCalculatorSipTopup />
            <CalculatorFeatures
                howItWorks={sipTopupHowItWorks}
                timeline={sipTopupTimeline}
                benefits={sipTopupBenefits}
                ctaText="Try the SIP Top-Up Calculator Now"
            />
            <DownloadAppSection />
            <FaqAndContact />
            <Blogs />
            <Footer />
        </>
    );
}
