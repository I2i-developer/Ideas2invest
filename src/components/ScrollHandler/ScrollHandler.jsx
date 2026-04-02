"use client";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const ScrollToHash = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

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
  }, [pathname, searchParams]);

  return null;
};

export default ScrollToHash;