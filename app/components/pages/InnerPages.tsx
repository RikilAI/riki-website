import { copy } from "../../content/site";
import { Lang, pagePath, PHONE_DISPLAY, EMAIL, WHATSAPP, LINKEDIN } from "../../lib/site";
import { profilePageJsonLd } from "../../lib/seo";
import { Shell, PageHead, SectionHead, Bullets, ProjectCards, Testimonials, ContactBlock, CtaBand, T } from "../site/ui";
import Reveal from "../site/Reveal";

const arrow = (lang: Lang) => (lang === "he" ? "←" : "→");

export function StrategyPage({ lang }: { lang: Lang }) {
  const c = copy[lang];
  const s = c.strategy;
  return (
    <Shell lang={lang} page="strategy">
      <PageHead lang={lang} label={s.label} h1={s.h1} lead={s.lead} />
      <section className="section">
        <div className="wrap">
          <Reveal><SectionHead lang={lang} heading={s.whatLabel} /><Bullets lang={lang} items={s.what} /></Reveal>
        </div>
      </section>
      <section className="section border-top">
        <div className="wrap">
          <Reveal><SectionHead lang={lang} heading={s.howLabel} /></Reveal>
          <div className="grid grid-3">
            {s.how.map((h) => (
              <article key={h.title} className="card"><T lang={lang} as="h3" className="h3">{h.title}</T><p>{h.desc}</p></article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-alt" id="research">
        <div className="wrap">
          <Reveal>
            <SectionHead lang={lang} heading={s.researchLabel} />
            <p className="lead" style={{ marginBottom: 28 }}>{s.researchText}</p>
          </Reveal>
          <h3 className="label">{s.projectsLabel}</h3>
          <ProjectCards lang={lang} items={s.projects} />
        </div>
      </section>
      <section className="section"><div className="wrap"><CtaBand lang={lang} text={s.cta} /></div></section>
    </Shell>
  );
}

export function EducationPage({ lang }: { lang: Lang }) {
  const c = copy[lang];
  const s = c.education;
  return (
    <Shell lang={lang} page="education">
      <PageHead lang={lang} label={s.label} h1={s.h1} lead={s.lead} />
      <section className="section">
        <div className="wrap">
          <Reveal><SectionHead lang={lang} heading={s.whatLabel} /><Bullets lang={lang} items={s.what} /></Reveal>
        </div>
      </section>
      <section className="section border-top">
        <div className="wrap">
          <Reveal><SectionHead lang={lang} heading={s.programsLabel} /></Reveal>
          <div className="grid grid-3">
            {s.programs.map((p) => (
              <article key={p.title} className="card">
                <h3 className="h3" lang={lang === "he" ? "en" : undefined} dir="ltr" style={{ textAlign: lang === "he" ? "right" : "left" }}>{p.title}</h3>
                <p>{p.desc}</p>
                {p.href && (
                  <a href={p.href} target="_blank" rel="noopener noreferrer" className="foot" style={{ textDecoration: "underline", textUnderlineOffset: 4 }}>
                    {p.cta}<span className="sr-only"> {p.title} {c.newWindow}</span>
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-alt">
        <div className="wrap">
          <Reveal><SectionHead lang={lang} heading={s.projectsLabel} /></Reveal>
          <ProjectCards lang={lang} items={s.projects} />
          <a href={pagePath(lang, "talks")} className="link-arrow" style={{ marginTop: 24 }}>{s.talksLink} <span aria-hidden="true">&nbsp;{arrow(lang)}</span></a>
        </div>
      </section>
      <section className="section"><div className="wrap"><CtaBand lang={lang} text={c.contact.sub} /></div></section>
    </Shell>
  );
}

export function InnovationPage({ lang }: { lang: Lang }) {
  const c = copy[lang];
  const s = c.innovation;
  const vistar = c.testimonials.items.find((q) => q.org.includes("VISTAR"));
  return (
    <Shell lang={lang} page="innovation">
      <PageHead lang={lang} label={s.label} h1={s.h1} lead={s.lead} />
      <section className="section">
        <div className="wrap">
          <Reveal><SectionHead lang={lang} heading={s.whatLabel} /><Bullets lang={lang} items={s.what} /></Reveal>
        </div>
      </section>
      <section className="section border-top">
        <div className="wrap-narrow" style={{ marginInline: "auto" }}>
          <Reveal>
            <h2 className="h2" lang={lang === "he" ? undefined : "en"}>{s.hitLabel}</h2>
            <p className="lead">{s.hitText}</p>
          </Reveal>
        </div>
      </section>
      <section className="section section-alt">
        <div className="wrap">
          <Reveal><SectionHead lang={lang} heading={s.projectsLabel} /></Reveal>
          <ProjectCards lang={lang} items={s.projects} />
          {vistar && (
            <blockquote className="quote" lang="en" dir="ltr" style={{ textAlign: "left", marginTop: 32, border: "1px solid var(--line-2)" }}>
              <p>{vistar.text}</p>
              <footer lang={lang} dir={lang === "he" ? "rtl" : "ltr"} style={{ textAlign: lang === "he" ? "right" : "left" }}>
                <div className="who">{vistar.role}</div><div className="org">{vistar.org}</div>
              </footer>
            </blockquote>
          )}
        </div>
      </section>
      <section className="section"><div className="wrap"><CtaBand lang={lang} text={c.contact.sub} /></div></section>
    </Shell>
  );
}

export function ProjectsPage({ lang }: { lang: Lang }) {
  const c = copy[lang];
  const s = c.projects;
  return (
    <Shell lang={lang} page="projects">
      <PageHead lang={lang} label={s.label} h1={s.h1} lead={s.lead} />
      <section className="section">
        <div className="wrap">
          {s.groups.map((g) => (
            <div key={g.title} className="proj-group">
              <h2>{g.title}</h2>
              <ProjectCards lang={lang} items={g.items} />
            </div>
          ))}
        </div>
      </section>
      <Testimonials lang={lang} />
      <section className="section"><div className="wrap"><CtaBand lang={lang} text={c.contact.sub} /></div></section>
    </Shell>
  );
}

export function TalksPage({ lang }: { lang: Lang }) {
  const c = copy[lang];
  const s = c.talks;
  return (
    <Shell lang={lang} page="talks">
      <PageHead lang={lang} label={s.label} h1={s.h1} lead={s.lead} />
      <section className="section" aria-labelledby="lectures-h">
        <div className="wrap">
          <Reveal><h2 id="lectures-h" className="h2" style={{ marginBottom: 32 }}>{s.lecturesHeading}</h2></Reveal>
          <div className="grid grid-3">
            {s.lectures.map((l) => (
              <article key={l.title} className="card">
                <div className="title-row">
                  <T lang={lang} as="h3" className="h3">{l.title}</T>
                  {l.isNew && <span className="badge-new">{s.newBadge}</span>}
                </div>
                <T lang={lang} as="p" className="sub">{l.en}</T>
                <p>{l.desc}</p>
                {l.formats && <div className="foot rule">{l.formats}</div>}
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section border-top" aria-labelledby="formats-h">
        <div className="wrap">
          <Reveal><h2 id="formats-h" className="h2" style={{ marginBottom: 32 }}>{s.formatsHeading}</h2></Reveal>
          <div className="grid grid-4">
            {s.formats.map((f) => (
              <article key={f.title} className="card">
                <T lang={lang} as="h3" className="h3">{f.title}</T>
                {lang === "he" && <p className="sub" lang="en" style={{ textTransform: "uppercase", letterSpacing: 1, fontSize: 11 }}>{f.en}</p>}
                <p>{f.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section" aria-labelledby="watch-h">
        <div className="wrap">
          <Reveal><h2 id="watch-h" className="h2" style={{ marginBottom: 24 }}>{s.watchHeading}</h2></Reveal>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, borderTop: "1px solid var(--line)" }}>
            {s.watch.map((w) => (
              <li key={w.href} className="watch-row">
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 16, fontWeight: 700, color: "#fff" }} lang="en"><bdi>{w.title}</bdi></div>
                  <div className="muted" style={{ fontSize: 14, marginTop: 2 }}>{w.desc}</div>
                </div>
                <a href={w.href} target="_blank" rel="noopener noreferrer" className="link-arrow">{w.cta}<span className="sr-only"> {w.title} {c.newWindow}</span></a>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Testimonials lang={lang} />
      <ContactBlock lang={lang} />
    </Shell>
  );
}

export function AboutPage({ lang }: { lang: Lang }) {
  const c = copy[lang];
  const s = c.about;
  return (
    <Shell lang={lang} page="about">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd(lang)) }} />
      <div className="page-head">
        <div className="wrap">
          <div className="label">{s.label}</div>
          <h1 className="h1-page">{s.h1}</h1>
        </div>
      </div>
      <section className="section">
        <div className="wrap about-grid">
          <img src="/images/opt/riki-portrait.jpg" alt={s.portraitAlt} width={600} height={600} className="portrait" loading="lazy" decoding="async" />
          <div>
            {s.paragraphs.map((p, i) => <p key={i} className="body" style={{ fontSize: i === 0 ? 18 : 16, color: i === 0 ? "#fff" : undefined }}>{p}</p>)}
          </div>
        </div>
      </section>
      <section className="section border-top">
        <div className="wrap">
          <h2 className="label" style={{ fontWeight: 400 }}>{s.areasLabel}</h2>
          <div className="grid grid-4">
            {c.home.pillars.map((p) => (
              <a key={p.title} href={pagePath(lang, p.href!)} className="card card-link">
                <T lang={lang} as="h3" className="h3">{p.title}</T>
                <p>{p.desc}</p>
              </a>
            ))}
          </div>
          <a href={pagePath(lang, "talks")} className="link-arrow" style={{ marginTop: 20 }}>{c.talks.h1} <span aria-hidden="true">&nbsp;{arrow(lang)}</span></a>
        </div>
      </section>
      <ContactBlock lang={lang} />
    </Shell>
  );
}

export function ContactPage({ lang }: { lang: Lang }) {
  const c = copy[lang];
  return (
    <Shell lang={lang} page="contact">
      <div className="page-head">
        <div className="wrap">
          <div className="label">{c.contact.label}</div>
          <h1 className="h1-page">{c.contact.h1}</h1>
          <p className="lead">{c.contact.sub}</p>
        </div>
      </div>
      <section className="section">
        <div className="wrap">
          <ul className="list">
            <li><strong lang="en">WhatsApp</strong> · <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">{c.contact.whatsapp}<span className="sr-only"> {c.newWindow}</span></a></li>
            <li><strong>{c.contact.phoneLabel}</strong> · <a href="tel:+972528806346" dir="ltr">{PHONE_DISPLAY}</a></li>
            <li><strong lang="en">Email</strong> · <a href={`mailto:${EMAIL}`} dir="ltr" lang="en">{EMAIL}</a></li>
            <li><strong lang="en">LinkedIn</strong> · <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" lang="en">Riki Levisman<span className="sr-only"> {c.newWindow}</span></a></li>
          </ul>
        </div>
      </section>
    </Shell>
  );
}
