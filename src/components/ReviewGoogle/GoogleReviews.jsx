"use client";

import { useEffect } from "react";
import visibility from "@/config/siteFeatures.cjs";

export default function GoogleReviews() {
  useEffect(() => {
    if (!visibility.siteFeatures.externalReviews) return;
    // Load Elfsight script manually if it isn't already loaded
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);
    return () => script.remove();
  }, []);

  if (!visibility.siteFeatures.externalReviews) return null;

  return (
    <div className="elfsight-app-2b5c9c27-d7d7-4599-a688-a2ce9975f624" data-elfsight-app-lazy></div>
  );
}
