"use client";

import { useEffect } from "react";

export default function GoogleReviews() {
  useEffect(() => {
    // Load Elfsight script manually if it isn't already loaded
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="elfsight-app-2b5c9c27-d7d7-4599-a688-a2ce9975f624" data-elfsight-app-lazy></div>
  );
}
