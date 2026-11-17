import { Heebo } from "next/font/google";
import { Lang } from "./site";
import { siteJsonLd } from "./seo";
import "../globals.css";
import "../site.css";

const heebo = Heebo({ variable: "--font-heebo", subsets: ["hebrew", "latin"], display: "swap" });

/** Shared <html> shell for both root layouts. Hebrew pages are rtl, English pages ltr. */
export default function RootDoc({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <html lang={lang} dir={lang === "he" ? "rtl" : "ltr"} className={heebo.variable} suppressHydrationWarning>
      <head>
        {/* Marks that JS runs, so the scroll fade-in applies only then; without JS all content is visible */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd(lang)) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
