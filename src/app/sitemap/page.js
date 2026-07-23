import BreadcrumbStrip from "@/components/BreadcrumbStrip/BreadcrumbStrip";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Sitemap from "@/components/SiteMap/SiteMapLinks";
import Topbar from "@/components/Topbar/Topbar";
import seoData from "@/data/seoData";
import { createPageMetadata } from "@/utils/metadata";

export const metadata = createPageMetadata(seoData["/sitemap"]);

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