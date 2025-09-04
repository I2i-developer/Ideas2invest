"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./MainCalculator.module.css";
export default function CalculatorSidebar() {
  const pathname = usePathname();

  const links = [
    { href: "/calculators/sip", label: "SIP Calculator" },
    { href: "/calculators/lumpsum", label: "Lumpsum Calculator" },
    { href: "/calculators/inflation", label: "Inflation Calculator" },
    { href: "/calculators/dream-retirement", label: "Dream Retirement Calculator" },
    { href: "/calculators/grand-wedding", label: "Grand Wedding Calculator" },
    { href: "/calculators/dream-vacation", label: "Dream Vacation Calculator" },
    { href: "/calculators/child-education", label: "Child Education Calculator" },
    { href: "/calculators/sip-topup", label: "SIP Topup Calculator" },
    { href: "/calculators/limited-sip", label: "Limited Period SIP Calculator" },
    { href: "/calculators/life-insurance-need", label: "Life Insurance Need Calculator" },
    { href: "/calculators/home-loan-vs-sip", label: "Home Loan vs SIP Calculator" },
    { href: "/calculators/emi", label: "EMI Calculator" },
    { href: "/calculators/dream-car", label: "Dream Car Calculator" },
    { href: "/calculators/cost-of-delay", label: "Cost of Delay Calculator" },
    { href: "/calculators/birthday-sip", label: "Birthday SIP Calculator" },
    { href: "/calculators/swp", label: "SWP Calculator" },
  ];

  return (
    <div className={styles.calcCards}>
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`${styles.calcCardsLink} ${
            pathname === href ? styles.active : ""
          }`}
        >
          <div className={styles.card}>{label}</div>
        </Link>
      ))}
    </div>
  );
}
