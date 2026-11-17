import { copy } from "../../content/site";
import { Lang, PageKey, pagePath, isLatin, WHATSAPP, LINKEDIN, EMAIL } from "../../lib/site";
import Header from "./Header";
import Reveal from "./Reveal";

type Project = { org: string; desc: string; type: string };

/** Text that marks itself lang="en" when it is Latin-only inside a Hebrew page. */
export function T({ lang, children, as: Tag = "span", className }: { lang: Lang; children: string; as?: "span" | "h2" | "h3" | "p" | "div"; className?: string }) {
  const en = lang === "he" && isLatin(children);
  return <Tag className={className} lang={en ? "en" : undefined} dir={en ? "ltr" : undefined}>{children}</Tag>;
}

export function Shell({ lang, page, overHero = false, children }: { lang: Lang; page: PageKey; overHero?: boolean; children: React.ReactNode }) {
  return (
    <>
      <a href="#main" className="skip-link">{copy[lang].skip}</a>
      <div className="grain" aria-hidden="true" />
      <Header lang={lang} page={page} overHero={overHero} />
      <main id="main" tabIndex={-1}>{children}</main>
      <Footer lang={lang} />
    </>
  );
}

export function Footer({ lang }: { lang: Lang }) {
  const c = copy[lang];
  const keys: PageKey[] = ["strategy", "education", "innovation", "projects", "talks", "about", "contact"];
  const label = (k: PageKey) => (k === "contact" ? c.contact.h1 : c.nav[k as keyof typeof c.nav]);
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <nav aria-label={lang === "he" ? "ניווט בתחתית" : "Footer"} className="footer-nav">
          {keys.map((k) => <a key={k} href={pagePath(lang, k)}>{label(k)}</a>)}
        </nav>
        <div className="footer-contact">
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer me" lang="en">LinkedIn<span className="sr-only"> {c.newWindow}</span></a>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" lang="en">WhatsApp<span className="sr-only"> {c.newWindow}</span></a>
          <a href={`mailto:${EMAIL}`} dir="ltr" lang="en">{EMAIL}</a>
        </div>
      </div>
      <p className="footer-copy">{c.footer.copy}</p>
    </footer>
  );
}

export function PageHead({ label, h1, lead, lang }: { label: string; h1: string; lead: string; lang: Lang }) {
  return (
    <div className="page-head">
      <div className="wrap">
        {label !== h1 && <T lang={lang} as="div" className="label">{label}</T>}
        <h1 className="h1-page">{h1}</h1>
        <p className="lead">{lead}</p>
      </div>
    </div>
  );
}

export function SectionHead({ label, heading, lang }: { label?: string; heading: string; lang: Lang }) {
  return (
    <div style={{ marginBottom: 32 }}>
      {label && <T lang={lang} as="div" className="label">{label}</T>}
      <T lang={lang} as="h2" className="h2">{heading}</T>
    </div>
  );
}

export function Bullets({ items, lang }: { items: string[]; lang: Lang }) {
  return <ul className="bullets">{items.map((i) => <li key={i}><T lang={lang}>{i}</T></li>)}</ul>;
}

export function ProjectCards({ items, lang }: { items: Project[]; lang: Lang }) {
  return (
    <div className="grid grid-3">
      {items.map((p) => (
        <article key={p.org} className="card">
          <T lang={lang} as="h3" className="proj-org">{p.org}</T>
          <p>{p.desc}</p>
          <div><span className="tag">{p.type}</span></div>
        </article>
      ))}
    </div>
  );
}

export function Testimonials({ lang }: { lang: Lang }) {
  const t = copy[lang].testimonials;
  return (
    <section className="section section-alt" aria-labelledby="testimonials-h">
      <div className="wrap">
        <h2 id="testimonials-h" className="label" style={{ marginBottom: 24 }}>{t.heading}</h2>
        <div className="testimonials">
          {t.items.map((q, i) => {
            const en = isLatin(q.text);
            return (
              <blockquote key={i} className="quote" lang={en && lang === "he" ? "en" : undefined} dir={en ? "ltr" : "rtl"} style={{ textAlign: en ? "left" : "right" }}>
                <div className="q" aria-hidden="true">&quot;</div>
                <p>{q.text}</p>
                <footer lang={lang}>
                  <div className="who">{q.role}</div>
                  <div className="org">{q.org}</div>
                </footer>
              </blockquote>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ContactBlock({ lang, headingLevel = "h2" }: { lang: Lang; headingLevel?: "h1" | "h2" }) {
  const c = copy[lang];
  const H = headingLevel;
  return (
    <section className="contact" aria-labelledby="contact-h">
      <div className="contact-bg" aria-hidden="true">PROMPT IT</div>
      <div style={{ position: "relative", zIndex: 1 }}>
        <Reveal>
          <div className="label">{c.contact.label}</div>
          <H id="contact-h" className="contact-title" lang="en">
            <span style={{ color: "#fff" }}>{c.contact.line1}</span><br />
            <span className="accent">{c.contact.line2}</span>
          </H>
          <p className="contact-sub">{c.contact.sub}</p>
          <div className="contact-btns">
            <a href={`mailto:${EMAIL}`} dir="ltr" className="c-mail" lang="en">{EMAIL}</a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="c-wa">{c.contact.whatsapp}<span className="sr-only"> {c.newWindow}</span></a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="c-li" lang="en">LinkedIn<span className="sr-only"> {c.newWindow}</span></a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function CtaBand({ lang, text }: { lang: Lang; text: string }) {
  const c = copy[lang];
  return (
    <div className="cta-band">
      <p>{text}</p>
      <a href={pagePath(lang, "contact")} className="btn btn-primary">{c.nav.cta}</a>
    </div>
  );
}
