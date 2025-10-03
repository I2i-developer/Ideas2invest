import BreadcrumbStrip from "@/components/BreadcrumbStrip/BreadcrumbStrip";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Sitemap from "@/components/SiteMap/SiteMapLinks";
import Topbar from "@/components/Topbar/Topbar";

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