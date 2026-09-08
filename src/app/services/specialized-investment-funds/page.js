import Topbar from "@/components/Topbar/Topbar";
import Navbar from "@/components/Navbar/Navbar";
import BannerSection from "@/components/BannerSection/BannerSection";
import BreadcrumbStrip from "@/components/BreadcrumbStrip/BreadcrumbStrip";
import SifOverview from "@/components/SifOverview/SifOverview";
import HowToInvest from "@/components/HowToInvest/HowToInvest";
import CtaStripSection from "@/components/CtaStrip/CtaStripSection";
import FAQContactSection from "@/components/FaqAndContact/FaqAndContact";
import Blogs from "@/components/Blogs/Blogs";
import Footer from "@/components/Footer/Footer";
import JsonLd from "@/components/JsonLd/JsonLd";
import seoData from "@/data/seoData";
import { sifFaqs, sifInvestmentSteps } from "@/data/sifData";
import { createFaqSchema, SITE_URL } from "@/utils/schema";
import { createPageMetadata } from "@/utils/metadata";

const pathname = "/services/specialized-investment-funds";

export const metadata = createPageMetadata(seoData[pathname], {
  pathname,
  image: "/assets/images/og/sif.png",
  imageAlt: "Specialized Investment Funds investment strategy",
});

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}${pathname}#webpage`,
  url: `${SITE_URL}${pathname}`,
  name: seoData[pathname].title,
  description: seoData[pathname].description,
  isPartOf: {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Ideas2Invest",
  },
  about: {
    "@type": "Thing",
    name: "Specialized Investment Fund",
    alternateName: ["SIF", "Specialised Investment Fund"],
  },
  publisher: { "@id": `${SITE_URL}/#financial-service` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
    { "@type": "ListItem", position: 3, name: "Specialized Investment Funds", item: `${SITE_URL}${pathname}` },
  ],
};

export default function SpecializedInvestmentFundsPage() {
  return (
    <>
      <JsonLd data={webPageSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={createFaqSchema(sifFaqs)} />
      <Topbar />
      <Navbar />
      <BannerSection pageKey="sif" />
      <BreadcrumbStrip pageKey="services/specialized-investment-funds" />
      <SifOverview />
      {/* <HowToInvest
        title="Specialized Investment Funds"
        heading="How to Evaluate and Access a Specialized Investment Fund"
        steps={sifInvestmentSteps}
      /> */}
      {/* <CtaStripSection /> */}
      {/* <FAQContactSection /> */}
      <Blogs />
      <Footer />
    </>
  );
}
