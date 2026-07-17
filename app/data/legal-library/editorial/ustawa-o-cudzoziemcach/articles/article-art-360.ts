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
      provisionId: "ustawa-o-cudzoziemcach-art-360",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("360", "Art. 360")} дозволяє провести tranzyt drogą powietrzną після отримання zezwolenia центрального органу іншої держави ЄС, якщо міжнародна угода не передбачає іншого.`,
          sourceLocator: "Art. 360",
        },
      ],
      summary:
        "Повітряний транзит через іншу державу ЄС для виконання повернення потребує попереднього дозволу її центрального органу, якщо договір не встановлює інший порядок.",
      rules: [
        {
          locator: "całość",
          explanation:
            "Zezwolenie має надходити від centralny organ іншої держави ЄС; це стосується транзиту, а не самого рішення про повернення.",
        },
      ],
      legalEffect:
        "Стаття встановлює умову транзиту, але не гарантує, що інша держава надасть дозвіл або що переліт відбудеться.",
      foreignersCase:
        "У документах відокремте державу призначення від держави транзиту й перевірте, чи отримано окреме zezwolenie або діє міжнародний виняток.",
    },
  ],
})
