import BannerSection from "@/components/BannerSection/BannerSection";
import BreadcrumbStrip from "@/components/BreadcrumbStrip/BreadcrumbStrip";
import CalculatorFeatures from "@/components/CalculatorFeatures/CalculatorFeatures";
import CalculatorInfoSection from "@/components/CalculatorInfoSection/CalculatorInfoSection";
import Footer from "@/components/Footer/Footer";
import MainCalculatorEmi from "@/components/MainCalculator/MainCalculatorEmi";
import FaqAndContact from "@/components/FaqAndContact/FaqAndContact";
import Navbar from "@/components/Navbar/Navbar";
import Topbar from "@/components/Topbar/Topbar";
import DownloadAppSection from "@/components/DownloadApp/DownloadAppSection";
import Blogs from "@/components/Blogs/Blogs";

export default function EmiCalculator() {
    const emiHowItWorks =
        "The EMI Calculator computes your monthly repayment amount based on the loan amount, interest rate, and tenure, helping you plan your finances with clarity.";

    const emiTimeline = [
        { year: "At Loan Start", text: "Understand your fixed monthly EMI obligations." },
        { year: "During Loan Tenure", text: "Track how each EMI contributes towards interest and principal repayment." },
        { year: "At Loan Completion", text: "See the total interest paid and the full repayment schedule." },
    ];

    const emiBenefits = [
        {
            title: "Clear Repayment Plan",
            description: "Know your exact monthly outflow before taking a loan.",
            icon: "/assets/icons/repayment.png",
        },
        {
            title: "Smart Financial Planning",
            description: "Adjust loan amount, tenure, or interest rate to fit your budget.",
            icon: "/assets/icons/planning.png",
        },
        {
            title: "Avoid Surprises",
            description: "Stay prepared with a transparent breakdown of principal vs. interest payments.",
            icon: "/assets/icons/transparent.png",
        },
    ];

    return (
        <>
            <Topbar />
            <Navbar />
            <BannerSection pageKey="emiCalculator" />
            <BreadcrumbStrip />
            <CalculatorInfoSection
                title="EMI Calculator"
                description="An EMI (Equated Monthly Installment) Calculator helps you estimate your monthly repayment amount for loans. By entering the loan amount, tenure, and interest rate, you can plan your finances better, compare loan offers, and avoid repayment stress."
                image="/assets/images/calculators/emi-info.jpg"
            />
            <MainCalculatorEmi />
            <CalculatorFeatures
                howItWorks={emiHowItWorks}
                timeline={emiTimeline}
                benefits={emiBenefits}
                ctaText="Calculate Your EMI Now"
            />
            <DownloadAppSection />
            <FaqAndContact />
            <Blogs />
            <Footer />
        </>
    );
}
