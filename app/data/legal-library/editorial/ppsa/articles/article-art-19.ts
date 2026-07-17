import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-19",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 19 передбачає wyłączenie судді, «jeżeli istnieje okoliczność tego rodzaju, że mogłaby wywołać uzasadnioną wątpliwość co do jego bezstronności w danej sprawie».",
          sourceLocator: "Art. 19",
        },
      ],
      summary:
        "Окрім прямо перелічених ситуацій, sąd може виключити суддю на його вимогу або на wniosek strony, якщо обставина може викликати обґрунтований сумнів у безсторонності в цій справі.",
      rules: [
        {
          locator: "Art. 19",
          explanation:
            "Потрібна конкретна okoliczność, здатна створити uzasadnioną wątpliwość щодо bezstronność; самого суб’єктивного незадоволення сторони недостатньо без фактичного обґрунтування.",
        },
      ],
      legalEffect:
        "Норма дає механізм оцінки безсторонності поза автоматичними випадками, але результат залежить від конкретної обставини та її обґрунтування.",
      foreignersCase:
        "Якщо іноземець просить wyłączenie, опишіть перевірювану обставину, яка може породити сумнів у bezstronność, і відокремте її від критики змісту рішення.",
    },
  ]),
})
