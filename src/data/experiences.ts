import type { LocalizedText } from "@/i18n/ui";

export type Experience = {
  role: LocalizedText;
  company: string;
  url?: string;
  period: LocalizedText;
  description: LocalizedText;
};

export const experiences: Experience[] = [
  {
    role: { en: "Product Engineer", fr: "Product Engineer" },
    company: "Freelance",
    period: { en: "2024 - Present", fr: "2024 - Aujourd'hui" },
    description: {
      en: "I design and ship web and mobile products end-to-end: scoping, spec, development, production. Depending on the mission, I start from scratch or take over an existing product, on my own or within an existing team.",
      fr: "Je conçois et livre des produits web et mobile de bout en bout : cadrage, spec, développement, mise en production. Selon les missions, je pars de zéro ou je reprends un produit existant, en solo ou intégré à une équipe déjà en place.",
    },
  },
  {
    role: { en: "Developer", fr: "Développeur" },
    company: "UndefinedHQ",
    period: { en: "2024 - Present", fr: "2024 - Aujourd'hui" },
    description: {
      en: "A collective of two developers and a designer, where I design and ship client products: shared design work, cross code reviews, joint delivery.",
      fr: "Collectif de deux développeurs et un designer, avec lequel je conçois et livre des produits clients : conception partagée, revues de code croisées, livraison en commun.",
    },
  },
  {
    role: { en: "Frontend Developer", fr: "Développeur Frontend" },
    company: "Searocco Studio",
    url: "https://searocco.studio/",
    period: { en: "2022 - 2023", fr: "2022 - 2023" },
    description: {
      en: "Frontend developer within a team of several developers, on existing codebases. That's where I built my working habits: code reviews, team processes, continuous delivery.",
      fr: "Développeur frontend au sein d'une équipe de plusieurs développeurs, sur des codebases existantes. C'est là que j'ai pris mes habitudes de travail : revues de code, process d'équipe, livraison en continu.",
    },
  },
];
