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
      provisionId: "ustawa-o-cudzoziemcach-art-256",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Polski dokument podróży dla cudzoziemca підлягає wymianie у разі зміни даних, зміни wizerunku twarzy настільки, що ідентифікація власника ускладнена або неможлива, utraty чи uszkodzenia документа.",
          sourceLocator: "Art. 256 pkt 1–4",
        },
      ],
      summary:
        "Стаття називає чотири обставини для обміну польського документа подорожі.",
      rules: [
        {
          locator: "pkt 1–4",
          explanation:
            "Зміна даних, проблеми з ідентифікацією, utrata та uszkodzenie є окремими підставами для подання на wymianę.",
        },
      ],
      legalEffect: foreignersLaw.text`${foreignersLaw.article("256", "Art. 256")} визначає підстави wymiany конкретного документа; wymiana не є продовженням його строку за окремою процедурою і не змінює підстави pobytu.`,
      foreignersCase:
        "Порівняйте документ із актуальними даними та станом фото. Після втрати або пошкодження негайно повідомте орган і уточніть порядок отримання нового документа.",
    },
  ],
})
