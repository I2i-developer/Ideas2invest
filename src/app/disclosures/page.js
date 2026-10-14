import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Topbar from "@/components/Topbar/Topbar";
import { commissionDisclosure } from "@/data/commissionDisclosureData";
import styles from "./page.module.css";

export const metadata = {
  title: "Commission Disclosure | Ideas2Invest",
  description:
    "Commission disclosure for mutual fund regular plans distributed by Ideas2Invest, AMFI registered Mutual Fund Distributor ARN-113588.",
  alternates: {
    canonical: "https://www.ideas2invest.com/disclosures",
  },
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "Commission Disclosure | Ideas2Invest",
    description:
      "Commission disclosure for mutual fund regular plans distributed by Ideas2Invest.",
    url: "https://www.ideas2invest.com/disclosures",
    siteName: "Ideas2Invest",
    type: "website",
  },
};

const headers = ["AMC Name", "Equity Funds", "Debt Funds", "Liquid Funds", "ELSS Funds"];

export default function DisclosuresPage() {
  return (
    <>
      <Topbar />
      <Navbar />
      <main className={styles.page}>
        <section className={styles.hero} aria-labelledby="disclosure-title">
          <p className={styles.eyebrow}>Regulatory Disclosure</p>
          <h1 id="disclosure-title">Disclosures</h1>
          <p>
            Commission-rate disclosure for mutual fund regular plans distributed
            by Ideas2Invest, AMFI registered Mutual Fund Distributor{" "}
            <strong>{commissionDisclosure.arn}</strong>.
          </p>
        </section>

        <section className={styles.card} aria-labelledby="commission-title">
          <div className={styles.headerRow}>
            <div>
              <h2 id="commission-title">Commission Rates</h2>
              <p>
                Indicative trail commission ranges received from AMCs on regular
                plan transactions.
              </p>
            </div>
            {/* <span className={styles.updated}>
              Updated {commissionDisclosure.lastUpdated}
            </span> */}
          </div>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <caption>
                Mutual fund commission-rate disclosure by AMC and fund category
              </caption>
              <thead>
                <tr>
                  {headers.map((header) => (
                    <th key={header} scope="col">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {commissionDisclosure.rows.map((row) => (
                  <tr key={row[0]}>
                    <th scope="row">{row[0]}</th>
                    {row.slice(1).map((cell, index) => (
                      <td key={`${row[0]}-${headers[index + 1]}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className={styles.notes} aria-label="Important disclosure notes">
            <p>
              <strong>Note:</strong> {commissionDisclosure.note}
            </p>
            <p>
              Actual commission may vary by scheme, plan, transaction type,
              investment period, assets under management, clawback rules, and AMC
              updates. Investors should refer to current scheme documents before
              investing.
            </p>
            <p>
              Ideas2Invest distributes regular plans only and may receive trail
              commission from AMCs. Direct plans are available to investors and
              have a lower expense ratio because distributors do not receive
              commission on direct plans.
            </p>
            <p>
              Mutual fund investments are subject to market risks. Please read
              all scheme-related documents carefully before investing.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
