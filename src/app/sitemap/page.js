import BreadcrumbStrip from "@/components/BreadcrumbStrip/BreadcrumbStrip";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Sitemap from "@/components/SiteMap/SiteMapLinks";
import Topbar from "@/components/Topbar/Topbar";
import seoData from "@/data/seoData";

export const metadata = {
  title: seoData["/sitemap"].title,
  description: seoData["/sitemap"].description,
  keywords: seoData["/sitemap"].keywords,
  alternates: {
    canonical: seoData["/sitemap"].canonical,
  },
};

export default function SiteMap() {
    return (
      <>
        <Topbar />
        <Navbar />
        <BreadcrumbStrip pageKey="sitemap" />
        <Sitemap />
        <Footer />
      </>
    )
}