// All visible text on rikilevisman.com, Hebrew and English.
// Rule: only verified facts. Anything still awaiting Riki's confirmation is NOT in this file
// (see Projects/My Professional WEBSITE/content/proposal-2026-11-17-positioning.md).

import type { PageKey } from "../lib/site";

type Card = { title: string; sub?: string; desc: string; foot?: string; href?: PageKey };
type Project = { org: string; desc: string; type: string };
type ProjectGroup = { title: string; items: Project[] };
type Lecture = { title: string; en: string; desc: string; formats: string; isNew: boolean };
type Service = { title: string; en: string; desc: string };
type Watch = { title: string; desc: string; href: string; cta: string };
type Quote = { text: string; role: string; org: string };
type ProgramLink = { title: string; desc: string; href?: string; cta?: string };

const he = {
  skip: "דלג לתוכן הראשי",
  brand: "ריקי לויסמן",
  nav: {
    strategy: "אסטרטגיה",
    education: "למידה",
    innovation: "חדשנות ויזמות",
    projects: "פרויקטים",
    talks: "הרצאות",
    about: "אודות",
    cta: "דברו איתי",
    menu: "תפריט",
    close: "סגירת התפריט",
    switchLabel: "English version",
    switchText: "EN",
  },
  newWindow: "(נפתח בחלון חדש)",
  readMore: "לפרטים",

  meta: {
    home: {
      title: "ריקי לויסמן | AI וחדשנות: אסטרטגיה, למידה ויישום",
      description: "ריקי לויסמן מובילה תהליכי חדשנות ו-AI, יועצת אסטרטגית, מרצה ומפתחת תוכניות הכשרה וחדשנות לארגונים, לאקדמיה ולמגזר הציבורי.",
    },
    strategy: { title: "אסטרטגיה וחדשנות AI | ריקי לויסמן", description: "פיתוח אסטרטגיית AI, הטמעה בארגונים, איתור הזדמנויות ועיצוב תהליכי עבודה חדשים. וגם מחקר, ניהול ידע ותהליכי אסטרטגיה בפרויקטים של מדיניות." },
    education: { title: "למידה עם AI ועתיד העבודה | ריקי לויסמן", description: "פיתוח והעברה של תוכניות למידה ב-AI לאקדמיה ולארגונים: אוריינות AI, GenAI ומיומנויות לעולם העבודה המשתנה." },
    innovation: { title: "תוכניות חדשנות ויזמות | ריקי לויסמן", description: "תוכניות יזמות, האקתונים ו-AI Sprints ואירועי חדשנות שמחברים בין אקדמיה, תעשייה ומגזר ציבורי." },
    projects: { title: "פרויקטים | ריקי לויסמן", description: "מבחר פרויקטים במערכת הבריאות, במגזר הציבורי, בתוכניות יזמות ובעמותות." },
    talks: { title: "הרצאות ו-Keynotes | ריקי לויסמן", description: "הרצאות AI, Keynotes לכנסים, סדנאות GenAI ותוכניות הכשרה לארגונים ולאקדמיה." },
    about: { title: "אודות | ריקי לויסמן", description: "ריקי לויסמן: מנהלת חדשנות וראש תחום ה-AI ב-FUTURE, HIT, ויועצת עצמאית. אסטרטגיה, למידה, יזמות ויישום של AI." },
    contact: { title: "יצירת קשר | ריקי לויסמן", description: "הרצאה, ייעוץ או תוכנית? WhatsApp, מייל או LinkedIn." },
  },

  hero: {
    tagDim: ["We can't predict", "the future."],
    tagWarm: ["But we can learn to", "it."],
    eyebrow: "AI וחדשנות | אסטרטגיה, למידה ויישום",
    name: ["ריקי", "לויסמן"],
    nameAlt: "Riki Levisman",
    line: "מובילה תהליכי חדשנות ו-AI, יועצת אסטרטגית, מרצה ומפתחת תוכניות. בארגונים, באקדמיה ובמגזר הציבורי.",
    ctaPrimary: "דברו איתי",
    ctaSecondary: "ההרצאות שלי",
    photoAlt: "ריקי לויסמן עם מיקרופון",
  },

  home: {
    pillarsLabel: "מה אני עושה",
    pillars: [
      { title: "אסטרטגיה וחדשנות AI", desc: "איתור הזדמנויות ל-AI בארגון, בניית תוכנית והובלת היישום.", href: "strategy" },
      { title: "למידה עם AI ועתיד העבודה", desc: "תוכניות הכשרה, הרצאות וסדנאות לאקדמיה ולארגונים, מאוריינות AI ועד מיומנויות לעולם העבודה המשתנה.", href: "education" },
      { title: "תוכניות חדשנות ויזמות", desc: "תוכניות יזמות, האקתונים ו-AI Sprints שהופכים אתגר אמיתי לפתרון ולאב טיפוס.", href: "innovation" },
      { title: "מחקר, ידע ומדיניות", desc: "ניהול ידע ותהליכי אסטרטגיה בפרויקטים של מחקר ומדיניות.", href: "strategy" },
    ] as Card[],
    talksLabel: "הרצאות ו-Keynotes",
    talksText: "הרצאות AI לארגונים ולאקדמיה, Keynotes לכנסים, סדנאות GenAI מעשיות ותוכניות הכשרה.",
    talksFeatured: { title: "החיים עם סוכני AI", sub: "הרצאת השראה · Keynote", desc: "איך סוכני AI אישיים משנים את הדרך שבה אנחנו עובדים, מתנהלים, יוצרים וחיים." },
    talksLink: "לכל ההרצאות",
    projectsLabel: "פרויקטים נבחרים",
    projectsLink: "לכל הפרויקטים",
    audiencesLabel: "עם מי אני עובדת",
    audiences: ["ארגונים ותעשייה", "אקדמיה ומוסדות מחקר", "מגזר ציבורי ורשויות", "מערכת הבריאות", "עמותות", "יזמים ותוכניות יזמות"],
  },

  strategy: {
    label: "אסטרטגיה וחדשנות AI",
    h1: "אסטרטגיה וחדשנות AI",
    lead: "אני עובדת עם הנהלות וצוותים על שתי שאלות: איפה AI יכול לעזור לארגון באמת, ואיך עוברים מרעיון ליישום.",
    whatLabel: "מה זה כולל",
    what: ["פיתוח אסטרטגיית AI לארגון", "הטמעת AI בארגון", "אסטרטגיית חדשנות ויישום", "איתור הזדמנויות לשילוב AI", "עיצוב מודלים ותהליכי עבודה חדשים"],
    howLabel: "איך עובדים",
    how: [
      { title: "ייעוץ אסטרטגי", desc: "עבודה עם ההנהלה על כיוון, סדרי עדיפויות ותוכנית יישום." },
      { title: "ליווי מנהלים 1:1", desc: "ליווי אישי לשילוב AI בעבודה, על המשימות האמיתיות ובקצב של המנהל." },
      { title: "הרצאות וסדנאות להנהלות", desc: "שפה משותפת להנהלה לפני שמתחילים, ותרגול על אתגרים של הארגון." },
    ] as Card[],
    researchLabel: "מחקר, ידע ומדיניות",
    researchText: "ניהול ידע ותהליכי אסטרטגיה בפרויקטים של מחקר ומדיניות, ושימוש בכלי AI כדי לתמוך בתהליכי מחקר וידע.",
    projectsLabel: "פרויקטים",
    projects: [
      { org: "לאומית שירותי בריאות", desc: "הובלת תהליכי ניהול ידע ואסטרטגיה בפרויקט מדיניות.", type: "ניהול ידע ואסטרטגיה" },
      { org: "עיריית שדרות", desc: "פרויקט מחקר.", type: "מחקר" },
    ] as Project[],
    cta: "רוצים לבדוק איפה AI יכול לעזור אצלכם?",
  },

  education: {
    label: "למידה עם AI ועתיד העבודה",
    h1: "למידה עם AI ועתיד העבודה",
    lead: "אני מפתחת ומעבירה תוכניות למידה ב-AI לאקדמיה ולארגונים, מאוריינות AI בסיסית ועד מיומנויות לעולם העבודה המשתנה.",
    whatLabel: "מה זה כולל",
    what: ["הכשרה ופיתוח מקצועי ב-AI", "פיתוח תוכניות AI לאקדמיה ולארגונים", "למידה של GenAI", "אוריינות AI ומיומנויות לעתיד", "הרצאות, סדנאות ו-Keynotes"],
    programsLabel: "תוכניות שפיתחתי ב-HIT",
    programs: [
      { title: "AI Academy", desc: "תוכנית למידה ב-AI יוצר לסטודנטים, לחוקרים ולסגל האקדמי. שלושה מחזורים.", href: "https://future.hit.ac.il/ai-master-class/", cta: "לצפייה בהקלטות" },
      { title: "AI Study", desc: "למידה עם AI כשותף ולא כתחליף: שימוש ב-AI להבנת חומר, לתרגול ולפיתוח חשיבה עצמאית.", href: "https://future.hit.ac.il/classes/ai-study/", cta: "לדף התוכנית" },
      { title: "AI Ready: Building a Professional Edge", desc: "הכנה לעולם העבודה המשתנה לסטודנטים בשנה האחרונה ולבוגרים טריים: עבודה עם AI כשותף, הצבת מטרות, בניית תהליכי עבודה וניהול משימות.", href: "https://future.hit.ac.il/classes/ai-ready/", cta: "לדף התוכנית" },
    ] as ProgramLink[],
    projectsLabel: "פרויקטים",
    projects: [
      { org: "מרכז רפואי צפון", desc: "קורס AI לצוותים רפואיים.", type: "הכשרה" },
      { org: "8200 BETA", desc: "עבודה עם סוכני AI.", type: "הרצאות" },
      { org: "טק-קריירה", desc: "הרצאה: חיפוש עבודה עם AI.", type: "הרצאה" },
    ] as Project[],
    talksLink: "להרצאות ולסדנאות",
  },

  innovation: {
    label: "תוכניות חדשנות ויזמות",
    h1: "תוכניות חדשנות ויזמות",
    lead: "תוכניות יזמות, האקתונים ו-AI Sprints שמחברים בין אקדמיה, תעשייה ומגזר ציבורי, והופכים אתגר אמיתי לפתרון ולאב טיפוס.",
    whatLabel: "מה זה כולל",
    what: ["תוכניות יזמות", "האקתונים ו-AI Sprints", "אירועי חדשנות", "פיתוח יוזמות ו-MVP מבוססי AI", "חיבור בין אקדמיה, תעשייה ומגזר ציבורי"],
    hitLabel: "ב-FUTURE, HIT",
    hitText: "ב-FUTURE, מרכז היזמות והחדשנות של HIT, אני מתכננת ומפיקה האקתונים ו-AI Sprints לסטודנטים יחד עם חברות וארגונים, ומלמדת AI בתוכניות היזמות.",
    projectsLabel: "פרויקטים",
    projects: [
      { org: "VISTAR, באקו, אזרבייג'ן", desc: "תוכנית יזמות.", type: "תוכנית יזמות" },
      { org: "המרכז הרפואי העמק", desc: "האקתון לעובדי בית החולים, וסדנאות AI בתכנית יזמות.", type: "האקתון · סדנאות" },
      { org: "המרכז הרפואי הלל יפה", desc: "יום חדשנות.", type: "אירוע חדשנות" },
      { org: "אוניברסיטת תל אביב", desc: "יזמות בעידן ה-AI.", type: "הרצאה וסדנה" },
    ] as Project[],
  },

  projects: {
    label: "פרויקטים",
    h1: "פרויקטים",
    lead: "מבחר פרויקטים בארגונים, באקדמיה ובמגזר הציבורי.",
    groups: [
      {
        title: "מערכת הבריאות",
        items: [
          { org: "מרכז רפואי צפון", desc: "קורס AI לצוותים רפואיים.", type: "הכשרה" },
          { org: "המרכז הרפואי העמק", desc: "האקתון לעובדי בית החולים, וסדנאות AI בתכנית יזמות.", type: "האקתון · סדנאות" },
          { org: "המרכז הרפואי הלל יפה", desc: "יום חדשנות.", type: "אירוע חדשנות" },
          { org: "לאומית שירותי בריאות", desc: "הובלת תהליכי ניהול ידע ואסטרטגיה בפרויקט מדיניות.", type: "ניהול ידע ואסטרטגיה" },
        ],
      },
      { title: "מגזר ציבורי ומחקר", items: [{ org: "עיריית שדרות", desc: "פרויקט מחקר.", type: "מחקר" }] },
      { title: "יזמות וחדשנות", items: [{ org: "VISTAR, באקו, אזרבייג'ן", desc: "תוכנית יזמות.", type: "תוכנית יזמות" }] },
      {
        title: "עמותות",
        items: [
          { org: "8200 BETA", desc: "עבודה עם סוכני AI.", type: "הרצאות" },
          { org: "אוניברסיטת תל אביב", desc: "יזמות בעידן ה-AI.", type: "הרצאה וסדנה" },
          { org: "טק-קריירה", desc: "הרצאה: חיפוש עבודה עם AI.", type: "הרצאה" },
        ],
      },
    ] as ProjectGroup[],
  },

  talks: {
    label: "הרצאות ו-Keynotes",
    h1: "הרצאות ו-Keynotes",
    lead: "אני מפתחת תוכניות, וגם עומדת מול הקהל: הרצאות, Keynotes, סדנאות מעשיות ותוכניות הכשרה, בעברית ובאנגלית.",
    lecturesHeading: "על מה אני מדברת",
    newBadge: "חדש",
    lectures: [
      { title: "החיים עם סוכני AI", en: "הרצאת השראה · Keynote", desc: "לכנסים, לאירועים ולמפגשי סלון. איך סוכני AI אישיים משנים את הדרך שבה אנחנו עובדים, מתנהלים, יוצרים וחיים.", formats: "כנס · אירוע · מפגש סלון", isNew: false },
      { title: "AI for Students", en: "ללמוד עם AI כשותף", desc: "לסטודנטים מכל הפקולטות. איך לומדים עם AI בלי לוותר על החשיבה, ואיך הופכים את חומרי הקורס למחברת חכמה שמתפתחת עם הקורס ומלווה את הסטודנטים כמנטור אישי לאורך כל הלמידה.", formats: "כשעה וחצי · בקמפוס או בזום", isNew: false },
      { title: "AI לסגל אקדמי", en: "AI for Faculty", desc: "למרצים, לחוקרים ולצוותי מנהלה. סביבת עבודה עם AI: חומרי לימוד, מאמרים ועוזרים חכמים שמכירים את הקורס.", formats: "הרצאה · סדנה מעשית", isNew: false },
      { title: "Physical AI בגובה העיניים", en: "Physical AI, Made Simple", desc: "מבוא ל-AI שיוצא מהמסך ופועל בעולם הפיזי. מה זה Physical AI, במה הוא שונה מהצ'אט שכולנו מכירים ולמה מדברים עליו עכשיו. דוגמאות מהתעשייה וסימולציות שאפשר לשחק איתן, בלי נוסחאות ובלי קוד.", formats: "הרצאת מבוא · קורס של 3 מפגשים · סדנה של חצי יום", isNew: false },
      { title: "AI בעבודה", en: "AI at Work", desc: "לארגונים, לעמותות, לצוותים וליזמים. איך משלבים AI בעבודה היומיומית, מכתיבה וניתוח מידע ועד סוכנים שעובדים איתנו, ואיך עוברים מרעיון לאב טיפוס בעזרת סוכני AI.", formats: "הרצאה · סדנה מעשית · תכנית הכשרה", isNew: false },
      { title: "הורים בעידן ה-AI", en: "Parenting in the AI Era", desc: "להורים שרוצים להנחות את הילדים, בכל גיל, איך ללמוד נכון עם AI: בעבודות, בהכנה לבחינות ובלמידה עצמית, אחת המיומנויות החשובות היום. AI שעוזר להבין, ולא AI שעושה את העבודה במקומם.", formats: "", isNew: true },
    ] as Lecture[],
    formatsHeading: "הפורמטים",
    formats: [
      { title: "הרצאות ו-Keynotes", en: "Lectures & Keynotes", desc: "60 עד 90 דקות, לכנס, לאירוע חברה, ליום צוות, לפתיחה של תכנית או למפגש פרטי." },
      { title: "סדנאות GenAI", en: "Hands-on Workshops", desc: "כל משתתף עובד על המחשב שלו ויוצא עם משהו שעובד." },
      { title: "תוכניות הכשרה לארגונים", en: "Training Programs", desc: "בונים מאפס תכנית לפי הצרכים של המוסד, הארגון או העמותה: כמה מפגשים, תרגול בין המפגשים ומדריך מסודר." },
      { title: "ליווי מנהלים 1:1", en: "Executive Coaching", desc: "ליווי אישי לשילוב AI בעבודה שלך, על המשימות האמיתיות שלך ובקצב שלך." },
    ] as Service[],
    watchHeading: "לראות אותי מדברת",
    watch: [
      { title: "The Agentic Shift", desc: "הרצאה בערוץ היוטיוב של HIT", href: "https://youtu.be/g0QR738db68", cta: "לצפייה" },
      { title: "AI4RI", desc: "סביבת עבודה סוכנית למרצים ולסגל אקדמי, הרצאה ביוטיוב", href: "https://youtu.be/KjIk9ayPgPo", cta: "לצפייה" },
      { title: "AI Academy", desc: "הקלטות משלושה מחזורים", href: "https://future.hit.ac.il/ai-master-class/", cta: "לצפייה בהקלטות" },
    ] as Watch[],
  },

  about: {
    label: "אודות",
    h1: "על ריקי לויסמן",
    portraitAlt: "ריקי לויסמן",
    paragraphs: [
      "אני מובילה תהליכי חדשנות ו-AI, יועצת אסטרטגית, מרצה ומפתחת תוכניות הכשרה וחדשנות. אני עובדת בחיבור שבין אסטרטגיית AI, למידה, יזמות ויישום מעשי, בארגונים, באקדמיה ובמגזר הציבורי.",
      "מאז 2019 אני ב-FUTURE, מרכז היזמות והחדשנות של HIT, מכון טכנולוגי חולון, וכיום מנהלת חדשנות וראש תחום ה-AI. שם אני מתכננת ומובילה תוכניות הכשרה ב-AI לסטודנטים, לחוקרים ולסגל, מפיקה האקתונים ו-AI Sprints יחד עם חברות וארגונים, ומנהלת קהילת AI של סגל וסטודנטים.",
      "במקביל אני עובדת כיועצת עצמאית: ליווי אסטרטגי, ניהול ידע ומחקר בפרויקטים של מדיניות, והרצאות וסדנאות לארגונים, לעמותות ולמוסדות אקדמיים וציבוריים.",
      "לפני כן עבדתי כ-20 שנה בתפקידי ניהול באסטרטגיה, בשיווק ובפיתוח עסקי בחברות תקשורת, טכנולוגיה ופיננסים.",
    ],
    areasLabel: "התחומים",
  },

  testimonials: {
    label: "מה אומרים",
    heading: "משתתפים מספרים",
    items: [
      { text: "מאוד מעורר. התגלה לפני עולם שלם של אופציות שלא הכרתי.", role: "משתתף", org: "AI Academy, HIT" },
      { text: "Riki Levisman, an incredibly energetic and forward-thinking AI instructor. In just a few sessions, she helped us transform ideas into a clear PRD and MVP, showing how AI is not only accelerating execution but also reshaping the way we design, build, and think about products.", role: "משתתף", org: "תכנית מצוינות VISTAR, אזרבייג'ן" },
      { text: "קורס שפקח עיניים. נותן לעוף עם רעיונות ליישום בעולם המקצועי שלי.", role: "משתתף", org: "מרכז רפואי צפון" },
      { text: "ריקי מרצה נהדרת ומקצועית. הידע והשליטה שלה הופכים כל שיעור לחוויה. קורס חובה לכל אחד.", role: "צוות קליני", org: "מרכז רפואי העמק" },
    ] as Quote[],
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
  galleryPause: "עצירת התמונות",
  galleryPlay: "הפעלת התמונות",

  contact: {
    label: "יצירת קשר",
    h1: "יצירת קשר",
    line1: "Ready to prompt",
    line2: "our future?",
    sub: "הרצאה, ייעוץ או תוכנית? ספרו לי על הארגון ועל מה שאתם צריכים, ואחזור אליכם.",
    whatsapp: "שלחו הודעה ב-WhatsApp",
    phoneLabel: "טלפון",
  },

  footer: { copy: "© 2026 ריקי לויסמן", badge: "AI & Innovation" },
};

const en: typeof he = {
  skip: "Skip to main content",
  brand: "Riki Levisman",
  nav: {
    strategy: "Strategy",
    education: "Education",
    innovation: "Innovation",
    projects: "Projects",
    talks: "Talks",
    about: "About",
    cta: "Let's Talk",
    menu: "Menu",
    close: "Close menu",
    switchLabel: "לגרסה העברית",
    switchText: "עב",
  },
  newWindow: "(opens in a new window)",
  readMore: "Learn more",

  meta: {
    home: {
      title: "Riki Levisman | AI & Innovation: Strategy, Education & Implementation",
      description: "Riki Levisman is an AI and Innovation leader, strategic consultant, lecturer and program developer for organizations, academia and the public sector.",
    },
    strategy: { title: "AI Strategy & Innovation | Riki Levisman", description: "AI strategy, organizational AI adoption, opportunity mapping and new workflows. Plus research, knowledge management and strategy in policy projects." },
    education: { title: "AI Education & Future of Work | Riki Levisman", description: "Designing and delivering AI learning programs for academia and organizations: AI literacy, GenAI and future-of-work skills." },
    innovation: { title: "Innovation & Entrepreneurship Programs | Riki Levisman", description: "Entrepreneurship programs, hackathons, AI Sprints and innovation events connecting academia, industry and the public sector." },
    projects: { title: "Projects | Riki Levisman", description: "Selected projects in healthcare, the public sector, entrepreneurship programs and nonprofits." },
    talks: { title: "Lectures & Keynotes | Riki Levisman", description: "AI lectures, conference keynotes, GenAI workshops and training programs for organizations and academia." },
    about: { title: "About | Riki Levisman", description: "Riki Levisman: Innovation Manager and Head of AI at FUTURE, HIT, and independent consultant. AI strategy, education, entrepreneurship and implementation." },
    contact: { title: "Contact | Riki Levisman", description: "A talk, consulting or a program? WhatsApp, email or LinkedIn." },
  },

  hero: {
    tagDim: ["We can't predict", "the future."],
    tagWarm: ["But we can learn to", "it."],
    eyebrow: "AI & Innovation | Strategy, Education & Implementation",
    name: ["Riki", "Levisman"],
    nameAlt: "ריקי לויסמן",
    line: "AI and Innovation leader, strategic consultant, lecturer and program developer, across organizations, academia and the public sector.",
    ctaPrimary: "Let's Talk",
    ctaSecondary: "My Talks",
    photoAlt: "Riki Levisman holding a microphone",
  },

  home: {
    pillarsLabel: "What I do",
    pillars: [
      { title: "AI Strategy & Innovation", desc: "Identifying AI opportunities, building the plan and leading implementation.", href: "strategy" },
      { title: "AI Education & Future of Work", desc: "Training programs, lectures and workshops for academia and organizations, from AI literacy to future-of-work skills.", href: "education" },
      { title: "Innovation & Entrepreneurship Programs", desc: "Entrepreneurship programs, hackathons and AI Sprints that turn real challenges into solutions and prototypes.", href: "innovation" },
      { title: "Research, Knowledge & Policy", desc: "Knowledge management and strategy processes in research and policy projects.", href: "strategy" },
    ],
    talksLabel: "Lectures & Keynotes",
    talksText: "AI lectures for organizations and academia, conference keynotes, hands-on GenAI workshops and training programs.",
    talksFeatured: { title: "Living with AI Agents", sub: "Keynote", desc: "How personal AI agents are changing the way we work, manage our lives, create and live." },
    talksLink: "All talks",
    projectsLabel: "Selected projects",
    projectsLink: "All projects",
    audiencesLabel: "Who I work with",
    audiences: ["Organizations and industry", "Academia and research institutions", "Public sector and municipalities", "Healthcare", "Nonprofits", "Entrepreneurs and entrepreneurship programs"],
  },

  strategy: {
    label: "AI Strategy & Innovation",
    h1: "AI Strategy & Innovation",
    lead: "I work with leadership teams on two questions: where AI can genuinely help the organization, and how to move from idea to implementation.",
    whatLabel: "What it covers",
    what: ["AI strategy development", "Organizational AI adoption", "Innovation strategy and implementation", "Identifying opportunities for AI integration", "Designing new organizational models and workflows"],
    howLabel: "How we work",
    how: [
      { title: "Strategic consulting", desc: "Working with leadership on direction, priorities and an implementation plan." },
      { title: "Executive coaching 1:1", desc: "Personal support for bringing AI into the executive's own work, on real tasks and at their pace." },
      { title: "Talks and workshops for leadership", desc: "A shared language for the leadership team before starting, and practice on the organization's own challenges." },
    ],
    researchLabel: "Research, Knowledge & Policy",
    researchText: "Knowledge management and strategy processes in research and policy projects, and applying AI tools to support research and knowledge work.",
    projectsLabel: "Projects",
    projects: [
      { org: "Leumit Health Services", desc: "Leading knowledge management and strategy processes within a policy project.", type: "Knowledge management & strategy" },
      { org: "Sderot Municipality", desc: "Research project.", type: "Research" },
    ],
    cta: "Want to explore where AI can help your organization?",
  },

  education: {
    label: "AI Education & Future of Work",
    h1: "AI Education & Future of Work",
    lead: "I design and deliver AI learning programs for academia and organizations, from basic AI literacy to the skills needed in a changing world of work.",
    whatLabel: "What it covers",
    what: ["AI training and professional development", "Academic and organizational AI programs", "Generative AI education", "AI literacy and future skills", "Lectures, workshops and keynotes"],
    programsLabel: "Programs I developed at HIT",
    programs: [
      { title: "AI Academy", desc: "A Generative AI learning program for students, researchers and faculty. Three cohorts.", href: "https://future.hit.ac.il/ai-master-class/", cta: "Watch recordings" },
      { title: "AI Study", desc: "Learning with AI as a partner, not a replacement: using AI to understand material, practice and build independent thinking.", href: "https://future.hit.ac.il/classes/ai-study/", cta: "Program page" },
      { title: "AI Ready: Building a Professional Edge", desc: "Preparing final-year students and recent graduates for a changing world of work: working with AI as a partner, setting goals, building workflows and managing tasks.", href: "https://future.hit.ac.il/classes/ai-ready/", cta: "Program page" },
    ],
    projectsLabel: "Projects",
    projects: [
      { org: "Northern Medical Center", desc: "AI training course for medical teams.", type: "Training" },
      { org: "8200 BETA", desc: "Working with AI agents.", type: "Lectures" },
      { org: "Tech-Career", desc: "Lecture: Job search with AI.", type: "Lecture" },
    ],
    talksLink: "Lectures and workshops",
  },

  innovation: {
    label: "Innovation & Entrepreneurship Programs",
    h1: "Innovation & Entrepreneurship Programs",
    lead: "Entrepreneurship programs, hackathons and AI Sprints that connect academia, industry and the public sector, and turn real challenges into solutions and prototypes.",
    whatLabel: "What it covers",
    what: ["Entrepreneurship programs", "Hackathons and AI Sprints", "Innovation events", "Developing AI-based initiatives and MVPs", "Connecting academia, industry and the public sector"],
    hitLabel: "At FUTURE, HIT",
    hitText: "At FUTURE, HIT's Entrepreneurship and Innovation Center, I design and produce hackathons and AI Sprints for students together with companies and organizations, and teach AI in the entrepreneurship programs.",
    projectsLabel: "Projects",
    projects: [
      { org: "VISTAR, Baku, Azerbaijan", desc: "Entrepreneurship program.", type: "Entrepreneurship program" },
      { org: "HaEmek Medical Center", desc: "A hackathon for hospital employees, and AI workshops within an entrepreneurship program.", type: "Hackathon · Workshops" },
      { org: "Hillel Yaffe Medical Center", desc: "Innovation Day.", type: "Innovation event" },
      { org: "Tel Aviv University", desc: "Entrepreneurship in the AI era.", type: "Lecture and workshop" },
    ],
  },

  projects: {
    label: "Projects",
    h1: "Projects",
    lead: "Selected projects across organizations, academia and the public sector.",
    groups: [
      {
        title: "Healthcare",
        items: [
          { org: "Northern Medical Center", desc: "AI training course for medical teams.", type: "Training" },
          { org: "HaEmek Medical Center", desc: "A hackathon for hospital employees, and AI workshops within an entrepreneurship program.", type: "Hackathon · Workshops" },
          { org: "Hillel Yaffe Medical Center", desc: "Innovation Day.", type: "Innovation event" },
          { org: "Leumit Health Services", desc: "Leading knowledge management and strategy processes within a policy project.", type: "Knowledge management & strategy" },
        ],
      },
      { title: "Public Sector & Research", items: [{ org: "Sderot Municipality", desc: "Research project.", type: "Research" }] },
      { title: "Entrepreneurship & Innovation", items: [{ org: "VISTAR, Baku, Azerbaijan", desc: "Entrepreneurship program.", type: "Entrepreneurship program" }] },
      {
        title: "Nonprofits",
        items: [
          { org: "8200 BETA", desc: "Working with AI agents.", type: "Lectures" },
          { org: "Tel Aviv University", desc: "Entrepreneurship in the AI era.", type: "Lecture and workshop" },
          { org: "Tech-Career", desc: "Lecture: Job search with AI.", type: "Lecture" },
        ],
      },
    ],
  },

  talks: {
    label: "Lectures & Keynotes",
    h1: "Lectures & Keynotes",
    lead: "I build programs, and I also stand in front of the room: lectures, keynotes, hands-on workshops and training programs, in Hebrew and English.",
    lecturesHeading: "What I talk about",
    newBadge: "New",
    lectures: [
      { title: "Living with AI Agents", en: "Keynote", desc: "For conferences, events and salon gatherings. How personal AI agents are changing the way we work, manage our lives, create and live.", formats: "Conference · Event · Salon gathering", isNew: false },
      { title: "AI for Students", en: "Learning with AI as a partner", desc: "For students in every faculty. Learning with AI without giving up on thinking, and turning course materials into a smart notebook that grows with the course and guides students like a personal mentor throughout their learning.", formats: "About 90 minutes · On campus or on Zoom", isNew: false },
      { title: "AI for Faculty", en: "For lecturers and researchers", desc: "For lecturers, researchers and admin staff. An AI workspace: course materials, papers and smart assistants that know your course.", formats: "Talk · Hands-on workshop", isNew: false },
      { title: "Physical AI, Made Simple", en: "AI in the physical world", desc: "An introduction to AI that leaves the screen and acts in the physical world. What Physical AI is, how it differs from the chatbots we all know and why everyone is talking about it now. Industry examples and simulations you can play with, no equations and no code.", formats: "Intro talk · 3-session course · Half-day workshop", isNew: false },
      { title: "AI at Work", en: "For organizations, teams and founders", desc: "For organizations, nonprofits, teams and founders. Bringing AI into everyday work, from writing and analysis to agents that work alongside us, and going from idea to prototype with AI agents.", formats: "Talk · Hands-on workshop · Training program", isNew: false },
      { title: "Parenting in the AI Era", en: "Guiding your children to learn with AI", desc: "For parents who want to guide their children, at any age, to learn well with AI: for assignments, exam prep and self-directed learning, one of today's most important skills. AI that helps them understand, not AI that does the work for them.", formats: "", isNew: true },
    ],
    formatsHeading: "Formats",
    formats: [
      { title: "Lectures & Keynotes", en: "Lectures & Keynotes", desc: "60 to 90 minutes, for a conference, company event, team day, program kickoff or private gathering." },
      { title: "GenAI Workshops", en: "Hands-on Workshops", desc: "Everyone works on their own laptop and leaves with something that works." },
      { title: "Training Programs", en: "Training Programs", desc: "Built from scratch around the needs of your institution, organization or nonprofit: several sessions, practice in between and a clear guide." },
      { title: "Executive Coaching 1:1", en: "Executive Coaching", desc: "Personal support for bringing AI into your work, on your real tasks and at your pace." },
    ],
    watchHeading: "See me in action",
    watch: [
      { title: "The Agentic Shift", desc: "Talk on HIT's YouTube channel", href: "https://youtu.be/g0QR738db68", cta: "Watch" },
      { title: "AI4RI", desc: "An agentic workspace for lecturers and faculty, on YouTube", href: "https://youtu.be/KjIk9ayPgPo", cta: "Watch" },
      { title: "AI Academy", desc: "Recordings from three cohorts", href: "https://future.hit.ac.il/ai-master-class/", cta: "Watch recordings" },
    ],
  },

  about: {
    label: "About",
    h1: "About Riki Levisman",
    portraitAlt: "Riki Levisman",
    paragraphs: [
      "I lead AI and innovation processes as a strategic consultant, lecturer and program developer, working at the intersection of AI strategy, education, entrepreneurship and practical implementation, across organizations, academia and the public sector.",
      "Since 2019 I have been at FUTURE, the Entrepreneurship and Innovation Center of HIT, Holon Institute of Technology, where I am currently Innovation Manager and Head of AI. There I design and lead AI training programs for students, researchers and faculty, produce hackathons and AI Sprints with companies and organizations, and run an AI community of faculty and students.",
      "Alongside this role I work as an independent consultant: strategic support, knowledge management and research in policy projects, and lectures and workshops for organizations, nonprofits and academic and public institutions.",
      "Before that, I spent about 20 years in management roles in strategy, marketing and business development at telecom, technology and finance companies.",
    ],
    areasLabel: "Areas",
  },

  testimonials: {
    label: "What people say",
    heading: "Participants share",
    items: [
      { text: "Riki Levisman, an incredibly energetic and forward-thinking AI instructor. In just a few sessions, she helped us transform ideas into a clear PRD and MVP, showing how AI is not only accelerating execution but also reshaping the way we design, build, and think about products.", role: "Participant", org: "VISTAR Excellence Program, Azerbaijan" },
      { text: "A course that opened my eyes. It gives you the wings to actually implement AI in your professional world.", role: "Participant", org: "Northern Medical Center" },
      { text: "Riki is an excellent and professional lecturer. Her knowledge and command of the material turn every session into an experience. A must-attend course.", role: "Clinical team", org: "HaEmek Medical Center" },
      { text: "Eye-opening. A whole world of possibilities I didn't know existed.", role: "Participant", org: "AI Academy, HIT" },
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
  galleryPause: "Pause photos",
  galleryPlay: "Play photos",

  contact: {
    label: "Get in touch",
    h1: "Contact",
    line1: "Ready to prompt",
    line2: "our future?",
    sub: "A talk, consulting or a program? Tell me about your organization and what you need, and I'll get back to you.",
    whatsapp: "Message on WhatsApp",
    phoneLabel: "Phone",
  },

  footer: { copy: "© 2026 Riki Levisman", badge: "AI & Innovation" },
};

export const copy = { he, en };
export type Copy = typeof he;
