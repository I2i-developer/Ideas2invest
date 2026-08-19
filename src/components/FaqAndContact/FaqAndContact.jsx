"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import TurnstileField from "@/components/TurnstileField/TurnstileField";
import { markFormSubmitted } from "@/utils/formSubmission";
import styles from "./FaqAndContact.module.css";
import { homeFaqData } from "@/data/homeFaqData";

const serviceOptions = [
  "Mutual Funds",
  "SIP / SWP Planning",
  "PMS / AIF",
  "GIFT City / Dollar Investment",
  "Insurance",
  "KYC / Onboarding",
  "Tax / Investment Planning",
  "NRI Services",
  "General Enquiry",
];

const createInitialFormData = () => ({
  name: "",
  phone: "",
  email: "",
  serviceInterest: "Mutual Funds",
  message: "",
  renderedAt: Date.now(),
  cfTurnstileToken: "",
});

export default function FAQContactSection() {
  const router = useRouter();
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const [activeIndex, setActiveIndex] = useState(null);
  const [formData, setFormData] = useState(createInitialFormData);
  const [status, setStatus] = useState({ message: "", type: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTurnstileVerify = useCallback((token) => {
    setFormData((current) => ({ ...current, cfTurnstileToken: token }));
  }, []);

  const validateForm = () => {
    const phoneRegex = /^[6-9]\d{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) return "Full name is required.";
    if (!phoneRegex.test(formData.phone)) return "Enter a valid Indian phone number.";
    if (!emailRegex.test(formData.email)) return "Enter a valid email address.";
    if (!formData.serviceInterest) return "Please select a service.";
    if (!formData.message.trim()) return "Please add a short message.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatus({ message: "", type: "" });

    const error = validateForm();
    if (error) {
      setIsSubmitting(false);
      setStatus({ message: error, type: "error" });
      setTimeout(() => setStatus({ message: "", type: "" }), 10000);
      return;
    }

    try {
      const res = await fetch("/api/home-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          submittedPage: window.location.href,
          userAgent: navigator.userAgent,
        }),
      });

      if (res.ok) {
        setStatus({ message: "Redirecting to confirmation...", type: "success" });
        setFormData(createInitialFormData());
        markFormSubmitted();
        router.push("/thank-you");
      } else {
        setStatus({
          message: "We could not submit this request. Please try again.",
          type: "error",
        });
      }
    } catch {
      setStatus({
        message: "We could not submit this request. Please try again.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
    setTimeout(() => setStatus({ message: "", type: "" }), 10000);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.faq}>
          <h2 className={styles.heading}>Frequently Asked Questions</h2>
          <div className={styles.accordion}>
            {homeFaqData.map((faq, index) => (
              <div key={faq.question} className={styles.accordionItem}>
                <button
                  type="button"
                  className={`${styles.accordionHeader} ${activeIndex === index ? styles.active : ""}`}
                  onClick={() => toggleAccordion(index)}
                >
                  {faq.question}
                  <span className={styles.icon}>{activeIndex === index ? "-" : "+"}</span>
                </button>
                <div className={`${styles.accordionContent} ${activeIndex === index ? styles.open : ""}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.contact}>
          <h2 className={styles.heading}>Get in Touch</h2>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <input type="text" name="name" placeholder=" " value={formData.name} onChange={handleChange} required />
              <label>Full Name</label>
            </div>

            <div className={styles.formGroup}>
              <input type="tel" name="phone" placeholder=" " value={formData.phone} onChange={handleChange} required />
              <label>Phone Number</label>
            </div>

            <div className={styles.formGroup}>
              <input type="email" name="email" placeholder=" " value={formData.email} onChange={handleChange} required />
              <label>Email Address</label>
            </div>

            <div className={styles.formGroup}>
              <select
                name="serviceInterest"
                value={formData.serviceInterest}
                onChange={handleChange}
                className={styles.serviceSelect}
                required
              >
                {serviceOptions.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
              <label className={styles.selectLabel}>Interested Service</label>
            </div>

            <div className={styles.formGroup}>
              <textarea name="message" rows="4" placeholder=" " value={formData.message} onChange={handleChange} required />
              <label>Message</label>
            </div>

            <TurnstileField siteKey={turnstileSiteKey} onVerify={handleTurnstileVerify} />

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {status.message && (
              <p className={`${styles.statusMessage} ${status.type === "success" ? styles.success : styles.error}`}>
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
