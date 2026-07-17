import { createLegalTextAuthor } from "../../../legal-text"

import { defineKpaEditorialPart } from "../define-kpa-part"

const kpaLaw = createLegalTextAuthor("kpa")
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "163b",
      provisionId: "kpa-art-163b",
      reviewStatus: "reviewed",
      summary:
        "Норма визначає, коли можливе postępowanie uproszczone та які загальні межі цього режиму. Спрощена процедура існує лише за прямою вказівкою спеціального закону.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Орган веде справу у спрощеному порядку тільки тоді, коли спеціальний припис прямо це передбачає.",
        },
        {
          locator: "§ 2",
          explanation: kpaLaw.text`Загалом режим розрахований на інтерес або обов'язок однієї сторони; ${kpaLaw.article("62", "art. 62")} про спільне провадження не застосовується, якщо спеціальний закон не встановить інакше.`,
        },
        {
          locator: "§ 3",
          explanation:
            "Milczące załatwienie sprawy застосовується, якщо спеціальний припис його не виключає.",
        },
      ],
      legalEffect:
        "Справа отримує скорочений процесуальний режим лише за lex specialis; разом із ним може діяти мовчазне вирішення.",
      foreignersCase:
        "У провадженні про pobyt не можна самостійно обрати postępowanie uproszczone. Спочатку треба знайти спеціальну норму, яка прямо поширює цей режим на конкретну справу.",
    },
  ],
})
