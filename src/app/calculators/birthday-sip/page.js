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
import MainCalculatorBirthdaySIP from "@/components/MainCalculator/MainCalculatorBirthdaySIP";

export default function BirthdaySipCalculator() {
    const birthdaySipHowItWorks =
        "The Birthday SIP Calculator helps you see how investing a fixed amount every year on your child’s or loved one’s birthday can grow into a significant fund over time through compounding.";

    const birthdaySipTimeline = [
        { year: "Year 1", text: "Start a small yearly SIP on birthdays as a financial gift." },
        { year: "Year 10", text: "Watch the power of compounding multiply your yearly contributions." },
        { year: "Year 18+", text: "See a large corpus ready for higher education, marriage, or other life goals." },
    ];

    const birthdaySipBenefits = [
        {
            title: "Meaningful Gifting",
            description: "Create lasting value by gifting investments instead of material items.",
            icon: "/assets/icons/gift.png",
        },
        {
            title: "Build a Future Fund",
            description: "Ensure your child or loved one has a strong financial foundation at maturity.",
            icon: "/assets/icons/future-fund.png",
        },
        {
            title: "Leverage Compounding",
            description: "Annual contributions grow exponentially when invested early and consistently.",
            icon: "/assets/icons/compound-growth.png",
        },
    ];

    return (
        <>
            <Topbar />
            <Navbar />
            <BannerSection pageKey="birthdaySipCalculator" />
            <BreadcrumbStrip />
            <CalculatorInfoSection
                title="Birthday SIP Calculator"
                description="The Birthday SIP Calculator helps you understand how yearly investments made on birthdays can turn into a valuable financial gift. By investing on special occasions, you not only celebrate today but also secure tomorrow with the power of compounding."
                image="/assets/images/calculators/birthday-sip-info.png"
            />
            <MainCalculatorBirthdaySIP />
            <CalculatorFeatures
                howItWorks={birthdaySipHowItWorks}
                timeline={birthdaySipTimeline}
                benefits={birthdaySipBenefits}
                ctaText="Plan a Birthday SIP Today"
            />
            <DownloadAppSection />
            <FaqAndContact />
            <Blogs />
            <Footer />
        </>
    );
}
