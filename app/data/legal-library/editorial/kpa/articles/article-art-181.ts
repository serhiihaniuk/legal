import { createLegalTextAuthor } from "../../../legal-text"

import { defineKpaEditorialPart } from "../define-kpa-part"

const kpaLaw = createLegalTextAuthor("kpa")
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "181",
      provisionId: "kpa-art-181",
      reviewStatus: "reviewed",
      summary: kpaLaw.text`Норма відсилає визначення органів оскарження у справах соціального страхування до спеціальних законів. Принцип субсидіарного застосування KPA з ${kpaLaw.article("180", "art. 180 § 1")} діє відповідно.`,
      rules: [
        {
          locator: "перше речення",
          explanation:
            "Органи właściwe do rozpatrywania odwołań визначаються нормами про соціальне страхування.",
        },
        {
          locator: "друге речення",
          explanation: kpaLaw.text`${kpaLaw.article("180", "Art. 180 § 1")} застосовується відповідно.`,
        },
      ],
      legalEffect:
        "Адресата оскарження не можна встановлювати лише за загальною схемою KPA; вирішальним є спеціальний страховий закон.",
      foreignersCase:
        "Якщо іноземець оскаржує акт у сфері ubezpieczeń społecznych, потрібно читати pouczenie і спеціальні правила про właściwy organ, а не переносити маршрут odwołania зі справи про pobyt.",
    },
  ],
})
