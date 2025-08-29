"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./DownloadAppSection.module.css";
import Image from "next/image";

const DownloadAppSection = () => {

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setStatus("Sending...");
    setError("");
    setSuccess("");
    setLoading(true);

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      const res = await fetch("/api/send-app-link", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong");
      } else {
        setSuccess(data.success);
        setEmail("");
      }
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.waveTop}>
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--color-secondary)" />
              <stop offset="75%" stopColor="var(--color-primary)" />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradient)"
            fillOpacity="1"
            d="M0,64L80,96C160,128,320,192,480,192C640,192,800,128,960,96C1120,64,1280,64,1360,64L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          />
        </svg>
      </div>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2 className={styles.heading}>Download Our Mobile Application</h2>
          <p className={styles.subheading}>
            Manage your investments on the go, track your portfolio, and stay up to date — all from your phone.
          </p>
          <p className={styles.subheading}>
            Get the link to download the App.
          </p>
          <form onSubmit={handleSubmit} className={styles.inputWrapper}>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.mobileInput}
            />
            <button type="submit" className={styles.sendButton}>
              Get App Link
            </button>
          </form>
          {loading && <p className={styles.sendingMsg}>Sending...</p>}
          {error && <p className={styles.errorMsg}>{error}</p>}
          {success && <p className={styles.successMsg}>{success}</p>}

          <div className={styles.buttons}>
            <a
              href="https://apps.apple.com/us/app/my-wealth/id1116107323"
              className={styles.storeButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/images/DownloadApp/apple.png"
                alt="App Store"
                width={155}
                height={50}
              />
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=mobi.mywealth"
              className={styles.storeButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/images/DownloadApp/play.png"
                alt="Google Play"
                width={169}
                height={50}
              />
            </a>
          </div>

          {/* <div className={styles.buttons}>
            <Link href="https://apps.apple.com/us/app/my-wealth/id1116107323" className={styles.storeButton}>
              <Image
                src="/assets/images/DownloadApp/apple.png"
                alt="Google Play"
                width={155}
                height={50}
              />
            </Link>
            <Link href="https://play.google.com/store/apps/details?id=mobi.mywealth" className={styles.storeButton}>
              <Image
                src="/assets/images/DownloadApp/play.png"
                alt="App Store"
                width={169}
                height={50}
              />
            </Link>
          </div> */}

        </div>

        <div className={styles.right}>
          <div className={styles.mockupWrapper}>
            <Image
              src="/assets/images/DownloadApp/app.png"
              alt="App Mockup Left"
              height={280}
              width={400}
              className={styles.mockupLeft}
              priority
            />
            <Image
              src="/assets/images/DownloadApp/app2.png"
              alt="App Mockup Right"
              height={280}
              width={400}
              className={styles.mockupRight}
              priority
            />
          </div>
        </div>
      </div>
      <div className={styles.waveBottom}>
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--color-secondary)" />
              <stop offset="90%" stopColor="var(--color-primary)" />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradient2)"
            fillOpacity="1"
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,160C672,171,768,213,864,224C960,235,1056,213,1152,192C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default DownloadAppSection;
