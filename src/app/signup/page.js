import Blogs from "@/components/Blogs/Blogs";
import DownloadAppSection from "@/components/DownloadApp/DownloadAppSection";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Topbar from "@/components/Topbar/Topbar";
import { createPageMetadata } from "@/utils/metadata";

export const metadata = createPageMetadata({
  title: "Sign Up | Ideas2Invest",
  description:
    "Start your Ideas2Invest journey. Download the app, open your account, and begin investing with guided support.",
  canonical: "https://www.ideas2invest.com/signup",
});

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
