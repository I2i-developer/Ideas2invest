import BannerSection from "@/components/BannerSection/BannerSection";
import Blogs from "@/components/Blogs/Blogs";
import BreadcrumbStrip from "@/components/BreadcrumbStrip/BreadcrumbStrip";
import CalculatorFeatures from "@/components/CalculatorFeatures/CalculatorFeatures";
import CalculatorInfoSection from "@/components/CalculatorInfoSection/CalculatorInfoSection";
import DownloadAppSection from "@/components/DownloadApp/DownloadAppSection";
import FaqAndContact from "@/components/FaqAndContact/FaqAndContact";
import Footer from "@/components/Footer/Footer";
import MainCalculatorReverseCalculator from "@/components/MainCalculator/MainCalculatorReverseCalculator";
import Navbar from "@/components/Navbar/Navbar";
import Topbar from "@/components/Topbar/Topbar";
import seoData from "@/data/seoData";
import { createPageMetadata } from "@/utils/metadata";

export const metadata = createPageMetadata(seoData["/calculators/reverse-calculator"]);

export default function ReverseCalculatorPage() {
  const howItWorks =
    "The Reverse Calculator works backwards from your future target amount. Enter the corpus you want, the time available, and the expected annual return to estimate the one-time investment or monthly SIP needed today.";

  const timeline = [
    { year: "Step 1", text: "Enter the future corpus or target amount you want to achieve." },
    { year: "Step 2", text: "Choose your investment duration and expected annual return." },
    { year: "Step 3", text: "Review the one-time investment, monthly SIP needed, and projected growth path." },
  ];

  const benefits = [
    {
      title: "Work Backwards from Goals",
      description: "Start with your desired corpus and quickly understand the investment options needed today.",
      icon: "/assets/icons/goals.png",
    },
    {
      title: "Plan Lumpsum or SIP Investments",
      description: "Useful when comparing a one-time investment with a disciplined monthly SIP plan.",
      icon: "/assets/icons/lumpsum-plan.png",
    },
    {
      title: "Compare Time Horizons",
      description: "Adjust duration and return assumptions to see how compounding changes the required amount.",
      icon: "/assets/icons/compare.png",
    },
  ];

  return (
    <>
      <Topbar />
      <Navbar />
      <BannerSection pageKey="reverseCalculator" />
      <BreadcrumbStrip pageKey="calculators/reverse-calculator" />
      <CalculatorInfoSection
        title="Reverse Calculator"
        description="A Reverse Calculator helps you estimate the investment amount or monthly SIP needed today to reach a future target corpus. It is useful for goal planning, SIP decisions, lumpsum investment decisions, and understanding the effect of compounding over time."
        image="/assets/images/calculators/lumpsum-info.jpg"
      />
      <MainCalculatorReverseCalculator />
      <CalculatorFeatures
        howItWorks={howItWorks}
        timeline={timeline}
        benefits={benefits}
        ctaText="Try the Reverse Calculator Now"
      />
      <DownloadAppSection />
      <FaqAndContact />
      <Blogs />
      <Footer />
    </>
  );
}
