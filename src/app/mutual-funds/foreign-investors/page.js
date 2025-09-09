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
import { Globe, Landmark } from "lucide-react";

export default function ForeignNationalMFPage() {
    const columns = [
        "Category",
        "Eligibility",
        "Allowed Investment Type",
    ];

    const rows = [
        ["NRI (Non-Resident Indian)", "Indian citizens living abroad", "Equity, Debt, Hybrid Mutual Funds"],
        ["PIO (Person of Indian Origin)", "Foreign citizens with Indian ancestry", "Equity, Debt, Hybrid Mutual Funds"],
        ["OCI (Overseas Citizen of India)", "Cardholders recognized by Govt. of India", "All categories of Mutual Funds"],
        ["FPI (Foreign Portfolio Investor)", "Institutional foreign investors", "Regulated under SEBI guidelines"],
    ];

    const benefits = [
        {
            title: "Easy Access to Indian Growth",
            description:
                "Foreign nationals can benefit from India’s fast-growing economy by investing in mutual funds without residing in India.",
            icon: "/assets/images/icons/growth.svg",
            image: "/assets/images/services/foreign1.jpg",
        },
        {
            title: "Diversification",
            description:
                "Investing in Indian funds allows foreigners to diversify their portfolio across geographies and currencies.",
            icon: "/assets/images/icons/diversified.svg",
            image: "/assets/images/services/foreign2.jpg",
        },
        {
            title: "Tax Advantages",
            description:
                "NRIs and foreign nationals can enjoy benefits of DTAA (Double Taxation Avoidance Agreement).",
            icon: "/assets/images/icons/save-tax.svg",
            image: "/assets/images/services/foreign3.jpg",
        },
        {
            title: "Digital Process",
            description:
                "Investing is simple with online KYC, NRE/NRO bank accounts, and electronic transactions.",
            icon: "/assets/images/icons/digital.svg",
            image: "/assets/images/services/foreign4.jpg",
        },
        {
            title: "Remittance Flexibility",
            description:
                "Profits can be repatriated abroad through NRE accounts, making it seamless for NRIs.",
            icon: "/assets/images/icons/flexible.webp",
            image: "/assets/images/services/foreign5.jpg",
        },
    ];

    const steps = [
        {
            title: "Open NRE/NRO Bank Account",
            description: "Foreign investors need an NRE or NRO account in India for investments.",
            icon: "/assets/images/icons/bank.png",
        },
        {
            title: "Complete KYC",
            description: "Submit passport, visa, overseas address proof, and PAN card for verification.",
            icon: "/assets/images/icons/kyc.png",
        },
        {
            title: "Choose Mutual Funds",
            description: "Select funds based on risk appetite – equity, debt, or hybrid.",
            icon: "/assets/images/icons/fund.png",
        },
        {
            title: "Start Investing",
            description: "Invest via SIP or lumpsum, and track investments online.",
            icon: "/assets/images/icons/start.png",
        },
    ];

    const options = [
        {
            title: "Investing in Mutual Funds",
            tagline: "Simple, digital & growth-focused",
            icon: <Globe />,
            pros: [
                "Access India’s booming market",
                "Low entry cost (start from ₹500 SIP)",
                "Flexible investment options",
            ],
            cons: ["Returns are market-linked", "Currency exchange fluctuations may affect gains"],
            highlight: true,
        },
        {
            title: "Keeping Money Abroad",
            tagline: "Safe but limited growth",
            icon: <Landmark />,
            pros: [
                "No currency conversion required",
                "Regulated by home country laws",
            ],
            cons: [
                "Miss out on India’s high-growth potential",
                "Returns may be lower compared to Indian equity funds",
            ],
        },
    ];

    const graphData = [
        { year: "Year 1", india: 12000, abroad: 11000 },
        { year: "Year 3", india: 45000, abroad: 34000 },
        { year: "Year 5", india: 95000, abroad: 65000 },
        { year: "Year 10", india: 250000, abroad: 150000 },
    ];

    const lines = [
        { dataKey: "india", color: "#16a34a" },
        { dataKey: "abroad", color: "#f97316" },
    ];

    const personas = [
        {
            name: "Young NRI Professional",
            tagline: "Building wealth while working abroad",
            avatar: "/assets/images/icons/nri.png",
            image: "/assets/images/services/foreign1.jpg",
            title: "Grow with India’s Economy",
            description:
                "Young NRIs working overseas can invest in India to benefit from high equity market growth while saving for future goals.",
            benefits: [
                "Start SIPs digitally from abroad",
                "Beat inflation with equity growth",
                "Leverage Indian market potential",
            ],
        },
        {
            name: "PIO/OCI Family",
            tagline: "Securing family future in India",
            avatar: "/assets/images/icons/family.png",
            image: "/assets/images/services/foreign2.jpg",
            title: "Invest for Family Back Home",
            description:
                "PIOs/OCIs with family in India can invest to secure education, health, and retirement needs of loved ones.",
            benefits: [
                "Invest from anywhere",
                "Support Indian family expenses",
                "Long-term wealth creation",
            ],
        },
        {
            name: "Entrepreneur Abroad",
            tagline: "Expanding business horizons",
            avatar: "/assets/images/icons/entrepreneur.png",
            image: "/assets/images/services/foreign3.jpg",
            title: "Diversify Beyond Borders",
            description:
                "Foreign entrepreneurs can invest profits into Indian mutual funds to diversify wealth geographically.",
            benefits: [
                "Access India’s booming industries",
                "Build safety net against local risks",
                "Achieve both business & personal goals",
            ],
        },
    ];

    const caseStudies = [
        {
            name: "Rohit, 30",
            role: "IT Professional in USA",
            problem: "Wanted to invest part of his salary in India but didn’t know the process.",
            strategy: "Opened an NRE account and started a ₹10,000 monthly SIP in equity funds.",
            outcome: "In 5 years, built a corpus that grew faster than his US savings account.",
            learning: "Digital SIPs help NRIs participate in India’s growth.",
        },
        {
            name: "Anjali, 38",
            role: "PIO in UK",
            problem: "Needed funds for her parents’ healthcare in India.",
            strategy: "Started investing in a debt mutual fund via NRO account.",
            outcome: "Created a steady fund pool accessible in India when needed.",
            learning: "Debt funds provide liquidity and safety for family needs.",
        },
        {
            name: "Suresh, 45",
            role: "Entrepreneur in Dubai",
            problem: "Wanted to diversify investments beyond UAE.",
            strategy: "Invested profits into hybrid mutual funds in India.",
            outcome: "Gained steady returns while creating a backup wealth corpus.",
            learning: "Indian mutual funds give global investors smart diversification.",
        },
    ];

    return (
        <>
            <Topbar />
            <Navbar />
            <BannerSection pageKey="foreignInvestors" />
            <BreadcrumbStrip />
            <InfoWithTableSection
                title="What is Investment for Foreign Nationals?"
                description="Foreign nationals such as NRIs, PIOs, and OCIs can invest in Indian mutual funds to benefit from India’s growing economy. The process is simple, digital, and regulated by SEBI, making it safe and rewarding."
                columns={columns}
                rows={rows}
            />
            <ServiceBenefits title="Benefits and Features" benefits={benefits} />
            <ServiceSteps title="How Foreign Nationals Can Start Investing" steps={steps} />
            <ServiceComparison
                title="Mutual Funds vs Keeping Money Abroad"
                description="Understand why investing in India can be more rewarding compared to leaving your money abroad."
                options={options}
                graphTitle={"Growth of ₹1 Lakh Investment (10 years)"}
                graphData={graphData}
                lines={lines}
            />
            <InvestorPersonaSection title="Who Should Invest?" personas={personas} />
            <StartSIPSection />
            <ExploreMutualFunds />
            <ServiceCaseStudy
                title="Real Stories of Foreign Investors"
                description="See how NRIs and foreign nationals achieved their goals by investing in Indian mutual funds."
                caseStudies={caseStudies}
            />
            <ServiceCTASection
                title="Invest in India, Grow with India"
                description="Whether you’re an NRI, PIO, or OCI – Indian mutual funds give you the chance to grow wealth, diversify globally, and stay connected with India’s growth story."
                benefits={[
                    "Simple digital process",
                    "Start small, grow big",
                    "Repatriate funds easily",
                    "Tax benefits under DTAA",
                ]}
                ctaText="Start Investing in India"
                ctaLink="/foreign-investment"
                image="/assets/images/icons/foreign-investor-cta-1.png"
            />
            <OurAssociates />
            <Blogs />
            <FAQContactSection />
            <Footer />
        </>
    );
}
