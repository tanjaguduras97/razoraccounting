import type { MetadataRoute } from "next";

const SITE_URL = "https://razoraccounting.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/netlify-forms.html",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
