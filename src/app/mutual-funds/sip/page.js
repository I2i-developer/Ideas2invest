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
import ServiceComparison from "@/components/ServiceComparison/ServiceComparison";
import { Wallet, TrendingUp } from "lucide-react";

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
                "Rather than timing the market, Investors can create a disciplined and organised investing process using a systematic investment plan. SIP allows investors to invest a fixed amount at regular intervals. The SIPs can be set up on a daily, weekly, monthly, or yearly basis depending on the scheme.",
            icon: "/assets/images/icons/disciplined.webp",
            image: "/assets/images/services/2.jpg",
        },
        {
            title: "Rupee Cost Averaging",
            description:
                "The price of SIP mutual fund investments may vary daily due to changes in the market conditions. As the invested amount in SIP is fixed, an investor can purchase more units when a market share price is low and fewer units when a market share price is high, taking advantage of rupee cost averaging.",
            icon: "/assets/images/icons/rupee-cost.webp",
            image: "/assets/images/services/2.jpg",
        },
        {
            title: "Flexible Tenure",
            description:
                "The SIP mutual fund schemes allow investors to choose the term of investment to suit their own needs and circumstances. It offers investors the flexibility to adjust the term period of their SIP investments based on their investment targets or other requirements.",
            icon: "/assets/images/icons/flexible.webp",
            image: "/assets/images/services/2.jpg",
        },
        {
            title: "Small Payments",
            description:
                "SIP allows investors to invest as little as Rs. 100 in mutual fund SIP; the maximum amount remains uncapped. SIPs can be set up daily, weekly, monthly, or yearly depending on the scheme.",
            icon: "/assets/images/icons/small-payments.webp",
            image: "/assets/images/services/2.jpg",
        },
        {
            title: "Convenience",
            description:
                "SIPs offer a hassle-free mode of investment. You can start an SIP online in a few easy steps. Once the SIP is set up, the investment amount is automatically deducted from your bank account at predetermined intervals. This eliminates the need to remember investment dates, thus making the process efficient and easy to manage",
            icon: "/assets/images/icons/convenience.webp",
            image: "/assets/images/services/2.jpg",
        },
        {
            title: "Power of Compounding",
            description:
                "The power of compounding is one of the key advantages of SIP. Compounding means earning interest on the interest. As you invest regularly over a long period, the returns from an SIP investment may also accumulate over time.",
            icon: "/assets/images/icons/power-of-compounding.webp",
            image: "/assets/images/services/2.jpg",
        },
        {
            title: "Provides Flexibility of Investment Amount",
            description:
                "While the minimum investment limit for SIP investments is Rs.100, the maximum investment limit can vary depending on the scheme. For instance, Small Cap Fund has an investment limit of Rs.1 Crore. Investors have the flexibility to invest in more than one SIP scheme at the same time and may adjust the investment amount according to their requirements.",
            icon: "/assets/images/icons/flexibility.webp",
            image: "/assets/images/services/2.jpg",
        },
    ];

    const steps = [
        {
            title: "Choose Your Plan",
            description: "Select the mutual fund scheme and investment duration that suits you.",
            icon: "/assets/images/icons/plan.png",
        },
        {
            title: "Set Amount",
            description: "Decide the amount you want to invest regularly.",
            icon: "/assets/images/icons/amount.png",
        },
        {
            title: "Complete KYC",
            description: "Verify your identity and complete your KYC in minutes.",
            icon: "/assets/images/icons/kyc.png",
        },
        {
            title: "Start Investing",
            description: "Begin your SIP and let compounding grow your wealth.",
            icon: "/assets/images/icons/start.png",
        },
    ];

    const options = [
        {
            title: "SIP (Systematic Investment Plan)",
            tagline: "Best for beginners & disciplined investors",
            icon: <Wallet />,
            pros: [
                "Invest small amounts regularly",
                "Reduces risk via rupee cost averaging",
                "Encourages saving habit",
            ],
            cons: ["Returns may be lower in strong bull markets"],
            highlight: true,
        },
        {
            title: "Lumpsum Investment",
            tagline: "Best for investors with large capital",
            icon: <TrendingUp />,
            pros: ["Higher returns in strong markets", "Simple one-time process"],
            cons: [
                "Higher risk if market crashes after investment",
                "Requires large upfront capital",
            ],
        },
    ];

    const graphData = [
        { year: "Year 1", sip: 12000, lumpsum: 15000 },
        { year: "Year 2", sip: 26000, lumpsum: 29000 },
        { year: "Year 3", sip: 42000, lumpsum: 47000 },
        { year: "Year 4", sip: 60000, lumpsum: 68000 },
        { year: "Year 5", sip: 80000, lumpsum: 90000 },
    ];

    const lines = [
        { dataKey: "sip", color: "#4338ca" },
        { dataKey: "lumpsum", color: "#16a34a" },
    ];

    const personas = [
        {
            name: "Young Professional",
            tagline: "Starting your financial journey",
            avatar: "/assets/images/icons/young.png",
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
            avatar: "/assets/images/icons/middle-age.png",
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
            avatar: "/assets/images/icons/retire.png",
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
            <ServiceComparison
                title="SIP vs Lumpsum Investment"
                description="Compare two popular ways of investing in mutual funds and find out which one suits your financial goals."
                options = {options}
                graphTitle = { "Growth over Time: Sip vs Lumpsum" }
                graphData = {graphData}
                lines = {lines}
            />
            <InvestorPersonaSection title = "Who Should Invest in SIP?" personas = { personas } />
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
                image="/assets/images/icons/sip-cta.png"
            />
            <OurAssociates />
            <Blogs />
            <FAQContactSection />
            <Footer />
        </>
    );
}
