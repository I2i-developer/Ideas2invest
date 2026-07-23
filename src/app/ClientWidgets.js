"use client";

import Script from 'next/script';
import FloatingWhatsApp from '@/components/FloatingWhatsApp/FloatingWhatsApp';
import AiAssistant from '@/components/AiAssistant/AiAssistant';
import GoogleAnalyticsTracker from '@/components/GoogleAnalytics/GoogleAnalyticsTracker';
import ScrollToHash from "@/components/ScrollHandler/ScrollHandler";
import VercelMonitoring from "./VercelMonitoring";

export default function ClientWidgets() {
  return (
    <>
      <ScrollToHash />
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-TTWMS72K7P" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-TTWMS72K7P', { page_path: window.location.pathname });
      `}</Script>
      <GoogleAnalyticsTracker />
      <FloatingWhatsApp />
      <AiAssistant />
      <VercelMonitoring />
    </>
  );
}
