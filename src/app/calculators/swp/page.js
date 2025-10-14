import BannerSection from "@/components/BannerSection/BannerSection";
import BreadcrumbStrip from "@/components/BreadcrumbStrip/BreadcrumbStrip";
import CalculatorFeatures from "@/components/CalculatorFeatures/CalculatorFeatures";
import CalculatorInfoSection from "@/components/CalculatorInfoSection/CalculatorInfoSection";
import Footer from "@/components/Footer/Footer";
import MainCalculatorSwp from "@/components/MainCalculator/MainCalculatorSwp";
import FaqAndContact from "@/components/FaqAndContact/FaqAndContact";
import Navbar from "@/components/Navbar/Navbar";
import Topbar from "@/components/Topbar/Topbar";
import DownloadAppSection from "@/components/DownloadApp/DownloadAppSection";
import Blogs from "@/components/Blogs/Blogs";
import seoData from "@/data/seoData";

export const metadata = {
  title: seoData["/calculators/swp"].title,
  description: seoData["/calculators/swp"].description,
  keywords: seoData["/calculators/swp"].keywords,
  alternates: {
    canonical: seoData["/calculators/swp"].canonical,
  },
};

export default function SwpCalculator() {
    const swpHowItWorks =
        "The SWP Calculator helps you estimate the regular income you can generate by withdrawing a fixed amount periodically from your investments while the remaining corpus continues to grow.";

    const swpTimeline = [
        { year: "Initial Years", text: "Start systematic withdrawals without disturbing the full investment corpus." },
        { year: "Mid-Term", text: "Enjoy steady income while compounding continues on the balance amount." },
        { year: "Long-Term", text: "Plan how long your corpus will last and ensure financial stability." },
    ];

    const swpBenefits = [
        {
            title: "Regular Income",
            description: "Generate a fixed income stream to manage expenses post-retirement or otherwise.",
            icon: "/assets/icons/regular-income.png",
        },
        {
            title: "Tax Efficiency",
            description: "Withdrawals may be more tax-efficient compared to traditional options.",
            icon: "/assets/icons/tax-benefit.png",
        },
        {
            title: "Preserve Corpus",
            description: "Keep your investments working for you while only withdrawing what you need.",
            icon: "/assets/icons/preserve.png",
        },
    ];

    return (
        <>
            <Topbar />
            <Navbar />
            <BannerSection pageKey="swpCalculator" />
            <BreadcrumbStrip />
            <CalculatorInfoSection
                title="SWP Calculator"
                description="The Systematic Withdrawal Plan (SWP) Calculator helps you plan regular withdrawals from your investments while allowing the remaining corpus to grow. Ideal for retirees and those seeking steady cash flow, it ensures financial independence without fully liquidating your investments."
                image="/assets/images/calculators/swp-info.jpg"
            />
            <MainCalculatorSwp />
            <CalculatorFeatures
                howItWorks={swpHowItWorks}
                timeline={swpTimeline}
                benefits={swpBenefits}
                ctaText="Plan Your SWP Now"
            />
            <DownloadAppSection />
            <FaqAndContact />
            <Blogs />
            <Footer />
        </>
    );
}
