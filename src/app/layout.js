import './globals.css'
import { Manrope } from 'next/font/google'
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import FloatingWhatsApp from '@/components/FloatingWhatsApp/FloatingWhatsApp'
import FloatingSidebar from '@/components/FloatingSidebar/FloatingSidebar'
import AiAssistant from '@/components/AiAssistant/AiAssistant'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-manrope'
})

/* 🔹 SEO Metadata */
export const metadata = {
  title: 'Ideas2Invest | Investment Ideas, Mutual Funds, SIP, Insurance & Wealth Management',
  description:
    'Ideas2Invest (also searched as Ideas to Invest or Ideas Two Invest) empowers your financial future with expert planning and tailored strategies. We provide mutual funds, SIP, insurance, wealth management, foreign investments, and financial advisory services.',
  openGraph: {
    title: 'Ideas2Invest | Investment Ideas, Mutual Funds, SIP, Insurance & Wealth Management',
    description:
      'Ideas2Invest (also searched as Ideas to Invest or Ideas Two Invest) empowers your financial future with expert planning and tailored strategies. We provide mutual funds, SIP, insurance, wealth management, foreign investments, and financial advisory services.',
    images: [
      {
        url: '/assets/images/logo/logo.png',
        width: 800,
        height: 800,
        alt: 'Ideas2Invest Logo'
      }
    ],
    siteName: 'Ideas2Invest'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ideas2Invest | Investment Ideas, Mutual Funds, SIP, Insurance & Wealth Management',
    description:
      'Ideas2Invest (also searched as Ideas to Invest or Ideas Two Invest) empowers your financial future with expert planning and tailored strategies. We provide mutual funds, SIP, insurance, wealth management, foreign investments, and financial advisory services.',
    image: '/assets/images/logo/logo.png'
  }
}

export default function RootLayout({ children }) {
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
        <FloatingWhatsApp />
        <AiAssistant />
        <FloatingSidebar />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

// import ScrollToTop from '@/components/ScrollToTop/ScrollToTop'
// import './globals.css'
// import { Manrope } from 'next/font/google'
// import FloatingWhatsApp from '@/components/FloatingWhatsApp/FloatingWhatsApp'
// import FloatingSidebar from '@/components/FloatingSidebar/FloatingSidebar'
// import AiAssistant from '@/components/AiAssistant/AiAssistant'

// const manrope = Manrope({
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700'],
//   display: 'swap',
//   variable: '--font-manrope'
// })

// export const metadata = {
//   title: 'Ideas2Invest - Your Goal, Our Objective',
//   description: 'Empowering your financial future with expert planning and tailored investment strategies. At Ideas2Invest, we help you navigate your financial journey with personalized advice, innovative solutions, and a commitment to your success.',
//   openGraph: {
//     title: 'Ideas2Invest - Your Goal, Our Objective',
//     description: 'Empowering your financial future with expert planning and tailored investment strategies. At Ideas2Invest, we help you navigate your financial journey with personalized advice, innovative solutions, and a commitment to your success.',
//     images: [
//       {
//         url: '/assets/images/logo/logo.png',
//         width: 800,
//         height: 800,
//         alt: 'Ideas2Invest Logo',
//       },
//     ],
//     siteName: 'Ideas2Invest',
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'Ideas2Invest - Your Goal, Our Objective',
//     description: 'Empowering your financial future with expert planning and tailored investment strategies. At Ideas2Invest, we help you navigate your financial journey with personalized advice, innovative solutions, and a commitment to your success.',
//     image: '/assets/images/logo/logo.png',
//   },
// }

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" className={manrope.variable}>
//       <body>
//         <FloatingWhatsApp />
//         <AiAssistant />
//         <FloatingSidebar />
//         {/* <ScrollToTop /> */}
//         {children}
//       </body>
//     </html>
//   )
// }
