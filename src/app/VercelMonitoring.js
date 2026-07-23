"use client";

import { useEffect, useState } from "react";

export default function VercelMonitoring() {
  const [widgets, setWidgets] = useState(null);

  useEffect(() => {
    let mounted = true;

    Promise.all([
      import("@vercel/analytics/next"),
      import("@vercel/speed-insights/next"),
    ]).then(([analyticsModule, speedInsightsModule]) => {
      if (!mounted) return;
      setWidgets({
        Analytics: analyticsModule.Analytics,
        SpeedInsights: speedInsightsModule.SpeedInsights,
      });
    }).catch(() => {
      // Monitoring must never block page rendering.
    });

    return () => {
      mounted = false;
    };
  }, []);

  if (!widgets) return null;

  const { Analytics, SpeedInsights } = widgets;
  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
