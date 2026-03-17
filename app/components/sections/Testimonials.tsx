import { testimonials } from "@/app/data/content";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32" style={{ background: "var(--cream)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="text-right mb-16">
          <span
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: "var(--gold-500)", fontFamily: "var(--font-assistant)" }}
          >
            מה אומרים
          </span>
          <div className="w-10 h-[2px] rounded-full mt-2 mb-4 mr-0" style={{ background: "var(--gold-500)" }} />
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ color: "var(--navy-900)", fontFamily: "var(--font-playfair)" }}
          >
            משתתפים מספרים
          </h2>
          <p
            className="mt-3 text-sm"
            style={{ color: "#8a8fa8", fontFamily: "var(--font-assistant)" }}
          >
            72.4% מהמשתתפים החלו להשתמש ב-GenAI בעבודה אחרי הקורס
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative p-7 rounded-2xl text-right"
              style={{
                background: i === 0
                  ? "linear-gradient(135deg, var(--navy-900) 0%, var(--navy-700) 100%)"
                  : "white",
                border: i === 0
                  ? "1px solid rgba(201,168,76,0.25)"
                  : "1px solid rgba(45,52,128,0.08)",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
              }}
            >
              {/* Quote mark */}
              <div
                className="absolute top-5 left-6 text-5xl leading-none font-serif opacity-20 select-none"
                style={{
                  color: i === 0 ? "var(--gold-500)" : "var(--navy-300)",
                  fontFamily: "Georgia, serif",
                }}
              >
                "
              </div>

              <p
                className="text-sm md:text-base leading-relaxed mb-6 relative z-10"
                style={{
                  color: i === 0 ? "rgba(255,255,255,0.85)" : "#3a3f5c",
                  fontFamily: "var(--font-assistant)",
                  fontWeight: 400,
                }}
              >
                {t.text}
              </p>

              <div className="border-t pt-4" style={{ borderColor: i === 0 ? "rgba(255,255,255,0.1)" : "rgba(45,52,128,0.08)" }}>
                <div
                  className="text-sm font-semibold"
                  style={{
                    color: i === 0 ? "var(--gold-400)" : "var(--navy-600)",
                    fontFamily: "var(--font-assistant)",
                  }}
                >
                  {t.role}
                </div>
                <div
                  className="text-xs mt-0.5"
                  style={{
                    color: i === 0 ? "rgba(255,255,255,0.4)" : "#8a8fa8",
                    fontFamily: "var(--font-assistant)",
                  }}
                >
                  {t.org}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
