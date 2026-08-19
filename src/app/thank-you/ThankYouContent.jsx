"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Topbar from "@/components/Topbar/Topbar";
import { footerData } from "@/data/footerData";
import { consumeFormSubmitted } from "@/utils/formSubmission";
import styles from "./thank-you.module.css";

export default function ThankYouContent() {
  const router = useRouter();
  const [allowed, setAllowed] = useState(null); // null = checking, true = show, false = redirecting

  useEffect(() => {
    if (consumeFormSubmitted()) {
      setAllowed(true);
    } else {
      setAllowed(false);
      router.replace("/contact");
    }
  }, [router]);

  const phoneDigits = footerData.company.phone1.replace(/\D/g, "");
  const whatsappDigits = phoneDigits.startsWith("91") ? phoneDigits : `91${phoneDigits}`;
  const whatsappHref = `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(
    "Hello Ideas2Invest, I just submitted an enquiry on your website."
  )}`;

  if (!allowed) {
    return (
      <>
        <Topbar />
        <Navbar />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Topbar />
      <Navbar />
      <main className={styles.page}>
        <section className={styles.hero} aria-labelledby="thank-you-title">
          <div className={styles.heroInner}>
            <div>
              <p className={styles.eyebrow}>
                <span className={styles.checkIcon} aria-hidden="true">
                  ✓
                </span>
                Enquiry received
              </p>
              <h1 id="thank-you-title" className={styles.title}>
                Thank you for contacting Ideas2Invest.
              </h1>
              <p className={styles.intro}>
                Your enquiry has been received. Our team will review your details and get back to you shortly
                with the next step for your investment, insurance, NRI, KYC, or planning requirement.
              </p>
              <div className={styles.actions} aria-label="Helpful next actions">
                <Link className={styles.primaryAction} href="/mutual-funds">
                  Explore Mutual Funds
                </Link>
                <Link className={styles.secondaryAction} href="/calculators/sip">
                  Use SIP Calculator
                </Link>
              </div>
            </div>

            <aside className={styles.summaryCard} aria-labelledby="next-steps-title">
              <h2 id="next-steps-title">What happens next</h2>
              <ol className={styles.nextSteps}>
                <li className={styles.nextStep}>
                  <span className={styles.stepNumber}>1</span>
                  <div>
                    <h3>We review your enquiry</h3>
                    <p>Your selected service, message, and contact details help us route the request correctly.</p>
                  </div>
                </li>
                <li className={styles.nextStep}>
                  <span className={styles.stepNumber}>2</span>
                  <div>
                    <h3>Our team contacts you</h3>
                    <p>We will use the phone number or email you submitted to continue the conversation.</p>
                  </div>
                </li>
                <li className={styles.nextStep}>
                  <span className={styles.stepNumber}>3</span>
                  <div>
                    <h3>You get guided next steps</h3>
                    <p>We help you understand the documents, process, or options relevant to your enquiry.</p>
                  </div>
                </li>
              </ol>
            </aside>
          </div>
        </section>

        <section className={styles.supportBand} aria-label="Contact and resources">
          <div className={styles.supportInner}>
            <article className={styles.supportItem}>
              <h2>Need urgent help?</h2>
              <p>Call our team directly if you need a quicker response.</p>
              <a href={`tel:${phoneDigits}`}>{footerData.company.phone1}</a>
            </article>
            <article className={styles.supportItem}>
              <h2>Prefer WhatsApp?</h2>
              <p>Send us a message with your enquiry reference or requirement.</p>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                Message Ideas2Invest
              </a>
            </article>
            <article className={styles.supportItem}>
              <h2>Learn while you wait</h2>
              <p>Read investor guides and service updates from Ideas2Invest.</p>
              <Link href="/blogs">Visit Blogs</Link>
            </article>
          </div>
        </section>

        <p className={styles.disclaimer}>
          Mutual fund investments are subject to market risks. Please read all scheme related documents carefully
          before investing.
        </p>
      </main>
      <Footer />
    </>
  );
}
