import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-112",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 112 встановлює, що art. 4 ust. 3a закону, зміненого в art. 99, не застосовується до часток або акцій у spółka z ograniczoną odpowiedzialnością, prosta spółka akcyjna чи spółka akcyjna, якщо на них підписалися (objęte) або їх придбали (nabyte) до 1 червня 2025 року.",
          sourceLocator: "Art. 112",
        },
        {
          kind: "practical-inference",
          text: "Для винятку треба довести і вид товариства, і те, що на конкретну частку або акцію підписалися чи її придбали до 1 червня 2025 року. Стаття не поширює винятку на пізніші операції.",
          sourceLocator: "Art. 112",
        },
      ],
      summary:
        "Стаття містить часовий виняток для певних корпоративних часток і акцій, на які підписалися або які придбали до набрання новим законом чинності.",
      rules: [
        {
          locator: "Art. 112",
          explanation:
            "Виняток стосується лише часток або акцій у трьох прямо названих видах товариств.",
        },
        {
          locator: "Art. 112",
          explanation:
            "На частку або акцію мали підписатися чи її мали придбати до 1 червня 2025 року. Потрібні докази конкретної операції та її дати; самого статусу учасника без дати недостатньо.",
        },
      ],
      legalEffect:
        "Норма обмежує в часі застосування art. 4 ust. 3a до часток чи акцій, на які підписалися або які придбали раніше. Вона не встановлює права іноземця на перебування, не легалізує працю й не вирішує інших умов його статусу.",
      foreignersCase:
        "Зберіть корпоративні документи та, за потреби, дані KRS, визначте вид товариства, предмет операції й дату підписки на частку чи акцію або її придбання. Потім окремо оцініть підставу перебування і фактичну роботу: володіння часткою саме по собі не замінює цих перевірок.",
    },
  ]),
})
