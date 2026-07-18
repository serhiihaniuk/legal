import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-281a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Іноземцеві, якого зобов’язано до повернення або який підлягає передачі третій державі на підставі міжнародної угоди про передачу й прийняття осіб, за відсутності власного документа подорожі може бути виданий europejski dokument podróży do celów powrotu.",
          sourceLocator: "Art. 281a ust. 1",
        },
        {
          kind: "statute-text",
          text: "Europejski dokument podróży do celów powrotu дає названому іноземцеві право виїхати з території Польщі.",
          sourceLocator: "Art. 281a ust. 2",
        },
        {
          kind: "statute-text",
          text: "Документ видає Komendant Główny Straży Granicznej, komendant oddziału Straży Granicznej або komendant placówki Straży Granicznej; підпис власника в документі не розміщують, а KPA до його видачі не застосовується.",
          sourceLocator: "Art. 281a ust. 3–5",
        },
      ],
      summary:
        "Стаття визначає спеціальний документ для фактичного виїзду особи, яка має повернутися або бути передана, але не має власного документа подорожі.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "Потрібні одночасно правова підстава повернення або передачі та відсутність власного документа подорожі. Документ служить саме виїзду з Польщі.",
        },
        {
          locator: "ust. 3",
          explanation:
            "Компетенція належить лише трьом прямо названим органам Straży Granicznej.",
        },
        {
          locator: "ust. 4–5",
          explanation:
            "Відсутність підпису власника є законною рисою цього документа. Процедуру його видачі не оцінюють за загальними правилами KPA.",
        },
      ],
      legalEffect:
        "Документ уможливлює виїзд у межах процедури повернення або передачі; він не створює права на перебування в Польщі.",
      foreignersCase:
        "Перевірте рішення або міжнародну підставу передачі, відсутність власного документа подорожі та орган-видавець. Не трактуйте відсутність підпису як дефект документа.",
    },
  ],
})
