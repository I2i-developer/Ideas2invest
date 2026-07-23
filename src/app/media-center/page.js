import Navbar from "@/components/Navbar/Navbar";
import SocialMediaPosts from "@/components/SocialMediaPosts/SocialMediaPosts";
import Topbar from "@/components/Topbar/Topbar";
import { createPageMetadata } from "@/utils/metadata";

export const metadata = createPageMetadata({
    title: "Media Center | Ideas2Invest",
    description:
        "Explore Ideas2Invest social media updates, educational posts, and shareable investment content in one place.",
    canonical: "https://www.ideas2invest.com/media-center",
});

export default function socialMedia() {
    return (
        <>
          <Topbar />
          <Navbar />
          <SocialMediaPosts />
        </>
    )
}
