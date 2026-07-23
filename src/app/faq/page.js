import FaqPage from "@/components/FaqCategories/FaqCategories";
import { faqData } from "@/data/faqData";
import Navbar from "@/components/Navbar/Navbar";
import Topbar from "@/components/Topbar/Topbar";
import DownloadAppSection from "@/components/DownloadApp/DownloadAppSection";
import Footer from "@/components/Footer/Footer";
import seoData from "@/data/seoData";
import { createPageMetadata } from "@/utils/metadata";
import JsonLd from "@/components/JsonLd/JsonLd";
import { createFaqSchema } from "@/utils/schema";

export const metadata = createPageMetadata(seoData["/faq"]);

const faqItems = faqData.flatMap((category) => category.items);

export default function Faq() {
  return (
    <>
      <JsonLd data={createFaqSchema(faqItems)} />
      <Topbar />
      <Navbar />
      <FaqPage />
      <Footer />
    </>
  )
}
