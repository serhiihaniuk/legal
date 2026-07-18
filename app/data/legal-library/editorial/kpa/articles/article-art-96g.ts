import { createLegalTextAuthor } from "../../../legal-text"

import { defineKpaEditorialPart } from "../define-kpa-part"

const kpaLaw = createLegalTextAuthor("kpa")
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "96g",
      provisionId: "kpa-art-96g",
      reviewStatus: "reviewed",
      summary:
        "Mediator зобов’язаний бути безстороннім, розкрити сумнівні обставини та відмовитися від mediacji, якщо безсторонність викликає сумнів.",
      rules: [
        {
          locator: "§ 1",
          explanation: kpaLaw.text`Обставини, що можуть створювати сумнів, розкриваються негайно, включно з відповідними підставами з ${kpaLaw.article("24", "art. 24")}.`,
        },
        {
          locator: "§ 2",
          explanation:
            "За сумніву mediator відмовляється і повідомляє учасників та орган, якщо він не є учасником.",
        },
      ],
      legalEffect:
        "Виявлений конфлікт перешкоджає цій особі продовжувати mediację.",
      foreignersCase:
        "Іноземець може оцінювати не лише професійність, а й фактичну безсторонність mediatora у своїй справі.",
    },
  ],
})
