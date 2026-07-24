export const locales = ["en", "fr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export type LocalizedText = Record<Locale, string>;
export type LocalizedList = Record<Locale, string[]>;

export const ui = {
  en: {
    "meta.title": "Arthur Sallé | Product Engineer · Fullstack TypeScript",
    "meta.description":
      "Arthur Sallé, product engineer based in Angers, France. I design and ship products end-to-end, from the first workshop to production.",
    "header.role": "Product Engineer · Fullstack TypeScript",
    "header.available": "Available",
    "header.bio1":
      "I design and ship products end-to-end, from the first workshop to production. I spend most of my time in fullstack TypeScript (React, tRPC, Expo), building marketplaces, payment flows and AI features that real users rely on. Based in Angers, France, I work on-site in Angers, Nantes or Paris, or fully remote.",
    "header.bio2":
      "I work solo or in a team, and I care as much about the product as the code. I'm also part of the collective",
    "header.bio2b":
      "where a designer, another developer and I ship products that are both well-crafted and business-driven.",
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
    "contact.text": "Have a project in mind?",
    "contact.cta": "Let's talk",
  },
  fr: {
    "meta.title": "Arthur Sallé | Product Engineer · Fullstack TypeScript",
    "meta.description":
      "Arthur Sallé, product engineer basé à Angers. Je conçois et livre des produits de bout en bout, du premier workshop jusqu'à la production.",
    "header.role": "Product Engineer · Fullstack TypeScript",
    "header.available": "Disponible",
    "header.bio1":
      "Je conçois et livre des produits de bout en bout, du premier workshop jusqu'à la mise en production. Je passe l'essentiel de mon temps en fullstack TypeScript (React, tRPC, Expo), à construire des marketplaces, des parcours de paiement et des features IA utilisées par de vrais utilisateurs. Basé à Angers, j'interviens sur Angers, Nantes, Paris ou en full remote.",
    "header.bio2":
      "Je travaille en solo ou en équipe, et le produit compte autant pour moi que le code. Je fais aussi partie du collectif",
    "header.bio2b":
      "où je livre des produits soignés et orientés business avec un designer et un autre développeur.",
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
    "contact.text": "Un projet en tête ?",
    "contact.cta": "Parlons-en",
  },
} as const;

export type UIKey = keyof (typeof ui)["en"];

export function getLocale(currentLocale: string | undefined): Locale {
  return currentLocale === "fr" ? "fr" : "en";
}

export function useTranslations(locale: Locale) {
  return function t(key: UIKey): string {
    return ui[locale][key];
  };
}
