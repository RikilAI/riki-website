import { clients } from "@/app/data/content";

export default function Clients() {
  return (
    <section
      id="clients"
      className="py-16 md:py-20"
      style={{
        background: "var(--navy-900)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p
          className="text-center text-xs uppercase tracking-widest mb-10"
          style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-assistant)" }}
        >
          ארגונים ומוסדות שעבדתי איתם
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {clients.map((client) => (
            <div
              key={client.name}
              className="px-6 py-3 rounded-xl text-center transition-all duration-200 hover:opacity-80"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <span
                className="text-sm font-medium whitespace-nowrap"
                style={{
                  color: "rgba(255,255,255,0.55)",
                  fontFamily: "var(--font-assistant)",
                }}
              >
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
