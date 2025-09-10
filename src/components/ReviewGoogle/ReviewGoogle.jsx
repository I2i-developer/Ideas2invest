"use client";
import { useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./ReviewGoogle.module.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function ReviewPage() {
  const [formData, setFormData] = useState({
    clientName: "",
    clientEmail: "",
  });
  const [errors, setErrors] = useState({ clientName: "", clientEmail: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear error when typing
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { clientName: "", clientEmail: "" };

    // Name validation → alphabets and spaces only
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!formData.clientName.trim()) {
      newErrors.clientName = "Name is required";
      valid = false;
    } else if (!nameRegex.test(formData.clientName)) {
      newErrors.clientName = "Name can only contain letters and spaces";
      valid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.clientEmail.trim()) {
      newErrors.clientEmail = "Email is required";
      valid = false;
    } else if (!emailRegex.test(formData.clientEmail)) {
      newErrors.clientEmail = "Please enter a valid email address";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return; // stop if invalid

    setLoading(true);

    const res = await fetch("/api/sendReviewEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setSubmitted(true);
      setFormData({ clientName: "", clientEmail: "" }); // reset after submit
    }
    setLoading(false);
  };

  return (
    <div className={`${styles.container} ${inter.className}`}>
      <div className={styles.card}>
        {/* Logo */}
        <div className={styles.logoContainer}>
          <Image src="/assets/images/logo/logo.png" alt="Company Logo" width={150} height={80} />
        </div>

        {!submitted ? (
          <>
            <h1 className={styles.title}>Send Client Review Request</h1>
            <p className={styles.subtitle}>
              Fill in client details below. They will receive an email with a
              direct link to leave us a Google review.
            </p>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div>
                <input
                  type="text"
                  name="clientName"
                  placeholder="Client Name"
                  value={formData.clientName}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
                {errors.clientName && (
                  <p className={styles.error}>{errors.clientName}</p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  name="clientEmail"
                  placeholder="Client Email"
                  value={formData.clientEmail}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
                {errors.clientEmail && (
                  <p className={styles.error}>{errors.clientEmail}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={loading}
                className={styles.button}
              >
                {loading ? "Sending..." : "Send Review Email"}
              </button>
            </form>
          </>
        ) : (
          <div className={styles.success}>
            <h2 className={styles.successTitle}>
              Review request sent successfully ✅
            </h2>
            <p className={styles.successText}>
              The client will receive an email with a direct link to leave their
              review on Google.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ clientName: "", clientEmail: "" }); // clear inputs
                setErrors({ clientName: "", clientEmail: "" }); // clear errors
              }}
              className={styles.successButton}
            >
              Send Another
            </button>
          </div>
        )}

        {/* Footer */}
        <div className={styles.footer}>
          <p>
            © {new Date().getFullYear()} Ideas2Invest |{" "}
            <a
              href="https://www.ideas2invest.com/"
              target="_blank"
              rel="noreferrer"
            >
              www.ideas2invest.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
