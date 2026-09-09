"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { getImageProps } from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import styles from "./SifPosterModal.module.css";

const SIF_PATH = "/services/specialized-investment-funds";
const SESSION_KEY = "ideas2invest-sif-poster-seen-v1";

function trackPosterEvent(action) {
  if (typeof window.gtag === "function") {
    window.gtag("event", `sif_poster_${action}`, {
      event_category: "SIF promotion",
      page_path: window.location.pathname,
    });
  }
}

export default function SifPosterModal() {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const previousFocusRef = useRef(null);

  const closeModal = useCallback((reason = "close") => {
    setIsOpen(false);
    trackPosterEvent(reason);
  }, []);

  useEffect(() => {
    if (window.location.pathname === SIF_PATH) return undefined;

    try {
      if (window.sessionStorage.getItem(SESSION_KEY)) return undefined;
    } catch {
      // The poster can still work when browser storage is unavailable.
    }

    const timer = window.setTimeout(() => {
      try {
        window.sessionStorage.setItem(SESSION_KEY, "shown");
      } catch {
        // Storage can be blocked in privacy modes.
      }
      previousFocusRef.current = document.activeElement;
      setIsOpen(true);
      trackPosterEvent("view");
    }, 900);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeModal("escape");
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previousFocusRef.current?.focus?.();
    };
  }, [closeModal, isOpen]);

  if (!isOpen) return null;

  const commonImageProps = {
    alt: "Explore Specialized Investment Funds with Ideas2Invest",
    quality: 85,
    priority: true,
  };
  const {
    props: { srcSet: desktopSrcSet, ...desktopProps },
  } = getImageProps({
    ...commonImageProps,
    src: "/assets/images/poster/Desktop Poster.png",
    width: 1672,
    height: 941,
    sizes: "(min-width: 641px) min(92vw, 1050px)",
  });
  const {
    props: { srcSet: mobileSrcSet },
  } = getImageProps({
    ...commonImageProps,
    src: "/assets/images/poster/Mobile Poster.png",
    width: 1122,
    height: 1402,
    sizes: "(max-width: 640px) calc(100vw - 32px)",
  });

  return (
    <div
      className={styles.overlay}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) closeModal("backdrop_close");
      }}
    >
      <div
        ref={dialogRef}
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-label="New Specialized Investment Fund announcement"
      >
        <button
          ref={closeButtonRef}
          type="button"
          className={styles.closeButton}
          onClick={() => closeModal("button_close")}
          aria-label="Close SIF announcement"
        >
          <X aria-hidden="true" size={22} strokeWidth={2.5} />
        </button>

        <Link
          href={SIF_PATH}
          className={styles.posterLink}
          aria-label="Learn more about Specialized Investment Funds"
          onClick={() => trackPosterEvent("click")}
        >
          <picture>
            <source media="(max-width: 640px)" srcSet={mobileSrcSet} />
            <img
              {...desktopProps}
              srcSet={desktopSrcSet}
              className={styles.poster}
            />
          </picture>
        </Link>
      </div>
    </div>
  );
}
