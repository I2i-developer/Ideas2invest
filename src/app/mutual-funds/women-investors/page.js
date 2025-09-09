import BannerSection from "@/components/BannerSection/BannerSection";
import ServiceBenefits from "@/components/ServiceBenefits/ServiceBenefits";
import BreadcrumbStrip from "@/components/BreadcrumbStrip/BreadcrumbStrip";
import Navbar from "@/components/Navbar/Navbar";
import InfoWithTableSection from "@/components/SipInfo/InfoWithTable";
import Topbar from "@/components/Topbar/Topbar";
import OurAssociates from "@/components/OurAssociates/OurAssociates";
import ExploreMutualFunds from "@/components/ExploreFunds/ExploreFunds";
import ServiceSteps from "@/components/ServiceSteps/ServiceSteps";
import InvestorPersonaSection from "@/components/InvestorPersona/InvestorPersona";
import ServiceCaseStudy from "@/components/ServiceCaseStudy/ServiceCaseStudy";
import StartSIPSection from "@/components/StartSIPSection/StartSIPSection";
import Footer from "@/components/Footer/Footer";
import FAQContactSection from "@/components/FaqAndContact/FaqAndContact";
import Blogs from "@/components/Blogs/Blogs";
import ServiceCTASection from "@/components/ServiceCTA/ServiceCTA";
import ServiceComparison from "@/components/ServiceComparison/ServiceComparison";
import { Briefcase, ShieldCheck } from "lucide-react";

export default function WomenMFPage() {
    const columns = [
        "Goal",
        "Typical Duration",
        "Suggested Mutual Fund Type",
    ];

    const rows = [
        ["Short-term needs (1-3 years)", "1-3 years", "Debt Funds / Liquid Funds"],
        ["Medium-term goals (3-5 years)", "3-5 years", "Balanced / Hybrid Funds"],
        ["Long-term wealth creation", "5+ years", "Equity Mutual Funds / ELSS"],
        ["Retirement Planning", "10+ years", "Equity + Debt Combination"],
    ];

    const benefits = [
        {
            title: "Financial Independence",
            description:
                "Mutual funds allow women to create their own financial identity, independent of family or spouse.",
            icon: "/assets/images/icons/independence.svg",
            image: "/assets/images/services/women1.jpg",
        },
        {
            title: "Flexible & Affordable",
            description:
                "Start investing with as little as ₹100 per month. Perfect for homemakers, professionals, or entrepreneurs.",
            icon: "/assets/images/icons/flexible.webp",
            image: "/assets/images/services/women2.jpg",
        },
        {
            title: "Goal-Oriented",
            description:
                "Invest according to your needs—children’s education, business growth, travel, or retirement.",
            icon: "/assets/images/icons/define-goal.svg",
            image: "/assets/images/services/women3.jpg",
        },
        {
            title: "Tax Benefits",
            description:
                "Women can save taxes through ELSS mutual funds while building wealth for the future.",
            icon: "/assets/images/icons/save-tax.svg",
            image: "/assets/images/services/women4.jpg",
        },
        {
            title: "Beating Inflation",
            description:
                "Mutual funds provide higher returns compared to savings accounts or FDs, helping women stay ahead of inflation.",
            icon: "/assets/images/icons/beat-inflation.svg",
            image: "/assets/images/services/women5.jpg",
        },
    ];

    const steps = [
        {
            title: "Define Your Goal",
            description: "Identify what you’re investing for – education, retirement, or financial security.",
            icon: "/assets/images/icons/goal.png",
        },
        {
            title: "Choose the Right Fund",
            description: "Select funds that match your risk appetite and goals.",
            icon: "/assets/images/icons/fund.png",
        },
        {
            title: "Start Small",
            description: "Begin with SIPs of ₹100 or ₹500 and gradually increase as income grows.",
            icon: "/assets/images/icons/start.png",
        },
        {
            title: "Track & Stay Consistent",
            description: "Review your portfolio annually but stay disciplined with your investments.",
            icon: "/assets/images/icons/track.png",
        },
    ];

    const options = [
        {
            title: "Mutual Funds for Women",
            tagline: "Financial growth with flexibility",
            icon: <Briefcase />,
            pros: [
                "Start small and scale up",
                "Achieve personal financial goals",
                "Option to invest for short or long term",
            ],
            cons: ["Returns are market-linked (not fixed like FDs)"],
            highlight: true,
        },
        {
            title: "Traditional Savings (FDs/Gold)",
            tagline: "Safe but limited growth",
            icon: <ShieldCheck />,
            pros: ["Low risk and predictable returns", "Gold is a traditional store of value"],
            cons: [
                "Lower returns than mutual funds",
                "Cannot always beat inflation",
            ],
        },
    ];

    const graphData = [
        { year: "Year 1", mutualfunds: 12000, fd: 11000 },
        { year: "Year 3", mutualfunds: 42000, fd: 36000 },
        { year: "Year 5", mutualfunds: 80000, fd: 62000 },
        { year: "Year 10", mutualfunds: 180000, fd: 125000 },
    ];

    const lines = [
        { dataKey: "mutualfunds", color: "#db2777" },
        { dataKey: "fd", color: "#0ea5e9" },
    ];

    const personas = [
        {
            name: "Working Professional",
            tagline: "Balancing career & future goals",
            avatar: "/assets/images/icons/employee.png",
            image: "/assets/images/services/women1.jpg",
            title: "Grow with Your Career",
            description:
                "Professionals can start SIPs from their salary to build wealth for long-term needs like a house or retirement.",
            benefits: [
                "Invest monthly without stress",
                "Get tax savings via ELSS",
                "Build a retirement corpus",
            ],
        },
        {
            name: "Homemaker",
            tagline: "Creating financial independence",
            avatar: "/assets/images/icons/housewife.png",
            image: "/assets/images/services/women2.jpg",
            title: "Empowered at Home",
            description:
                "Homemakers can invest small amounts regularly, turning household savings into wealth.",
            benefits: [
                "Start with ₹100 SIPs",
                "Create personal savings",
                "Gain financial security",
            ],
        },
        {
            name: "Entrepreneur",
            tagline: "Investing for business & growth",
            avatar: "/assets/images/icons/women.png",
            image: "/assets/images/services/women3.jpg",
            title: "Support Your Business",
            description:
                "Entrepreneurs can invest profits into mutual funds to create backup wealth for business expansion or security.",
            benefits: [
                "Liquidity when needed",
                "Diversification of risk",
                "Achieve both personal & business goals",
            ],
        },
    ];

    const caseStudies = [
        {
            name: "Priya, 32",
            role: "Working Professional",
            problem: "Wanted to save for retirement without depending on anyone.",
            strategy: "Started a ₹3,000 monthly SIP in a balanced mutual fund.",
            outcome: "Built a corpus of ₹12 lakhs in 12 years.",
            learning: "Consistency in SIPs leads to financial independence.",
        },
        {
            name: "Anita, 40",
            role: "Homemaker",
            problem: "Had household savings but didn’t know how to grow them.",
            strategy: "Began with ₹500 SIPs in an equity mutual fund.",
            outcome: "In 8 years, her savings grew enough to fund her daughter’s higher studies.",
            learning: "Small steps can lead to big financial achievements.",
        },
        {
            name: "Neha, 35",
            role: "Entrepreneur",
            problem: "Needed to create a safety net for her business and family.",
            strategy: "Invested part of her profits into hybrid mutual funds.",
            outcome: "Built an emergency corpus while growing her wealth.",
            learning: "Mutual funds help entrepreneurs balance business risks.",
        },
    ];

    return (
        <>
            <Topbar />
            <Navbar />
            <BannerSection pageKey="empoweringWomen" />
            <BreadcrumbStrip />
            <InfoWithTableSection
                title="What is Empowering Women through Mutual Funds?"
                description="This initiative is about enabling women to achieve financial independence and security using mutual funds. Whether a working professional, homemaker, or entrepreneur, women can start small, grow their savings, and build wealth for every stage of life."
                columns={columns}
                rows={rows}
            />
            <ServiceBenefits title="Benefits and Features" benefits={benefits} />
            <ServiceSteps title="How Women Can Start Investing" steps={steps} />
            <ServiceComparison
                title="Mutual Funds vs Traditional Savings"
                description="See how mutual funds compare to traditional options like fixed deposits or gold."
                options={options}
                graphTitle={"Growth of ₹1 Lakh Investment (10 years)"}
                graphData={graphData}
                lines={lines}
            />
            <InvestorPersonaSection title="Who Should Invest?" personas={personas} />
            <StartSIPSection />
            <ExploreMutualFunds />
            <ServiceCaseStudy
                title="Inspiring Case Studies"
                description="See how women from different walks of life achieved their goals through mutual funds."
                caseStudies={caseStudies}
            />
            <ServiceCTASection
                title="Your Journey to Financial Freedom"
                description="No matter who you are – a professional, homemaker, or entrepreneur – mutual funds can help you create independence and achieve your goals."
                benefits={[
                    "Start with as low as ₹100",
                    "Flexible for every woman",
                    "Beat inflation & grow wealth",
                    "Achieve personal and family goals"
                ]}
                ctaText="Start Investing Today"
                ctaLink="/mutual-funds-for-women"
                image="/assets/images/icons/women-investor-cta.png"
            />
            <OurAssociates />
            <Blogs />
            <FAQContactSection />
            <Footer />
        </>
    );
}
