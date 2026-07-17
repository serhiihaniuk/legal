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
      provisionId: "ustawa-o-cudzoziemcach-art-141",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("141", "Art. 141")} не застосовує ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 9 до cudzoziemiec, тимчасово delegowany для świadczenie usług у Польщі роботодавцем, що має siedziba в іншій державі UE, EFTA–EOG або Швейцарії, якщо cudzoziemiec має право перебувати й zatrudnienie в цій державі.`,
          sourceLocator: "Art. 141",
        },
      ],
      summary:
        "Для визначеного транскордонного delegowanie стаття виключає лише одну підставу відмови, пов’язану з обороною, безпекою або порядком.",
      rules: [
        {
          locator: "cały przepis",
          explanation:
            "Потрібно підтвердити тимчасове delegowanie для świadczenie usług, siedziba pracodawca в названій державі та право cudzoziemiec перебувати й працювати там.",
        },
      ],
      legalEffect: foreignersLaw.text`${foreignersLaw.article("141", "Art. 141")} прибирає тільки застосування ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 9 у визначеній ситуації; інші умови й підстави відмови залишаються чинними.`,
      foreignersCase:
        "Перевірте фактичну організацію послуг, державу siedziba pracodawca і документи про право pobyt та zatrudnienie там. Назва договору сама не доводить delegowanie.",
    },
  ],
})
