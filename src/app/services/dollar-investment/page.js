import React from "react";
import Head from "next/head";
import BannerSection from "@/components/BannerSection/BannerSection";
import BenefitsSection from "@/components/Benefits/Benefits";
import BreadcrumbStrip from "@/components/BreadcrumbStrip/BreadcrumbStrip";
import ExploreMutualFunds from "@/components/ExploreFunds/ExploreFunds";
import Footer from "@/components/Footer/Footer";
import HowToInvest from "@/components/HowToInvest/HowToInvest";
import howToInvestData from "@/data/howToInvestData";
import Navbar from "@/components/Navbar/Navbar";
import OurAssociates from "@/components/OurAssociates/OurAssociates";
import StartSIPSection from "@/components/StartSIPSection/StartSIPSection";
import Topbar from "@/components/Topbar/Topbar";
import ServiceProcess from "@/components/ServiceProcess/ServiceProcess";
import serviceProcessData from "@/data/serviceProcessData";
import FAQContactSection from "@/components/FaqAndContact/FaqAndContact";
import Blogs from "@/components/Blogs/Blogs";
import DownloadAppSection from "@/components/DownloadApp/DownloadAppSection";
import ServiceInfo from "@/components/ServiceInfo/ServiceInfo";
import serviceInfoData from "@/data/serviceInfoData";
import CtaStripSection from "@/components/CtaStrip/CtaStripSection";
import ComparisonSection from "@/components/Comparison/ComparisonSection";
import comparisonData from "@/data/comparisonData";
import UseCasesSection from "@/components/UseCases/UseCases";
import useCasesData from "@/data/useCasesData";
import CaseStudySection from "@/components/CaseStudy/CaseStudySection";
import caseStudyData from "@/data/caseStudyData";

export default function DollarInvestment() {
    const { title, steps } = howToInvestData.dollarInvestment;
    const { processTitle, processImage, processAlt } = serviceProcessData.dollarInvestments;
    const {
        sectionTitle,
        sectionSubTitle,
        definition,
        advantages,
        howToChoose,
        waysToInvest,
        types,
    } = serviceInfoData.dollarInvestment;

      // ✅ JSON-LD Structured Data for Dollar Investment
      const financialServiceSchema = {
        "@context": "https://schema.org",
        "@type": "FinancialService",
        name: "Dollar Investment",
        provider: {
          "@type": "Organization",
          name: "Ideas2Invest",
          url: "https://www.ideas2invest.com"
        },
        serviceType: "Dollar Investment",
        areaServed: {
          "@type": "Country",
          name: "India"
        },
        description:
          "Ideas2Invest provides expert advisory for Dollar Investments, including global investment opportunities, wealth diversification, and international portfolio management."
      }

      // ✅ Example FAQ Schema (optional)
      const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is a Dollar Investment?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Dollar Investments allow you to invest in international assets and diversify your portfolio outside India."
            }
          },
          {
            "@type": "Question",
            name: "Can NRIs invest in Dollar Investment?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, NRIs and foreign nationals can invest via regulated channels provided by Ideas2Invest."
            }
          }
        ]
      }

  return (
    <>
      {/* ✅ Page-specific Head */}
      <Head>
        <title>Dollar Investment | Ideas2Invest</title>
        <meta
          name="description"
          content="Grow your wealth globally with Dollar Investment options at Ideas2Invest. Expert advisory for NRIs and international portfolio management."
        />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(financialServiceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>
      <Topbar />
      <Navbar />
      <BannerSection pageKey="dollarInvestment" />
      <BreadcrumbStrip />
      <ServiceInfo
        sectionTitle={sectionTitle}
        sectionSubTitle={sectionSubTitle}
        definition={definition}
        advantages={advantages}
        howToChoose={howToChoose}
        waysToInvest={waysToInvest}
        types={types}
      />
      <StartSIPSection />
      <ComparisonSection data={comparisonData.dollarInvestment} />
      <OurAssociates />
      <BenefitsSection title="Dollar Investments" />
      <UseCasesSection data={useCasesData.dollarInvestment} />
      <HowToInvest title={title} steps={steps} />
      <CtaStripSection />
      <ServiceProcess processTitle={processTitle} processImage={processImage} processAlt={processAlt}/>
      <CaseStudySection data={caseStudyData.dollarInvestment} />
      <DownloadAppSection />
      <FAQContactSection />
      <Blogs />
      <Footer />
    </>
  );
}