export const SITE_URL = "https://www.ideas2invest.com";

export function absoluteUrl(path) {
  if (!path) return undefined;
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function stripMarkup(value = "") {
  return String(value)
    .replace(/\[tooltip:([^|\]]+)\|([^\]]+)\]/g, "$1")
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

export function createFaqSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: stripMarkup(item.question),
      acceptedAnswer: {
        "@type": "Answer",
        text: stripMarkup(item.answer),
      },
    })),
  };
}

export function createFinancialServiceSchema(footerData) {
  const company = footerData.company;
  const socialUrls = company.socialLinks
    .map((item) => item.url)
    .filter((url) =>
      [
        "https://www.facebook.com/ideas2investt/",
        "https://in.linkedin.com/company/ideas2invest",
        "https://www.instagram.com/ideas2invest/",
      ].includes(url)
    );

  return {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "@id": `${SITE_URL}/#financial-service`,
    name: "Ideas2Invest",
    url: SITE_URL,
    logo: absoluteUrl(company.logo),
    description:
      "Ideas2Invest is an AMFI Registered Mutual Fund Distributor, ARN-113588, providing mutual fund, SIP, insurance, wealth management, PMS, AIF, corporate fixed deposit, and foreign investment services.",
    telephone: [company.phone1, company.phone2],
    email: company.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "B 244, Block B, Naraina Industrial Area Phase-1, Naraina",
      addressLocality: "New Delhi",
      postalCode: "110028",
      addressCountry: "IN",
    },
    sameAs: socialUrls,
    serviceType: [
      "Mutual Funds",
      "Systematic Investment Plan",
      "Life Insurance",
      "Health Insurance",
      "General Insurance",
      "Portfolio Management Services",
      "Alternative Investment Funds",
      "Corporate Fixed Deposits",
      "Foreign Investment",
      "Financial Planning",
    ],
  };
}

export function createPersonSchemas(directors) {
  return {
    "@context": "https://schema.org",
    "@graph": directors.map((director) => ({
      "@type": "Person",
      "@id": `${SITE_URL}/about#${director.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`,
      name: director.name,
      jobTitle: director.title,
      image: absoluteUrl(director.image),
      email: director.socials.email?.replace(/^mailto:/, ""),
      worksFor: {
        "@id": `${SITE_URL}/#financial-service`,
      },
      sameAs: [director.socials.linkedin].filter(Boolean),
      description: stripMarkup(director.message),
    })),
  };
}

export function parseBlogDate(date) {
  const match = /^(\d{2})-(\d{2})-(\d{4})$/.exec(date || "");
  if (!match) return undefined;
  const [, day, month, year] = match;
  return `${year}-${month}-${day}`;
}

export function createArticleSchema(blog) {
  const datePublished = parseBlogDate(blog.date);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE_URL}/blogs/${blog.slug}#article`,
    headline: blog.title,
    description: stripMarkup(blog.description),
    image: absoluteUrl(blog.poster),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blogs/${blog.slug}`,
    },
    author: {
      "@type": "Organization",
      name: blog.author || "Ideas2Invest",
    },
    publisher: {
      "@type": "Organization",
      name: "Ideas2Invest",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/assets/images/logo/logo.png`,
      },
    },
  };

  if (datePublished) {
    schema.datePublished = datePublished;
  }

  return schema;
}
