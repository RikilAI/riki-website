import { siteData } from "@/app/data/content";

export default function Footer() {
  return (
    <footer
      className="py-10"
      style={{
        background: "#06071a",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-xs"
            style={{ color: "rgba(255,255,255,0.25)", fontFamily: "var(--font-assistant)" }}
          >
            © {new Date().getFullYear()} ריקי לויסמן. כל הזכויות שמורות.
          </p>

          <div className="flex items-center gap-6">
            <a
              href={siteData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs transition-colors hover:text-white"
              style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-assistant)" }}
            >
              LinkedIn
            </a>
            <a
              href={siteData.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs transition-colors hover:text-white"
              style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-assistant)" }}
            >
              WhatsApp
            </a>
            <a
              href={siteData.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs transition-colors hover:text-white"
              style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-assistant)" }}
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
