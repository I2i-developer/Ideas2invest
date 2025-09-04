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
import MainCalculatorDreamVacation from "@/components/MainCalculator/MainCalculatorDreamVacation";

export default function VacationCalculator() {
    const vacationHowItWorks =
        "The Dream Vacation Calculator estimates the total savings required for your holiday by considering current travel costs, inflation, and your savings timeline.";

    const vacationTimeline = [
        { year: "Now", text: "Pick your dream destination and estimate today’s travel costs." },
        { year: "During Saving Period", text: "See how inflation impacts flights, hotels, and activities over time." },
        { year: "Vacation Time", text: "Know the exact savings needed to enjoy your trip without financial stress." },
    ];

    const vacationBenefits = [
        {
            title: "Plan Your Budget",
            description: "Estimate the total cost of your vacation, including flights, stays, and activities.",
            icon: "/assets/icons/vacation-budget.png",
        },
        {
            title: "Stay Ahead of Inflation",
            description: "Account for rising travel expenses and ensure you save the right amount.",
            icon: "/assets/icons/travel-costs.png",
        },
        {
            title: "Travel Stress-Free",
            description: "Enjoy your dream vacation without worrying about overspending or debt.",
            icon: "/assets/icons/stress-free-travel.png",
        },
    ];

    return (
        <>
            <Topbar />
            <Navbar />
            <BannerSection pageKey="vacationCalculator" />
            <BreadcrumbStrip />
            <CalculatorInfoSection
                title="Dream Vacation Calculator"
                description="The Dream Vacation Calculator helps you plan your holiday expenses in advance. By factoring in current travel costs, expected inflation, and your savings timeline, it ensures you set aside the right amount to enjoy your dream trip stress-free."
                image="/assets/images/calculators/vacation-info.webp"
            />
            <MainCalculatorDreamVacation />
            <CalculatorFeatures
                howItWorks={vacationHowItWorks}
                timeline={vacationTimeline}
                benefits={vacationBenefits}
                ctaText="Plan Your Dream Vacation Now"
            />
            <DownloadAppSection />
            <FaqAndContact />
            <Blogs />
            <Footer />
        </>
    );
}
