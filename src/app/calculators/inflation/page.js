import BannerSection from "@/components/BannerSection/BannerSection";
import BreadcrumbStrip from "@/components/BreadcrumbStrip/BreadcrumbStrip";
import CalculatorFeatures from "@/components/CalculatorFeatures/CalculatorFeatures";
import CalculatorInfoSection from "@/components/CalculatorInfoSection/CalculatorInfoSection";
import Footer from "@/components/Footer/Footer";
import MainCalculatorInflation from "@/components/MainCalculator/MainCalculatorInflation";
import FaqAndContact from "@/components/FaqAndContact/FaqAndContact";
import Navbar from "@/components/Navbar/Navbar";
import Topbar from "@/components/Topbar/Topbar";
import DownloadAppSection from "@/components/DownloadApp/DownloadAppSection";
import Blogs from "@/components/Blogs/Blogs";

export default function InflationCalculator() {
    const inflationHowItWorks =
        "The Inflation Calculator shows how inflation reduces the purchasing power of your money over time, helping you plan investments that beat inflation.";

    const inflationTimeline = [
        { year: "Year 1", text: "See the immediate impact of inflation on your savings." },
        { year: "Year 5", text: "Understand how rising prices erode purchasing power over the medium term." },
        { year: "Year 10", text: "Recognize the long-term need for inflation-beating investments." },
    ];

    const inflationBenefits = [
        {
            title: "Real Value of Money",
            description: "Discover how much your money will be worth in the future considering inflation.",
            icon: "/assets/icons/money-value.png",
        },
        {
            title: "Smarter Planning",
            description: "Factor inflation into your financial goals for accurate planning.",
            icon: "/assets/icons/planning.png",
        },
        {
            title: "Investment Awareness",
            description: "Understand why it’s important to choose investments that generate inflation-adjusted returns.",
            icon: "/assets/icons/awareness.png",
        },
    ];

    return (
        <>
            <Topbar />
            <Navbar />
            <BannerSection pageKey="inflation" />
            <BreadcrumbStrip />
            <CalculatorInfoSection
                title="Inflation Calculator"
                description="An Inflation Calculator helps you estimate how much the value of money decreases over time due to rising prices. By calculating the future cost of goods and services, it enables better financial planning and highlights the importance of inflation-beating investments."
                image="/assets/images/calculators/inflation-info.jpg"
            />
            <MainCalculatorInflation />
            <CalculatorFeatures
                howItWorks={inflationHowItWorks}
                timeline={inflationTimeline}
                benefits={inflationBenefits}
                ctaText="Calculate Inflation Impact Now"
            />
            <DownloadAppSection />
            <FaqAndContact />
            <Blogs />
            <Footer />
        </>
    );
}
