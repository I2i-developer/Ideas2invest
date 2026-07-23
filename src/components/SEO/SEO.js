"use client";
import Head from "next/head";

export default function SEO({ title, description, canonical }) {
  const defaultTitle = "Ideas2Invest | Financial Growth Starts Here";
  const defaultDescription =
    "Empowering your financial journey with expert investment and wealth management advice.";
  const defaultCanonical = "https://www.ideas2invest.com/";

  return (
    <Head>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <link rel="canonical" href={canonical || defaultCanonical} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical || defaultCanonical} />
      <meta property="og:site_name" content="Ideas2Invest" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
    </Head>
  );
}
