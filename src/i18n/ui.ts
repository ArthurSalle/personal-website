export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

export type LocalizedText = Record<Locale, string>;
export type LocalizedList = Record<Locale, string[]>;

export const ui = {
  en: {
    "meta.title": "Arthur Sallé | Product Engineer · Fullstack TypeScript",
    "meta.description":
      "Arthur Sallé, product engineer based in Angers, France. I design and ship products end-to-end, from the first workshop to production.",
    "header.role": "Product Engineer · Fullstack TypeScript",
    "header.available": "Available",
    "header.greeting": "Hello 👋",
    "header.bio1":
      "I'm a freelance Product Engineer and I enjoy turning ideas into real products. Web apps, mobile apps, marketplaces or AI features, I can get involved from the earliest conversations and take a project all the way to production.",
    "header.bio2":
      "I mostly work across the TypeScript stack with React, Expo, tRPC and PostgreSQL. I enjoy understanding the business behind a project, making the right product and technical decisions, and then getting hands-on with the code to bring it to life.",
    "header.bio3":
      "Every day, Claude Code, Codex and other AI tools help me move faster, test more ideas and keep learning.",
    "header.bio4":
      "I can work independently or join an existing team. I'm based in Angers and can also work in Nantes, Paris or remotely.",
    "header.bio5": "Got something in mind? Let's talk 🙂",
    "stack.title": "Stack",
    "projects.title": "Projects",
    "projects.caseStudy": "Case study",
    "how.title": "How I work",
    "xp.title": "Experiences",
    "case.context": "Context",
    "case.role": "Scope",
    "case.decisions": "Product decisions",
    "case.highlights": "Highlights",
    "case.stack": "Stack",
    "case.back": "Back",
    "case.visit": "Visit the project",
    "contact.title": "Get in touch",
    "contact.text":
      "A project, an opportunity, or just want to talk? Book a slot, or",
    "contact.email": "send me an email",
    "contact.book": "Book a call",
  },
  fr: {
    "meta.title": "Arthur Sallé | Product Engineer · Fullstack TypeScript",
    "meta.description":
      "Arthur Sallé, product engineer basé à Angers. Je conçois et livre des produits de bout en bout, du premier workshop jusqu'à la production.",
    "header.role": "Product Engineer · Fullstack TypeScript",
    "header.available": "Disponible",
    "header.greeting": "Hello 👋",
    "header.bio1":
      "Je suis Product Engineer freelance et j'aime transformer des idées en produits concrets. Applications web, apps mobiles, marketplaces ou fonctionnalités IA, je peux intervenir dès les premières discussions et accompagner le projet jusqu'à sa mise en production.",
    "header.bio2":
      "Je travaille surtout en fullstack TypeScript avec React, Expo, tRPC et PostgreSQL. J'aime comprendre le métier derrière un projet, réfléchir aux bons choix produit et techniques, puis mettre les mains dans le code pour donner vie à tout ça.",
    "header.bio3":
      "Au quotidien, Claude Code, Codex et d'autres outils d'IA m'aident à avancer plus vite, à tester davantage d'idées et à apprendre continuellement.",
    "header.bio4":
      "Je peux travailler seul ou rejoindre une équipe existante. Je suis basé à Angers, avec la possibilité de travailler à Nantes, Paris ou à distance.",
    "header.bio5": "Vous avez quelque chose en tête ? Discutons-en 🙂",
    "stack.title": "Stack",
    "projects.title": "Projets",
    "projects.caseStudy": "Étude de cas",
    "how.title": "Comment je travaille",
    "xp.title": "Expériences",
    "case.context": "Contexte",
    "case.role": "Périmètre",
    "case.decisions": "Décisions produit",
    "case.highlights": "Points clés",
    "case.stack": "Stack",
    "case.back": "Retour",
    "case.visit": "Voir le projet",
    "contact.title": "Contact",
    "contact.text":
      "Un projet, une opportunité, ou juste envie d'échanger ? Réservez un créneau, ou",
    "contact.email": "écrivez-moi",
    "contact.book": "Réserver un créneau",
  },
} as const;

export type UIKey = keyof (typeof ui)["en"];

export function getLocale(currentLocale: string | undefined): Locale {
  return currentLocale === "en" ? "en" : "fr";
}

export function useTranslations(locale: Locale) {
  return function t(key: UIKey): string {
    return ui[locale][key];
  };
}
