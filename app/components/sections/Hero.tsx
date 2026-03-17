"use client";
import { siteData, stats } from "@/app/data/content";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden"
      style={{ background: "linear-gradient(135deg, #06071a 0%, #1a1f6e 55%, #2D3480 100%)" }}
    >
      {/* Subtle grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
        }}
      />

      {/* Gold accent line top */}
      <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: "var(--gold-500)" }} />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full py-24">

          {/* Text — right side (RTL) */}
          <div className="order-2 lg:order-1 text-right lg:text-right">

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 opacity-0-init animate-fade-in"
              style={{
                background: "rgba(201, 168, 76, 0.12)",
                border: "1px solid rgba(201, 168, 76, 0.3)",
                color: "var(--gold-400)",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse" />
              Head of Innovation & GenAI · HIT
            </div>

            {/* Name */}
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4 opacity-0-init animate-fade-up animate-delay-100"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              ריקי
              <br />
              <span style={{ color: "var(--gold-400)" }}>לויסמן</span>
            </h1>

            {/* Tagline */}
            <p
              className="text-xl md:text-2xl text-white/80 leading-relaxed mb-8 opacity-0-init animate-fade-up animate-delay-200"
              style={{ fontFamily: "var(--font-assistant)", fontWeight: 300 }}
            >
              {siteData.tagline}
            </p>

            {/* Gold divider */}
            <div
              className="w-12 h-[3px] rounded-full mb-8 opacity-0-init animate-fade-in animate-delay-300 mr-auto"
              style={{ background: "var(--gold-500)" }}
            />

            {/* Description */}
            <p
              className="text-base md:text-lg text-white/60 leading-relaxed mb-10 opacity-0-init animate-fade-up animate-delay-400 max-w-md mr-0 ml-auto lg:ml-0"
              style={{ fontFamily: "var(--font-assistant)" }}
            >
              מנהלת חדשנות וראש תחום AI ב-FUTURE, HIT. מרצה, מעבירה סדנאות ותכניות הדרכה לארגונים, אקדמיה ומוסדות רפואיים.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 justify-end lg:justify-end opacity-0-init animate-fade-up animate-delay-500">
              <a
                href={siteData.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-navy-900 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{
                  background: "var(--gold-500)",
                  color: "#06071a",
                  fontFamily: "var(--font-assistant)",
                  boxShadow: "0 0 20px rgba(201,168,76,0.3)",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                שלחו הודעה
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  border: "1.5px solid rgba(255,255,255,0.25)",
                  color: "rgba(255,255,255,0.85)",
                  fontFamily: "var(--font-assistant)",
                  background: "rgba(255,255,255,0.05)",
                }}
              >
                השירותים שלי
              </a>
            </div>
          </div>

          {/* Image — left side */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-start opacity-0-init animate-fade-in animate-delay-300">
            <div className="relative">
              {/* Glow behind image */}
              <div
                className="absolute inset-0 rounded-3xl blur-3xl opacity-30"
                style={{ background: "radial-gradient(circle, #1a1f6e 0%, transparent 70%)" }}
              />
              <div
                className="relative rounded-3xl overflow-hidden"
                style={{
                  width: "min(420px, 100%)",
                  aspectRatio: "3/4",
                  border: "1px solid rgba(201,168,76,0.2)",
                  boxShadow: "0 32px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)",
                }}
              >
                {/* Placeholder — תמונת Hero (כחול מעיל) */}
                <div
                  className="w-full h-full flex items-end justify-center"
                  style={{ background: "linear-gradient(180deg, #1a1f6e 0%, #0a0c20 100%)" }}
                >
                  <img
                    src="/images/hero.jpg"
                    alt="ריקי לויסמן — מרצה ומתמיעת AI"
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Placeholder if no image */}
                  <div className="absolute inset-0 flex items-end justify-center pb-8 text-white/20 text-sm pointer-events-none">
                    <span>ריקי לויסמן</span>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div
                className="absolute -bottom-4 -right-4 px-5 py-3 rounded-2xl text-right shadow-xl"
                style={{
                  background: "rgba(10, 12, 32, 0.95)",
                  border: "1px solid rgba(201,168,76,0.3)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-playfair)" }}>
                  1,000+
                </div>
                <div className="text-xs text-white/50" style={{ fontFamily: "var(--font-assistant)" }}>
                  אנשים שעברו הכשרה
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div
        className="absolute bottom-0 left-0 right-0 border-t"
        style={{
          background: "rgba(6,7,26,0.8)",
          borderColor: "rgba(255,255,255,0.07)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5">
          <div className="flex flex-wrap justify-center lg:justify-end gap-8 lg:gap-16">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div
                  className="text-2xl md:text-3xl font-bold"
                  style={{ color: "var(--gold-400)", fontFamily: "var(--font-playfair)" }}
                >
                  {s.number}
                </div>
                <div className="text-xs text-white/40 mt-0.5" style={{ fontFamily: "var(--font-assistant)" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
