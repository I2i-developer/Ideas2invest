import BannerSection from "@/components/BannerSection/BannerSection";
import BreadcrumbStrip from "@/components/BreadcrumbStrip/BreadcrumbStrip";
import CalculatorFeatures from "@/components/CalculatorFeatures/CalculatorFeatures";
import CalculatorInfoSection from "@/components/CalculatorInfoSection/CalculatorInfoSection";
import Footer from "@/components/Footer/Footer";
import MainCalculatorGoalSip from "@/components/MainCalculator/MainCalculatorGoalSip";
import FaqAndContact from "@/components/FaqAndContact/FaqAndContact";
import Navbar from "@/components/Navbar/Navbar";
import Topbar from "@/components/Topbar/Topbar";
import DownloadAppSection from "@/components/DownloadApp/DownloadAppSection";
import Blogs from "@/components/Blogs/Blogs";
import seoData from "@/data/seoData";

export const metadata = {
  title: seoData["/calculators/sip"].title,
  description: seoData["/calculators/sip"].description,
  keywords: seoData["/calculators/sip"].keywords,
  alternates: {
    canonical: seoData["/calculators/sip"].canonical,
  },
};

export default function SipCalculator() {
    const sipHowItWorks =
        "The Goal SIP calculator is simple to use and gives you the monthly SIP value by the data points you enter. You can use the Goal-Based SIP Calculator through the steps explained below:";

    const sipTimeline = [
        { year: "Step 1", text: "Enter the goal amount you want to reach through your SIP investment." },
        { year: "Step 2", text: "Choose the duration of the investment." },
        { year: "Step 3", text: "Input the expected rate of return (%) per annum." },
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
            <BannerSection pageKey="goalBasedSipCalculator" />
            <BreadcrumbStrip />
            <CalculatorInfoSection
                title="Goal Based SIP Calculator"
                description="The majority of investors target a certain amount of wealth within a time frame before the beginning of their investment journey. In terms of systematic investment plans for mutual funds - an investor can decide the SIP amount to invest each month and, the period to stay invested for.
                For this SIP investment analysis, investors can seamlessly use the Goal Based SIP Calculator."
                image="/assets/images/calculators/goal-sip.png"
            />
            <MainCalculatorGoalSip />
            <CalculatorFeatures
                howItWorks={sipHowItWorks}
                timeline={sipTimeline}
                benefits={sipBenefits}
                ctaText="Try the Goal SIP Calculator Now"
            />
            <DownloadAppSection />
            <FaqAndContact />
            <Blogs />
            <Footer />
        </>
    );
}