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
import MainCalculatorRetirement from "@/components/MainCalculator/MainCalculatorRetirement";

export default function RetirementCalculator() {
    const retirementHowItWorks =
        "The Retirement Calculator estimates the corpus you will need at retirement and helps you plan your savings to maintain your desired lifestyle.";

    const retirementTimeline = [
        { year: "Early Career", text: "Start saving small amounts to build a strong foundation for retirement." },
        { year: "Mid Career", text: "Increase contributions to match your growing income and inflation." },
        { year: "Pre-Retirement", text: "Review your retirement corpus to ensure financial security and stability." },
    ];

    const retirementBenefits = [
        {
            title: "Plan Ahead",
            description: "Know exactly how much you need to save regularly for a stress-free retirement.",
            icon: "/assets/icons/plan-ahead.png",
        },
        {
            title: "Beat Inflation",
            description: "Understand how inflation impacts your expenses and plan accordingly.",
            icon: "/assets/icons/inflation.png",
        },
        {
            title: "Secure Lifestyle",
            description: "Ensure your post-retirement lifestyle remains comfortable and financially independent.",
            icon: "/assets/icons/lifestyle.png",
        },
    ];

    return (
        <>
            <Topbar />
            <Navbar />
            <BannerSection pageKey="retirementCalculator" />
            <BreadcrumbStrip />
            <CalculatorInfoSection
                title="Dream Retirement Calculator"
                description="A Retirement Calculator helps you determine the amount of money you need to save to enjoy a financially secure retirement. By considering your current age, retirement age, expected expenses, and inflation, it shows how much to invest regularly to achieve your desired lifestyle."
                image="/assets/images/calculators/retirement-calculator.png"
            />
            <MainCalculatorRetirement />
            <CalculatorFeatures
                howItWorks={retirementHowItWorks}
                timeline={retirementTimeline}
                benefits={retirementBenefits}
                ctaText="Plan Your Retirement Now"
            />
            <DownloadAppSection />
            <FaqAndContact />
            <Blogs />
            <Footer />
        </>
    );
}
