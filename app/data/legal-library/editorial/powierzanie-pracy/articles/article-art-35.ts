import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const workLaw = createLegalTextAuthor("powierzanie-pracy")
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "powierzanie-pracy-art-35",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("35", "Art. 35")} встановлює, що zezwolenie на роботу у зв'язку з pełnieniem określonej funkcji видає wojewoda, właściwość якого визначається siedziba polski podmiot powierzający pracę.`,
          sourceLocator: "Art. 35",
        },
      ],
      summary:
        "Для дозволу на визначену функцію компетентність wojewoda прив'язана до siedziba польського podmiot. Стаття визначає орган, а не матеріальні умови функції.",
      rules: [
        {
          locator: "Art. 35",
          explanation:
            "У wniosek потрібно встановити siedziba polski podmiot, щоб визначити właściwy wojewoda для функціонального zezwolenie.",
        },
      ],
      legalEffect: workLaw.text`${workLaw.article("35", "Art. 35")} є правилом właściwość у справі про роботу; він не підтверджує legalny pobyt і не замінює перевірку, чи потрібен дозвіл для конкретної функції.`,
      foreignersCase:
        "Звірте siedziba podmiot з реєстровими даними та компетентним wojewoda. Далі окремо перевірте функцію, документ pobyt і підставу uprawnienie do pracy.",
    },
  ],
})
