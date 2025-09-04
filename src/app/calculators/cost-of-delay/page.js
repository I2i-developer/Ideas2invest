import BannerSection from "@/components/BannerSection/BannerSection";
import BreadcrumbStrip from "@/components/BreadcrumbStrip/BreadcrumbStrip";
import CalculatorFeatures from "@/components/CalculatorFeatures/CalculatorFeatures";
import CalculatorInfoSection from "@/components/CalculatorInfoSection/CalculatorInfoSection";
import Footer from "@/components/Footer/Footer";
import MainCalculatorCostOfDelay from "@/components/MainCalculator/MainCalculatorCostOfDelay";
import FaqAndContact from "@/components/FaqAndContact/FaqAndContact";
import Navbar from "@/components/Navbar/Navbar";
import Topbar from "@/components/Topbar/Topbar";
import DownloadAppSection from "@/components/DownloadApp/DownloadAppSection";
import Blogs from "@/components/Blogs/Blogs";

export default function CostOfDelayCalculator() {
    const delayHowItWorks =
        "The Cost of Delay Calculator shows how postponing your investments reduces your future wealth by comparing early vs. delayed investments with compounding growth.";

    const delayTimeline = [
        { year: "Start Now", text: "See how even small early investments grow significantly over time." },
        { year: "Delay by 5 Years", text: "Understand the compounding opportunity lost by waiting." },
        { year: "Delay by 10 Years", text: "Realize how delayed investing drastically reduces long-term wealth." },
    ];

    const delayBenefits = [
        {
            title: "Highlight Lost Opportunities",
            description: "Understand how delaying your investment impacts wealth creation.",
            icon: "/assets/icons/lost-opportunity.png",
        },
        {
            title: "Encourages Early Start",
            description: "Motivates you to begin investing today rather than tomorrow.",
            icon: "/assets/icons/early-start.png",
        },
        {
            title: "Visual Impact",
            description: "Easily compare future values of early vs. delayed investments.",
            icon: "/assets/icons/compare.png",
        },
    ];

    return (
        <>
            <Topbar />
            <Navbar />
            <BannerSection pageKey="costOfDelayCalculator" />
            <BreadcrumbStrip />
            <CalculatorInfoSection
                title="Cost of Delay Calculator"
                description="The Cost of Delay Calculator helps you understand the financial impact of postponing your investments. By comparing the returns of starting early versus delaying, this tool highlights how compounding works best with time and why every year counts in wealth creation."
                image="/assets/images/calculators/cost-delay-info.jpg"
            />
            <MainCalculatorCostOfDelay />
            <CalculatorFeatures
                howItWorks={delayHowItWorks}
                timeline={delayTimeline}
                benefits={delayBenefits}
                ctaText="See the Cost of Delaying Investments"
            />
            <DownloadAppSection />
            <FaqAndContact />
            <Blogs />
            <Footer />
        </>
    );
}
