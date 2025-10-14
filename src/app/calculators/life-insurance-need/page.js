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
import seoData from "@/data/seoData";

export const metadata = {
  title: seoData["/calculators/life-insurance-need"].title,
  description: seoData["/calculators/life-insurance-need"].description,
  keywords: seoData["/calculators/life-insurance-need"].keywords,
  alternates: {
    canonical: seoData["/calculators/life-insurance-need"].canonical,
  },
};

export default function LifeInsuranceNeedCalculator() {
    const insuranceHowItWorks =
        "The Life Insurance Need Calculator estimates the ideal coverage amount by considering your family’s future expenses, outstanding liabilities, current savings, and lifestyle goals.";

    const insuranceTimeline = [
        { year: "Now", text: "Assess your financial responsibilities and existing assets." },
        { year: "During Policy Term", text: "Account for family’s living expenses, loans, and children’s education needs." },
        { year: "Future Security", text: "Ensure your loved ones are financially protected even in your absence." },
    ];

    const insuranceBenefits = [
        {
            title: "Right Coverage Estimation",
            description: "Find the exact insurance cover required instead of relying on guesswork.",
            icon: "/assets/icons/coverage.png",
        },
        {
            title: "Protect Loved Ones",
            description: "Ensure your family’s lifestyle and goals are not compromised financially.",
            icon: "/assets/icons/family-protection.png",
        },
        {
            title: "Peace of Mind",
            description: "Plan confidently knowing your family will remain financially secure.",
            icon: "/assets/icons/peace.png",
        },
    ];

    return (
        <>
            <Topbar />
            <Navbar />
            <BannerSection pageKey="lifeInsuranceNeedCalculator" />
            <BreadcrumbStrip />
            <CalculatorInfoSection
                title="Life Insurance Need Calculator"
                description="The Life Insurance Need Calculator helps you determine the right insurance coverage to safeguard your family’s future. By factoring in living expenses, outstanding loans, children’s education, and lifestyle goals, it ensures your loved ones remain financially secure in your absence."
                image="/assets/images/calculators/insurance-need-info.jpg"
            />
            <MainCalculator />
            <CalculatorFeatures
                howItWorks={insuranceHowItWorks}
                timeline={insuranceTimeline}
                benefits={insuranceBenefits}
                ctaText="Calculate Your Insurance Needs Now"
            />
            <DownloadAppSection />
            <FaqAndContact />
            <Blogs />
            <Footer />
        </>
    );
}
