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
import ServiceCTASection from "@/components/ServiceCTA/ServiceCTA";
import ServiceComparison from "@/components/ServiceComparison/ServiceComparison";
import Footer from "@/components/Footer/Footer";
import FAQContactSection from "@/components/FaqAndContact/FaqAndContact";
import Blogs from "@/components/Blogs/Blogs";
import { Landmark, ShieldCheck } from "lucide-react";

export default function ELSSPage() {
  const columns = ["Feature", "Details"];
  const rows = [
    ["Lock-in Period", "3 years (shortest among tax-saving options)"],
    ["Minimum Investment", "₹500 (and in multiples of ₹500)"],
    ["Tax Benefit", "Up to ₹1.5 lakh under Section 80C"],
    ["Return Potential", "Market-linked (equity exposure)"],
  ];

  const benefits = [
    {
      title: "Save Taxes + Create Wealth",
      description:
        "ELSS offers dual benefits: save up to ₹1.5 lakh in taxes every year under Section 80C while also growing your wealth through equity investments.",
      icon: "/assets/images/icons/save-tax.svg",
      image: "/assets/images/services/mutual-funds/elss.webp",
    },
    {
      title: "Shortest Lock-in",
      description:
        "With just a 3-year lock-in, ELSS has the shortest mandatory holding period compared to PPF (15 years) or FD (5 years).",
      icon: "/assets/images/icons/lock-in-1.svg",
      image: "/assets/images/services/mutual-funds/elss.webp",
    },
    {
      title: "High Growth Potential",
      description:
        "Being equity-oriented, ELSS funds provide higher return potential than traditional tax-saving instruments. ELSS offer the scope for wealth creation, considering that the money is invested in equities.",
      icon: "/assets/images/icons/high-growth.svg",
      image: "/assets/images/services/mutual-funds/elss.webp",
    },
    {
      title: "No Maximum Period",
      description:
        "With ELSS, there is no compulsion of redemption after the lock-in period, and you can continue to remain invested for as long as you wish. Investing for the long term helps one leverage investments to their full potential with the objective of generating wealth.",
      icon: "/assets/images/icons/ease-of-investment.svg",
      image: "/assets/images/services/mutual-funds/elss.webp",
    },
    {
      title: "SIP Option",
      description:
        "ELSS comes with the option of SIP. SIP allows one to invest even in small amounts at regular intervals.",
      icon: "/assets/images/icons/options.svg",
      image: "/assets/images/services/mutual-funds/elss.webp",
    },
    {
      title: "Ease of Investment",
      description:
        "One can invest in ELSS with a minimal amount in Lumpsum or SIP. Further, options such as dividend and growth are available with ELSS to suit every investor’s needs.",
      icon: "/assets/images/icons/no-exit-load.svg",
      image: "/assets/images/services/mutual-funds/elss.webp",
    },
  ];

  const steps = [
    {
      title: "Choose an ELSS Fund",
      description: "Select from top-performing ELSS funds that match your risk appetite.",
      icon: "/assets/images/icons/choosefund.png",
    },
    {
      title: "Decide Your Mode",
      description: "Invest through SIP (monthly) or lumpsum depending on your cash flow.",
      icon: "/assets/images/icons/amount.png",
    },
    {
      title: "Complete KYC",
      description: "Verify your identity once and get ready to invest online.",
      icon: "/assets/images/icons/kyc.png",
    },
    {
      title: "Start Saving & Growing",
      description: "Begin your ELSS investment and enjoy both tax benefits and wealth creation.",
      icon: "/assets/images/icons/start.png",
    },
  ];

  const options = [
    {
      title: "ELSS (Equity Linked Savings Scheme)",
      tagline: "Save tax + Grow wealth",
      icon: <ShieldCheck />,
      pros: [
        "Dual benefit of tax saving + market returns",
        "Shortest lock-in among 80C options",
        "Can invest via SIP or lumpsum",
      ],
      cons: ["Market-linked risk (returns may fluctuate)"],
      highlight: true,
    },
    {
      title: "PPF (Public Provident Fund)",
      tagline: "Safe & Government-backed",
      icon: <Landmark />,
      pros: ["Safe, guaranteed returns", "Eligible under Section 80C"],
      cons: [
        "Long lock-in (15 years)",
        "Lower returns compared to equity",
      ],
    },
  ];

  const graphData = [
    { year: "Year 1", elss: 120000, ppf: 112000 },
    { year: "Year 3", elss: 450000, ppf: 370000 },
    { year: "Year 5", elss: 800000, ppf: 600000 },
    { year: "Year 10", elss: 2000000, ppf: 1200000 },
  ];

  const lines = [
    { dataKey: "elss", color: "#f97316" },
    { dataKey: "ppf", color: "#22c55e" },
];

  const personas = [
    {
      name: "Salaried Employee",
      tagline: "Save tax while building wealth",
      avatar: "/assets/images/icons/employee.png",
      image: "/assets/images/services/elss1.jpg",
      title: "Perfect for Tax Planning",
      description:
        "If you are a salaried employee, ELSS helps you reduce taxable income under Section 80C while also letting your investments grow faster.",
      benefits: [
        "Save up to ₹46,800 in taxes annually",
        "Build wealth over long term",
        "Flexible investment options",
      ],
    },
    {
      name: "Young Professional",
      tagline: "First step into investing",
      avatar: "/assets/images/icons/young.png",
      image: "/assets/images/services/elss2.jpg",
      title: "Start Early, Gain More",
      description:
        "For young earners, ELSS is a smart way to begin investing – you not only save taxes but also benefit from compounding over the years.",
      benefits: [
        "Start with just ₹500",
        "Learn market investing",
        "Dual benefit of tax + returns",
      ],
    },
    {
      name: "Business Owner",
      tagline: "Efficient tax management",
      avatar: "/assets/images/icons/shop-owner.png",
      image: "/assets/images/services/elss3.jpg",
      title: "Smart Tax Efficiency",
      description:
        "ELSS allows business owners and self-employed professionals to enjoy tax savings while diversifying into equities.",
      benefits: [
        "Plan taxes efficiently",
        "Create wealth for future goals",
        "Diversify portfolio",
      ],
    },
  ];

  const caseStudies = [
    {
      name: "Rohit, 30",
      role: "Software Engineer",
      problem: "Wanted to save taxes but didn’t want to lock money for too long.",
      strategy:
        "Invested ₹10,000 per month in ELSS through SIP for 5 years.",
      outcome:
        "Saved tax every year while building a corpus of ₹9.5 lakh, which grew faster than FD or PPF.",
      learning: "ELSS combines tax saving with wealth creation efficiently.",
    },
    {
      name: "Neha, 40",
      role: "Entrepreneur",
      problem: "Needed tax planning options with growth potential.",
      strategy:
        "Invested ₹1.5 lakh annually in ELSS to maximize Section 80C limit.",
      outcome:
        "Saved ₹46,800 in taxes each year and built long-term wealth.",
      learning:
        "For self-employed professionals, ELSS is one of the best tax-saving tools.",
    },
  ];

  return (
    <>
      <Topbar />
      <Navbar />
      <BannerSection pageKey="elss" />
      <BreadcrumbStrip />
      <InfoWithTableSection
        title="What is ELSS (Equity Linked Savings Scheme)?"
        description="ELSS is a type of mutual fund that allows you to save tax under Section 80C while also giving you the opportunity to earn higher returns through equity investments. With a lock-in of just 3 years, it’s the most flexible and rewarding tax-saving option."
        columns={columns}
        rows={rows}
      />
      <ServiceBenefits title="Benefits of ELSS" benefits={benefits} />
      <ServiceSteps title="Steps to Invest in ELSS" steps={steps} />
      <ServiceComparison
        title="ELSS vs PPF"
        description="Compare ELSS with other tax-saving options to see why it is the most flexible and rewarding choice."
        options={options}
        graphTitle="Growth Over Time: ELSS vs PPF"
        lines = {lines}
        graphData={graphData}
      />
      <InvestorPersonaSection
        title="Who Should Invest in ELSS?"
        personas={personas}
      />
      <ServiceCaseStudy
        title="Real-Life Case Studies"
        description="See how different investors achieved their goals with ELSS."
        caseStudies={caseStudies}
      />
      <ServiceCTASection
        title="Save Tax and Build Wealth with ELSS"
        description="ELSS is the smartest way to reduce your taxes and grow your wealth. Take advantage of the dual benefit today."
        benefits={[
          "Save up to ₹46,800 in taxes annually",
          "Shortest lock-in of just 3 years",
          "Start with as low as ₹500",
          "High growth potential with equity",
        ]}
        ctaText="Invest in ELSS Now"
        ctaLink="/contact"
        image="/assets/images/icons/elss-cta.webp"
      />
      <OurAssociates />
      <ExploreMutualFunds />
      <Blogs />
      <FAQContactSection />
      <Footer />
    </>
  );
}
