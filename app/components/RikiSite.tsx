"use client";
import { useState, useEffect, useRef } from "react";
import { content, Lang } from "./content";

const WHATSAPP = "https://wa.me/972528806346";
const LINKEDIN = "https://www.linkedin.com/in/riki-levisman-7b8b6611/";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, visible } = useInView();
  return (
    <div ref={ref} className={className} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(32px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}>
      {children}
    </div>
  );
}

function ServiceCard({ s, F }: { s: { icon: string; title: string; en: string; desc: string }; F: string; WHATSAPP: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <article
      aria-label={s.en}
      style={{ padding: 32, border: `1px solid ${hovered ? "#C8922A" : "#252525"}`, background: "#0d0d0d", transition: "border-color 0.3s", textAlign: "inherit", boxSizing: "border-box" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div aria-hidden="true" style={{ fontSize: 18, color: "#C8922A", opacity: 0.85, marginBottom: 16 }}>{s.icon}</div>
      <h3 style={{ fontFamily: F, fontSize: 16, fontWeight: 700, color: "#fff", margin: "0 0 4px 0" }}>{s.title}</h3>
      <div style={{ fontFamily: F, fontSize: 10, color: "#666", letterSpacing: "1px", textTransform: "uppercase", marginBottom: 12 }}>{s.en}</div>
      <p style={{ fontFamily: F, fontSize: 13, color: "#999", lineHeight: 1.85, margin: 0 }}>{s.desc}</p>
    </article>
  );
}

function ContactButtons({ F, whatsappLabel }: { F: string; whatsappLabel: string }) {
  const [p, setP] = useState(false);
  const [s, setS] = useState(false);
  return (
    <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
      <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
        style={{ background: p ? "#ffc020" : "#C8922A", color: "#0a0a0a", padding: "14px 36px", fontWeight: 800, fontSize: 14, textDecoration: "none", fontFamily: F, transition: "all 0.2s", display: "inline-block", transform: p ? "translateY(-2px)" : "none" }}
        onMouseEnter={() => setP(true)} onMouseLeave={() => setP(false)}>
        {whatsappLabel}
      </a>
      <a href={LINKEDIN} target="_blank" rel="noopener noreferrer"
        style={{ border: `1px solid ${s ? "#C8922A" : "#252525"}`, color: s ? "#C8922A" : "#555", padding: "14px 36px", fontSize: 14, textDecoration: "none", fontFamily: F, transition: "all 0.2s", display: "inline-block", background: "transparent" }}
        onMouseEnter={() => setS(true)} onMouseLeave={() => setS(false)}>
        LinkedIn
      </a>
    </div>
  );
}

export default function RikiSite() {
  const [lang, setLang] = useState<Lang>("he");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const t = content[lang];
  const F = "var(--font-heebo), 'Heebo', sans-serif";
  const isEn = lang === "en";

  return (
    <div dir={t.dir} style={{ background: "#0a0a0a", color: "#e8e4dc", fontFamily: F, minHeight: "100vh", overflowX: "hidden" }}>

      {/* Grain */}
      <div style={{ position: "fixed", inset: 0, zIndex: 999, pointerEvents: "none", backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")`, opacity: 0.4 }} />

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "0 32px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between", background: scrolled ? "rgba(10,10,10,0.95)" : "transparent", backdropFilter: scrolled ? "blur(16px)" : "none", borderBottom: scrolled ? "1px solid #181818" : "none", transition: "all 0.4s ease" }}>

        {/* Language toggle — left side always */}
        <button
          onClick={() => setLang(isEn ? "he" : "en")}
          style={{ fontFamily: F, fontSize: 11, fontWeight: 600, letterSpacing: "2px", color: "#C8922A", background: "transparent", border: "1px solid #C8922A44", padding: "5px 12px", cursor: "pointer", transition: "all 0.2s", textTransform: "uppercase" }}
          onMouseEnter={e => { e.currentTarget.style.background = "#C8922A18"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
          aria-label={isEn ? "Switch to Hebrew" : "החלף לאנגלית"}
        >
          {isEn ? "HE" : "EN"}
        </button>

        {/* Nav links — right side */}
        <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
          {([["#about", t.nav.about], ["#services", t.nav.services], ["#contact", t.nav.contact]] as [string, string][]).map(([href, label]) => (
            <a key={href} href={href} style={{ fontFamily: F, color: "#aaa", fontSize: 12, fontWeight: 400, textDecoration: "none", letterSpacing: 1, transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.color = "#aaa")}>
              {label}
            </a>
          ))}
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
            style={{ fontFamily: F, border: "1px solid #C8922A", color: "#C8922A", padding: "7px 18px", fontWeight: 500, fontSize: 12, textDecoration: "none", letterSpacing: 0.5, transition: "all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.background = "#C8922A"; e.currentTarget.style.color = "#0a0a0a"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#C8922A"; }}>
            {t.nav.cta}
          </a>
        </div>
      </nav>

      {/* ═══ HERO ═══ */}
      <section className="hero-root">

        <img
          src="/images/hero-main.png"
          alt="ריקי לויסמן מרצה AI — Riki Levisman AI lecturer"
          className="hero-photo"
        />

        <div className="hero-vignette" />

        <div className="hero-panel">
          <div className="hero-panel-bg" />
          <div className="hero-rule" />

          <div className="hero-content" dir="ltr">

            <div className="hero-tagline-wrap">
              <p className="hero-tag-dim">{t.hero.tagDim.split("\n")[0]}<br />{t.hero.tagDim.split("\n")[1]}</p>
              <p className="hero-tag-warm">{t.hero.tagWarm.split("\n")[0]}<br /><span style={{ color: "#C8922A" }}>prompt</span> it.</p>
            </div>

            <div className="hero-sep" />

            <div className="hero-eyebrow">{t.hero.eyebrow}</div>

            <h1 className="hero-name-he">{t.hero.nameHe.split("\n")[0]}<br />{t.hero.nameHe.split("\n")[1]}</h1>

            <p className="hero-name-en">{t.hero.nameEn}</p>

            <div className="hero-ctas">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-btn-primary"
                onMouseEnter={e => { e.currentTarget.style.background = "#daa83a"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "#C8922A"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                {t.hero.ctaPrimary}
              </a>
              <a
                href="#services"
                className="hero-btn-ghost"
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#C8922A"; e.currentTarget.style.color = "#C8922A"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)"; e.currentTarget.style.color = "rgba(255,255,255,0.5)"; }}
              >
                {t.hero.ctaSecondary}
              </a>
            </div>

          </div>
        </div>

        <div className="hero-scroll-hint">
          <div className="hero-scroll-line" />
        </div>

      </section>

      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroSlideIn {
          from { opacity: 0; transform: translateX(-32px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes heroFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes scrollPulse {
          0%, 100% { transform: scaleY(1); opacity: 0.4; }
          50%       { transform: scaleY(1.6); opacity: 0.9; }
        }

        .hero-root {
          position: relative;
          min-height: 100vh;
          background: #0a0a0a;
          overflow: hidden;
        }
        .hero-photo {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
          animation: heroFadeIn 1.2s ease forwards;
          filter: brightness(0.8);
        }
        .hero-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 70% 40%, transparent 30%, rgba(10,10,10,0.55) 100%);
          pointer-events: none;
          z-index: 1;
        }
        .hero-panel {
          position: absolute;
          inset: 0;
          z-index: 2;
          display: flex;
          align-items: stretch;
        }
        .hero-panel-bg {
          position: absolute;
          top: 0; bottom: 0; left: 0;
          width: 52%;
          background: linear-gradient(
            to right,
            rgba(10,10,10,0.96) 0%,
            rgba(10,10,10,0.88) 60%,
            rgba(10,10,10,0.55) 82%,
            transparent 100%
          );
          pointer-events: none;
        }
        .hero-rule {
          position: absolute;
          top: 15%;
          bottom: 15%;
          left: calc(52% - 1px);
          width: 1px;
          background: linear-gradient(to bottom, transparent, #C8922A66 30%, #C8922A66 70%, transparent);
          z-index: 3;
        }
        .hero-content {
          position: relative;
          z-index: 4;
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 48%;
          min-height: 100vh;
          padding: 120px 40px 80px 5vw;
          box-sizing: border-box;
          gap: 0;
        }
        .hero-eyebrow {
          font-family: var(--font-heebo), 'Heebo', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #C8922A;
          margin-bottom: 12px;
          animation: heroFadeUp 0.6s 0.3s ease both;
        }
        .hero-name-he {
          font-family: var(--font-heebo), 'Heebo', sans-serif;
          font-size: clamp(56px, 7vw, 96px);
          font-weight: 900;
          line-height: 0.95;
          color: #fff;
          letter-spacing: -2px;
          margin: 0 0 8px 0;
          animation: heroSlideIn 0.7s 0.5s ease both;
        }
        .hero-name-en {
          font-family: var(--font-heebo), 'Heebo', sans-serif;
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 5px;
          color: #555;
          text-transform: uppercase;
          margin: 0 0 32px 0;
          animation: heroFadeUp 0.6s 0.7s ease both;
        }
        .hero-sep {
          width: 36px;
          height: 1px;
          background: #C8922A44;
          margin-bottom: 20px;
          animation: heroFadeIn 0.6s 0.2s ease both;
        }
        .hero-tagline-wrap {
          margin-bottom: 20px;
          animation: heroFadeUp 0.7s 0.1s ease both;
        }
        .hero-tag-dim {
          font-family: var(--font-heebo), 'Heebo', sans-serif;
          font-size: clamp(13px, 1.4vw, 16px);
          font-weight: 300;
          color: #666;
          line-height: 1.6;
          margin: 0 0 4px 0;
        }
        .hero-tag-warm {
          font-family: var(--font-heebo), 'Heebo', sans-serif;
          font-size: clamp(13px, 1.4vw, 16px);
          font-weight: 500;
          color: #c8b89a;
          line-height: 1.6;
          margin: 0;
        }
        .hero-ctas {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          animation: heroFadeUp 0.6s 0.9s ease both;
        }
        .hero-btn-primary {
          font-family: var(--font-heebo), 'Heebo', sans-serif;
          background: #C8922A;
          color: #0a0a0a;
          padding: 13px 28px;
          font-size: 13px;
          font-weight: 800;
          text-decoration: none;
          letter-spacing: 0.5px;
          transition: all 0.2s;
          display: inline-block;
        }
        .hero-btn-ghost {
          font-family: var(--font-heebo), 'Heebo', sans-serif;
          border: 1px solid rgba(255,255,255,0.18);
          color: rgba(255,255,255,0.5);
          padding: 13px 28px;
          font-size: 13px;
          font-weight: 400;
          text-decoration: none;
          letter-spacing: 0.5px;
          transition: all 0.2s;
          display: inline-block;
        }
        .hero-scroll-hint {
          position: absolute;
          bottom: 36px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 4;
          animation: heroFadeIn 1s 1.2s ease both;
        }
        .hero-scroll-line {
          width: 1px;
          height: 48px;
          background: linear-gradient(to bottom, #C8922A, transparent);
          margin: 0 auto;
          animation: scrollPulse 2s 1.5s ease-in-out infinite;
          transform-origin: top center;
        }

        @media (max-width: 767px) {
          .hero-panel { align-items: flex-end; }
          .hero-panel-bg {
            width: 100%;
            background: linear-gradient(
              to top,
              rgba(10,10,10,0.97) 0%,
              rgba(10,10,10,0.88) 45%,
              rgba(10,10,10,0.4)  70%,
              transparent 100%
            );
          }
          .hero-rule { display: none; }
          .hero-content {
            width: 100%;
            padding: 0 28px 60px;
            min-height: unset;
            justify-content: flex-end;
          }
          .hero-name-he { font-size: clamp(48px, 14vw, 72px); }
          .hero-scroll-hint { display: none; }
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          .hero-content {
            width: 56vw;
            padding: 100px 40px 80px 6vw;
          }
          .hero-name-he { font-size: clamp(52px, 8vw, 80px); }
        }
      `}</style>

      {/* ═══ ABOUT ═══ */}
      <section id="about" style={{ padding: "60px 24px 48px", borderTop: "1px solid #1a1a1a" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <Section>
            <div style={{ textAlign: isEn ? "left" : "right" }}>
              <div style={{ fontFamily: F, fontSize: 10, color: "#C8922A", textTransform: "uppercase", letterSpacing: "3px", marginBottom: 18 }}>{t.about.label}</div>
              <h2 style={{ fontFamily: F, fontSize: "clamp(22px,3vw,38px)", fontWeight: 900, lineHeight: 1.15, margin: "0 0 24px 0", color: "#fff" }}>
                {t.about.heading}<br />
                <span style={{ color: "#C8922A" }}>{t.about.headingAccent}</span>
              </h2>
              <p style={{ fontFamily: F, fontSize: 15, color: "#aaa", lineHeight: 1.85, marginBottom: 20 }}>
                {t.about.p1}
              </p>
              <p style={{ fontFamily: F, fontSize: 14, color: "#777", lineHeight: 1.8, marginBottom: 28 }}>
                {t.about.p2}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 28 }}>
                {t.about.tags.map((tag) => (
                  <div key={tag} style={{ fontFamily: F, fontSize: 13, color: "#C8922A", border: "1px solid #C8922A33", background: "#C8922A0d", padding: "8px 16px", letterSpacing: "0.5px" }}>
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section id="services" style={{ padding: "80px 24px", maxWidth: 1100, margin: "0 auto", boxSizing: "border-box" }}>
        <Section>
          <div style={{ textAlign: isEn ? "left" : "right", marginBottom: 48 }}>
            <div style={{ fontFamily: F, fontSize: 10, color: "#C8922A", textTransform: "uppercase", letterSpacing: "3px", marginBottom: 12 }}>{t.services.label}</div>
            <h2 style={{ fontFamily: F, fontSize: "clamp(28px,4vw,48px)", fontWeight: 900, color: "#fff", margin: 0 }}>{t.services.heading}</h2>
          </div>
        </Section>
        <div className="services-grid">
          {t.services.items.map((s, i) => (
            <ServiceCard key={i} s={s} F={F} WHATSAPP={WHATSAPP} />
          ))}
        </div>
      </section>

      {/* ═══ FILM STRIP ═══ */}
      <div className="film-strip-outer" style={{ borderTop: "1px solid #1a1a1a", borderBottom: "1px solid #1a1a1a", background: "#050505", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, bottom: 0, left: 0, width: 100, background: "linear-gradient(to right, #050505, transparent)", zIndex: 2, pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 0, bottom: 0, right: 0, width: 100, background: "linear-gradient(to left, #050505, transparent)", zIndex: 2, pointerEvents: "none" }} />
        <div className="film-track">
          {[
            { src: "/images/lecture-1.jpg", alt: "ריקי לויסמן מרצה בהרצאת AI לארגון — Riki Levisman AI lecture" },
            { src: "/images/lecture-2.jpg", alt: "ריקי לויסמן בסדנת GenAI למנהלים — GenAI workshop" },
            { src: "/images/lecture-3.jpg", alt: "ריקי לויסמן בכנס AI בישראל — AI conference Israel" },
            { src: "/images/lecture-4.jpg", alt: "ריקי לויסמן בהכשרת AI לצוות רפואי — AI training healthcare" },
            { src: "/images/lecture-5.jpg", alt: "ריקי לויסמן מרצה לקהל גדול — keynote audience" },
            { src: "/images/lecture-6.jpg", alt: "ריקי לויסמן בסדנת AI Underground — AI Underground workshop" },
            { src: "/images/lecture-7.jpg", alt: "ריקי לויסמן בתכנית VISTAR באזרבייג'ן — VISTAR program Azerbaijan" },
            { src: "/images/lecture-8.jpg", alt: "ריקי לויסמן בהדרכת AI Academy — AI Academy HIT" },
            { src: "/images/lecture-9.jpg", alt: "ריקי לויסמן מובילת AI — Riki Levisman AI leader" },
            { src: "/images/lecture-1.jpg", alt: "ריקי לויסמן מרצה בהרצאת AI לארגון — Riki Levisman AI lecture" },
            { src: "/images/lecture-2.jpg", alt: "ריקי לויסמן בסדנת GenAI למנהלים — GenAI workshop" },
            { src: "/images/lecture-3.jpg", alt: "ריקי לויסמן בכנס AI בישראל — AI conference Israel" },
            { src: "/images/lecture-4.jpg", alt: "ריקי לויסמן בהכשרת AI לצוות רפואי — AI training healthcare" },
            { src: "/images/lecture-5.jpg", alt: "ריקי לויסמן מרצה לקהל גדול — keynote audience" },
            { src: "/images/lecture-6.jpg", alt: "ריקי לויסמן בסדנת AI Underground — AI Underground workshop" },
            { src: "/images/lecture-7.jpg", alt: "ריקי לויסמן בתכנית VISTAR באזרבייג'ן — VISTAR program Azerbaijan" },
            { src: "/images/lecture-8.jpg", alt: "ריקי לויסמן בהדרכת AI Academy — AI Academy HIT" },
            { src: "/images/lecture-9.jpg", alt: "ריקי לויסמן מובילת AI — Riki Levisman AI leader" },
          ].map(({ src, alt }, i) => (
            <div key={i} className="film-frame">
              <img src={src} alt={alt} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block", filter: "grayscale(20%) brightness(0.85) contrast(1.05)" }} />
            </div>
          ))}
        </div>
      </div>

      {/* ═══ TESTIMONIALS ═══ */}
      <section style={{ background: "#060606", padding: "60px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Section>
            <div style={{ textAlign: isEn ? "left" : "right", marginBottom: 32 }}>
              <div style={{ fontFamily: F, fontSize: 10, color: "#C8922A", textTransform: "uppercase", letterSpacing: "3px", marginBottom: 10 }}>{t.testimonials.label}</div>
              <h2 style={{ fontFamily: F, fontSize: "clamp(24px,3.5vw,40px)", fontWeight: 900, color: "#fff", margin: 0 }}>{t.testimonials.heading}</h2>
            </div>
          </Section>
          <div className="testimonials-grid">
            {t.testimonials.items.map((item, i) => {
              const isEnglishText = /^[A-Za-z]/.test(item.text);
              return (
                <blockquote key={i} style={{ padding: "24px 28px", borderBottom: "1px solid #141414", borderLeft: i % 2 === 0 ? "1px solid #141414" : "none", textAlign: isEnglishText ? "left" : "right", direction: isEnglishText ? "ltr" : "rtl", margin: 0 }}>
                  <div style={{ fontFamily: F, fontSize: 36, lineHeight: 1, color: "#C8922A", opacity: 0.35, marginBottom: 10 }}>"</div>
                  <p style={{ fontFamily: F, fontSize: 14, color: "#ccc", fontStyle: "italic", lineHeight: 1.75, margin: "0 0 16px 0" }}>{item.text}</p>
                  <footer>
                    <div style={{ fontFamily: F, fontSize: 12, color: "#C8922A", fontWeight: 600 }}>{item.role}</div>
                    <div style={{ fontFamily: F, fontSize: 11, color: "#777", marginTop: 2 }}>{item.org}</div>
                  </footer>
                </blockquote>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ CONTACT ═══ */}
      <section id="contact" style={{ position: "relative", overflow: "hidden", padding: "100px 24px", textAlign: "center" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", fontSize: "clamp(60px,12vw,160px)", fontWeight: 900, color: "#C8922A", opacity: 0.025, whiteSpace: "nowrap", pointerEvents: "none", fontFamily: F, letterSpacing: "-3px", zIndex: 0, userSelect: "none" }}>
          PROMPT IT
        </div>
        <div style={{ position: "relative", zIndex: 1 }}>
          <Section>
            <div style={{ fontFamily: F, fontSize: 10, color: "#C8922A", textTransform: "uppercase", letterSpacing: "3px", marginBottom: 24 }}>{t.contact.label}</div>
            <h2 style={{ direction: "ltr", fontFamily: F, fontSize: "clamp(32px,5vw,64px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 16 }}>
              <span style={{ color: "#fff" }}>{t.contact.line1}</span><br />
              <span style={{ color: "#C8922A" }}>{t.contact.line2}</span>
            </h2>
            <p style={{ fontFamily: F, fontSize: 14, color: "#444", marginBottom: 48 }}>{t.contact.sub}</p>
            <ContactButtons F={F} whatsappLabel={t.contact.whatsapp} />
          </Section>
        </div>
      </section>

      <footer style={{ borderTop: "1px solid #1a1a1a", padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <span style={{ fontFamily: F, fontSize: 11, color: "#333" }}>{t.footer.copy}</span>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer me"
            style={{ fontFamily: F, fontSize: 11, color: "#555", textDecoration: "none", letterSpacing: 1, transition: "color 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#C8922A")}
            onMouseLeave={e => (e.currentTarget.style.color = "#555")}>
            LinkedIn
          </a>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
            style={{ fontFamily: F, fontSize: 11, color: "#555", textDecoration: "none", letterSpacing: 1, transition: "color 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#C8922A")}
            onMouseLeave={e => (e.currentTarget.style.color = "#555")}>
            WhatsApp
          </a>
          <span style={{ fontFamily: F, fontSize: 9, color: "#C8922A", letterSpacing: "3px", textTransform: "uppercase" }}>{t.footer.badge}</span>
        </div>
      </footer>

      <style>{`
        @keyframes filmScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .film-strip-outer {
          direction: ltr;
          overflow: hidden;
        }
        .film-track {
          display: flex;
          flex-direction: row;
          gap: 8px;
          padding: 12px 8px;
          width: max-content;
          animation: filmScroll 45s linear infinite;
          will-change: transform;
        }
        .film-track:hover { animation-play-state: paused; }
        .film-frame {
          width: 240px;
          height: 160px;
          flex-shrink: 0;
          overflow: hidden;
          position: relative;
          display: block;
        }
        .film-frame img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .film-frame::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(200,146,42,0.05) 0%, transparent 60%);
          pointer-events: none;
        }
        .services-grid { display: grid; grid-template-columns: 1fr; gap: 1px; background: #181818; }
        .testimonials-grid { display: grid; grid-template-columns: 1fr; }
        @media (min-width: 768px) {
          .services-grid { grid-template-columns: 1fr 1fr; }
          .testimonials-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (min-width: 1024px) {
          .services-grid { grid-template-columns: 1fr 1fr 1fr; }
          footer { padding: 20px 48px !important; }
        }
      `}</style>

    </div>
  );
}
