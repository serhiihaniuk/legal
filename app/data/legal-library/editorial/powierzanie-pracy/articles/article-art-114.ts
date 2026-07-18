import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-114",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 114 встановлює формулу набрання законом чинності: першого дня місяця, що настає після спливу 14 днів від дня офіційного опублікування.",
          sourceLocator: "Art. 114",
        },
        {
          kind: "official-guidance",
          text: "Для цього закону офіційні дані ELI вказують дату набрання чинності 1 червня 2025 року. Акт опубліковано як Dz.U. 2025 poz. 621.",
          sourceLocator:
            "ELI: https://eli.gov.pl/eli/DU/2025/621/ogl; metadata: entryIntoForce",
        },
        {
          kind: "practical-inference",
          text: "Дату події треба зіставляти з моментом набрання законом чинності та окремими перехідними статтями 102–113, а не лише з датою підписання документа.",
          sourceLocator: "Art. 114; Art. 102–113",
        },
      ],
      summary:
        "Стаття визначає момент набрання законом чинності, від якого починають діяти його основні та перехідні правила.",
      rules: [
        {
          locator: "Art. 114",
          explanation:
            "Формула спочатку відраховує 14 днів від офіційного опублікування, а потім визначає перший день наступного місяця як день набрання чинності.",
        },
        {
          locator: "Art. 114; ELI",
          explanation:
            "Для Dz.U. 2025 poz. 621 датою набрання чинності є 1 червня 2025 року. Для конкретної справи все одно треба перевірити відповідну перехідну норму.",
        },
      ],
      legalEffect:
        "Стаття запускає дію нового закону, але не скасовує потреби застосовувати спеціальні перехідні правила. Сам факт набрання чинності не визначає законності перебування або права конкретного іноземця виконувати роботу.",
      foreignersCase:
        "Зафіксуйте дату кожної ключової події: подання заяви, відкриття провадження, видачі документа, початку роботи чи зміни умов. Порівняйте її з 1 червня 2025 року та art. 102–113 і лише після цього обирайте попередній або новий режим.",
    },
  ]),
})
