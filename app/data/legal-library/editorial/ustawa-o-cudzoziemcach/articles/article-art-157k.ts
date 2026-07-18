import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-157k",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("157k", "Art. 157k")}, крім ${foreignersLaw.article("101", "art. 101")} pkt 1–2, передбачає cofnięcie дозволу з ${foreignersLaw.article("157g", "art. 157g")} ust. 1, якщо його використовують не за метою, виникла обставина ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 2, 4, 5 або 8, або настала обставина ${foreignersLaw.article("157j", "art. 157j")} ust. 1 pkt 1–3.`,
          sourceLocator: "Art. 157k pkt 1–3",
        },
      ],
      summary: foreignersLaw.text`Волонтерський дозвіл може бути скасований за використання не за метою, окремі загальні підстави або проблеми одиниці, названі ${foreignersLaw.article("157j", "art. 157j")}.`,
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "Порівнюється фактичне використання дозволу з метою участі у програмі волонтеріату.",
        },
        {
          locator: "pkt 2",
          explanation: foreignersLaw.text`Потрібно встановити хоча б одну обставину ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 2, 4, 5 або 8.`,
        },
        {
          locator: "pkt 3",
          explanation: foreignersLaw.text`Потрібно встановити хоча б одну обставину ${foreignersLaw.article("157j", "art. 157j")} ust. 1 pkt 1–3; перелік не можна розширювати за аналогією.`,
        },
      ],
      legalEffect:
        "Cofnięcie є наслідком рішення органу після встановлення точної обставини; невідповідність у документах ще не є автоматичним рішенням.",
      foreignersCase: foreignersLaw.text`Порівняйте дозвіл, umowa і фактичні волонтерські послуги, встановіть дату події та перевірте конкретний пункт ${foreignersLaw.article("100", "art. 100")} або ${foreignersLaw.article("157j", "157j")}.`,
    },
  ],
})
