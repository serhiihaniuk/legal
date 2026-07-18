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
      provisionId: "ustawa-o-cudzoziemcach-art-143a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("143a", "Art. 143a")} вимагає, щоб рішення про udzielenie дозволу в ситуації ${foreignersLaw.article("142", "art. 142")} ust. 3 містило okres ważności, podmiot powierzający pracę та stanowisko, на якому cudzoziemiec має працювати.`,
          sourceLocator: "Art. 143a ust. 1",
        },
        {
          kind: "statute-text",
          text: "Якщо cudzoziemiec звільнений окремими правилами від вимоги zezwolenie na pracę, рішення має містити інформацію про право працювати на умовах відповідної підстави звільнення.",
          sourceLocator: "Art. 143a ust. 2",
        },
      ],
      summary: foreignersLaw.text`У бізнесовому дозволі за ${foreignersLaw.article("142", "art. 142")} ust. 3 рішення фіксує строк і конкретні параметри роботи.`,
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "У рішенні називаються okres ważności, podmiot powierzający pracę і stanowisko.",
        },
        {
          locator: "ust. 2",
          explanation:
            "За наявності звільнення від zezwolenie na pracę рішення також зазначає правову підставу й умови цього звільнення.",
        },
      ],
      legalEffect:
        "Ці реквізити визначають межі наданого дозволу та відображають підставу доступу до праці; вони не скасовують умов окремого закону про працю.",
      foreignersCase:
        "Порівняйте рішення з фактичною функцією в spółka, podmiot powierzający pracę і підставою звільнення від zezwolenie na pracę. Розбіжність оцінюйте окремо від самого pobyt.",
    },
  ],
})
