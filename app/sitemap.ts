import type { MetadataRoute } from "next";
import { PAGE_KEYS, pagePath, absUrl, CONTENT_UPDATED } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(CONTENT_UPDATED);
  return PAGE_KEYS.flatMap((key) => {
    const languages = { he: absUrl(pagePath("he", key)), en: absUrl(pagePath("en", key)) };
    return (["he", "en"] as const).map((lang) => ({
      url: absUrl(pagePath(lang, key)),
      lastModified,
      alternates: { languages },
    }));
  });
}
