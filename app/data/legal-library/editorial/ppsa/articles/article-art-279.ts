import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-279",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 279 вимагає, щоб skarga o wznowienie додатково містила oznaczenie оскарженого orzeczenie, підставу wznowienie та її uzasadnienie, обставини, що підтверджують дотримання строку, і żądanie uchylenie або zmiana оскарженого orzeczenie.",
          sourceLocator: "Art. 279",
        },
      ],
      summary:
        "Норма визначає спеціальні елементи змісту skarga o wznowienie: оскаржене orzeczenie, підстава, строк і конкретне żądanie.",
      rules: [
        {
          locator: "Art. 279",
          explanation:
            "У тексті скарги окремо покажіть, яке orzeczenie оскаржується, яку саме підставу wznowienie заявлено, чому строк дотримано та чого просить сторона.",
        },
      ],
      legalEffect:
        "Невідповідність вимогам може перешкодити подальшому розгляду, але Art. 279 не означає, що правильно оформлена skarga автоматично має матеріальну підставу.",
      foreignersCase:
        "У справі іноземця звірте назву і дату orzeczenie, конкретну підставу wznowienie, доказ початку строку та прохання про uchylenie або zmiana. Не замінюйте це загальною незгодою з рішенням.",
    },
  ]),
})
