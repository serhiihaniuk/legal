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
      article: "118",
      provisionId: "kpa-art-118",
      reviewStatus: "reviewed",
      summary:
        "Ugoda потребує затвердження органом, який перевіряє її законність, потрібну співдію та захищені інтереси.",
      rules: [
        {
          locator: "§ 1–2",
          explanation: kpaLaw.text`Затверджує орган, перед яким її укладено; за потреби позиції іншого органу діє ${kpaLaw.article("106", "art. 106")}.`,
        },
        {
          locator: "§ 3",
          explanation:
            "Відмова обов’язкова при порушенні права, відсутності потрібної позиції або порушенні суспільного чи słusznego interesu сторін.",
        },
      ],
      legalEffect:
        "Підписана угода без затвердження ще не набуває передбаченої KPA сили.",
      foreignersCase:
        "У справі іноземця орган не може затвердити домовленість, яка обходить законні умови дозволу або обов’язкову позицію іншого органу.",
    },
  ],
})
