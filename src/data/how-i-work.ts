import type { LocalizedText } from "@/i18n/ui";

export type HowIWorkStep = {
  title: LocalizedText;
  description: LocalizedText;
};

export const howIWorkIntro: LocalizedText = {
  en: "I keep a close eye on how our tooling evolves and use AI code generation as leverage: shipping faster, and investing the time saved where it matters most, in the architecture, the product decisions and the business stakes.",
  fr: "Je suis de près l'évolution des outils du métier et je m'appuie sur la génération de code par IA comme levier : livrer plus vite, et investir le temps gagné là où il compte le plus, l'architecture, les décisions produit et les enjeux business.",
};

export const howIWorkSteps: HowIWorkStep[] = [
  {
    title: { en: "Discovery", fr: "Cadrage" },
    description: {
      en: "Everything starts with workshops with the client. I dig into the business, build the domain vocabulary and prioritize what really matters.",
      fr: "Tout commence par des workshops avec le client. Je cherche à comprendre le métier, à poser le vocabulaire du domaine et à prioriser ce qui compte vraiment.",
    },
  },
  {
    title: { en: "Spec & decisions", fr: "Spec & décisions" },
    description: {
      en: "I write a structured spec before any code, covering the scope and the documented product trade-offs, then break it down into Linear tickets. The product gets decided before it gets developed.",
      fr: "J'écris une spec structurée avant de coder, avec le périmètre et les arbitrages produit documentés, puis je la découpe en tickets sur Linear. Le produit se décide avant de se développer.",
    },
  },
  {
    title: { en: "Ship", fr: "Ship" },
    description: {
      en: "I move in short iterations all the way to production, with CI/CD and an early release. I'd rather have real feedback than frozen specs.",
      fr: "J'avance par itérations courtes jusqu'à la production, avec du CI/CD et une mise en ligne tôt. Je préfère le feedback réel aux specs figées.",
    },
  },
  {
    title: { en: "Iterate", fr: "Itération" },
    description: {
      en: "Then I measure, listen to users and adjust. A shipped product is not a finished product.",
      fr: "Ensuite je mesure, j'écoute les retours utilisateurs et j'ajuste. Un produit livré n'est pas un produit fini.",
    },
  },
];
