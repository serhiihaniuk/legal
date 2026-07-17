import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-112",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 112 встановлює, що art. 4 ust. 3a ustawy, зміненої в art. 99, не застосовується до udziałów або akcji у spółka z ograniczoną odpowiedzialnością, prosta spółka akcyjna чи spółka akcyjna, objętych або nabytych до набрання чинності новою ustawy.",
          sourceLocator: "Art. 112",
        },
        {
          kind: "practical-inference",
          text: "Для винятку треба довести і вид spółka, і те, що udział або akcja були objęte чи nabyte до дати набрання чинності; стаття не поширює виняток на пізніші придбання.",
          sourceLocator: "Art. 112",
        },
      ],
      summary:
        "Стаття містить часовий виняток для певних корпоративних часток і акцій, набуття яких відбулося до набрання чинності новою ustawy.",
      rules: [
        {
          locator: "Art. 112",
          explanation:
            "Виняток стосується лише udziałów або akcji у трьох прямо названих видах spółek.",
        },
        {
          locator: "Art. 112",
          explanation:
            "Udział або akcja мають бути objęte чи nabyte до набрання чинності. Потрібні докази, що підтверджують конкретну операцію та її дату; самого статусу учасника без дати недостатньо для висновку.",
        },
      ],
      legalEffect:
        "Норма обмежує в часі застосування art. 4 ust. 3a до раніше objętych або nabytych udziałów чи akcji. Вона не встановлює права іноземця на pobyt, не легалізує працю і не відповідає на інші умови цього статусу.",
      foreignersCase:
        "Зберіть корпоративні документи та, за потреби, дані KRS, вид spółka та дату objęcie або nabycie udziałów чи akcji. Потім окремо оцініть підставу pobytu і фактичну роботу: володіння часткою саме по собі не замінює цих перевірок.",
    },
  ]),
})
