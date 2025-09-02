// import Link from "next/link";
// import styles from "./LegalLayout.module.css";

// const LegalSidebar = () => {
//   const links = [
//     { name: "Privacy Policy", path: "/legal/privacy-policy" },
//     { name: "Disclaimer", path: "/legal/disclaimer" },
//     { name: "Terms & Conditions", path: "/legal/terms-conditions" },
//     { name: "SID/SAI/KIM", path: "https://www.sebi.gov.in/filings/mutual-funds.html" },
//     { name: "Code of Conduct", path: "/legal/code-of-conduct" },
//     { name: "Investor Grievance Redressal", path: "/legal/investor-grievance" },
//   ];

//   return (
//     <ul className={styles.sidebarList}>
//       {links.map((link, i) => (
//         <li key={i}>
//           <Link href={link.path}>{link.name}</Link>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default LegalSidebar;


"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./LegalLayout.module.css";

const LegalSidebar = () => {
  const pathname = usePathname();

  const links = [
    { name: "Privacy Policy", path: "/legal/privacy-policy" },
    { name: "Disclaimer", path: "/legal/disclaimer" },
    { name: "Terms & Conditions", path: "/legal/terms-conditions" },
    { name: "SID/SAI/KIM", path: "https://www.sebi.gov.in/filings/mutual-funds.html" },
    { name: "Code of Conduct", path: "/legal/code-of-conduct" },
    { name: "Investor Grievance Redressal", path: "/legal/investor-grievance" },
  ];

  return (
    <ul className={styles.sidebarList}>
      {links.map((link, i) => {
        const isActive = pathname === link.path;
        return (
          <li key={i}>
            <Link
              href={link.path}
              className={isActive ? styles.active : ""}
              aria-current={isActive ? "page" : undefined}
            >
              {link.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default LegalSidebar;
