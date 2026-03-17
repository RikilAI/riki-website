import type { Metadata } from "next";
import { Playfair_Display, Assistant, Heebo } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const assistant = Assistant({
  variable: "--font-assistant",
  subsets: ["latin", "hebrew"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["latin", "hebrew"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ריקי לויסמן | מרצה AI, הכשרת AI לארגונים, הטמעת AI",
  description:
    "מחפשים מרצה AI לארגון, כנס או אקדמיה? ריקי לויסמן — הרצאות AI, סדנאות GenAI, הטמעת AI לארגונים וליווי מנהלים. 1,000+ משתתפים, 12+ ארגונים. 052-880-6346.",
  keywords: [
    // שם — branded
    "ריקי לויסמן", "Riki Levisman", "Rebecca Levisman", "ריבקה לויסמן",
    "רבקה לויסמן", "Rivka Levisman",
    // הרצאות — נפח גבוה
    "מרצה AI", "מרצה בינה מלאכותית", "מרצה GenAI",
    "מרצה AI לארגונים", "הרצאת AI לארגון", "הרצאת AI לכנס",
    "הרצאה על בינה מלאכותית לארגון", "הרצאה על ChatGPT לעובדים",
    "AI speaker Israel", "GenAI keynote speaker Israel",
    // סדנאות — נפח גבוה
    "סדנת AI לארגונים", "סדנת GenAI", "סדנת AI לעובדים",
    "סדנת AI למנהלים", "סדנת AI לצוות",
    "הכשרת AI לארגונים", "הכשרת GenAI", "הכשרת בינה מלאכותית לעובדים",
    "לימוד AI לעובדים", "AI workshop Israel", "corporate AI training Israel",
    // הטמעה וייעוץ — כוונת רכישה גבוהה
    "הטמעת AI בארגון", "ליווי הטמעת AI", "יועצת AI לארגונים",
    "מומחה AI לארגונים", "אסטרטגיית AI לארגון",
    "AI adoption consultant Israel", "AI transformation Israel",
    // ליווי מנהלים
    "ליווי מנהלים AI", "תוכנית AI למנהלים בכירים",
    "executive AI coaching", "AI coaching למנהלים",
    // אקדמיה
    "מרצה AI לאקדמיה", "מרצה AI במכללה", "AI לסגל אקדמי",
    // רפואה — נישה פתוחה
    "AI לצוותים רפואיים", "AI לבתי חולים", "הכשרת AI לצוות רפואי",
    "GenAI for healthcare Israel",
    // long-tail עם כוונת רכישה
    "מרצה AI לאירוע חברה", "hire AI speaker Israel",
    "book AI keynote speaker Israel", "AI training program employees Israel",
    // תוכניות
    "AI Underground", "AI Academy",
  ],
  authors: [{ name: "ריקי לויסמן", url: "https://www.linkedin.com/in/riki-levisman-7b8b6611/" }],
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: "https://rikilevisman.com",
    title: "ריקי לויסמן | מרצה AI, סדנאות GenAI, הטמעת AI לארגונים",
    description:
      "מרצה AI לארגונים, אקדמיה ומוסדות רפואיים. מובילת תכניות הטמעת AI וסדנאות GenAI. להזמנה: 052-880-6346.",
    siteName: "ריקי לויסמן",
    images: [
      {
        url: "https://rikilevisman.com/images/hero-main.png",
        width: 1200,
        height: 630,
        alt: "ריקי לויסמן — מרצה AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ריקי לויסמן | מרצה AI וסדנאות GenAI",
    description: "מרצה AI לארגונים, אקדמיה ומוסדות רפואיים. להזמנה: 052-880-6346.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://rikilevisman.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://rikilevisman.com/#person",
      "name": "ריקי לויסמן",
      "alternateName": ["Riki Levisman", "Rebecca Levisman", "ריבקה לויסמן"],
      "jobTitle": "AI Lecturer & GenAI Adoption Leader",
      "description": "מרצה AI ומובילת תכניות הטמעת בינה מלאכותית לארגונים, אקדמיה ומוסדות רפואיים. מלווה מנהלים 1:1 בהטמעת AI. מעבירה הרצאות, סדנאות ותכניות הדרכה מותאמות.",
      "knowsAbout": [
        "Generative AI", "GenAI", "AI Adoption", "AI in Healthcare",
        "AI Education", "AI Training for Organizations", "Innovation Management",
        "Organizational Change with AI", "Executive AI Coaching",
        "AI Workshops", "AI Lectures", "Prompt Engineering",
        "AI tools for professionals", "AI Academy", "AI Underground",
      ],
      "hasOccupation": [
        {
          "@type": "Occupation",
          "name": "AI Lecturer",
          "description": "מרצה AI לארגונים, אקדמיה ומוסדות רפואיים",
        },
        {
          "@type": "Occupation",
          "name": "GenAI Trainer",
          "description": "מעבירה סדנאות ותכניות הכשרה בתחום הבינה המלאכותית היוצרת",
        },
        {
          "@type": "Occupation",
          "name": "AI Adoption Consultant",
          "description": "מלווה ארגונים, מנהלים ועובדים בתהליכי הטמעת AI",
        },
      ],
      "sameAs": [
        "https://www.linkedin.com/in/riki-levisman-7b8b6611/",
        "https://www.youtube.com/watch?v=g0QR738db68",
        "https://www.hit.ac.il/staff/108870-%D7%A8%D7%99%D7%A7%D7%99-%D7%9C%D7%95%D7%99%D7%A1%D7%9E%D7%9F/",
        "https://future.hit.ac.il/team",
        "https://future.hit.ac.il/aiacademy-2",
        "https://future.hit.ac.il/ai-academy-3",
        "https://rikilai.github.io/the-ai-underground/",
        "https://hymc.org.il/?CategoryID=25&ArticleID=12347",
        "https://marketing.walla.co.il/item/3628554",
        "https://www.hit.ac.il/events/050320251300/",
        "https://gal-gefen.co.il/news/204746",
      ],
      "telephone": "+972528806346",
      "url": "https://rikilevisman.com",
    },
    {
      "@type": "Organization",
      "@id": "https://rikilevisman.com/#organization",
      "name": "FUTURE — מרכז יזמות וחדשנות, HIT",
      "alternateName": "FUTURE Center, Holon Institute of Technology",
      "parentOrganization": {
        "@type": "Organization",
        "name": "Holon Institute of Technology",
        "alternateName": "HIT — מכון טכנולוגי חולון",
        "url": "https://www.hit.ac.il",
      },
      "url": "https://future.hit.ac.il",
      "employee": [{ "@id": "https://rikilevisman.com/#person" }],
      "areaServed": "Israel",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+972528806346",
        "contactType": "Sales",
        "availableLanguage": ["Hebrew", "English"],
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://rikilevisman.com/#service",
      "name": "ריקי לויסמן — הרצאות, סדנאות והטמעת AI",
      "provider": { "@id": "https://rikilevisman.com/#person" },
      "serviceType": [
        "AI Lectures & Keynotes",
        "GenAI Workshops for Organizations",
        "AI Adoption Programs",
        "Executive AI Coaching",
        "Tailor-Made AI Training",
        "AI Outsourcing Projects",
        "AI for Healthcare Teams",
        "AI for Academic Institutions",
      ],
      "areaServed": "Israel",
      "availableLanguage": ["Hebrew", "English"],
      "telephone": "+972528806346",
    },
    {
      "@type": "ItemList",
      "name": "המלצות על ריקי לויסמן",
      "itemListElement": [
        {
          "@type": "Review",
          "reviewBody": "Riki Levisman — an incredibly energetic and forward-thinking AI instructor. In just a few sessions, she helped us transform ideas into a clear PRD and MVP, showing how AI is not only accelerating execution but also reshaping the way we design, build, and think about products.",
          "author": { "@type": "Person", "name": "משתתף" },
          "itemReviewed": { "@id": "https://rikilevisman.com/#person" },
          "publisher": { "@type": "Organization", "name": "תכנית מצוינות VISTAR, אזרבייג'ן" },
        },
        {
          "@type": "Review",
          "reviewBody": "ריקי מרצה נהדרת ומקצועית. הידע והשליטה שלה הופכים כל שיעור לחוויה. קורס חובה לכל אחד.",
          "author": { "@type": "Person", "name": "צוות קליני" },
          "itemReviewed": { "@id": "https://rikilevisman.com/#person" },
          "publisher": { "@type": "Organization", "name": "מרכז רפואי העמק" },
        },
        {
          "@type": "Review",
          "reviewBody": "קורס שפקח עיניים. נותן לעוף עם רעיונות ליישום בעולם המקצועי שלי.",
          "author": { "@type": "Person", "name": "משתתף" },
          "itemReviewed": { "@id": "https://rikilevisman.com/#person" },
          "publisher": { "@type": "Organization", "name": "מרכז רפואי צפון" },
        },
        {
          "@type": "Review",
          "reviewBody": "קורס חובה!! מעבירה את החומר בצורה מעניינת ומונגשת גם למי שלא מתמצא בתחום.",
          "author": { "@type": "Person", "name": "משתתף" },
          "itemReviewed": { "@id": "https://rikilevisman.com/#person" },
          "publisher": { "@type": "Organization", "name": "AI Academy, HIT" },
        },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "מחפשים מרצה AI לארגון?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ריקי לויסמן מעבירה הרצאות AI מותאמות לארגונים, מוסדות רפואיים, אקדמיה ותכניות יזמות. לפרטים: 052-880-6346.",
          },
        },
        {
          "@type": "Question",
          "name": "איך מזמינים סדנת AI לארגון?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ריקי מעצבת סדנות AI מותאמות לצרכי הארגון הספציפי. ניתן לפנות ב-WhatsApp: 052-880-6346.",
          },
        },
        {
          "@type": "Question",
          "name": "האם ריקי לויסמן מלווה מנהלים בהטמעת AI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "כן. ריקי מציעה ליווי אישי 1:1 למנהלים ומנכ\"לים שרוצים לאמץ AI בצורה אסטרטגית ומעשית.",
          },
        },
        {
          "@type": "Question",
          "name": "האם ריקי לויסמן מרצה גם בבתי חולים ומוסדות רפואיים?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "כן. ריקי הכשירה צוותים רפואיים במרכזים רפואיים כולל פוריה, הלל יפה והעמק.",
          },
        },
        {
          "@type": "Question",
          "name": "מה ההבדל בין הרצאת AI לסדנת AI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "הרצאת AI מתאימה לכנסים, ימי עיון וקהלים גדולים — חשיפה ותודעה. סדנת AI היא תהליך מעשי יותר לצוות ספציפי, שמסתיים עם כלים שאפשר להשתמש בהם מחר בבוקר. ריקי מציעה את שניהם.",
          },
        },
        {
          "@type": "Question",
          "name": "מה כוללת תכנית הטמעת AI לארגון?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "תכנית הטמעת AI מותאמת כוללת אבחון צרכים, סדנאות לצוותים, ליווי מנהלים, ובניית תכנית עבודה מעשית. ריקי מעצבת כל תכנית לפי הארגון הספציפי.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={`${playfair.variable} ${assistant.variable} ${heebo.variable}`}>
      <body className="antialiased font-body">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
