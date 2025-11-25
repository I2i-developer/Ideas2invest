import Blogs from "@/components/Blogs/Blogs";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import ResourcesSection from "@/components/Resources/Resources";
import Topbar from "@/components/Topbar/Topbar";

export default function Resources () {
  return (
      <>
        <Topbar />
        <Navbar />
        <ResourcesSection />
        <Blogs />
        <Footer />
      </>
  )
}