import FaqPage from "@/components/FaqCategories/FaqCategories";
import { faqData } from "@/data/faqData";
import Navbar from "@/components/Navbar/Navbar";
import Topbar from "@/components/Topbar/Topbar";
import DownloadAppSection from "@/components/DownloadApp/DownloadAppSection";
import Footer from "@/components/Footer/Footer";
import seoData from "@/data/seoData";

// export const metadata = {
//   title: "FAQs - Mutual Funds, SIPs, Insurance, and Investments | Ideas2Invest",
//   description:
//     "Find answers to frequently asked questions about SIP, ELSS, Mutual Funds, and Insurance on Ideas2Invest.",
// };

export const metadata = {
  title: seoData["/faq"].title,
  description: seoData["/faq"].description,
  keywords: seoData["/faq"].keywords,
  alternates: {
    canonical: seoData["/faq"].canonical,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.flatMap((cat) =>
    cat.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    }))
  ),
};

export default function Faq() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Topbar />
      <Navbar />
      <FaqPage />
      <Footer />
    </>
  )
}