"use client";
import { useEffect } from "react";

const ScrollToHash = () => {
  useEffect(() => {
    const scrollToSection = () => {
      const hash = window.location.hash;
      if (!hash) return;

      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else {
        // Retry if element not found yet (important!)
        setTimeout(scrollToSection, 300);
      }
    };

    scrollToSection();

    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;
    const handleLocationChange = () => setTimeout(scrollToSection, 0);

    window.history.pushState = function pushState(...args) {
      const result = originalPushState.apply(this, args);
      window.dispatchEvent(new Event("locationchange"));
      return result;
    };

    window.history.replaceState = function replaceState(...args) {
      const result = originalReplaceState.apply(this, args);
      window.dispatchEvent(new Event("locationchange"));
      return result;
    };

    window.addEventListener("hashchange", handleLocationChange);
    window.addEventListener("popstate", handleLocationChange);
    window.addEventListener("locationchange", handleLocationChange);

    return () => {
      window.history.pushState = originalPushState;
      window.history.replaceState = originalReplaceState;
      window.removeEventListener("hashchange", handleLocationChange);
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("locationchange", handleLocationChange);
    };
  }, []);

  return null;
};

export default ScrollToHash;
