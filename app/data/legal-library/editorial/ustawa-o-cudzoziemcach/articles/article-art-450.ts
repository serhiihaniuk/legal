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
      provisionId: "ustawa-o-cudzoziemcach-art-450",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Точний текст ${foreignersLaw.article("450", "Art. 450")} ust. 1: «Dane przetwarzane w krajowym zbiorze ... udostępnia się następującym podmiotom, w zakresie niezbędnym do realizacji ich ustawowych zadań».`,
          sourceLocator: "Art. 450 ust. 1",
        },
        {
          kind: "practical-inference",
          text: "Доступ обмежений не лише переліком суб’єктів, а й необхідним обсягом та завданням; відбитки для wydania karty pobytu прямо виключені в ust. 3.",
          sourceLocator: "Art. 450 ust. 1–3",
        },
      ],
      summary:
        "Стаття визначає, кому та в якому обсязі можна надавати дані Krajowy zbiór: органам влади, судам, прокуратурі, службам, інспекціям, органам KAS та іншим суб’єктам для законних завдань; окремі відбитки не надаються.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Дані з визначених категорій zbiór доступні органам адміністрації, судам, прокуратурі та переліченим службам у межах необхідності для ustawowe zadania.",
        },
        {
          locator: "ust. 2–2a",
          explanation:
            "Окремі дані можуть отримувати державні й самоврядні jednostki, konsulowie, komornicy, PCK, органи egzekucyjne, NFZ і GUS — у названому обсязі.",
        },
        {
          locator: "ust. 3",
          explanation:
            "Суб’єктам ust. 1 і 2 не надаються odciski linii papilarnych, отримані для видачі karty pobytu.",
        },
      ],
      legalEffect:
        "Стаття встановлює коло одержувачів і межу необхідності доступу. Вона не означає, що кожен перелічений суб’єкт має доступ до кожного поля або всієї справи.",
      foreignersCase:
        "Коли дані запитує орган, перевірте його статус, конкретне ustawowe zadanie, потрібний обсяг і виняток щодо odciski для karty pobytu.",
    },
  ],
})
