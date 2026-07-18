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
      provisionId: "ustawa-o-cudzoziemcach-art-230",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Wniosek про wymianę документів, названих в ${foreignersLaw.article("226", "Art. 226")} pkt 1–3 і 5, подають протягом 14 днів після виникнення підстав для їх обміну, про які йдеться в цьому розділі. Wniosek про видачу kolejnej karty pobytu подають щонайменше за 30 днів до завершення строку чинності попередньої karty pobytu.`,
          sourceLocator: "Art. 230 ust. 1–2",
        },
      ],
      summary:
        "Стаття встановлює два строки: 14 днів для заяви про обмін визначених документів після виникнення підстави та щонайменше 30 днів до завершення чинності для заяви на наступну kartę pobytu.",
      rules: [
        {
          locator: "ust. 1",
          explanation: foreignersLaw.text`Строк 14 днів стосується лише wymiana документів ${foreignersLaw.article("226", "Art. 226")} pkt 1–3 і 5 та рахується від виникнення przesłanki до їхнього обміну.`,
        },
        {
          locator: "ust. 2",
          explanation:
            "Для kolejna karta pobytu орієнтиром є дата завершення чинності попередньої картки: wniosek має бути подано не пізніше ніж за 30 днів до неї.",
        },
      ],
      legalEffect:
        "Пропуск або неправильне обчислення строку може вплинути на належне виконання обов’язку подати wniosek, але наслідок треба визначати з урахуванням конкретного документа та всієї процедури.",
      foreignersCase:
        "Зафіксуйте дату виникнення підстави для wymiana або дату завершення чинності karty pobytu, визначте відповідний строк і збережіть доказ подання wniosku. Не застосовуйте 14-денний строк до наступної karty pobytu замість правила про 30 днів.",
    },
  ],
})
