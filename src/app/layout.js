import localFont from 'next/font/local';
import './globals.css';
import ClientLayout from './ClientLayout';
import "katex/dist/katex.min.css";
import JsonLd from '@/components/JsonLd/JsonLd';
import { footerData } from '@/data/footerData';
import { createFinancialServiceSchema } from '@/utils/schema';
import { createPageMetadata } from '@/utils/metadata';

const manrope = localFont({
  src: './fonts/Manrope-Latin.woff2',
  weight: '400 700',
  display: 'swap',
  variable: '--font-manrope',
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.ideas2invest.com";

export const metadata = {
  metadataBase: new URL(baseUrl),
  ...createPageMetadata({
    title: 'Ideas2Invest | Investment Ideas, Mutual Funds, SIP, Insurance & Wealth Management',
    description:
      'Ideas2Invest helps investors with mutual funds, SIPs, insurance, wealth management, foreign investments, and financial advisory services.',
    canonical: baseUrl,
  }),
  authors: [{ name: 'Ideas2Invest' }],
  verification: {
    google: 'DbQy1LpXv2820GjSiQgUOzsu_EtzDYyO9LNek9BKQ18'
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>
        <JsonLd data={createFinancialServiceSchema(footerData)} />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
