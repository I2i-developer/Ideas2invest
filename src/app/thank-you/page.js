import ThankYouContent from "./ThankYouContent";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.ideas2invest.com";

export const metadata = {
  title: "Thank You | Ideas2Invest",
  description:
    "Thank you for contacting Ideas2Invest. Our team has received your enquiry and will respond shortly.",
  alternates: {
    canonical: `${baseUrl}/thank-you`,
  },
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Thank You | Ideas2Invest",
    description:
      "Thank you for contacting Ideas2Invest. Our team has received your enquiry and will respond shortly.",
    url: `${baseUrl}/thank-you`,
    siteName: "Ideas2Invest",
    type: "website",
    images: [
      {
        url: "/assets/images/logo/logo.png",
        width: 1200,
        height: 630,
        alt: "Ideas2Invest",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thank You | Ideas2Invest",
    description:
      "Thank you for contacting Ideas2Invest. Our team has received your enquiry and will respond shortly.",
    images: ["/assets/images/logo/logo.png"],
  },
};

export default function ThankYouPage() {
  return <ThankYouContent />;
}
