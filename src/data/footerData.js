import {
  FaFileAlt,
  FaPercentage,
  FaUserShield,
  FaFileContract,
  FaBook,
  FaBalanceScale,
  FaUsers,
} from "react-icons/fa";

export const footerData = {
  company: {
    logo: "/assets/images/logo/logo.png",
    description:
      "Ideas2Invest is your trusted partner for investments, insurance, and wealth management solutions. Our mission is to guide you towards financial freedom with expert advice and proven strategies.",
    address: "123 Finance Street, Mumbai, India",
    email: "contact@ideas2invest.com",
    phone: "+91 9876543210",
    socialLinks: [
      { icon: "FaFacebookF", url: "https://facebook.com" },
      { icon: "FaTwitter", url: "https://twitter.com" },
      { icon: "FaLinkedinIn", url: "https://linkedin.com" },
      { icon: "FaInstagram", url: "https://instagram.com" },
    ],
  },
  quickLinks: [
    { label: "Home", url: "/" },
    { label: "About Us", url: "/about" },
    { label: "Contact", url: "/contact" },
    { label: "Blog", url: "/blog" },
    { label: "FAQs", url: "/faqs" },
  ],
  services: [
    { label: "Mutual Funds", url: "/services/mutual-funds" },
    { label: "Life Insurance", url: "/services/life-insurance" },
    { label: "Health Insurance", url: "/services/health-insurance" },
    { label: "General Insurance", url: "/services/general-insurance" },
    { label: "PMS", url: "/services/pms" },
    { label: "AIF", url: "/services/aif" },
    { label: "Corporate FD", url: "/services/corporate-fd" },
    { label: "Dollar Investment", url: "/services/dollar-investment" },
  ],
  mutualFunds: [
    { label: "SIP with 100", url: "/mutual-funds/sip-100" },
    { label: "SIP with 500", url: "/mutual-funds/sip-500" },
    { label: "High Returns", url: "/mutual-funds/high-returns" },
    { label: "Index Funds", url: "/mutual-funds/index" },
  ],
  calculators: [
    { label: "SIP Calculator", url: "/calculators/sip" },
    { label: "Lumpsum Calculator", url: "/calculators/lumpsum" },
    { label: "Retirement Calculator", url: "/calculators/retirement" },
    { label: "Goal Calculator", url: "/calculators/goal" },
    { label: "EMI Calculator", url: "/calculators/emi" },
  ],
  policies: [
    { label: "Disclaimer", url: "/disclaimer", icon: "FaFileAlt" },
    { label: "Commission Disclosure", url: "/commission-disclosure", icon: "FaPercentage" },
    { label: "Privacy Policy", url: "/privacy-policy", icon: "FaUserShield" },
    { label: "Terms & Conditions", url: "/terms", icon: "FaFileContract" },
    { label: "SID/SAI/KIM", url: "/sid-sai-kim", icon: "FaBook" },
    { label: "Code of Conduct", url: "/code-of-conduct", icon: "FaBalanceScale" },
    { label: "Investor Grievance Redressal", url: "/investor-grievance", icon: "FaUsers" },
  ],
  amfi: {
    text: "AMFI Registered Mutual Fund Distributor",
    arn: "113588",
    registrationDate: "24/05/2021",
    validity: "23/05/2027",
  },
};
