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
      provisionId: "ustawa-o-cudzoziemcach-art-167",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`У провадженні про udzielenie або cofnięcie дозволу з ${foreignersLaw.article("159", "art. 159")} ust. 1 ${foreignersLaw.article("167", "Art. 167")} вимагає врахувати інтерес małoletnie dziecko, характер і сталість сімейних зв'язків у Польщі, період pobyt та зв'язки з державою походження.`,
          sourceLocator: "Art. 167 pkt 1–4",
        },
      ],
      summary:
        "У reunification-справі орган має оцінити чотири сімейні та соціальні фактори, а не лише формальні документи.",
      rules: [
        {
          locator: "pkt 1–2",
          explanation:
            "Інтерес дитини та характер і trwałość więzi rodzinne на території Польщі мають бути предметом реальної оцінки з урахуванням фактів, а не формальною згадкою.",
        },
        {
          locator: "pkt 3–4",
          explanation:
            "Орган враховує період перебування cudzoziemiec у Польщі та наявність сімейних, культурних і соціальних зв'язків із державою походження; стаття не встановлює наперед, який фактор переважає.",
        },
      ],
      legalEffect: foreignersLaw.text`Ці критерії є обов'язковою частиною оцінки надання або cofnięcie permit з ${foreignersLaw.article("159", "art. 159")} ust. 1, але самі по собі не замінюють його матеріальні умови.`,
      foreignersCase:
        "Подайте конкретні докази інтересу дитини, фактичного спільного життя, тривалості перебування та зв'язків із державою походження; у разі спору перевірте, чи орган відповів на кожен критерій.",
    },
  ],
})
