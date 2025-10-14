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
import MainCalculatorLimitedSip from "@/components/MainCalculator/MainCalculatorLimitedSip";
import seoData from "@/data/seoData";

export const metadata = {
  title: seoData["/calculators/limited-sip"].title,
  description: seoData["/calculators/limited-sip"].description,
  keywords: seoData["/calculators/limited-sip"].keywords,
  alternates: {
    canonical: seoData["/calculators/limited-sip"].canonical,
  },
};

export default function LimitedSipCalculator() {
    const limitedSipHowItWorks =
        "The Limited Period SIP Calculator estimates the future value of your investments when you invest through SIPs for a fixed duration, but stay invested until the end of the chosen time horizon.";

    const limitedSipTimeline = [
        { year: "Initial Years", text: "Start your SIP for a fixed duration, such as 5 or 10 years." },
        { year: "Post Investment Period", text: "Even after contributions stop, your invested money continues to grow." },
        { year: "At Maturity", text: "Experience significant wealth accumulation through compounding on both invested amount and gains." },
    ];

    const limitedSipBenefits = [
        {
            title: "Flexibility in Tenure",
            description: "Invest only for a limited period while enjoying long-term growth.",
            icon: "/assets/icons/flexibility-tenure.png",
        },
        {
            title: "Efficient Goal Planning",
            description: "Ideal for time-bound goals like education, marriage, or buying a house.",
            icon: "/assets/icons/goal-planning.png",
        },
        {
            title: "Compounding Advantage",
            description: "Your investment continues to grow even after you stop contributing.",
            icon: "/assets/icons/compounding.png",
        },
    ];

    return (
        <>
            <Topbar />
            <Navbar />
            <BannerSection pageKey="limitedPeriodSipCalculator" />
            <BreadcrumbStrip />
            <CalculatorInfoSection
                title="Limited Period SIP Calculator"
                description="The Limited Period SIP Calculator helps you estimate the future value of investments when you contribute through SIPs only for a fixed number of years. Even after you stop investing, your money remains invested and continues to compound, making this tool ideal for goal-based planning."
                image="/assets/images/calculators/limited-sip-info.png"
            />
            <MainCalculatorLimitedSip />
            <CalculatorFeatures
                howItWorks={limitedSipHowItWorks}
                timeline={limitedSipTimeline}
                benefits={limitedSipBenefits}
                ctaText="Try the Limited Period SIP Calculator Now"
            />
            <DownloadAppSection />
            <FaqAndContact />
            <Blogs />
            <Footer />
        </>
    );
}
