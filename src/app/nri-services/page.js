import Script from "next/script";
import BannerSection from "@/components/BannerSection/BannerSection";
import BreadcrumbStrip from "@/components/BreadcrumbStrip/BreadcrumbStrip";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import ServiceCards from "@/components/NRIServices/ServiceCards";
import WhyChoose from "@/components/NRIServices/WhyChoose";
import Topbar from "@/components/Topbar/Topbar";
import Faq from "@/components/NRIServices/Faq";
import ServiceInfo from "@/components/ServiceInfo/ServiceInfo";
import ServiceSteps from "@/components/ServiceSteps/ServiceSteps";
import serviceInfoData from "@/data/serviceInfoData";
import ComparisonSection from "@/components/Comparison/ComparisonSection";
import comparisonData from "@/data/comparisonData";
import OurAssociates from "@/components/OurAssociates/OurAssociates";
import UseCasesSection from "@/components/UseCases/UseCases";
import useCasesData from "@/data/useCasesData";
import HowToInvest from "@/components/HowToInvest/HowToInvest";
import howToInvestData from "@/data/howToInvestData";
import ServiceCTASection from "@/components/ServiceCTA/ServiceCTA";
import CaseStudySection from "@/components/CaseStudy/CaseStudySection";
import caseStudyData from "@/data/caseStudyData";
import Blogs from "@/components/Blogs/Blogs";

export const metadata = {
  title: "NRI Services in India | Ideas2Invest",
  description: "Discover NRI-focused financial services including Gift City investments, taxation solutions, and tailored investment opportunities for NRIs worldwide.",
  keywords: "NRI services India, NRI taxation, Gift City NRI, investments for NRIs",
};

export default function NRIServices() {
  const { title, steps } = howToInvestData.dollarInvestment;
  const steps2 = [
    {
      title: "Select Your NRI Service",
      description: "Choose from Gift City investments, NRI taxation support, or tailored investment solutions that align with your goals.",
      icon: "/assets/images/icons/plan.png",
    },
    {
      title: "Provide Documentation",
      description: "Submit the required documents, including passport, overseas address proof, and any prior Indian tax filings for verification.",
      icon: "/assets/images/icons/amount.png",
    },
    {
      title: "Complete Compliance & KYC",
      description: "Our experts guide you through NRI-specific KYC, regulatory requirements, and FEMA compliance to ensure smooth onboarding.",
      icon: "/assets/images/icons/kyc.png",
    },
    {
      title: "Start Investing & Managing",
      description: "Activate your investment plan, manage your portfolio, and enjoy tax-efficient growth through our secure NRI services.",
      icon: "/assets/images/icons/start.png",
    },
  ];

  const {
    sectionTitle,
    sectionSubTitle,
    definition,
    advantages,
    howToChoose,
    waysToInvest,
    types,
  } = serviceInfoData.nriServices;
  return (
    <>
      <Topbar />
      <Navbar />
      <BannerSection pageKey="nri" />
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
      <ComparisonSection data={comparisonData.nriServices} />
      <ServiceCards />
      <OurAssociates />
      <WhyChoose />
      <ServiceSteps title="Your NRI Investment Journey Made Easy" steps={steps2} />
      <UseCasesSection data={useCasesData.nriServices} />
      {/* <HowToInvest title={title} steps={steps2} /> */}
      <ServiceCTASection
        title="Start Your NRI Investment Journey Today"
        description="Simplify your investments, taxation, and compliance in India with our expert NRI services. Let us guide you to grow your wealth efficiently and securely."
        benefits={[
          "Invest seamlessly from anywhere in the world",
          "Tax-efficient investment solutions for NRIs",
          "Access to GIFT City and India-focused asset classes",
          "Professional guidance on compliance and repatriation"
        ]}
        ctaText="Get Started Now"
        ctaLink="https://ideas2invest.wealthmagic.in/"
        image="/assets/images/icons/foreign-investor-cta-1.png"
      />
      <CaseStudySection data={caseStudyData.nriServices} />
      <Blogs />
      <Faq />
      <Footer />
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Can NRIs invest in Gift City?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Yes, NRIs can invest in Gift City which offers tax-efficient and globally accessible financial products designed for international investors.",
                },
              },
              {
                "@type": "Question",
                "name": "How is NRI taxation different from resident taxation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "NRI taxation in India follows specific rules under the Income Tax Act. Income earned or accrued in India is taxable, while foreign income is exempt.",
                },
              },
              {
                "@type": "Question",
                "name": "What are the best investment options for NRIs in India?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Mutual funds, NRE/NRO deposits, equity investments, and Gift City opportunities are among the most preferred investment avenues for NRIs.",
                },
              },
              {
                "@type": "Question",
                "name": "Do NRIs need to file income tax in India?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "NRIs must file income tax returns in India if their taxable income in India exceeds the basic exemption limit or if they have capital gains.",
                },
              },
              {
                "@type": "Question",
                "name": "Can NRIs repatriate their investment returns abroad?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Yes, NRIs can repatriate their investment returns abroad, subject to FEMA regulations and the type of account (NRE/NRO/FCNR).",
                },
              },
            ],
          }),
        }}
      />
    </>
  )
}