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
import { Wallet, ShieldCheck } from "lucide-react";
import seoData from "@/data/seoData";

export const metadata = {
  title: seoData["/mutual-funds/retirement-income"].title,
  description: seoData["/mutual-funds/retirement-income"].description,
  keywords: seoData["/mutual-funds/retirement-income"].keywords,
  alternates: {
    canonical: seoData["/mutual-funds/retirement-income"].canonical,
  },
};

export default function RetirementIncomePage() {
  const columns = ["Strategy", "How it Works", "Best for"];
  const rows = [
    [
      "Systematic Withdrawal Plan (SWP)",
      "Invest a lump-sum or keep an existing corpus in a fund and withdraw a fixed amount periodically (monthly/quarterly).",
      "Retirees seeking steady monthly income",
    ],
    [
      "Dividend Payout Funds",
      "Fund distributes dividends from earnings at declared intervals — you receive payouts when the fund declares dividends.",
      "Investors who prefer periodic receipts without redeeming units",
    ],
    [
      "Growth + SWP Mix",
      "Keep a portion in growth-oriented equity to maintain capital appreciation while using SWP from the rest for income.",
      "Those who want income + long-term inflation protection",
    ],
    [
      "Debt-Oriented Funds",
      "Invest primarily in debt instruments for lower volatility and stable returns; combine with SWP for monthly cashflow.",
      "Conservative retirees prioritizing capital preservation",
    ],
  ];

  const benefits = [
    {
      title: "Reliable Regular Income",
      description:
        "SWP lets you receive a steady pay-out (monthly/quarterly) similar to a pension while your remaining corpus can continue to grow.",
      icon: "/assets/images/icons/income.svg",
      image: "/assets/images/services/retirement1.jpg",
    },
    {
      title: "Beat Inflation",
      description:
        "By including equity or hybrid funds in the allocation, your portfolio can potentially outpace inflation over the long term.",
      icon: "/assets/images/icons/beat-inflation.svg",
      image: "/assets/images/services/retirement2.jpg",
    },
    {
      title: "Flexible Withdrawals",
      description:
        "You control withdrawal amount and frequency — increase, reduce or stop withdrawals as needs change.",
      icon: "/assets/images/icons/withdrawl.svg",
      image: "/assets/images/services/retirement3.jpg",
    },
    {
      title: "Liquidity & Control",
      description:
        "Unlike many pension products, mutual funds allow you to access residual capital anytime without long lock-ins (subject to tax rules).",
      icon: "/assets/images/icons/liquidity.svg",
      image: "/assets/images/services/retirement4.jpg",
    },
    {
      title: "Tax-Efficient Options",
      description:
        "Certain withdrawal structures and fund types are more tax-friendly than interest from fixed deposits — a tax-aware plan helps maximise net income.",
      icon: "/assets/images/icons/save-tax.svg",
      image: "/assets/images/services/retirement5.jpg",
    },
  ];

  const steps = [
    {
      title: "Estimate Required Monthly Income",
      description:
        "Calculate how much you need each month after retirement to cover expenses and lifestyle. Include inflation buffer.",
      icon: "/assets/images/icons/estimate.png",
    },
    {
      title: "Build / Allocate the Corpus",
      description:
        "Decide how much to allocate to generate that income — mix of equity, hybrid and debt funds based on risk tolerance.",
      icon: "/assets/images/icons/allocate.png",
    },
    {
      title: "Set Up SWP or Payout Route",
      description:
        "Choose a withdrawal amount and frequency (SWP) or a dividend payout option depending on income needs.",
      icon: "/assets/images/icons/swp.png",
    },
    {
      title: "Monitor & Rebalance",
      description:
        "Review your portfolio periodically; rebalance to maintain desired risk and income sustainability.",
      icon: "/assets/images/icons/review.png",
    },
  ];

  const options = [
    {
      title: "SWP (Systematic Withdrawal Plan)",
      tagline: "Planned monthly income from funds",
      icon: <Wallet />,
      pros: [
        "Predictable monthly payouts",
        "Remaining corpus continues to work in the market",
        "Flexible to change withdrawal amount",
      ],
      cons: ["Payouts depend on fund performance", "Requires periodic monitoring"],
      highlight: true,
    },
    {
      title: "Dividend Payout Funds",
      tagline: "Periodic dividends declared by fund",
      icon: <ShieldCheck />,
      pros: ["Can provide periodic cash when dividends declared", "No need to redeem units"],
      cons: ["Dividends are not guaranteed", "May reduce NAV when declared"],
    },
  ];

  const graphData = [
    { year: "Year 1", swp: 240000, fd: 120000 },
    { year: "Year 3", swp: 740000, fd: 360000 },
    { year: "Year 5", swp: 1250000, fd: 600000 },
    { year: "Year 10", swp: 2800000, fd: 1200000 },
  ];

  const lines = [
    { dataKey: "swp", color: "#4338ca" },
    { dataKey: "fd", color: "#16a34a" },
  ];

  const personas = [
    {
      name: "Near-Retiree (55-60)",
      tagline: "Planning last-stage accumulation",
      avatar: "/assets/images/icons/near-retire.png",
      image: "/assets/images/services/retirement1.jpg",
      title: "Convert savings into income",
      description:
        "If retirement is a few years away, focus on building a balanced corpus and plan withdrawals sensibly to preserve capital and generate income.",
      benefits: ["Plan with mix of debt & equity", "Start SWP post-retirement", "Protect against inflation"],
    },
    {
      name: "New Retiree (60+)",
      tagline: "Need steady monthly income",
      avatar: "/assets/images/icons/new-retiree.png",
      image: "/assets/images/services/retirement2.jpg",
      title: "Reliable monthly payouts",
      description:
        "If you’ve just retired, SWP from conservative/hybrid funds gives monthly cashflow while keeping some growth exposure.",
      benefits: ["Immediate monthly income", "Option to adjust amount", "Lower volatility with debt funds"],
    },
    {
      name: "Pre-Retirement Planner",
      tagline: "Starting early for compounding benefit",
      avatar: "/assets/images/icons/retire.png",
      image: "/assets/images/services/retirement3.jpg",
      title: "Start early, relax later",
      description:
        "Younger investors can start retirement-focused SIPs to grow a sizable corpus by retirement age — then switch to income mode.",
      benefits: ["Benefit from compounding", "Lower SIP amounts build corpus", "Easier transition to SWP later"],
    },
  ];

  const caseStudies = [
    {
      name: "Mr. Sharma, 62",
      role: "Retired School Principal",
      problem: "Wanted a regular monthly income to cover living expenses without depleting savings quickly.",
      strategy:
        "Moved a portion of his pension corpus into a balanced fund and set up an SWP of ₹25,000 per month.",
      outcome:
        "Received steady monthly income; remaining corpus continued to grow moderately, giving him financial comfort.",
      learning: "SWP provides pension-like income with growth potential.",
    },
    {
      name: "Mrs. Rao, 58",
      role: "Soon-to-be Retired",
      problem: "Unsure how much to keep in equity vs debt before retirement.",
      strategy:
        "Created a glide path: gradually shifted allocation from equity to hybrid & debt over 5 years, then planned SWP.",
      outcome:
        "Entered retirement with a balanced portfolio that supports sustainable withdrawals.",
      learning: "Gradual rebalancing shields you from market shocks near retirement.",
    },
  ];

  return (
    <>
      <Topbar />
      <Navbar />
      <BannerSection pageKey="retirementIncome" />
      <BreadcrumbStrip />
      <InfoWithTableSection
        title="What is Retirement Income Through Mutual Funds?"
        description="Retirement income through mutual funds means creating a steady source of cashflow from your investment corpus using strategies like SWP (Systematic Withdrawal Plan), dividend payouts, or a combination of growth and withdrawals."
        columns={columns}
        rows={rows}
      />
      <ServiceBenefits title="Why Use Mutual Funds for Retirement Income?" benefits={benefits} />
      <ServiceSteps title="How It Works — Steps to Create Retirement Income" steps={steps} />
      <ServiceComparison
        title="Compare Retirement Income Options"
        description="See how SWP, Dividend Payout and Debt Funds compare for retirement income planning."
        options={options}
        graphTitle="Growth & Income Comparison"
        graphData={graphData}
        lines={lines}
      />
      <InvestorPersonaSection title="Who Should Consider Retirement Income Funds?" personas={personas} />
      <SipCalculator />
      <StartSIPSection />
      <ExploreMutualFunds />
      <ServiceCaseStudy title="Practical Case Studies" description="Real examples of retirees who planned income with mutual funds." caseStudies={caseStudies} />
      <ServiceCTASection
        title="Plan Your Retirement Income Today"
        description="Let us help you design a withdrawal plan that keeps you comfortable in retirement — income that lasts and a corpus that keeps working."
        benefits={[
          "Monthly/quarterly income through SWP",
          "Flexible withdrawal amounts",
          "Better inflation protection than FDs",
          "Tax-aware withdrawal strategies",
        ]}
        ctaText="Get a Retirement Plan"
        ctaLink="/contact"
        image="/assets/images/icons/retirement-cta.jpg"
      />
      <OurAssociates />
      <Blogs />
      <FAQContactSection />
      <Footer />
    </>
  );
}
