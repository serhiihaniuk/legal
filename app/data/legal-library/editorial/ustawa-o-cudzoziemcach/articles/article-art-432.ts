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
      provisionId: "ustawa-o-cudzoziemcach-art-432",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Точний текст ${foreignersLaw.article("432", "Art. 432")} ust. 1: «Dane z rejestru odcisków linii papilarnych ... udostępnia się ... w zakresie niezbędnym do realizacji ich ustawowych zadań».`,
          sourceLocator: "Art. 432 ust. 1",
        },
        {
          kind: "practical-inference",
          text: "Доступ до реєстру відбитків обмежений необхідністю для законних завдань і передбаченими технічними та організаційними гарантіями.",
          sourceLocator: "Art. 432 ust. 1–4",
        },
      ],
      summary: foreignersLaw.text`Стаття регулює доступ до rejestr odcisków linii papilarnych для визначених у ${foreignersLaw.article("450", "Art. 450")} органів і Szef Urzędu, письмово або телекомунікаційними засобами за умов безпеки.`,
      rules: [
        {
          locator: "ust. 1–2",
          explanation: foreignersLaw.text`Дані доступні суб’єктам ${foreignersLaw.article("450", "Art. 450")} ust. 1 pkt 1–2 і Szef Urzędu лише в необхідному обсязі та за письмовим wniosek.`,
        },
        {
          locator: "ust. 3",
          explanation:
            "Доступ без письмового wniosek можливий, якщо є захищені системи, належні zabezpieczenia і завдання або діяльність, що це виправдовують.",
        },
        {
          locator: "ust. 4",
          explanation: "Dane udostępnia Komendant Główny Policji.",
        },
      ],
      legalEffect:
        "Стаття встановлює канал і межі доступу до біометричних даних; вона не дає необмеженого доступу будь-якому органу або приватній особі.",
      foreignersCase:
        "Якщо запит стосується odciski, визначте суб’єкта, правове завдання, wniosek і рівень доступу; відокремлюйте цей реєстр від інших записів справи.",
    },
  ],
})
