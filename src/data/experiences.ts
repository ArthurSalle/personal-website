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
    company: "Freelance · UndefinedHQ",
    period: { en: "2024 - Present", fr: "2024 - Aujourd'hui" },
    description: {
      en: "I design and ship web and mobile products end-to-end: scoping, spec, development, production. Depending on the mission, I start from scratch or take over an existing product, on my own or within an existing team. I also work within UndefinedHQ, a collective of two developers and a designer: shared design work, peer code reviews, joint delivery.",
      fr: "Je conçois et livre des produits web et mobile de bout en bout : cadrage, spec, développement, mise en production. Selon les missions, je pars de zéro ou je reprends un produit existant, en solo ou intégré à une équipe déjà en place. J'interviens aussi au sein d'UndefinedHQ, collectif de deux développeurs et un designer : conception partagée, revues de code croisées, livraison en commun.",
    },
  },
  {
    role: { en: "Fullstack Developer", fr: "Développeur Fullstack" },
    company: "Searocco Studio",
    period: { en: "2022 - 2023", fr: "2022 - 2023" },
    description: {
      en: "Fullstack developer within a team of several developers, on existing codebases. That's where I built my working habits: code reviews, team processes, continuous delivery.",
      fr: "Développeur fullstack au sein d'une équipe de plusieurs développeurs, sur des codebases existantes. C'est là que j'ai pris mes habitudes de travail : revues de code, process d'équipe, livraison en continu.",
    },
  },
];
