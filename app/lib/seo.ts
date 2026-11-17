import type { Metadata } from "next";
import { copy } from "../content/site";
import { Lang, PageKey, SITE_URL, absUrl, pagePath, LINKEDIN, EMAIL, PHONE_INTL, CONTENT_UPDATED } from "./site";

const OG_IMAGE = { url: "/images/opt/og-image.jpg", width: 1200, height: 630 };

export function pageMetadata(lang: Lang, key: PageKey): Metadata {
  const m = copy[lang].meta[key];
  const he = pagePath("he", key);
  const en = pagePath("en", key);
  const self = lang === "he" ? he : en;
  const alt = lang === "he" ? "ריקי לויסמן" : "Riki Levisman";
  return {
    metadataBase: new URL(SITE_URL),
    title: m.title,
    description: m.description,
    alternates: {
      canonical: self,
      languages: { he, en, "x-default": he },
    },
    openGraph: {
      type: key === "about" ? "profile" : "website",
      locale: lang === "he" ? "he_IL" : "en_US",
      alternateLocale: lang === "he" ? ["en_US"] : ["he_IL"],
      url: self,
      siteName: alt,
      title: m.title,
      description: m.description,
      images: [{ ...OG_IMAGE, alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: m.title,
      description: m.description,
      images: [OG_IMAGE.url],
    },
    robots: { index: true, follow: true },
  };
}

/** Site-wide structured data. Only facts that are visible on the site. */
export function siteJsonLd(lang: Lang) {
  const c = copy[lang];
  const person = `${SITE_URL}/#person`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Riki Levisman",
        alternateName: "ריקי לויסמן",
        inLanguage: ["he", "en"],
        publisher: { "@id": person },
      },
      {
        "@type": "Person",
        "@id": person,
        name: "Riki Levisman",
        alternateName: ["ריקי לויסמן"],
        url: SITE_URL,
        image: `${SITE_URL}/images/opt/riki-portrait.jpg`,
        jobTitle: ["AI & Innovation Leader", "Strategic AI Consultant", "Lecturer & Keynote Speaker", "Innovation and Program Developer"],
        description: c.meta.home.description,
        worksFor: {
          "@type": "Organization",
          name: "FUTURE, Entrepreneurship and Innovation Center, Holon Institute of Technology (HIT)",
          url: "https://future.hit.ac.il/",
          parentOrganization: { "@type": "CollegeOrUniversity", name: "Holon Institute of Technology (HIT)", url: "https://www.hit.ac.il/" },
        },
        knowsAbout: [
          "AI strategy", "Organizational AI adoption", "Innovation strategy", "Generative AI", "AI education",
          "AI literacy", "Future of work", "Entrepreneurship programs", "Hackathons", "AI agents", "Physical AI",
          "Knowledge management",
        ],
        knowsLanguage: ["he", "en"],
        email: EMAIL,
        telephone: PHONE_INTL,
        sameAs: [
          LINKEDIN,
          "https://www.hit.ac.il/staff/108870-%D7%A8%D7%99%D7%A7%D7%99-%D7%9C%D7%95%D7%99%D7%A1%D7%9E%D7%9F/",
        ],
        subjectOf: [
          { "@type": "VideoObject", name: "The Agentic Shift", url: "https://youtu.be/g0QR738db68" },
          { "@type": "VideoObject", name: "AI4RI", url: "https://youtu.be/KjIk9ayPgPo" },
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#service`,
        name: lang === "he" ? "ריקי לויסמן | AI וחדשנות" : "Riki Levisman | AI & Innovation",
        url: SITE_URL,
        provider: { "@id": person },
        areaServed: "IL",
        availableLanguage: ["he", "en"],
        telephone: PHONE_INTL,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: lang === "he" ? "תחומים" : "Services",
          itemListElement: [
            ...c.home.pillars.map((p) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: p.title, description: p.desc, url: absUrl(pagePath(lang, p.href!)) },
            })),
            {
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: c.talks.h1, description: c.home.talksText, url: absUrl(pagePath(lang, "talks")) },
            },
          ],
        },
      },
    ],
  };
}

export function profilePageJsonLd(lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: absUrl(pagePath(lang, "about")),
    inLanguage: lang,
    dateModified: CONTENT_UPDATED,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    mainEntity: { "@id": `${SITE_URL}/#person` },
  };
}
