import BannerSection from "@/components/BannerSection/BannerSection";
import ServiceBenefits from "@/components/ServiceBenefits/ServiceBenefits";
import BreadcrumbStrip from "@/components/BreadcrumbStrip/BreadcrumbStrip";
import Navbar from "@/components/Navbar/Navbar";
import InfoWithTableSection from "@/components/SipInfo/InfoWithTable";
import Topbar from "@/components/Topbar/Topbar";
import OurAssociates from "@/components/OurAssociates/OurAssociates";
import ExploreMutualFunds from "@/components/ExploreFunds/ExploreFunds";
import SipCalculator from "@/components/SipCalculator/SipCalculator";
import ServiceSteps from "@/components/ServiceSteps/ServiceSteps";
import InvestorPersonaSection from "@/components/InvestorPersona/InvestorPersona";
import ServiceCaseStudy from "@/components/ServiceCaseStudy/ServiceCaseStudy";
import StartSIPSection from "@/components/StartSIPSection/StartSIPSection";
import Footer from "@/components/Footer/Footer";
import FAQContactSection from "@/components/FaqAndContact/FaqAndContact";
import Blogs from "@/components/Blogs/Blogs";
import ServiceCTASection from "@/components/ServiceCTA/ServiceCTA";

export default function SIPPage() {
    const columns = [
        "Frequency under SIP Facility",
        "Minimum Installments",
        "Minimum SIP amount",
    ];

    const rows = [
        ["Daily", "6 Installments", "Rs. 100/- and in multiple of Re. 1/-"],
        ["Weekly", "6 Installments", "Rs. 100/- and in multiple of Re. 1/-"],
        ["Monthly", "6 Installments", "Rs. 100/- and in multiple of Re. 1/-"],
        ["Yearly", "3 Installments", "Rs. 12,000/- and in multiple of Re. 1/-"],
    ];

    const benefits = [
        {
            title: "Disciplined",
            description:
                "Rather than timing the market, investors can create a disciplined and organised investing process using a systematic investment plan.",
            icon: "/assets/icons/disciplined.png",
            image: "/assets/images/services/2.jpg",
        },
        {
            title: "Rupee Cost Averaging",
            description:
                "SIPs allow investors to average out their investment cost across market ups and downs.",
            icon: "/assets/icons/rupee.png",
            image: "/assets/images/benefits/rupee.jpg",
        },
        {
            title: "Flexible Tenure",
            description:
                "SIPs can be set up daily, weekly, monthly, or yearly depending on the scheme.",
            icon: "/assets/icons/flexible.png",
            image: "/assets/images/benefits/flexible.jpg",
        },
        {
            title: "Flexible Tenure",
            description:
                "SIPs can be set up daily, weekly, monthly, or yearly depending on the scheme.",
            icon: "/assets/icons/flexible.png",
            image: "/assets/images/benefits/flexible.jpg",
        },
        {
            title: "Flexible Tenure1",
            description:
                "SIPs can be set up daily, weekly, monthly, or yearly depending on the scheme.",
            icon: "/assets/icons/flexible.png",
            image: "/assets/images/benefits/flexible.jpg",
        },
        {
            title: "Flexible Tenure1",
            description:
                "SIPs can be set up daily, weekly, monthly, or yearly depending on the scheme.",
            icon: "/assets/icons/flexible.png",
            image: "/assets/images/benefits/flexible.jpg",
        },
        // add more benefits...
    ];

    const steps = [
        {
            title: "Choose Your Plan",
            description: "Select the mutual fund scheme and investment duration that suits you.",
            icon: "/assets/icons/plan.png",
        },
        {
            title: "Set Amount",
            description: "Decide the amount you want to invest regularly.",
            icon: "/assets/icons/amount.png",
        },
        {
            title: "Complete KYC",
            description: "Verify your identity and complete your KYC in minutes.",
            icon: "/assets/icons/kyc.png",
        },
        {
            title: "Start Investing",
            description: "Begin your SIP and let compounding grow your wealth.",
            icon: "/assets/icons/start.png",
        },
    ];

    const personas = [
        {
            name: "Young Professional",
            tagline: "Starting your financial journey",
            avatar: "/assets/personas/young.png",
            image: "/assets/images/services/2.jpg",
            title: "Perfect for Beginners",
            description:
                "If you’re just starting your career, SIPs help you build a habit of disciplined savings without large commitments.",
            benefits: [
                "Start small, as low as ₹100",
                "Build long-term wealth",
                "No need to time the market",
            ],
        },
        {
            name: "Mid-career Investor",
            tagline: "Balancing family & investments",
            avatar: "/assets/personas/mid.png",
            image: "/assets/images/persona2.jpg",
            title: "Secure Your Future",
            description:
                "For working professionals with family responsibilities, SIPs allow consistent investment while managing expenses.",
            benefits: [
                "Tax-saving ELSS options",
                "Flexible tenures",
                "Steady wealth creation",
            ],
        },
        {
            name: "Retirement Planner",
            tagline: "Securing golden years",
            avatar: "/assets/personas/retire.png",
            image: "/assets/images/persona3.jpg",
            title: "Plan for Retirement",
            description:
                "SIPs can help retirees and pre-retirees ensure a regular stream of income post-retirement through smart planning.",
            benefits: [
                "Regular income options",
                "Capital protection schemes",
                "Peace of mind in later years",
            ],
        },
    ];

    const caseStudies = [
        {
            name: "Riya, 28",
            role: "Young Professional",
            problem: "Riya wanted to start investing early but was worried about market risks.",
            strategy: "She started a ₹5,000 monthly SIP in a diversified equity fund.",
            outcome: "In 7 years, her investment doubled, giving her confidence to increase her SIP.",
            learning: "Start small, stay consistent, and let compounding do the work.",
        },
        {
            name: "Amit, 42",
            role: "Family Planner",
            problem: "Amit needed a plan for his child’s higher education expenses.",
            strategy: "He chose an ELSS fund to get tax benefits while building wealth.",
            outcome: "Over 10 years, he saved enough for his child’s studies while enjoying tax savings.",
            learning: "Smart fund choices can balance goals with tax efficiency.",
        },
        {
            name: "Meena, 55",
            role: "Retirement Seeker",
            problem: "Meena wanted a steady income after retirement.",
            strategy: "She shifted her corpus into a debt mutual fund with SWP (Systematic Withdrawal Plan).",
            outcome: "She now enjoys a fixed monthly income without exhausting her capital quickly.",
            learning: "SIPs and SWPs can work together for retirement planning.",
        },
    ];

    return (
        <>
            <Topbar />
            <Navbar />
            <BannerSection pageKey="sip" />
            <BreadcrumbStrip />
            <InfoWithTableSection
                title="What is a Systematic Investment Plan"
                description="An SIP (Systematic Investment Plan) is an investment method by which mutual funds allow their investors to invest in a disciplined manner. By using the SIP facility, an investor can invest a fixed amount of money at predetermined intervals in a mutual fund scheme."
                columns={columns}
                rows={rows}
            />
            <ServiceBenefits title="Benefits and Features of SIP" benefits={benefits} />
            <ServiceSteps title="Steps to Start Your SIP" steps={steps} />
            <InvestorPersonaSection title="Who Should Invest in SIP?" personas={personas} />
            <SipCalculator />
            <StartSIPSection />
            <ExploreMutualFunds />
            <ServiceCaseStudy title="Real-Life Case Studies" description="See how different investors achieved their goals with SIPs." caseStudies={caseStudies} />
            <ServiceCTASection
                title="Start Your Wealth Journey Today"
                description="Investing through SIPs is the simplest way to build wealth steadily over time. Let us help you achieve your goals."
                benefits={[
                    "Start with as low as ₹500",
                    "Benefit from power of compounding",
                    "Flexible & easy withdrawals",
                    "Track everything online"
                ]}
                ctaText="Start Investing Now"
                ctaLink="/sip-calculator"
                image="/assets/images/sip-cta.jpg"
            />
            <OurAssociates />
            <Blogs />
            <FAQContactSection />
            <Footer />
        </>
    );
}
