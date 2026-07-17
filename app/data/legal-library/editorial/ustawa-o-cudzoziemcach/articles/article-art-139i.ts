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
      provisionId: "ustawa-o-cudzoziemcach-art-139i",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("139i", "Art. 139i")} встановлює, що zezwolenie за ${foreignersLaw.article("139a", "art. 139a")} надає або у наданні відмовляє wojewoda за місцем siedziba jednostka przyjmująca у формі decyzja; ust. 2 і 3 позначені як uchylony.`,
          sourceLocator: "Art. 139i ust. 1–3",
        },
      ],
      summary:
        "Стаття визначає компетентний орган і водночас чітко показує скасовані ust. 2–3.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Wojewoda, właściwy за siedziba jednostka przyjmująca, видає decyzja про надання або відмову.",
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Обидва ustępи позначені як «(uchylony)» і не містять чинного правила в цій редакції.",
        },
      ],
      legalEffect:
        "Чинною частиною є правило про wojewoda та decyzja; скасовані ust. 2–3 не створюють окремих повноважень чи обов’язків.",
      foreignersCase:
        "Визначте siedziba jednostka przyjmująca для компетенції wojewoda й не використовуйте uchylone ust. 2–3 як правову підставу.",
    },
  ],
})
