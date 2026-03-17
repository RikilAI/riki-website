import { services } from "@/app/data/content";
import { siteData } from "@/app/data/content";

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32" style={{ background: "#f4f3ee" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="text-right mb-16">
          <span
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: "var(--gold-500)", fontFamily: "var(--font-assistant)" }}
          >
            מה אני עושה
          </span>
          <div className="w-10 h-[2px] rounded-full mt-2 mb-4 mr-0" style={{ background: "var(--gold-500)" }} />
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ color: "var(--navy-900)", fontFamily: "var(--font-playfair)" }}
          >
            השירותים שלי
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.id}
              className="group relative p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-right"
              style={{
                background: "white",
                border: "1px solid rgba(45,52,128,0.08)",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
              }}
            >
              {/* Icon */}
              <div
                className="text-3xl mb-4 w-14 h-14 rounded-2xl flex items-center justify-center mr-auto"
                style={{ background: "rgba(45,52,128,0.07)" }}
              >
                {service.icon}
              </div>

              {/* Gold accent on hover */}
              <div
                className="absolute top-0 right-0 left-0 h-[3px] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "var(--gold-500)" }}
              />

              <h3
                className="text-xl font-bold mb-3"
                style={{ color: "var(--navy-900)", fontFamily: "var(--font-playfair)" }}
              >
                {service.title}
              </h3>

              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: "#5a5f7a", fontFamily: "var(--font-assistant)", fontWeight: 400 }}
              >
                {service.description}
              </p>

              {/* Audiences */}
              <div className="flex flex-wrap gap-1.5 justify-end mb-5">
                {service.audiences.map((a) => (
                  <span
                    key={a}
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{
                      background: "rgba(201,168,76,0.1)",
                      color: "var(--navy-600)",
                      border: "1px solid rgba(201,168,76,0.2)",
                      fontFamily: "var(--font-assistant)",
                    }}
                  >
                    {a}
                  </span>
                ))}
              </div>

              <a
                href={siteData.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
                style={{ color: "var(--navy-500)", fontFamily: "var(--font-assistant)" }}
              >
                {service.cta}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
