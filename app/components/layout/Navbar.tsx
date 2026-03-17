"use client";
import { useState, useEffect } from "react";
import { siteData } from "@/app/data/content";

const navLinks = [
  { href: "#about",        label: "אודות" },
  { href: "#services",     label: "שירותים" },
  { href: "#testimonials", label: "המלצות" },
  { href: "#speaking",     label: "הרצאות" },
  { href: "#contact",      label: "צור קשר" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(6,7,26,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#hero"
          className="text-lg font-bold text-white transition-opacity hover:opacity-80"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          ריקי <span style={{ color: "var(--gold-400)" }}>לויסמן</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm transition-colors hover:text-white"
              style={{
                color: "rgba(255,255,255,0.6)",
                fontFamily: "var(--font-assistant)",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={siteData.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105"
            style={{
              background: "var(--gold-500)",
              color: "#06071a",
              fontFamily: "var(--font-assistant)",
            }}
          >
            צרי קשר
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="תפריט"
        >
          <div className={`w-5 h-0.5 bg-white transition-all mb-1 ${open ? "rotate-45 translate-y-1.5" : ""}`} />
          <div className={`w-5 h-0.5 bg-white transition-all mb-1 ${open ? "opacity-0" : ""}`} />
          <div className={`w-5 h-0.5 bg-white transition-all ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-6 pb-6 pt-2"
          style={{
            background: "rgba(6,7,26,0.97)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-right text-base border-b transition-colors hover:text-white"
              style={{
                color: "rgba(255,255,255,0.6)",
                borderColor: "rgba(255,255,255,0.06)",
                fontFamily: "var(--font-assistant)",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={siteData.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block text-center py-3 rounded-full text-sm font-semibold"
            style={{
              background: "var(--gold-500)",
              color: "#06071a",
              fontFamily: "var(--font-assistant)",
            }}
          >
            צרי קשר
          </a>
        </div>
      )}
    </header>
  );
}
