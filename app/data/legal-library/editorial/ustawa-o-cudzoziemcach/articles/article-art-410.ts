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
      provisionId: "ustawa-o-cudzoziemcach-art-410",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("410", "Art. 410")} ust. 1 встановлює, що прийняття cudzoziemca до strzeżony ośrodek або areszt dla cudzoziemców відбувається на підставі postanowienie sądu про umieszczenie або застосування areszt.`,
          sourceLocator: "Art. 410 ust. 1",
        },
        {
          kind: "practical-inference",
          text: "Обов’язок передати речі до depozytu стосується прийняття та правил безпеки; він не замінює судове postanowienie.",
          sourceLocator: "Art. 410 ust. 1–3",
        },
      ],
      summary:
        "Стаття пов’язує прийняття cudzoziemca до strzeżony ośrodek або areszt із postanowienie sądu та визначає речі, які передаються до depozytu.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Для прийняття потрібне postanowienie sądu про umieszczenie у strzeżony ośrodek або застосування areszt dla cudzoziemców.",
        },
        {
          locator: "ust. 2 pkt 1–3",
          explanation:
            "До depozytu передаються документи особи, гроші та цінності, пристрої для запису зображення і предмети, що можуть загрожувати порядку або безпеці.",
        },
        {
          locator: "ust. 3",
          explanation:
            "Також передаються предмети, розмір або кількість яких обмежує площу кімнати чи житлової камери.",
        },
      ],
      legalEffect:
        "Стаття встановлює процесуальну передумову прийняття та режим depozyt. Вона не описує всіх умов, за яких суд може постановити umieszczenie.",
      foreignersCase:
        "Попросіть копію postanowienie sądu і перевірте протокол depozytu: окремо звірте документи, гроші, цінності та інші передані предмети.",
    },
  ],
})
