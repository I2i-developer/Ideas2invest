import Blogs from "@/components/Blogs/Blogs";
import DownloadAppSection from "@/components/DownloadApp/DownloadAppSection";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Topbar from "@/components/Topbar/Topbar";

export default function SignupPage() {
  return (
    <>
      <Topbar />
      <Navbar />
      <DownloadAppSection />
      {/* <Blogs /> */}
      <Footer />
    </>
  );
}