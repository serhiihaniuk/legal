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
      provisionId: "ustawa-o-cudzoziemcach-art-157e",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("157e", "Art. 157e")}, крім ${foreignersLaw.article("101", "art. 101")} pkt 1–2, передбачає cofnięcie дозволу з ${foreignersLaw.article("157a", "art. 157a")} ust. 1, якщо його використовують не за метою, виникла обставина ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 2, 4, 5 або 8, або настала одна з обставин ${foreignersLaw.article("157d", "art. 157d")} ust. 1 pkt 1–3.`,
          sourceLocator: "Art. 157e pkt 1–3",
        },
      ],
      summary:
        "Стажовий дозвіл може бути скасований за використання не за метою, окремі загальні підстави або спеціальні проблеми organizator.",
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "Потрібно встановити, що дозвіл фактично використовується не для погодженого staż.",
        },
        {
          locator: "pkt 2",
          explanation: foreignersLaw.text`Застосовується хоча б одна обставина ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 2, 4, 5 або 8.`,
        },
        {
          locator: "pkt 3",
          explanation: foreignersLaw.text`Застосовується хоча б одна з обставин ${foreignersLaw.article("157d", "art. 157d")} ust. 1 pkt 1–3, без розширення переліку за аналогією.`,
        },
      ],
      legalEffect:
        "Cofnięcie потребує рішення органу і доказу відповідної обставини; конфлікт із organizator сам по собі не встановлює підставу.",
      foreignersCase: foreignersLaw.text`Порівняйте рішення, umowa і реальну діяльність, встановіть дату події та перевірте точне відсилання до ${foreignersLaw.article("100", "art. 100")} і ${foreignersLaw.article("157d", "157d")}.`,
    },
  ],
})
