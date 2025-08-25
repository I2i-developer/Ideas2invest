const breadcrumbStripData = {
  about: {
    title: "About Us",
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
    ],
  },
  contact: {
    title: "Contact",
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Contact", href: "/contact" },
    ],
  },
  services: {
    title: "Our Services",
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
    ],
  },
  "services/mutual-funds": {
    title: "Mutual Funds",
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Mutual Funds", href: "/services/mutual-funds" },
    ],
  },
  calculators: {
    title: "All Calculators",
    breadcrumb: [
      { label: "Home", href: "/"},
      { label: "All Calculators", href: "/calculators"},
    ],
  },
  "calculators/sip": {
    title: "SIP Calculator",
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Calculators", href: "/calculators" },
      { label: "SIP Calculator", href: "/calculators/sip" },
    ],
  },
};

export default breadcrumbStripData;
