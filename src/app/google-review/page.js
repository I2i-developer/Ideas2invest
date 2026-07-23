import ReviewPage from "@/components/ReviewGoogle/ReviewGoogle";
import { createPageMetadata } from "@/utils/metadata";

export const metadata = createPageMetadata({
    title: "Send Client Review Request | Ideas2Invest",
    description:
        "Send Ideas2Invest clients a direct review request by email and make it easier for them to share feedback.",
    canonical: "https://www.ideas2invest.com/google-review",
});

export default function Contact() {
    return (
        <>
            <ReviewPage />
        </>
    )
}
