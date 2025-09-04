import BannerSection from "@/components/BannerSection/BannerSection";
import BreadcrumbStrip from "@/components/BreadcrumbStrip/BreadcrumbStrip";
import CalculatorFeatures from "@/components/CalculatorFeatures/CalculatorFeatures";
import CalculatorInfoSection from "@/components/CalculatorInfoSection/CalculatorInfoSection";
import Footer from "@/components/Footer/Footer";
import MainCalculatorHomeLoanSip from "@/components/MainCalculator/MainCalculatorHomeLoanSip";
import FaqAndContact from "@/components/FaqAndContact/FaqAndContact";
import Navbar from "@/components/Navbar/Navbar";
import Topbar from "@/components/Topbar/Topbar";
import DownloadAppSection from "@/components/DownloadApp/DownloadAppSection";
import Blogs from "@/components/Blogs/Blogs";

export default function HomeLoanVsSipCalculator() {
    const homeLoanVsSipHowItWorks =
        "The Home Loan vs SIP Calculator compares whether it is more beneficial to prepay your home loan or to invest the same amount in a SIP, helping you make a smarter financial decision.";

    const homeLoanVsSipTimeline = [
        { year: "Initial Years", text: "Evaluate the impact of early loan repayments vs starting SIPs." },
        { year: "Mid Tenure", text: "Track how reduced interest outgo or growing SIP wealth affects your finances." },
        { year: "At Completion", text: "See whether prepaying the loan or investing in SIP created more wealth for you." },
    ];

    const homeLoanVsSipBenefits = [
        {
            title: "Smart Financial Decisions",
            description: "Understand if investing in SIPs gives better returns than repaying your loan early.",
            icon: "/assets/icons/decision.png",
        },
        {
            title: "Compare Scenarios",
            description: "View side-by-side results of loan prepayment vs SIP investment over the same period.",
            icon: "/assets/icons/comparison.png",
        },
        {
            title: "Optimize Wealth & Debt",
            description: "Strike the right balance between reducing debt and creating long-term wealth.",
            icon: "/assets/icons/optimize.png",
        },
    ];

    return (
        <>
            <Topbar />
            <Navbar />
            <BannerSection pageKey="homeLoanVsSipCalculator" />
            <BreadcrumbStrip />
            <CalculatorInfoSection
                title="Home Loan vs SIP Calculator"
                description="The Home Loan vs SIP Calculator helps you decide whether you should use surplus money to prepay your home loan or invest it in SIPs. By comparing interest savings against potential investment returns, this tool ensures you make the most financially sound decision for long-term benefits."
                image="/assets/images/calculators/home-vs-sip-info.png"
            />
            <MainCalculatorHomeLoanSip />
            <CalculatorFeatures
                howItWorks={homeLoanVsSipHowItWorks}
                timeline={homeLoanVsSipTimeline}
                benefits={homeLoanVsSipBenefits}
                ctaText="Compare Home Loan vs SIP Now"
            />
            <DownloadAppSection />
            <FaqAndContact />
            <Blogs />
            <Footer />
        </>
    );
}
