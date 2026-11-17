import { copy } from "../../content/site";
import { Lang, pagePath, WHATSAPP } from "../../lib/site";
import { Shell, T, Testimonials, ContactBlock, SectionHead } from "../site/ui";
import Reveal from "../site/Reveal";
import FilmStrip from "../site/FilmStrip";

export default function HomePage({ lang }: { lang: Lang }) {
  const c = copy[lang];
  const h = c.hero;
  const allProjects = c.projects.groups.flatMap((g) => g.items);
  return (
    <Shell lang={lang} page="home" overHero>
      {/* HERO */}
      <section className="hero-root" aria-labelledby="hero-name">
        <img
          src="/images/opt/hero-2400.webp"
          srcSet="/images/opt/hero-1200.webp 1200w, /images/opt/hero-2400.webp 2400w"
          sizes="100vw"
          alt={h.photoAlt}
          width={2400}
          height={758}
          className="hero-photo"
          fetchPriority="high"
        />
        <div className="hero-vignette" />
        <div className="hero-panel">
          <div className="hero-panel-bg" />
          <div className="hero-rule" />
          <div className="hero-content" dir="ltr">
            <div className="hero-tagline" lang="en">
              <p className="hero-tag-dim">{h.tagDim[0]}<br />{h.tagDim[1]}</p>
              <p className="hero-tag-warm">{h.tagWarm[0]}<br /><span className="accent">prompt</span> {h.tagWarm[1]}</p>
            </div>
            <div className="hero-sep" />
            <div className="hero-eyebrow" dir={lang === "he" ? "rtl" : "ltr"} style={{ textAlign: "left" }}>{h.eyebrow}</div>
            <h1 id="hero-name" className="hero-name">{h.name[0]}<br />{h.name[1]}</h1>
            <p className="hero-name-alt" lang={lang === "he" ? "en" : "he"}>{h.nameAlt}</p>
            <div className="hero-offer" dir={lang === "he" ? "rtl" : "ltr"} style={{ textAlign: "left" }}>
              <p>{h.line}</p>
            </div>
            <div className="hero-ctas">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn-primary">{h.ctaPrimary}<span className="sr-only"> (WhatsApp) {c.newWindow}</span></a>
              <a href={pagePath(lang, "talks")} className="btn btn-ghost">{h.ctaSecondary}</a>
            </div>
          </div>
        </div>
        <div className="hero-scroll" aria-hidden="true"><div className="hero-scroll-line" /></div>
      </section>

      {/* PILLARS */}
      <section className="section border-top" aria-labelledby="pillars-h">
        <div className="wrap">
          <Reveal>
            <div className="label">{c.home.pillarsLabel}</div>
            <h2 id="pillars-h" className="h2" style={{ marginBottom: 32 }}>{c.home.pillarsHeading}</h2>
          </Reveal>
          <div className="grid grid-4">
            {c.home.pillars.map((p, i) => (
              <a key={p.title} href={pagePath(lang, p.href!)} className="card card-link">
                <div className="card-num" aria-hidden="true">0{i + 1}</div>
                <T lang={lang} as="h3" className="h3">{p.title}</T>
                <p>{p.desc}</p>
                <span className="foot">{c.readMore} <span aria-hidden="true">{lang === "he" ? "←" : "→"}</span></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* TALKS */}
      <section className="section-tight" aria-labelledby="talks-h">
        <div className="wrap">
          <Reveal>
            <div className="label">{c.home.talksLabel}</div>
            <h2 id="talks-h" className="h2">{c.home.talksHeading}</h2>
            <p className="lead" style={{ marginBottom: 28 }}>{c.home.talksText}</p>
          </Reveal>
          <div className="cta-band">
            <div>
              <div className="title-row"><span style={{ fontSize: 20, fontWeight: 800, color: "#fff" }}>{c.home.talksFeatured.title}</span></div>
              <div className="muted" style={{ fontSize: 13, marginBottom: 8 }}>{c.home.talksFeatured.sub}</div>
              <p style={{ fontSize: 15, color: "var(--text-2)", fontWeight: 400, margin: 0 }}>{c.home.talksFeatured.desc}</p>
            </div>
            <a href={pagePath(lang, "talks")} className="btn btn-ghost">{c.home.talksLink}</a>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section" aria-labelledby="projects-h">
        <div className="wrap">
          <Reveal>
            <SectionHead lang={lang} label={c.home.projectsLabel} heading={c.home.projectsHeading} />
          </Reveal>
          <div style={{ borderTop: "1px solid var(--line)" }}>
            {allProjects.map((p) => (
              <a key={p.org} href={pagePath(lang, "projects")} className="proj-row">
                <T lang={lang} className="o">{p.org}</T>
                <span className="d">{p.desc}</span>
              </a>
            ))}
          </div>
          <a href={pagePath(lang, "projects")} className="link-arrow" style={{ marginTop: 16 }}>{c.home.projectsLink}</a>
        </div>
      </section>

      {/* AUDIENCES */}
      <section className="section-tight border-top" aria-labelledby="aud-h">
        <div className="wrap">
          <h2 id="aud-h" className="label" style={{ fontWeight: 400 }}>{c.home.audiencesLabel}</h2>
          <ul className="chips" style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {c.home.audiences.map((a) => <li key={a} className="chip">{a}</li>)}
          </ul>
        </div>
      </section>

      <FilmStrip alts={c.gallery} pauseLabel={c.galleryPause} playLabel={c.galleryPlay} />

      <Testimonials lang={lang} />
      <ContactBlock lang={lang} />
    </Shell>
  );
}
