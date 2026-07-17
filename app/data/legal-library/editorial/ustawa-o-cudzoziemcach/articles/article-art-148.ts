import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-148",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("148", "Art. 148")} передбачає cofnięcie zezwolenie з ${foreignersLaw.article("144", "art. 144")}, якщо його використовують не за наданою метою, виникла обставина ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 2, 4, 5 або 8, або jednostka переважно сприяє незаконному в’їзду чи pobyt.`,
          sourceLocator: "Art. 148 ust. 1 pkt 1–3",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`За ${foreignersLaw.article("148", "art. 148")} ust. 2 дозвіл можна cofnięcie, якщо cudzoziemiec був skreślony з listy studentów або doktorantów.`,
          sourceLocator: "Art. 148 ust. 2",
        },
      ],
      summary:
        "Навчальний дозвіл може бути скасований за спеціальними обставинами використання, діяльності закладу або статусу студента.",
      rules: [
        {
          locator: "ust. 1 pkt 1–3",
          explanation: foreignersLaw.text`Поза ${foreignersLaw.article("101", "art. 101")} pkt 1–2 wojewoda cofnie дозвіл, якщо мета використання не відповідає наданій, настала одна з названих обставин ${foreignersLaw.article("100", "art. 100")} або jednostka діє переважно для незаконного в’їзду/побиту.`,
        },
        {
          locator: "ust. 2",
          explanation:
            "Cudzoziemiec може втратити дозвіл через skreślenie зі списку studentów або doktorantów; це формулювання дає органу можливість, а не автоматичний наслідок.",
        },
      ],
      legalEffect:
        "Cofnięcie потребує рішення компетентного органу та правильної підстави; повідомлення закладу або сама перерва в навчанні не замінюють decyzja.",
      foreignersCase:
        "Встановіть точну подію і дату, перевірте мотивування cofnięcie, статус списку студентів і фактичну мету pobyt. Розділяйте обов’язкові та факультативні формулювання статті.",
    },
  ],
})
