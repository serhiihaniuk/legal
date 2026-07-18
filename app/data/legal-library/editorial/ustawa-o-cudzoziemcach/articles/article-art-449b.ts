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
      provisionId: "ustawa-o-cudzoziemcach-art-449b",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Точний текст ${foreignersLaw.article("449b", "Art. 449b")} ust. 1: «Szef Urzędu, na pisemny wniosek organu prowadzącego rejestr lub ewidencję ... może dokonać ... zmian lub uzupełnień danych».`,
          sourceLocator: "Art. 449b ust. 1",
        },
        {
          kind: "practical-inference",
          text: "Механізм виправлення через Szef Urzędu призначений для повноти й матеріальної правильності даних і має прямо встановлений виняток.",
          sourceLocator: "Art. 449b ust. 1–2",
        },
      ],
      summary: foreignersLaw.text`Szef Urzędu може на письмовий wniosek органу, який веде rejestr або ewidencję, змінити чи доповнити дані для їх повноти й правильності; правило не застосовується до даних проваджень, у яких видано документи ${foreignersLaw.article("226", "Art. 226")}.`,
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Потрібен письмовий wniosek органу-розпорядника rejestr або ewidencja; мета — kompletność і poprawność merytoryczna даних.",
        },
        {
          locator: "ust. 2",
          explanation: foreignersLaw.text`Виняток стосується даних проваджень, результатом яких став один із документів, названих у ${foreignersLaw.article("226", "Art. 226")}.`,
        },
      ],
      legalEffect:
        "Стаття регулює внутрішню корекцію даних за ініціативою органу-розпорядника, а не загальний індивідуальний засіб виправлення будь-якого рішення.",
      foreignersCase: foreignersLaw.text`Якщо бачите помилку в реєстрі, зафіксуйте точний запис і пов’язаний документ, а також з’ясуйте, чи застосовується спеціальний wniosek ${foreignersLaw.article("444", "Art. 444")} або виняток ${foreignersLaw.article("449b", "Art. 449b")} ust. 2.`,
    },
  ],
})
