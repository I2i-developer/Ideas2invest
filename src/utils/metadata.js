import fs from "fs";
import path from "path";

const SITE_URL = "https://www.ideas2invest.com";
const DEFAULT_OG_IMAGE = "/assets/images/og/og-default.png";
const FALLBACK_OG_IMAGE = "/assets/images/logo/logo.png";

function getOgImage(image) {
  if (image) return image;

  const defaultImagePath = path.join(
    process.cwd(),
    "public",
    DEFAULT_OG_IMAGE
  );

  return fs.existsSync(defaultImagePath) ? DEFAULT_OG_IMAGE : FALLBACK_OG_IMAGE;
}

function absoluteUrl(value) {
  if (!value) return undefined;
  if (/^https?:\/\//i.test(value)) return value;
  return `${SITE_URL}${value.startsWith("/") ? value : `/${value}`}`;
}

export function createPageMetadata(data, options = {}) {
  const canonical = data.canonical || absoluteUrl(options.pathname || "");
  const image = getOgImage(options.image);
  const title = data.title;
  const description = data.description;

  return {
    title,
    description,
    alternates: canonical
      ? {
          canonical,
        }
      : undefined,
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Ideas2Invest",
      type: options.type || "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: options.imageAlt || "Ideas2Invest",
        },
      ],
      ...options.openGraph,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      ...options.twitter,
    },
  };
}

export function createArticleMetadata(blog) {
  const dateMatch = /^(\d{2})-(\d{2})-(\d{4})$/.exec(blog?.date || "");
  const publishedTime = dateMatch
    ? `${dateMatch[3]}-${dateMatch[2]}-${dateMatch[1]}`
    : undefined;

  return createPageMetadata(
    {
      title: blog?.title || "Ideas2Invest Blog",
      description: blog?.description || "",
      canonical: `${SITE_URL}/blogs/${blog?.slug || ""}`,
    },
    {
      type: "article",
      image: blog?.poster,
      imageAlt: blog?.title || "Ideas2Invest Blog",
      openGraph: publishedTime
        ? {
            publishedTime,
          }
        : undefined,
    }
  );
}
