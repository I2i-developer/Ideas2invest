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
import MainCalculatorChildEducation from "@/components/MainCalculator/MainCalculatorChildEducation";

export default function EducationCalculator() {
    const educationHowItWorks =
        "The Child Education Calculator estimates the future cost of your child’s education by considering current fees, inflation in education costs, and the time left until admission.";

    const educationTimeline = [
        { year: "Now", text: "Understand today’s cost of higher education and set a starting point." },
        { year: "During Growing Years", text: "Track how rising education costs impact your savings target." },
        { year: "At Admission Time", text: "Know the exact amount you should have saved to secure your child’s education." },
    ];

    const educationBenefits = [
        {
            title: "Secure Your Child’s Future",
            description: "Ensure funds are available when your child is ready for higher studies.",
            icon: "/assets/icons/secure-future.png",
        },
        {
            title: "Beat Rising Fees",
            description: "Factor in the steep inflation in education costs to avoid last-minute shocks.",
            icon: "/assets/icons/education-inflation.png",
        },
        {
            title: "Plan Systematically",
            description: "Invest smartly and regularly to build the required education corpus on time.",
            icon: "/assets/icons/systematic-plan.png",
        },
    ];

    return (
        <>
            <Topbar />
            <Navbar />
            <BannerSection pageKey="childEducationCalculator" />
            {/* <BreadcrumbStrip /> */}
            <CalculatorInfoSection
                title="Child Education Calculator"
                description="The Child Education Calculator helps parents plan the right amount of savings required for their child’s future education. By considering current education costs, expected inflation, and the time left until your child’s admission, it ensures that financial readiness never becomes a barrier to their dreams."
                image="/assets/images/calculators/child-education-info.png"
            />
            <MainCalculatorChildEducation />
            <CalculatorFeatures
                howItWorks={educationHowItWorks}
                timeline={educationTimeline}
                benefits={educationBenefits}
                ctaText="Plan Your Child’s Education Now"
            />
            <DownloadAppSection />
            <FaqAndContact />
            <Blogs />
            <Footer />
        </>
    );
}
