"use client";
import { siteData } from "@/app/data/content";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32" style={{ background: "var(--cream)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image side */}
          <div className="relative">
            <div
              className="absolute -top-6 -right-6 w-64 h-64 rounded-full opacity-10 blur-3xl"
              style={{ background: "var(--navy-500)" }}
            />
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              style={{
                aspectRatio: "4/5",
                border: "1px solid rgba(45,52,128,0.12)",
              }}
            >
              <img
                src="/images/speaking-1.jpg"
                alt="ריקי לויסמן מרצה"
                className="w-full h-full object-cover"
                onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>

            {/* Quote card */}
            <div
              className="absolute -bottom-6 -left-6 max-w-xs p-5 rounded-2xl shadow-xl"
              style={{
                background: "var(--navy-900)",
                border: "1px solid rgba(201,168,76,0.2)",
              }}
            >
              <p
                className="text-sm text-white/70 leading-relaxed italic"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                "{siteData.quote}"
              </p>
            </div>
          </div>

          {/* Text side */}
          <div className="text-right">
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--gold-500)", fontFamily: "var(--font-assistant)" }}
            >
              על ריקי
            </span>
            <div className="w-10 h-[2px] rounded-full mt-2 mb-6 mr-0" style={{ background: "var(--gold-500)" }} />

            <h2
              className="text-4xl md:text-5xl font-bold leading-tight mb-6"
              style={{
                color: "var(--navy-900)",
                fontFamily: "var(--font-playfair)",
              }}
            >
              מגשרת בין
              <br />
              <span style={{ color: "var(--navy-500)" }}>הטכנולוגיה לאנשים</span>
            </h2>

            <div
              className="space-y-4 text-base md:text-lg leading-relaxed"
              style={{ color: "#3a3f5c", fontFamily: "var(--font-assistant)", fontWeight: 400 }}
            >
              <p>
                מנהלת חדשנות וראש תחום AI במרכז היזמות והחדשנות FUTURE של HIT — מכון טכנולוגי חולון.
              </p>
              <p>
                מרצה ומעבירה סדנאות ותכניות הדרכה לארגונים, מוסדות רפואיים, אקדמיה ותכניות יזמות — עם דגש על שינוי תרבות ואימוץ מעשי של AI.
              </p>
              <p>
                עובדת עם יזמים, מנהלים ועובדים שרוצים ליישם AI בעבודה היומיומית שלהם — בלי הייפ ובלי קיצורי דרך.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 justify-end mt-8">
              {["הרצאות", "סדנאות", "AI Academy", "AI Underground", "ייעוץ", "Outsourcing"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full text-sm font-medium"
                  style={{
                    background: "rgba(45,52,128,0.08)",
                    color: "var(--navy-600)",
                    border: "1px solid rgba(45,52,128,0.15)",
                    fontFamily: "var(--font-assistant)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={siteData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 text-sm font-semibold transition-colors hover:opacity-70"
              style={{ color: "var(--navy-500)", fontFamily: "var(--font-assistant)" }}
            >
              LinkedIn
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7v10"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
