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
      provisionId: "ustawa-o-cudzoziemcach-art-364",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("364", "Art. 364")} дозволяє повторний wjazd до Польщі іноземцю, який виїхав у зв’язку з транзитом, якщо дозвіл відкликано або відмовлено, в’їзд до транзитної держави був без дозволу, виконання повернення не вдалося або транзит неможливий з іншої причини.`,
          sourceLocator: "Art. 364 pkt 1–5",
        },
      ],
      summary:
        "Якщо повітряний транзит зривається або стає неможливим, закон передбачає дозвіл іноземцю знову в’їхати до Польщі в перелічених ситуаціях.",
      rules: [
        {
          locator: "pkt 1–3",
          explanation:
            "Підставами є відкликання або відмова в транзиті, початок транзиту за notyfikacja після відмови, а також в’їзд без дозволу до держави транзиту.",
        },
        {
          locator: "pkt 4–5",
          explanation:
            "Повторний wjazd передбачений, якщо примусове виконання або посадка не вдалися чи транзит неможливий з іншої причини.",
        },
      ],
      legalEffect:
        "Це спеціальна можливість повернення після невдалого транзиту, а не загальна віза чи нова підстава для довгострокового перебування.",
      foreignersCase:
        "Отримайте підтвердження причини невдалого транзиту та покажіть його Straż Graniczna; після повторного в’їзду окремо визначте чинну підставу pobyt.",
    },
  ],
})
