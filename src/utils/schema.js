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

export function createBreadcrumbSchema(items) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: stripMarkup(item.name),
      item: absoluteUrl(item.url),
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
      "Specialized Investment Funds",
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

function getBlogCategories(blog) {
  return Array.isArray(blog?.category) ? blog.category.filter(Boolean) : [];
}

function getBlogTags(blog) {
  return Array.isArray(blog?.tags) ? blog.tags.filter(Boolean) : [];
}

function getBlogTextBlocks(blog) {
  return Array.isArray(blog?.content)
    ? blog.content
        .flatMap((block) => [
          block.text,
          block.question,
          block.answer,
          block.description,
          ...(Array.isArray(block.data?.rows) ? block.data.rows.flat() : []),
        ])
        .filter(Boolean)
        .map(stripMarkup)
    : [];
}

function getBlogWordCount(blog) {
  const text = getBlogTextBlocks(blog).join(" ");
  return text ? text.split(/\s+/).filter(Boolean).length : undefined;
}

function getBlogFaqItems(blog) {
  if (!Array.isArray(blog?.content)) return [];

  return blog.content
    .filter((block) => block.type === "faq" && block.question && block.answer)
    .map((block) => ({
      question: block.question,
      answer: block.answer,
    }));
}

export function createArticleSchema(blog) {
  const datePublished = parseBlogDate(blog.date);
  const categories = getBlogCategories(blog);
  const tags = getBlogTags(blog);
  const wordCount = getBlogWordCount(blog);
  const schema = {
    "@type": "BlogPosting",
    "@id": `${SITE_URL}/blogs/${blog.slug}#article`,
    url: `${SITE_URL}/blogs/${blog.slug}`,
    headline: blog.title,
    description: stripMarkup(blog.description),
    image: absoluteUrl(blog.poster),
    inLanguage: "en-IN",
    isAccessibleForFree: true,
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
    articleSection: categories[0],
    keywords: [...categories, ...tags].join(", "),
    about: categories.map((category) => ({
      "@type": "Thing",
      name: category,
    })),
  };

  if (datePublished) {
    schema.datePublished = datePublished;
    schema.dateModified = datePublished;
  }

  if (wordCount) {
    schema.wordCount = wordCount;
  }

  return schema;
}

export function createBlogWebPageSchema(blog) {
  return {
    "@type": "WebPage",
    "@id": `${SITE_URL}/blogs/${blog.slug}`,
    url: `${SITE_URL}/blogs/${blog.slug}`,
    name: blog.title,
    description: stripMarkup(blog.description),
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "Ideas2Invest",
      url: SITE_URL,
    },
    primaryImageOfPage: absoluteUrl(blog.poster)
      ? {
          "@type": "ImageObject",
          url: absoluteUrl(blog.poster),
        }
      : undefined,
    breadcrumb: {
      "@id": `${SITE_URL}/blogs/${blog.slug}#breadcrumb`,
    },
    mainEntity: {
      "@id": `${SITE_URL}/blogs/${blog.slug}#article`,
    },
  };
}

export function createBlogBreadcrumbSchema(blog) {
  return {
    ...createBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Blogs", url: "/blogs" },
      { name: blog.title, url: `/blogs/${blog.slug}` },
    ]),
    "@id": `${SITE_URL}/blogs/${blog.slug}#breadcrumb`,
  };
}

export function createBlogFaqSchema(blog) {
  const faqItems = getBlogFaqItems(blog);
  if (!faqItems.length) return null;

  return {
    ...createFaqSchema(faqItems),
    "@id": `${SITE_URL}/blogs/${blog.slug}#faq`,
  };
}

export function createBlogSchemaGraph(blog) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      createBlogWebPageSchema(blog),
      createBlogBreadcrumbSchema(blog),
      createArticleSchema(blog),
      createBlogFaqSchema(blog),
    ].filter(Boolean),
  };
}

export function createBlogListingSchema(blogItems) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/blogs`,
        url: `${SITE_URL}/blogs`,
        name: "Ideas2Invest Blog",
        description:
          "Investment planning, mutual fund, SIP, PMS, AIF, insurance, and wealth education articles from Ideas2Invest.",
        isPartOf: {
          "@type": "WebSite",
          "@id": `${SITE_URL}/#website`,
          name: "Ideas2Invest",
          url: SITE_URL,
        },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: blogItems.map((blog, index) => ({
            "@type": "ListItem",
            position: index + 1,
            url: `${SITE_URL}/blogs/${blog.slug}`,
            name: blog.title,
          })),
        },
      },
      createBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Blogs", url: "/blogs" },
      ]),
    ],
  };
}
