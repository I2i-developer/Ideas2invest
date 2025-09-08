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
import { Wallet, TrendingUp } from "lucide-react";

export default function ChangeDistributorPage() {
    const columns = [
        "Requirement",
        "Details",
    ];

    const rows = [
        ["Minimum Balance", "No minimum balance required to switch"],
        ["Documents Needed", "PAN, KYC, and existing distributor details"],
        ["Processing Time", "Usually 7-10 business days"],
        ["Fees", "No fees charged by AMCs for switching"],
    ];

    const benefits = [
        {
            title: "Better Advice",
            description: "Switch to a distributor who understands your goals and provides personalized investment guidance.",
            icon: "/assets/icons/advice.png",
            image: "/assets/images/services/distributor1.jpg",
        },
        {
            title: "Consolidate Your Investments",
            description: "Manage all your mutual fund investments under one distributor for easier tracking and reporting.",
            icon: "/assets/icons/consolidate.png",
            image: "/assets/images/services/distributor2.jpg",
        },
        {
            title: "Cost Efficiency",
            description: "Switching can help you reduce advisory fees and unlock better investment options.",
            icon: "/assets/icons/cost.png",
            image: "/assets/images/services/distributor3.jpg",
        },
        {
            title: "Seamless Process",
            description: "Our team ensures a hassle-free transition without affecting your ongoing investments.",
            icon: "/assets/icons/process.png",
            image: "/assets/images/services/distributor4.jpg",
        },
    ];

    const steps = [
        {
            title: "Share Details",
            description: "Provide your current mutual fund portfolio and distributor information.",
            icon: "/assets/icons/share.png",
        },
        {
            title: "Verify KYC",
            description: "Ensure your KYC is up to date for a smooth transfer process.",
            icon: "/assets/icons/kyc.png",
        },
        {
            title: "Submit Switch Request",
            description: "We initiate the distributor change request with your existing AMC.",
            icon: "/assets/icons/request.png",
        },
        {
            title: "Confirm & Start",
            description: "Once processed, your investments are with your new distributor, and you can enjoy personalized guidance.",
            icon: "/assets/icons/start.png",
        },
    ];

    const personas = [
        {
            name: "Young Investor",
            tagline: "Looking for personalized advice",
            avatar: "/assets/personas/young.png",
            image: "/assets/images/personas/distributor1.jpg",
            title: "Smart Start",
            description: "Young investors often seek guidance on SIPs and ELSS. Switching to the right distributor ensures they start investing smartly.",
            benefits: [
                "Goal-based investment planning",
                "Better returns through informed advice",
                "Track investments easily",
            ],
        },
        {
            name: "Family Planner",
            tagline: "Consolidating multiple funds",
            avatar: "/assets/personas/mid.png",
            image: "/assets/images/personas/distributor2.jpg",
            title: "Organized Portfolio",
            description: "Professionals managing family finances benefit by consolidating funds under one distributor for easy monitoring and planning.",
            benefits: [
                "Simplified portfolio",
                "Customized investment guidance",
                "Better tax efficiency",
            ],
        },
        {
            name: "Retirement Seeker",
            tagline: "Optimizing income & safety",
            avatar: "/assets/personas/retire.png",
            image: "/assets/images/personas/distributor3.jpg",
            title: "Peace of Mind",
            description: "Retirees ensure smooth fund management and better income strategies by switching to a reliable distributor.",
            benefits: [
                "Regular income planning",
                "Capital protection strategies",
                "Stress-free investment management",
            ],
        },
    ];

    const caseStudies = [
        {
            name: "Rahul, 35",
            role: "Young Professional",
            problem: "Rahul had multiple advisors and was missing investment opportunities.",
            strategy: "He switched to a single distributor who consolidated his portfolio.",
            outcome: "Now, he has a clearer view and receives better investment advice.",
            learning: "A right distributor simplifies investments and improves returns.",
        },
        {
            name: "Sunita, 50",
            role: "Family Planner",
            problem: "Sunita had investments scattered across multiple AMCs.",
            strategy: "She moved all her funds to a trusted distributor.",
            outcome: "Her portfolio is now easier to track and she optimized tax benefits.",
            learning: "Consolidation ensures efficiency and better management.",
        },
    ];

    const options = [
        {
            title: "Stay with Current Distributor",
            tagline: "No change, continue as-is",
            icon: <Wallet />,
            pros: [
                "No paperwork",
                "Existing relationship maintained",
            ],
            cons: ["May not get personalized guidance", "Limited portfolio optimization"],
            highlight: false,
        },
        {
            title: "Switch Distributor",
            tagline: "Get expert guidance and consolidation",
            icon: <TrendingUp />,
            pros: [
                "Better advice & tracking",
                "Portfolio consolidation",
                "Potential for higher returns",
            ],
            cons: ["Requires a simple KYC & switch process"],
            highlight: true,
        },
    ];

    return (
        <>
            <Topbar />
            <Navbar />
            <BannerSection pageKey="changeDistributor" />
            <BreadcrumbStrip />
            <InfoWithTableSection
                title="Change Your Mutual Fund Distributor"
                description="Switch your mutual fund distributor easily to get better guidance, consolidated tracking, and improved investment management."
                columns={columns}
                rows={rows}
            />
            <ServiceBenefits title="Why Switch Your Distributor?" benefits={benefits} />
            <ServiceSteps title="How to Change Your Distributor" steps={steps} />
            <ServiceComparison
                title="Distributor Options"
                description="Compare staying with your current distributor versus switching to a better one."
                options={options}
            />
            <InvestorPersonaSection title="Who Benefits from Switching?" personas={personas} />
            <StartSIPSection />
            <ExploreMutualFunds />
            <ServiceCaseStudy
                title="Real-Life Success Stories"
                description="See how investors optimized their investments by switching distributors."
                caseStudies={caseStudies}
            />
            <ServiceCTASection
                title="Switch Your Distributor Today"
                description="Get personalized advice and consolidate your investments under one trusted distributor."
                benefits={[
                    "Simplified investment tracking",
                    "Better guidance for SIP & Lumpsum",
                    "No fees for switching",
                    "Start your journey hassle-free",
                ]}
                ctaText="Switch Now"
                ctaLink="/contact"
                image="/assets/images/distributor-cta.jpg"
            />
            <OurAssociates />
            <Blogs />
            <FAQContactSection />
            <Footer />
        </>
    );
}
