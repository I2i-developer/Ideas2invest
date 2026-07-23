import React from "react";
import ComprehensiveCalculator from "@/components/ComprehensiveCalculator/ComprehensiveCalculator";
import Topbar from "@/components/Topbar/Topbar";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import DownloadAppSection from "@/components/DownloadApp/DownloadAppSection";
import StartSIPSection from "@/components/StartSIPSection/StartSIPSection";
import Blogs from "@/components/Blogs/Blogs";
import BannerSection from "@/components/BannerSection/BannerSection";
import BreadcrumbStrip from "@/components/BreadcrumbStrip/BreadcrumbStrip";
import { createPageMetadata } from "@/utils/metadata";

export const metadata = createPageMetadata({
  title: "Comprehensive Financial Planner | Ideas2Invest",
  description: "Plan retirement, education, marriage, vacations and more in a single comprehensive calculator.",
  canonical: "https://www.ideas2invest.com/calculators/comprehensive",
});

export default function Page() {
  return (
    <>
      <Topbar />
      <Navbar />
      <BannerSection pageKey="comprehensivePlanner" />
      <BreadcrumbStrip pageKey="calculators/comprehensive" />
      <ComprehensiveCalculator />
      <StartSIPSection />
      <DownloadAppSection />
      <Blogs />
      <Footer />
    </>
  );
}
