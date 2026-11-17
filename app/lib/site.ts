export type Lang = "he" | "en";

export const SITE_URL = "https://rikilevisman.com";
export const WHATSAPP = "https://wa.me/972528806346";
export const LINKEDIN = "https://www.linkedin.com/in/riki-levisman-7b8b6611/";
export const EMAIL = "Riki4ai@gmail.com";
export const PHONE_DISPLAY = "052-880-6346";
export const PHONE_INTL = "+972528806346";
/** Date the site content last changed in a meaningful way. Update when content changes. */
export const CONTENT_UPDATED = "2026-11-17";

export const PAGES = {
  home: "",
  strategy: "strategy",
  education: "education",
  innovation: "innovation-programs",
  projects: "projects",
  talks: "talks",
  about: "about",
  contact: "contact",
} as const;

export type PageKey = keyof typeof PAGES;
export const PAGE_KEYS = Object.keys(PAGES) as PageKey[];

/** Site-relative path of a page in a language. Hebrew lives at the root, English under /en. */
export function pagePath(lang: Lang, key: PageKey): string {
  const slug = PAGES[key];
  if (lang === "he") return slug ? `/${slug}` : "/";
  return slug ? `/en/${slug}` : "/en";
}

export const absUrl = (p: string) => (p === "/" ? SITE_URL : SITE_URL + p);

/** True when a string has no Hebrew letters, so it should be marked lang="en" inside a Hebrew page. */
export const isLatin = (s: string) => !/[֐-׿]/.test(s);
