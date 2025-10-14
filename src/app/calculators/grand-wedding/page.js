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
import MainCalculatorGrandWedding from "@/components/MainCalculator/MainCalculatorGrandWedding";
import seoData from "@/data/seoData";

export const metadata = {
  title: seoData["/calculators/grand-wedding"].title,
  description: seoData["/calculators/grand-wedding"].description,
  keywords: seoData["/calculators/grand-wedding"].keywords,
  alternates: {
    canonical: seoData["/calculators/grand-wedding"].canonical,
  },
};

export default function WeddingCalculator() {
    const weddingHowItWorks =
        "The Grand Wedding Calculator helps you estimate the future cost of your wedding by considering your budget, inflation, and time left to save.";

    const weddingTimeline = [
        { year: "Now", text: "Set a realistic wedding budget and understand current costs." },
        { year: "During Saving Period", text: "Track how inflation increases your estimated wedding expenses." },
        { year: "At Wedding Time", text: "Know the total amount you need to save to host your dream wedding." },
    ];

    const weddingBenefits = [
        {
            title: "Realistic Budgeting",
            description: "Plan a grand wedding without financial stress by estimating costs in advance.",
            icon: "/assets/icons/wedding-budget.png",
        },
        {
            title: "Beat Rising Costs",
            description: "Account for inflation and ensure your savings match future expenses.",
            icon: "/assets/icons/rising-cost.png",
        },
        {
            title: "Stress-Free Planning",
            description: "Focus on celebrations while being financially prepared for every detail.",
            icon: "/assets/icons/stress-free.png",
        },
    ];

    return (
        <>
            <Topbar />
            <Navbar />
            <BannerSection pageKey="weddingCalculator" />
            <BreadcrumbStrip />
            <CalculatorInfoSection
                title="Grand Wedding Calculator"
                description="The Grand Wedding Calculator helps you estimate the total savings required for your dream wedding. By factoring in current wedding costs, inflation, and the time remaining until your wedding date, this tool ensures you’re financially prepared to celebrate without compromise."
                image="/assets/images/calculators/wedding-info.jpg"
            />
            <MainCalculatorGrandWedding />
            <CalculatorFeatures
                howItWorks={weddingHowItWorks}
                timeline={weddingTimeline}
                benefits={weddingBenefits}
                ctaText="Plan Your Dream Wedding Now"
            />
            <DownloadAppSection />
            <FaqAndContact />
            <Blogs />
            <Footer />
        </>
    );
}
