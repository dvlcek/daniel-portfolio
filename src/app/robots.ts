import type { MetadataRoute } from "next";

const baseUrl = "https://danielvlcek.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/about", "/services", "/work", "/contact", "/insights"],
      disallow: ["/cv", "/skills", "/portfolio", "/audit"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
