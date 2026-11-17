"use client";
import { useEffect, useState } from "react";
import { copy } from "../../content/site";
import { Lang, PageKey, pagePath } from "../../lib/site";

const NAV: PageKey[] = ["strategy", "education", "innovation", "projects", "talks", "about"];

export default function Header({ lang, page, overHero = false }: { lang: Lang; page: PageKey; overHero?: boolean }) {
  const t = copy[lang].nav;
  const brand = copy[lang].brand;
  const other: Lang = lang === "he" ? "en" : "he";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = !overHero || scrolled || open;
  const cur = (k: PageKey) => (k === page ? ("page" as const) : undefined);

  return (
    <header className={`site-header${solid ? " solid" : ""}`}>
      <a href={pagePath(lang, "home")} className="brand" aria-current={cur("home")}>{brand}</a>

      <nav aria-label={lang === "he" ? "ניווט ראשי" : "Main"} className="nav-links">
        {NAV.map((k) => (
          <a key={k} href={pagePath(lang, k)} className="nav-link" aria-current={cur(k)}>{t[k as keyof typeof t]}</a>
        ))}
        <a href={pagePath(lang, "contact")} className="nav-cta" aria-current={cur("contact")}>{t.cta}</a>
      </nav>

      <div className="header-end">
        <a href={pagePath(other, page)} className="lang-switch" hrefLang={other} lang={other} aria-label={t.switchLabel}>{t.switchText}</a>
        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? t.close : t.menu}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      <nav id="mobile-menu" aria-label={lang === "he" ? "ניווט ראשי" : "Main"} className={`mobile-menu${open ? " open" : ""}`} hidden={!open}>
        {NAV.map((k) => (
          <a key={k} href={pagePath(lang, k)} aria-current={cur(k)} onClick={() => setOpen(false)}>{t[k as keyof typeof t]}</a>
        ))}
        <a href={pagePath(lang, "contact")} className="nav-cta" onClick={() => setOpen(false)}>{t.cta}</a>
      </nav>
    </header>
  );
}
