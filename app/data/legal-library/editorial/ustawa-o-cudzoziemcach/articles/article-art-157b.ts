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
      provisionId: "ustawa-o-cudzoziemcach-art-157b",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("157b", "Art. 157b")} ust. 1 обмежує zezwolenie з ${foreignersLaw.article("157a", "art. 157a")} ust. 1 строком, потрібним для виконання umowa stażu, але не довше 6 місяців; ust. 2 дозволяє один наступний дозвіл до завершення угоди, також максимум на 6 місяців.`,
          sourceLocator: "Art. 157b ust. 1–2",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("157b", "Art. 157b")} ust. 3–4 позначені як «(uchylony)».`,
          sourceLocator: "Art. 157b ust. 3–4",
        },
      ],
      summary:
        "Строк дозволу stażysty прив’язаний до угоди та обмежений шістьма місяцями для першого і можливого одного наступного дозволу.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Перший дозвіл надається лише на необхідний для реалізації umowa stażu період, не довше 6 місяців.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Один наступний дозвіл можливий лише до завершення umowa stażu і також не довше 6 місяців.",
        },
        {
          locator: "ust. 3–4",
          explanation: "Ці положення скасовані й не застосовуються.",
        },
      ],
      legalEffect: foreignersLaw.text`Карта побиту не може розширити строк понад межі ${foreignersLaw.article("157b", "art. 157b")} або продовжити угоду без відповідної правової підстави.`,
      foreignersCase:
        "Зіставте строк umowa stażu, строк рішення та факт, чи вже використано єдиний наступний дозвіл; не прирівнюйте лист organizator до нового дозволу.",
    },
  ],
})
