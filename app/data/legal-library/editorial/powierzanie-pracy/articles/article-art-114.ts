import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-114",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 114 встановлює, що ustawa wchodzi w życie першого дня місяця, який настає після спливу 14 днів від дня її ogłoszenia.",
          sourceLocator: "Art. 114",
        },
        {
          kind: "official-guidance",
          text: "Для цієї ustawy офіційні дані ELI вказують дату wejścia w życie 2025-06-01; акт опублікований як Dz.U. 2025 poz. 621.",
          sourceLocator:
            "ELI: https://eli.gov.pl/eli/DU/2025/621/ogl; metadata: entryIntoForce",
        },
        {
          kind: "practical-inference",
          text: "Дату події треба зіставляти з правилом wejścia w życie та окремими перехідними статтями 102–113, а не лише з датою підписання документа.",
          sourceLocator: "Art. 114; Art. 102–113",
        },
      ],
      summary:
        "Стаття визначає момент набрання чинності ustawy, від якого починають діяти її основні та перехідні правила.",
      rules: [
        {
          locator: "Art. 114",
          explanation:
            "Формула відраховує 14 днів від ogłoszenie, а потім визначає перший день наступного місяця як dzień wejścia w życie.",
        },
        {
          locator: "Art. 114; ELI",
          explanation:
            "Для Dz.U. 2025 poz. 621 дата wejścia w życie зазначена як 1 червня 2025 року. Для конкретної справи все одно перевірте відповідну перехідну норму.",
        },
      ],
      legalEffect:
        "Стаття запускає дію нової ustawy, але не скасовує потреби застосовувати спеціальні правила переходу. Сам факт набрання чинності не визначає legalny pobyt або право виконувати роботу конкретного іноземця.",
      foreignersCase:
        "Зафіксуйте дату кожної ключової події — подання, wszczęcia, wydania документа, початку роботи чи зміни умов — і порівняйте її з 1 червня 2025 року та art. 102–113. Лише після цього обирайте старий або новий режим.",
    },
  ]),
})
