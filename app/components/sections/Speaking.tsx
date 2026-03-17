import { aiAcademy, siteData } from "@/app/data/content";

const topics = [
  "GenAI לארגונים ומנהלים",
  "AI בשירות הרפואה",
  "כלי AI מעשיים לצוותים",
  "שינוי תרבות ארגוני עם AI",
  "AI בחינוך ואקדמיה",
  "עתיד שוק העבודה עם AI",
  "יזמות וחדשנות בעידן ה-AI",
  "Prompt Engineering למתחילים",
];

export default function Speaking() {
  return (
    <section
      id="speaking"
      className="py-24 md:py-32"
      style={{ background: "linear-gradient(180deg, #f4f3ee 0%, var(--cream) 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: Speaking info */}
          <div>
            {/* Header */}
            <div className="text-right mb-10">
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--gold-500)", fontFamily: "var(--font-assistant)" }}
              >
                הרצאות
              </span>
              <div className="w-10 h-[2px] rounded-full mt-2 mb-4 mr-0" style={{ background: "var(--gold-500)" }} />
              <h2
                className="text-4xl md:text-5xl font-bold"
                style={{ color: "var(--navy-900)", fontFamily: "var(--font-playfair)" }}
              >
                נושאי ההרצאות
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-3 text-right">
              {topics.map((topic) => (
                <div
                  key={topic}
                  className="p-4 rounded-xl text-sm"
                  style={{
                    background: "white",
                    border: "1px solid rgba(45,52,128,0.08)",
                    color: "#3a3f5c",
                    fontFamily: "var(--font-assistant)",
                    boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
                  }}
                >
                  <span className="ml-2" style={{ color: "var(--gold-500)" }}>✦</span>
                  {topic}
                </div>
              ))}
            </div>

            <div className="mt-8 text-right">
              <a
                href={siteData.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105"
                style={{
                  background: "var(--navy-700)",
                  fontFamily: "var(--font-assistant)",
                }}
              >
                בואו נדבר על הרצאה
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right: AI Academy */}
          <div>
            <div className="text-right mb-8">
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--gold-500)", fontFamily: "var(--font-assistant)" }}
              >
                תכנית
              </span>
              <div className="w-10 h-[2px] rounded-full mt-2 mb-4 mr-0" style={{ background: "var(--gold-500)" }} />
              <h3
                className="text-3xl font-bold"
                style={{ color: "var(--navy-900)", fontFamily: "var(--font-playfair)" }}
              >
                AI Academy
              </h3>
              <p
                className="mt-3 text-sm leading-relaxed"
                style={{ color: "#5a5f7a", fontFamily: "var(--font-assistant)" }}
              >
                תכנית בת 12 מפגשים לסטודנטים, חוקרים וסגל אקדמי של HIT. 3 מחזורים הושלמו בהצלחה.
              </p>
            </div>

            <div className="space-y-3">
              {aiAcademy.map((cycle, i) => (
                <a
                  key={cycle.cycle}
                  href={cycle.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-5 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md group"
                  style={{
                    background: "white",
                    border: "1px solid rgba(45,52,128,0.08)",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                    textDecoration: "none",
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="opacity-30 group-hover:opacity-60 transition-opacity flex-shrink-0"
                    style={{ color: "var(--navy-500)" }}
                  >
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                  </svg>
                  <div className="text-right flex-1 mr-3">
                    <div
                      className="font-semibold text-sm"
                      style={{ color: "var(--navy-800)", fontFamily: "var(--font-assistant)" }}
                    >
                      {cycle.cycle}
                    </div>
                    <div
                      className="text-xs mt-0.5"
                      style={{ color: "#8a8fa8", fontFamily: "var(--font-assistant)" }}
                    >
                      {cycle.date}
                    </div>
                  </div>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                    style={{
                      background: "rgba(201,168,76,0.1)",
                      color: "var(--gold-500)",
                      fontFamily: "var(--font-playfair)",
                    }}
                  >
                    {i + 1}
                  </div>
                </a>
              ))}
            </div>

            {/* YouTube link */}
            <a
              href={siteData.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 mt-5 p-4 rounded-xl transition-all duration-200 hover:shadow-md"
              style={{
                background: "rgba(255,0,0,0.04)",
                border: "1px solid rgba(255,0,0,0.1)",
                textDecoration: "none",
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#ff0000">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <div className="text-right flex-1">
                <div
                  className="text-sm font-semibold"
                  style={{ color: "var(--navy-800)", fontFamily: "var(--font-assistant)" }}
                >
                  הרצאה בערוץ YouTube של HIT
                </div>
                <div
                  className="text-xs"
                  style={{ color: "#8a8fa8", fontFamily: "var(--font-assistant)" }}
                >
                  לצפייה ישירה
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
