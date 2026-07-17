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
      provisionId: "ustawa-o-cudzoziemcach-art-153",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("153", "Art. 153")} ust. 1 передбачає строк дозволу ${foreignersLaw.article("151", "art. 151")} на період badań або prac rozwojowych у Польщі, якщо підстава обґрунтовує побyt менше 3 років; ust. 2 встановлює аналогічний строк для mobilność długoterminowa, але не довший за іноземний документ або візу.`,
          sourceLocator: "Art. 153 ust. 1–2",
        },
      ],
      summary:
        "Строк дослідницького дозволу прив’язаний до фактичного проєкту, а строк довгострокової mobilność додатково обмежений іноземним документом.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Для дозволу на prowadzenie badań строк дорівнює підтвердженому періоду досліджень/праць, коли він коротший за 3 роки.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Для mobilność długoterminowa строк дорівнює періоду досліджень у Польщі, але не може перевищувати строк чинності документа pobyt або період перебування за візою «naukowiec» іншої держави UE.",
        },
      ],
      legalEffect:
        "Бажаний заявником строк не може перевищити доказану тривалість діяльності та спеціальні максимуми статті.",
      foreignersCase: foreignersLaw.text`Порівняйте umowa o przyjęciu, строк проєкту, рішення і чинність іноземного документа; окремо перевірте, чи йдеться про ${foreignersLaw.article("151", "art. 151")} або ${foreignersLaw.article("151b", "art. 151b")}.`,
    },
  ],
})
