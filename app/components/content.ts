export type Lang = "he" | "en";

export const content = {
  he: {
    dir: "rtl" as const,
    lang: "he",

    nav: {
      about: "אודות",
      lectures: "הרצאות",
      services: "איך עובדים איתי",
      contact: "קשר",
      cta: "יצירת קשר",
    },

    hero: {
      eyebrow: "AI Change Maker",
      nameHe: "ריקי\nלויסמן",
      nameEn: "RIKI LEVISMAN",
      tagDim: "We can't predict\nthe future.",
      tagWarm: "But we can learn to\nprompt it.",
      audiences: "אקדמיה · תעשייה · ארגונים ועמותות",
      offer: "הרצאות, סדנאות ובניית תכניות הכשרה ייעודיות",
      ctaPrimary: "דברו איתי",
      ctaSecondary: "ההרצאות שלי",
    },

    about: {
      label: "ריקי לויסמן",
      heading: "AI כשותף,",
      headingAccent: "לא כתחליף",
      p1: "אני מרצה, מנחה סדנאות ובונה תכניות הכשרה שהופכות את ה-AI לשותף אמיתי, באקדמיה, בתעשייה, בארגונים ובעמותות. בכל מפגש יש התנסות מעשית, וכל משתתף יוצא עם מדריך כתוב.",
      p2: "ביום-יום אני מנהלת חדשנות וראש תחום ה-AI במרכז היזמות והחדשנות של HIT, מכון טכנולוגי חולון.",
      tags: ["1,000+ משתתפים", "72% מהמשתתפים התחילו ליישם", "הרצאות בארץ ובחו\"ל"],
    },

    lectures: {
      label: "הרצאות",
      heading: "על מה אני מדברת",
      newBadge: "חדש",
      items: [
        {
          title: "AI for Students",
          en: "ללמוד עם AI כשותף",
          desc: "לסטודנטים מכל הפקולטות. איך לומדים עם AI בלי לוותר על החשיבה, ואיך הופכים את חומרי הקורס למחברת חכמה שמתפתחת עם הקורס ומלווה את הסטודנטים כמנטור אישי להשבחת תהליך הלמידה.",
          formats: "כשעה וחצי · בקמפוס או בזום",
          isNew: false,
        },
        {
          title: "AI לסגל אקדמי",
          en: "AI for Faculty",
          desc: "למרצים, לחוקרים ולצוותי מנהלה. סביבת עבודה עם AI: חומרי לימוד, מאמרים ועוזרים חכמים שמכירים את הקורס.",
          formats: "הרצאה · סדנה מעשית",
          isNew: false,
        },
        {
          title: "Physical AI בגובה העיניים",
          en: "Physical AI, Made Simple",
          desc: "רובוטים, רכבים אוטונומיים ומכונות שלומדות לפעול בעולם האמיתי. מה זה Physical AI ולמה מדברים עליו עכשיו, בלי נוסחאות ובלי קוד.",
          formats: "הרצאת מבוא · קורס של 3 מפגשים · סדנה של חצי יום",
          isNew: false,
        },
        {
          title: "AI בעבודה",
          en: "AI at Work",
          desc: "לארגונים, לעמותות ולצוותים. איך משלבים AI בעבודה היומיומית, מכתיבה וניתוח מידע ועד סוכנים, ומה לבדוק לפני שסומכים על התוצאה.",
          formats: "הרצאה · סדנה מעשית · תכנית הכשרה",
          isNew: false,
        },
        {
          title: "AI ליזמים",
          en: "מרעיון ל-MVP",
          desc: "ליזמים ולתכניות יזמות. מרעיון לאב טיפוס עובד בעזרת AI, גם בלי צוות פיתוח.",
          formats: "הרצאה · סדנה · מסלול בתכנית יזמות",
          isNew: false,
        },
        {
          title: "הורים בעידן ה-AI",
          en: "Parenting in the AI Era",
          desc: "השאלה היא לא אם הלומד ישתמש ב-AI, אלא איך: בעבודות, בהכנה לבחינות ובלמידה עצמית, אחת המיומנויות החשובות היום. AI שעוזר להבין, ולא AI שעושה את העבודה במקומו.",
          formats: "",
          isNew: true,
        },
      ],
    },

    services: {
      label: "איך עובדים איתי",
      heading: "הפורמטים",
      items: [
        { icon: "◈", title: "הרצאות", en: "Lectures & Keynotes", desc: "60 עד 90 דקות, לכנס, לאירוע חברה, ליום צוות, לפתיחה של תכנית או למפגש פרטי." },
        { icon: "◉", title: "סדנאות", en: "Hands-on Workshops", desc: "כל משתתף עובד על המחשב שלו ויוצא עם משהו שעובד." },
        { icon: "◧", title: "בניית תכניות הכשרה ייעודיות", en: "Dedicated Training Programs", desc: "בונים מאפס תכנית לפי הצרכים של המוסד, הארגון או העמותה: כמה מפגשים, תרגול בין המפגשים ומדריך מסודר." },
        { icon: "◎", title: "ליווי מנהלים 1:1", en: "Executive Coaching", desc: "ליווי אישי לשילוב AI בעבודה שלך, על המשימות האמיתיות שלך ובקצב שלך." },
      ],
    },

    watch: {
      label: "לצפייה",
      heading: "לראות אותי מדברת",
      newWindow: "(נפתח בחלון חדש)",
      items: [
        { title: "The Agentic Shift", desc: "הרצאה בערוץ היוטיוב של HIT", href: "https://youtu.be/g0QR738db68", cta: "לצפייה" },
        { title: "AI4RI", desc: "סביבת עבודה סוכנית למרצים ולסגל אקדמי, הרצאה ביוטיוב", href: "https://youtu.be/KjIk9ayPgPo", cta: "לצפייה" },
        { title: "AI Academy", desc: "הקלטות משלושה מחזורים", href: "https://future.hit.ac.il/ai-master-class/", cta: "לצפייה בהקלטות" },
      ],
    },

    gallery: [
      "ריקי לויסמן בהרצאת AI לארגון",
      "ריקי לויסמן בסדנת GenAI למנהלים",
      "ריקי לויסמן בכנס AI",
      "ריקי לויסמן בהכשרת AI לצוות רפואי",
      "ריקי לויסמן מרצה לקהל גדול",
      "ריקי לויסמן בסדנת AI לקבוצה קטנה",
      "ריקי לויסמן בתכנית VISTAR באזרבייג'ן",
      "ריקי לויסמן ב-AI Academy",
      "ריקי לויסמן",
    ],

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
      sub: "הרצאה, סדנה או ליווי? ספרו לי מי הקהל, כמה משתתפים ובערך מתי, ואחזור אליכם.",
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
      lectures: "Talks",
      services: "Work With Me",
      contact: "Contact",
      cta: "Get in Touch",
    },

    hero: {
      eyebrow: "AI Change Maker",
      nameHe: "Riki\nLevisman",
      nameEn: "ריקי לויסמן",
      tagDim: "We can't predict\nthe future.",
      tagWarm: "But we can learn to\nprompt it.",
      audiences: "Academia · Industry · Organizations & Nonprofits",
      offer: "Talks, workshops and dedicated training programs",
      ctaPrimary: "Let's Talk",
      ctaSecondary: "My Talks",
    },

    about: {
      label: "Riki Levisman",
      heading: "AI as a partner,",
      headingAccent: "not a replacement",
      p1: "I give talks, run workshops and build training programs that turn AI into a real partner, in academia, industry, organizations and nonprofits. Every session is hands-on, and every participant leaves with a written guide.",
      p2: "By day I'm Innovation Manager and Head of AI at the Entrepreneurship and Innovation Center of HIT, Holon Institute of Technology.",
      tags: ["1,000+ participants", "72% of participants started applying AI", "Talks in Israel and abroad"],
    },

    lectures: {
      label: "Talks",
      heading: "What I talk about",
      newBadge: "New",
      items: [
        {
          title: "AI for Students",
          en: "Learning with AI as a partner",
          desc: "For students in every faculty. Learning with AI without giving up on thinking, and turning course materials into a smart notebook that grows with the course and guides students like a personal mentor.",
          formats: "About 90 minutes · On campus or on Zoom",
          isNew: false,
        },
        {
          title: "AI for Faculty",
          en: "For lecturers and researchers",
          desc: "For lecturers, researchers and admin staff. An AI workspace: course materials, papers and smart assistants that know your course.",
          formats: "Talk · Hands-on workshop",
          isNew: false,
        },
        {
          title: "Physical AI, Made Simple",
          en: "AI in the physical world",
          desc: "Robots, autonomous vehicles and machines that learn to act in the real world. What Physical AI is and why everyone is talking about it, with no equations and no code.",
          formats: "Intro talk · 3-session course · Half-day workshop",
          isNew: false,
        },
        {
          title: "AI at Work",
          en: "For organizations and nonprofits",
          desc: "For organizations, nonprofits and teams. Bringing AI into everyday work, from writing and analysis to agents, and what to check before you trust the output.",
          formats: "Talk · Hands-on workshop · Training program",
          isNew: false,
        },
        {
          title: "AI for Entrepreneurs",
          en: "From idea to MVP",
          desc: "For founders and entrepreneurship programs. From idea to working prototype with AI, even without a dev team.",
          formats: "Talk · Workshop · Track within a program",
          isNew: false,
        },
        {
          title: "Parenting in the AI Era",
          en: "Helping learners use AI wisely",
          desc: "The question isn't whether learners will use AI, but how: for assignments, exam prep and self-directed learning, one of today's most important skills. AI that helps them understand, not AI that does the work for them.",
          formats: "",
          isNew: true,
        },
      ],
    },

    services: {
      label: "Work with me",
      heading: "Formats",
      items: [
        { icon: "◈", title: "Lectures & Keynotes", en: "Lectures & Keynotes", desc: "60 to 90 minutes, for a conference, company event, team day, program kickoff or private gathering." },
        { icon: "◉", title: "Hands-on Workshops", en: "Hands-on Workshops", desc: "Everyone works on their own laptop and leaves with something that works." },
        { icon: "◧", title: "Dedicated Training Programs", en: "Dedicated Training Programs", desc: "Built from scratch around the needs of your institution, organization or nonprofit: several sessions, practice in between and a clear guide." },
        { icon: "◎", title: "Executive Coaching 1:1", en: "Executive Coaching", desc: "Personal support for bringing AI into your work, on your real tasks and at your pace." },
      ],
    },

    watch: {
      label: "Watch",
      heading: "See me in action",
      newWindow: "(opens in a new window)",
      items: [
        { title: "The Agentic Shift", desc: "Talk on HIT's YouTube channel", href: "https://youtu.be/g0QR738db68", cta: "Watch" },
        { title: "AI4RI", desc: "An agentic workspace for lecturers and faculty, on YouTube", href: "https://youtu.be/KjIk9ayPgPo", cta: "Watch" },
        { title: "AI Academy", desc: "Recordings from three cohorts", href: "https://future.hit.ac.il/ai-master-class/", cta: "Watch recordings" },
      ],
    },

    gallery: [
      "Riki Levisman giving an AI talk to an organization",
      "Riki Levisman at a GenAI workshop for managers",
      "Riki Levisman at an AI conference",
      "Riki Levisman training a medical team in AI",
      "Riki Levisman speaking to a large audience",
      "Riki Levisman at a small-group AI workshop",
      "Riki Levisman at the VISTAR program in Azerbaijan",
      "Riki Levisman at AI Academy",
      "Riki Levisman",
    ],

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
      sub: "Talk, workshop or coaching? Tell me who the audience is, how many people and roughly when, and I'll get back to you.",
      whatsapp: "Message on WhatsApp",
    },

    footer: {
      copy: "© 2026 Riki Levisman",
      badge: "AI Change Maker",
    },
  },
};
