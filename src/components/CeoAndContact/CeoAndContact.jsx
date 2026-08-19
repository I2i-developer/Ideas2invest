"use client";

import React, { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import TurnstileField from "@/components/TurnstileField/TurnstileField";
import { markFormSubmitted } from "@/utils/formSubmission";
import styles from "./CeoAndContact.module.css";

const ceoQuotes = [
  {
    name: "Anju Bansal",
    title: "Founder & Managing Director",
    img: "/assets/images/team/anju-bansal-passport.jpg",
    quote:
      "With over two decades of experience, I believe financial freedom is the true empowerment we provide to our clients.",
  },
  {
    name: "Deepak Sooden",
    title: "Founder & Managing Director",
    img: "/assets/images/team/deepak-sooden-passport.jpg",
    quote:
      "Our mission is to make investments simple, accessible, and impactful for every individual we serve.",
  },
];

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
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  serviceInterest: "Mutual Funds",
  message: "",
  renderedAt: Date.now(),
  cfTurnstileToken: "",
});

const ContactSection = () => {
  const router = useRouter();
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const [formData, setFormData] = useState(createInitialFormData);
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTurnstileVerify = useCallback((token) => {
    setFormData((current) => ({ ...current, cfTurnstileToken: token }));
  }, []);

  const validateForm = () => {
    const phoneRegex = /^[6-9]\d{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const normalizedPhone = formData.phone.replace(/\D/g, "").replace(/^91/, "").replace(/^0/, "");

    if (!formData.firstName.trim()) return "First name is required.";
    if (!emailRegex.test(formData.email)) return "Enter a valid email address.";
    if (!phoneRegex.test(normalizedPhone)) return "Enter a valid Indian phone number.";
    if (!formData.serviceInterest) return "Please select a service you're interested in.";
    if (formData.message.trim().length < 8) return "Please add a short message about your enquiry.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const validationError = validateForm();
    if (validationError) {
      setStatus(validationError);
      return;
    }

    setIsSubmitting(true);
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact-page", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          submittedPage: window.location.href,
          userAgent: navigator.userAgent,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("Redirecting to confirmation...");
        setFormData(createInitialFormData());
        markFormSubmitted();
        router.push("/thank-you");
      } else {
        setStatus(data.error || "We could not submit this request. Please try again.");
      }
    } catch {
      setStatus("We could not submit this request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.ceoSection}>
        <h3 className={styles.ceoHeading}>From Founder's Desk</h3>
        <Swiper
          loop
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
        >
          {ceoQuotes.map((ceo) => (
            <SwiperSlide key={ceo.name}>
              <div className={styles.ceoCard}>
                <span className={`${styles.decorShape} ${styles.topLeft}`} />
                <div className={styles.ceoImageWrapper}>
                  <img src={ceo.img} alt={ceo.name} className={styles.ceoImage} />
                </div>
                <h4 className={styles.ceoName}>{ceo.name}</h4>
                <p className={styles.ceoTitle}>{ceo.title}</p>
                <p className={styles.ceoQuote}>"{ceo.quote}"</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={styles.formSection}>
        <h3>Contact Our Team</h3>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.nameRow}>
            <div className={styles.inputBox}>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
              <label>First Name*</label>
            </div>
            <div className={styles.inputBox}>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
              <label>Last Name</label>
            </div>
          </div>

          <div className={styles.inputBox}>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            <label>Email*</label>
          </div>

          <div className={styles.inputBox}>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
            <label>Phone Number*</label>
          </div>

          <div className={styles.inputBox}>
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
            <label className={styles.selectLabel}>Interested Service*</label>
          </div>

          <div className={styles.inputBox}>
            <textarea rows="3" name="message" value={formData.message} onChange={handleChange} required />
            <label>Message</label>
          </div>

          <TurnstileField siteKey={turnstileSiteKey} onVerify={handleTurnstileVerify} />

          <button type="submit" className={styles.btn} disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
          {status && <p className={styles.status}>{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
