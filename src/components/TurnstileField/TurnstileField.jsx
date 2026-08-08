"use client";

import { useEffect, useRef } from "react";

const SCRIPT_ID = "cloudflare-turnstile-script";

function ensureTurnstileScript() {
  if (typeof window === "undefined") return Promise.resolve(false);
  if (window.turnstile) return Promise.resolve(true);

  return new Promise((resolve) => {
    const existing = document.getElementById(SCRIPT_ID);
    if (existing) {
      existing.addEventListener("load", () => resolve(true), { once: true });
      existing.addEventListener("error", () => resolve(false), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.head.appendChild(script);
  });
}

export default function TurnstileField({ siteKey, onVerify }) {
  const containerRef = useRef(null);
  const widgetRef = useRef(null);

  useEffect(() => {
    let mounted = true;

    async function renderWidget() {
      if (!siteKey || !containerRef.current) return;
      const loaded = await ensureTurnstileScript();
      if (!mounted || !loaded || !window.turnstile || widgetRef.current !== null) return;

      widgetRef.current = window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        callback: (token) => onVerify(token || ""),
        "expired-callback": () => onVerify(""),
        "error-callback": () => onVerify(""),
      });
    }

    renderWidget();

    return () => {
      mounted = false;
      if (window.turnstile && widgetRef.current !== null) {
        window.turnstile.remove(widgetRef.current);
        widgetRef.current = null;
      }
    };
  }, [siteKey, onVerify]);

  if (!siteKey) return null;

  return <div ref={containerRef} />;
}
