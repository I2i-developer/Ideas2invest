"use client";
import { useState } from "react";
import styles from "./FaqAndContact.module.css";
import { homeFaqData } from "@/data/homeFaqData";

export default function FAQContactSection() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: ""
    });

    const [status, setStatus] = useState({ message: "", type: "" }); // type: 'success' | 'error'
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        const phoneRegex = /^[6-9]\d{9}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.name.trim()) return "Full name is required.";
        if (!phoneRegex.test(formData.phone)) return "Enter a valid Indian phone number.";
        if (!emailRegex.test(formData.email)) return "Enter a valid email address.";
        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
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
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            if (res.ok) {
                setStatus({ message: "✅ Thank you! Your message has been sent.", type: "success" });
                setFormData({ name: "", phone: "", email: "", message: "" });
            } else {
                setStatus({ message: `❌ ${data.error}`, type: "error" });
            }
        } catch {
            setStatus({ message: "❌ Something went wrong. Please try again later.", type: "error" });
        } finally {
            setIsSubmitting(false);
        }
        setTimeout(() => setStatus({ message: "", type: "" }), 10000);
    };


    return (
        <section className={styles.section}>
            <div className={styles.container}>

                {/* FAQ Section */}
                <div className={styles.faq}>
                    <h2 className={styles.heading}>Frequently Asked Questions</h2>
                    <div className={styles.accordion}>
                        {homeFaqData.map((faq, index) => (
                            <div key={index} className={styles.accordionItem}>
                                <button
                                    className={`${styles.accordionHeader} ${activeIndex === index ? styles.active : ""}`}
                                    onClick={() => toggleAccordion(index)}
                                >
                                    {faq.question}
                                    <span className={styles.icon}>{activeIndex === index ? "−" : "+"}</span>
                                </button>
                                <div
                                    className={`${styles.accordionContent} ${activeIndex === index ? styles.open : ""
                                        }`}
                                >
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Form Section */}
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
                            <textarea name="message" rows="4" placeholder=" " value={formData.message} onChange={handleChange} ></textarea>
                            <label>Message</label>
                        </div>

                        <button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </button>

                        {status.message && (
                            <p className={`${styles.statusMessage} ${status.type === "success" ? styles.success : styles.error}`}>
                                {status.message}
                            </p>
                        )}
                    </form>
                    {/* {status && <p className={styles.status}>{status}</p>} */}
                </div>

            </div>
        </section>
    );
}
