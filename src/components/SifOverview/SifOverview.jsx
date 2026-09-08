import Link from "next/link";
import {
  sifAudiences,
  sifBenefits,
  sifComparisonRows,
  sifFaqs,
  sifHowItWorks,
  sifQuickFacts,
  sifRelatedServices,
  sifRisks,
  sifSpectrum,
  sifStrategyGroups,
  sifSupport,
} from "@/data/sifData";
import styles from "./SifOverview.module.css";

const SEBI_MASTER_CIRCULAR =
  "https://www.sebi.gov.in/sebi_data/attachdocs/mar-2026/1774024028162.pdf";
const SEBI_SIF_CIRCULAR =
  "https://www.sebi.gov.in/sebi_data/attachdocs/feb-2025/1740659043547.pdf";

export default function SifOverview() {
  return (
    <div>
      <section className={styles.introSection} aria-labelledby="sif-overview-title">
        <div className={styles.narrowContainer}>
          <p className={styles.eyebrow}>Investor guide</p>
          <h2 id="sif-overview-title">Everything You Need to Know About Specialized Investment Funds</h2>
          <h3>What is a Specialized Investment Fund (SIF)?</h3>
          <p>
            A Specialized Investment Fund is a pooled investment structure offered by an eligible Asset Management
            Company under the Securities and Exchange Board of India mutual fund framework. Like a mutual fund, it
            brings investors&apos; money together and follows a disclosed investment mandate. The difference is that a
            SIF can use more specialised portfolio strategies, including permitted long and short positions through
            derivatives, while remaining subject to regulatory limits, risk management, and disclosure requirements.
          </p>
          <p>
            SIFs are intended to bridge the space between conventional <Link href="/mutual-funds">Mutual Funds</Link>
            {" "}and <Link href="/services/portfolio-management">Portfolio Management Services</Link>. They are not a
            replacement for either, and they are not suitable for every investor. The right choice depends on the
            strategy, time horizon, liquidity needs, and ability to understand and tolerate additional risk.
          </p>
          <div className={styles.thresholdNote}>
            <strong>Minimum threshold:</strong> ₹10 lakh in aggregate across all strategies offered by the same SIF,
            measured at PAN level. It is not necessarily ₹10 lakh per strategy, and regular mutual fund holdings with
            the same AMC do not count toward the threshold.
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="quick-facts-title">
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>At a glance</p>
            <h2 id="quick-facts-title">SIF Quick Facts</h2>
          </div>
          <div className={styles.quickGrid}>
            {sifQuickFacts.map((item) => (
              <article className={styles.quickCard} key={item.label}>
                <strong>{item.value}</strong>
                <h3>{item.label}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.tintedSection}`} aria-labelledby="why-sif-title">
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Investment spectrum</p>
            <h2 id="why-sif-title">Why Were SIFs Introduced?</h2>
            <p>
              SIF expands the range of regulated strategies available between conventional pooled funds and higher-ticket
              portfolio structures. Moving across this spectrum can mean greater flexibility and complexity, but it does
              not automatically mean better returns.
            </p>
          </div>
          <div className={styles.spectrum}>
            {sifSpectrum.map((item, index) => (
              <article className={`${styles.spectrumItem} ${item.featured ? styles.featured : ""}`} key={item.title}>
                <span className={styles.stepNumber}>{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="how-sif-works-title">
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Process</p>
            <h2 id="how-sif-works-title">How a SIF Works</h2>
          </div>
          <ol className={styles.processList}>
            {sifHowItWorks.map((step, index) => (
              <li key={step.title}>
                <span>{index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className={styles.roleNote}>
            The investor chooses and owns units in the strategy. The AMC establishes the SIF, and its fund manager makes
            portfolio decisions. Ideas2Invest does not manage the SIF portfolio.
          </p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.tintedSection}`} aria-labelledby="strategy-types-title">
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Permitted categories</p>
            <h2 id="strategy-types-title">Types of SIF Strategies</h2>
            <p>Not every AMC offers every strategy. Always check the current Investment Strategy Information Document.</p>
          </div>
          <div className={styles.strategyGrid}>
            {sifStrategyGroups.map((group) => (
              <article className={styles.strategyCard} key={group.title}>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <ul>
                  {group.strategies.map((strategy) => (
                    <li key={strategy.name}>
                      <strong>{strategy.name}</strong>
                      <span>{strategy.detail}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className={styles.derivativeNote}>
            <strong>How long-short investing works:</strong> A long position seeks to benefit if an asset rises, while a
            short position may benefit if it falls. Short positions can also create losses when the market moves in the
            opposite direction and should not be treated as assured downside protection.
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="comparison-title">
        <div className={styles.wideContainer}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Compare structures</p>
            <h2 id="comparison-title">SIF vs Mutual Funds vs PMS vs AIF</h2>
            <p>These are general comparisons. Product documents and current regulations govern each offering.</p>
          </div>
          <div className={styles.tableScroller} tabIndex="0" role="region" aria-label="Comparison of SIF, mutual funds, PMS, and AIF">
            <table className={styles.comparisonTable}>
              <thead>
                <tr>
                  <th scope="col">Parameter</th>
                  <th scope="col">Mutual Funds</th>
                  <th scope="col" className={styles.sifColumn}>SIF</th>
                  <th scope="col">PMS</th>
                  <th scope="col">AIF</th>
                </tr>
              </thead>
              <tbody>
                {sifComparisonRows.map(([parameter, ...values]) => (
                  <tr key={parameter}>
                    <th scope="row">{parameter}</th>
                    {values.map((value, index) => (
                      <td className={index === 1 ? styles.sifColumn : ""} key={`${parameter}-${index}`}>{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.tintedSection}`} aria-labelledby="benefits-title">
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Potential advantages</p>
            <h2 id="benefits-title">Why Investors May Consider SIF</h2>
          </div>
          <ul className={styles.checkGrid}>
            {sifBenefits.map((benefit) => <li key={benefit}>{benefit}</li>)}
          </ul>
          <p className={styles.balanceNote}>These features do not assure higher or positive returns.</p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.riskSection}`} aria-labelledby="risks-title">
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <p className={styles.riskEyebrow}>Important risk information</p>
            <h2 id="risks-title">Understand the Risks Before Investing</h2>
            <p>SIFs can be more complex than conventional mutual funds and may result in significant capital loss.</p>
          </div>
          <div className={styles.riskGrid}>
            {sifRisks.map((risk) => (
              <article key={risk.title}>
                <h3>{risk.title}</h3>
                <p>{risk.description}</p>
              </article>
            ))}
          </div>
          <p className={styles.riskFooter}>
            Read the applicable ISID, offer documents, risk-band, asset-allocation limits, liquidity terms, fees, and
            notice period before investing.
          </p>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="who-title">
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Suitability</p>
            <h2 id="who-title">Who Should Consider SIFs?</h2>
          </div>
          <div className={styles.audienceGrid}>
            {sifAudiences.map((item) => (
              <article key={item.title}><h3>{item.title}</h3><p>{item.description}</p></article>
            ))}
          </div>
          <div className={styles.notForEveryone}>SIF may not be suitable for every investor. The ₹10 lakh threshold is an entry condition, not a suitability test.</div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.tintedSection}`} aria-labelledby="support-title">
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Ideas2Invest support</p>
            <h2 id="support-title">Evaluate SIF with Clarity</h2>
          </div>
          <div className={styles.supportGrid}>
            {sifSupport.map((item, index) => (
              <article key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.description}</p></article>
            ))}
          </div>
          <p className={styles.complianceNote}>
            Ideas2Invest is an AMFI-registered Mutual Fund Distributor, ARN-113588. Any SIF distribution or transaction
            support is subject to applicable certifications, regulatory requirements, and product availability.
          </p>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="related-title">
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Continue exploring</p>
            <h2 id="related-title">Related Investment Solutions</h2>
          </div>
          <div className={styles.relatedGrid}>
            {sifRelatedServices.map((service) => (
              <Link href={service.href} className={styles.relatedCard} key={service.href}>
                <h3>{service.title}</h3><p>{service.description}</p><span>Learn more</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.tintedSection}`} aria-labelledby="faq-title">
        <div className={styles.narrowContainer}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Direct answers</p>
            <h2 id="faq-title">Specialized Investment Fund FAQs</h2>
          </div>
          <div className={styles.faqList}>
            {sifFaqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sourcesSection} aria-labelledby="sources-title">
        <div className={styles.narrowContainer}>
          <h2 id="sources-title">Regulatory References</h2>
          <p>The regulatory explanations on this page were checked against official SEBI material:</p>
          <ul>
            <li><a href={SEBI_SIF_CIRCULAR} target="_blank" rel="noopener noreferrer">SEBI Regulatory Framework for Specialized Investment Funds, February 27, 2025</a></li>
            <li><a href={SEBI_MASTER_CIRCULAR} target="_blank" rel="noopener noreferrer">SEBI Master Circular for Mutual Funds, March 20, 2026, Chapter 21</a></li>
          </ul>
          <p>Regulations and tax rules can change. Refer to the latest official circulars and strategy documents before acting.</p>
        </div>
      </section>
    </div>
  );
}
