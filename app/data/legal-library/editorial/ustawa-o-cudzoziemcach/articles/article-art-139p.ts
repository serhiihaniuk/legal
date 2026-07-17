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
      provisionId: "ustawa-o-cudzoziemcach-art-139p",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("139p", "Art. 139p")} обмежує строк zezwolenia за ${foreignersLaw.article("139o", "art. 139o")} строком дії ICT-документа іншої держави, а для стажера встановлює максимум 1 рік і ту саму верхню межу документа.`,
          sourceLocator: "Art. 139p ust. 1–2",
        },
      ],
      summary:
        "Строк довгострокового ICT-zezwolenia залежить від строку іноземного документа та ролі стажера.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Загальний строк zezwolenia не може бути довшим за okres ważności документа з adnotacją «ICT», виданого іншою державою ЄС.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Для роботи стажером zezwolenie надається максимум на 1 рік і водночас не довше за строк іноземного ICT-документа.",
        },
      ],
      legalEffect:
        "Стаття встановлює верхні межі строку, а не автоматичний строк, який орган зобов’язаний надати в кожній справі.",
      foreignersCase:
        "Перевірте дійсність ICT-документа на весь планований період і встановіть, чи застосовується окремий річний максимум для стажера.",
    },
  ],
})
