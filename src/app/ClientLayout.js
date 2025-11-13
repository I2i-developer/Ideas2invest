"use client";
import { useState } from "react";
import './globals.css';
import Script from 'next/script';
import { Manrope } from 'next/font/google';
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import FloatingWhatsApp from '@/components/FloatingWhatsApp/FloatingWhatsApp';
import FloatingSidebar from '@/components/FloatingSidebar/FloatingSidebar';
import AiAssistant from '@/components/AiAssistant/AiAssistant';
import GoogleAnalyticsTracker from '@/components/GoogleAnalytics/GoogleAnalyticsTracker';
import LogoIntro from '@/components/LogoIntro/LogoIntro';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-manrope'
});

export default function ClientLayout({ children }) {
  const [showMain, setShowMain] = useState(false);

  return (
    <html lang="en" className={manrope.variable}>
      <head>
        {/* ✅ Canonical URL */}
        <link rel="canonical" href="https://www.ideas2invest.com" />

        {/* ✅ Favicon + Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* ✅ Keywords for SEO */}
        <meta
          name="keywords"
          content="ideas to invest, ideas two invest, investment ideas, mutual funds, SIP calculator, ELSS tax saving, life insurance, health insurance, general insurance, term insurance, wealth management, portfolio management, PMS, foreign investment, NRI investment, AIF, corporate FD, financial advisor, retirement planning"
        />
        <meta name="author" content="Ideas2Invest" />

        {/* ✅ Google Site Verification */}
        <meta
          name="google-site-verification"
          content="DbQy1LpXv2820GjSiQgUOzsu_EtzDYyO9LNek9BKQ18"
        />

        {/* ✅ JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              name: "Ideas2Invest",
              url: "https://www.ideas2invest.com",
              logo: "https://www.ideas2invest.com/assets/images/logo/logo.png",
              description:
                "Ideas2Invest empowers your financial future with expert planning and tailored investment strategies. We provide services in mutual funds, SIP, insurance, wealth management, PMS, AIF, corporate FD, and foreign investment.",
              sameAs: [
                "https://www.facebook.com/ideas2invest",
                "https://www.instagram.com/ideas2invest/",
                "https://in.linkedin.com/company/ideas2invest"
              ],
              serviceType: [
                "Mutual Funds",
                "SIP (Systematic Investment Plan)",
                "ELSS Tax Saving",
                "Life Insurance",
                "Health Insurance",
                "General Insurance",
                "Portfolio Management Services (PMS)",
                "Alternative Investment Funds (AIF)",
                "Corporate Fixed Deposits",
                "Dollar Investment",
                "Wealth Management",
                "Financial Planning",
                "NRI / Foreign Investment"
              ]
            })
          }}
        />
      </head>
      <body>
        {/* Scripts */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-TTWMS72K7P" strategy="afterInteractive"/>
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-TTWMS72K7P', { page_path: window.location.pathname });
          `}</Script>

        <GoogleAnalyticsTracker />
          {/* Logo Intro */}
          {!showMain && <LogoIntro onComplete={() => setShowMain(true)} />}
          {/* Main content */}
          {showMain && (
            <>
              <main>
                <FloatingWhatsApp />
                <AiAssistant />
                {/* <FloatingSidebar /> */}
                {children}
              </main>
            </>
          )}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
