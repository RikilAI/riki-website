export type Lang = "he" | "en";

export const content = {
  he: {
    dir: "rtl" as const,
    lang: "he",

    nav: {
      about: "אודות",
      services: "שירותים",
      contact: "קשר",
      cta: "יצירת קשר",
    },

    hero: {
      eyebrow: "AI Change Maker",
      nameHe: "ריקי\nלויסמן",
      nameEn: "RIKI LEVISMAN",
      tagDim: "We can't predict\nthe future.",
      tagWarm: "But we can learn to\nprompt it.",
      ctaPrimary: "דברו איתי",
      ctaSecondary: "השירותים שלי",
    },

    about: {
      label: "ריקי לויסמן",
      heading: "חוסן מקצועי ושיפור ביצועים",
      headingAccent: "בעידן ה-AI",
      p1: "אני מלווה מנהלים ועובדים בבניית חוסן מקצועי ושיפור ביצועים דרך ליווי אישי, קורסים ותוכניות הכשרה ב-GenAI. אני עוזרת לאמץ כלי בינה מלאכותית כחלק משגרת העבודה, במטרה להשביח את איכות התוצרים ולייצר יתרון מקצועי מובהק בעולם משתנה.",
      p2: "מנהלת חדשנות וראש תחום AI במרכז היזמות של HIT. מרצה מובילה עם מעל 1,000 איש בהרצאות, קורסים ותכניות — בארץ ובעולם.",
      tags: ["1,000+ משתתפים", "סדנאות והטמעה", "מוסדות אקדמיים", "ליווי מנהלים"],
    },

    services: {
      label: "מה אני מציעה",
      heading: "השירותים שלי",
      items: [
        { icon: "◈", title: "הרצאות ו-Keynotes", en: "Lectures & Keynotes", desc: "לארגונים, אקדמיה, מרכזי הכשרה ותכניות יזמות — הרצאות שנוגעות בול." },
        { icon: "◉", title: "קורסים והכשרות", en: "Workshops & Training", desc: "תוכניות מעשיות לעובדים ומנהלים שרוצים לשלב AI בעבודה היומיומית ולהישאר רלוונטיים." },
        { icon: "◎", title: "ליווי מנהלים 1:1", en: "Executive Coaching", desc: "AI adoption אישי — בלי הייפ, עם תוצאות." },
        { icon: "▣", title: "AI Underground", en: "AI Underground", desc: "למידה בקבוצות קטנות ובאווירה ביתית ברעננה." },
        { icon: "◧", title: "תכניות מותאמות", en: "Tailor-Made Programs", desc: "עיצוב תכנית הדרכה מאפס לפי הצרכים הספציפיים של הארגון." },
        { icon: "◫", title: "AI Outsourcing", en: "AI Outsourcing", desc: "סוכנים, אוטומציה, כלים — מהרעיון לביצוע." },
      ],
    },

    testimonials: {
      label: "מה אומרים",
      heading: "משתתפים מספרים",
      items: [
        { text: "מאוד מעורר. התגלה לפני עולם שלם של אופציות שלא הכרתי.", role: "משתתף", org: "AI Academy, HIT" },
        { text: "Riki Levisman, an incredibly energetic and forward-thinking AI instructor. In just a few sessions, she helped us transform ideas into a clear PRD and MVP, showing how AI is not only accelerating execution but also reshaping the way we design, build, and think about products.", role: "משתתף", org: "תכנית מצוינות VISTAR, אזרבייג'ן" },
        { text: "קורס שפקח עיניים. נותן לעוף עם רעיונות ליישום בעולם המקצועי שלי.", role: "משתתף", org: "מרכז רפואי צפון" },
        { text: "ריקי מרצה נהדרת ומקצועית. הידע והשליטה שלה הופכים כל שיעור לחוויה. קורס חובה לכל אחד.", role: "צוות קליני", org: "מרכז רפואי העמק" },
      ],
    },

    contact: {
      label: "יצירת קשר",
      line1: "Ready to prompt",
      line2: "our future?",
      sub: "הרצאה, סדנה, ייעוץ — שלחו הודעה",
      whatsapp: "שלחו הודעה ב-WhatsApp",
    },

    footer: {
      copy: "© 2026 ריקי לויסמן",
      badge: "AI Change Maker",
    },
  },

  en: {
    dir: "ltr" as const,
    lang: "en",

    nav: {
      about: "About",
      services: "Services",
      contact: "Contact",
      cta: "Get in Touch",
    },

    hero: {
      eyebrow: "AI Change Maker",
      nameHe: "Riki\nLevisman",
      nameEn: "ריקי לויסמן",
      tagDim: "We can't predict\nthe future.",
      tagWarm: "But we can learn to\nprompt it.",
      ctaPrimary: "Let's Talk",
      ctaSecondary: "My Services",
    },

    about: {
      label: "Riki Levisman",
      heading: "Professional resilience and real results",
      headingAccent: "in the AI era",
      p1: "I work with managers and teams to build practical AI skills — not theory, not hype. Through personal coaching, workshops, and GenAI training programs, I help people actually use AI in their daily work and come out ahead.",
      p2: "Innovation Manager and Head of AI at FUTURE, HIT (Holon Institute of Technology). I've trained over 1,000 professionals across organizations, academic institutions, and medical centers — in Israel and abroad.",
      tags: ["1,000+ participants", "Workshops & adoption", "Academic institutions", "Executive coaching"],
    },

    services: {
      label: "What I offer",
      heading: "My Services",
      items: [
        { icon: "◈", title: "Lectures & Keynotes", en: "Lectures & Keynotes", desc: "For organizations, universities, training centers, and entrepreneurship programs — talks that land." },
        { icon: "◉", title: "Workshops & Training", en: "Workshops & Training", desc: "Hands-on GenAI programs for employees and managers who want to use AI at work and stay relevant." },
        { icon: "◎", title: "Executive Coaching 1:1", en: "Executive Coaching", desc: "Personal AI adoption — no hype, just results." },
        { icon: "▣", title: "AI Underground", en: "AI Underground", desc: "Small-group learning in an intimate setting. Real skills, real community." },
        { icon: "◧", title: "Tailor-Made Programs", en: "Tailor-Made Programs", desc: "Custom training built from scratch for your organization's specific needs." },
        { icon: "◫", title: "AI Outsourcing", en: "AI Outsourcing", desc: "Agents, automation, custom tools — from idea to execution." },
      ],
    },

    testimonials: {
      label: "What people say",
      heading: "Participants share",
      items: [
        { text: "Riki Levisman, an incredibly energetic and forward-thinking AI instructor. In just a few sessions, she helped us transform ideas into a clear PRD and MVP, showing how AI is not only accelerating execution but also reshaping the way we design, build, and think about products.", role: "Participant", org: "VISTAR Excellence Program, Azerbaijan" },
        { text: "A course that opened my eyes. It gives you the wings to actually implement AI in your professional world.", role: "Participant", org: "Tzafon Medical Center" },
        { text: "Riki is an excellent and professional lecturer. Her knowledge and command of the material turn every session into an experience. A must-attend course.", role: "Clinical team", org: "HaEmek Medical Center" },
        { text: "Eye-opening. A whole world of possibilities I didn't know existed.", role: "Participant", org: "AI Academy, HIT" },
      ],
    },

    contact: {
      label: "Get in touch",
      line1: "Ready to prompt",
      line2: "our future?",
      sub: "Lecture, workshop, consultation — send a message",
      whatsapp: "Message on WhatsApp",
    },

    footer: {
      copy: "© 2026 Riki Levisman",
      badge: "AI Change Maker",
    },
  },
};
