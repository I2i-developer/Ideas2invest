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
import MainCalculatorLumpsum from "@/components/MainCalculator/MainCalculatorLumpsum";

export default function LumpsumCalculator() {
    const lumpsumHowItWorks =
        "The Lumpsum Calculator projects the future value of a one-time investment by applying compounding over the chosen time horizon and expected rate of return.";

    const lumpsumTimeline = [
        { year: "Year 1", text: "See the initial impact of your one-time investment." },
        { year: "Year 5", text: "Experience steady growth as compounding accelerates." },
        { year: "Year 10", text: "Watch your wealth multiply significantly over the long term." },
    ];

    const lumpsumBenefits = [
        {
            title: "One-Time Investment Planning",
            description: "Ideal for those who want to invest surplus funds at once and see how they grow.",
            icon: "/assets/icons/lumpsum-plan.png",
        },
        {
            title: "Future Wealth Estimation",
            description: "Get clarity on the future value of your lump sum investment over different durations.",
            icon: "/assets/icons/wealth.png",
        },
        {
            title: "Compare Scenarios",
            description: "Easily compare different investment durations and return rates to optimize your plan.",
            icon: "/assets/icons/compare.png",
        },
    ];

    return (
        <>
            <Topbar />
            <Navbar />
            <BannerSection pageKey="lumpsum" />
            <BreadcrumbStrip />
            <CalculatorInfoSection
                title="Lumpsum Calculator"
                description="A Lumpsum Calculator helps you estimate the future value of a one-time investment. By entering your investment amount, expected rate of return, and investment duration, you can understand how your money grows through the power of compounding."
                image="/assets/images/calculators/lumpsum-info.jpg"
            />
            <MainCalculatorLumpsum />
            <CalculatorFeatures
                howItWorks={lumpsumHowItWorks}
                timeline={lumpsumTimeline}
                benefits={lumpsumBenefits}
                ctaText="Try the Lumpsum Calculator Now"
            />
            <DownloadAppSection />
            <FaqAndContact />
            <Blogs />
            <Footer />
        </>
    );
}