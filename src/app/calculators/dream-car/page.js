import BannerSection from "@/components/BannerSection/BannerSection";
import BreadcrumbStrip from "@/components/BreadcrumbStrip/BreadcrumbStrip";
import CalculatorFeatures from "@/components/CalculatorFeatures/CalculatorFeatures";
import CalculatorInfoSection from "@/components/CalculatorInfoSection/CalculatorInfoSection";
import Footer from "@/components/Footer/Footer";
import MainCalculatorDreamCar from "@/components/MainCalculator/MainCalculatorDreamCar";
import FaqAndContact from "@/components/FaqAndContact/FaqAndContact";
import Navbar from "@/components/Navbar/Navbar";
import Topbar from "@/components/Topbar/Topbar";
import DownloadAppSection from "@/components/DownloadApp/DownloadAppSection";
import Blogs from "@/components/Blogs/Blogs";
import seoData from "@/data/seoData";

export const metadata = {
  title: seoData["/calculators/dream-car"].title,
  description: seoData["/calculators/dream-car"].description,
  keywords: seoData["/calculators/dream-car"].keywords,
  alternates: {
    canonical: seoData["/calculators/dream-car"].canonical,
  },
};

export default function DreamCarCalculator() {
    const carHowItWorks =
        "The Dream Car Calculator helps you plan and estimate the savings or investments required to buy your dream car, factoring in current price, inflation, and your savings timeline.";

    const carTimeline = [
        { year: "Now", text: "Choose your dream car and check today’s cost as the base reference." },
        { year: "Saving Period", text: "Estimate how much to save or invest monthly to reach your goal." },
        { year: "At Purchase Time", text: "See the total amount accumulated and ensure you can buy your dream car stress-free." },
    ];

    const carBenefits = [
        {
            title: "Goal-Based Savings",
            description: "Set a clear financial target to purchase your dream car on time.",
            icon: "/assets/icons/car-goal.png",
        },
        {
            title: "Beat Inflation",
            description: "Account for rising car prices and save the right amount every month.",
            icon: "/assets/icons/inflation-car.png",
        },
        {
            title: "Smart Planning",
            description: "Avoid loans or heavy EMIs by building the required fund systematically.",
            icon: "/assets/icons/smart-plan.png",
        },
    ];

    return (
        <>
            <Topbar />
            <Navbar />
            <BannerSection pageKey="dreamCarCalculator" />
            <BreadcrumbStrip />
            <CalculatorInfoSection
                title="Dream Car Calculator"
                description="The Dream Car Calculator helps you plan how much to save or invest to buy your dream car. By considering the car’s current price, expected inflation, and the time you have until purchase, it ensures you achieve your goal without financial burden."
                image="/assets/images/calculators/car-info.jpg"
            />
            <MainCalculatorDreamCar />
            <CalculatorFeatures
                howItWorks={carHowItWorks}
                timeline={carTimeline}
                benefits={carBenefits}
                ctaText="Plan Your Dream Car Now"
            />
            <DownloadAppSection />
            <FaqAndContact />
            <Blogs />
            <Footer />
        </>
    );
}
