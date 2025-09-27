import './globals.css'
import { Manrope } from 'next/font/google'
import FloatingWhatsApp from '@/components/FloatingWhatsApp/FloatingWhatsApp'
import FloatingSidebar from '@/components/FloatingSidebar/FloatingSidebar'
import AiAssistant from '@/components/AiAssistant/AiAssistant'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-manrope'
})

/** ✅ SEO Metadata (Next.js auto-handles <title>, description, OG, Twitter) */
export const metadata = {
  title: 'Ideas2Invest - Your Goal, Our Objective',
  description:
    'Empowering your financial future with expert planning and tailored investment strategies. At Ideas2Invest, we help you navigate your financial journey with personalized advice, innovative solutions, and a commitment to your success.',
  openGraph: {
    title: 'Ideas2Invest - Your Goal, Our Objective',
    description:
      'Empowering your financial future with expert planning and tailored investment strategies. At Ideas2Invest, we help you navigate your financial journey with personalized advice, innovative solutions, and a commitment to your success.',
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
    title: 'Ideas2Invest - Your Goal, Our Objective',
    description:
      'Empowering your financial future with expert planning and tailored investment strategies. At Ideas2Invest, we help you navigate your financial journey with personalized advice, innovative solutions, and a commitment to your success.',
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

        {/* ✅ Extra SEO Tags */}
        <meta
          name="keywords"
          content="investment, mutual funds, SIP, insurance, ideas to invest wealth management, portfolio management, foreign investment, financial planning, Ideas 2 invest, financial advisor, NRI investment"
        />
        <meta name="author" content="Ideas2Invest" />

        {/* ✅ Google Site Verification (replace with your code) */}
        <meta
          name="google-site-verification"
          content="your-google-verification-code"
        />

        {/* ✅ Example JSON-LD Structured Data */}
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
                "Empowering your financial future with expert planning and tailored investment strategies.",
              sameAs: [
                "https://www.facebook.com/ideas2invest",
                "https://www.instagram.com/ideas2invest/",
                "https://in.linkedin.com/company/ideas2invest"
              ],
              serviceType: [
                "Investment Advisory",
                "Mutual Funds",
                "SIP",
                "Insurance",
                "Health Insurance",
                "Wealth Management"
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
