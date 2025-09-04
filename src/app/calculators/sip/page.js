import BannerSection from "@/components/BannerSection/BannerSection";
import BreadcrumbStrip from "@/components/BreadcrumbStrip/BreadcrumbStrip";
import CalculatorFeatures from "@/components/CalculatorFeatures/CalculatorFeatures";
import CalculatorInfoSection from "@/components/CalculatorInfoSection/CalculatorInfoSection";
import Footer from "@/components/Footer/Footer";
import MainCalculator from "@/components/MainCalculator/MainCalculator";
import FaqAndContact from "@/components/FaqAndContact/FaqAndContact";
import Navbar from "@/components/Navbar/Navbar";
import Topbar from "@/components/Topbar/Topbar";
import DownloadAppSection from "@/components/DownloadApp/DownloadAppSection";
import Blogs from "@/components/Blogs/Blogs";

export default function SipCalculator() {
    const sipHowItWorks =
        "The SIP Calculator estimates your future wealth by applying compounding on your monthly investment, expected return rate, and duration.";

    const sipTimeline = [
        { year: "Year 1", text: "Understand early growth of your investments." },
        { year: "Year 5", text: "See compounding create noticeable wealth." },
        { year: "Year 10", text: "Long-term growth creates exponential returns." },
    ];

    const sipBenefits = [
        {
            title: "Plan Investments",
            description: "Know exactly how much to invest monthly for your goals.",
            icon: "/assets/icons/invest-plan.png",
        },
        {
            title: "Visualize Growth",
            description: "Track how compounding accelerates your wealth creation.",
            icon: "/assets/icons/growth.png",
        },
        {
            title: "Set Goals",
            description: "Easily align your SIPs with life goals like retirement or education.",
            icon: "/assets/icons/goals.png",
        },
    ];

    return (
        <>
            <Topbar />
            <Navbar />
            <BannerSection pageKey="sipCalculator" />
            <BreadcrumbStrip />
            <CalculatorInfoSection
                title="SIP Calculator"
                description="A SIP (Systematic Investment Plan) Calculator helps you estimate the future value of your monthly investments. With this tool, you can plan your investments better, achieve financial goals, and understand how compounding works in your favor."
                image="/assets/images/calculators/sip-info.webp"
            />
            <MainCalculator />
            <CalculatorFeatures
                howItWorks={sipHowItWorks}
                timeline={sipTimeline}
                benefits={sipBenefits}
                ctaText="Try the SIP Calculator Now"
            />
            <DownloadAppSection />
            <FaqAndContact />
            <Blogs />
            <Footer />
        </>
    );
}