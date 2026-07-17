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
      provisionId: "ustawa-o-cudzoziemcach-art-120b",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("120b", "Art. 120b")} уповноважує ministra właściwego do spraw wewnętrznych визначити, w drodze rozporządzenia, wzór formularza wniosku про зміну zezwolenia na pobyt czasowy i pracę, про яке йдеться в ${foreignersLaw.article("120a", "art. 120a")} ust. 1.`,
          sourceLocator: "Art. 120b",
        },
      ],
      summary:
        "Стаття є делегацією для встановлення форми заяви про зміну zezwolenia na pobyt czasowy i pracę.",
      rules: [
        {
          locator: "Art. 120b",
          explanation:
            "Розпорядження має враховувати sprawność postępowania та можливість skutecznej weryfikacji przesłanek зміни zezwolenia.",
        },
      ],
      legalEffect:
        "Норма визначає підставу для окремої форми formularza, але сама не встановлює її граф чи інших вимог до заяви.",
      foreignersCase:
        "Для зміни zezwolenia перевірте чинний wzór formularza та заповніть його за фактичними обставинами справи; ця стаття сама не підтверджує, що зміна буде надана.",
    },
  ],
})
