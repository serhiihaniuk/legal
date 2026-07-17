import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const workLaw = createLegalTextAuthor("powierzanie-pracy")
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "powierzanie-pracy-art-40",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("40", "Art. 40")} ust. 1 передбачає zezwolenie для cudzoziemiec, якого zatrudnia podmiot zagraniczny, який працює для нього поза Польщею та буде delegowany до oddział, zakład або podmiot пов'язаний, для usługa eksportowa або з іншою метою, яка не є świadczeniem usług. Ust. 2 виключає відкриття або вимагає umorzenie провадження для діяльності за ${workLaw.article("45", "art. 45")} ust. 2 та функцій ${workLaw.article("2", "art. 2")} pkt 9 lit. c–e; ust. 3 визначає usługa eksportowa, а ust. 4–5 — właściwość wojewoda.`,
          sourceLocator: "Art. 40 ust. 1 pkt 1–3, ust. 2–5",
        },
      ],
      summary:
        "Стаття описує три моделі delegowanie з іноземного podmiot і розподіляє місцеву компетенцію між wojewoda. Exportowa usługa повинна бути тимчасовою та випадковою, а іноземний podmiot не може вести в Польщі господарську діяльність у значенні Prawo przedsiębiorców.",
      rules: [
        {
          locator: "ust. 1 pkt 1–3",
          explanation:
            "Потрібно підтвердити zatrudnienie у podmiot zagraniczny, роботу для нього поза Польщею та одну з моделей: пов'язаний podmiot або oddział, usługa eksportowa чи інша мета, що не є послугою.",
        },
        {
          locator: "ust. 2–3",
          explanation: workLaw.text`Провадження не відкривають або umarzają за діяльності з ${workLaw.article("45", "art. 45")} ust. 2 і функцій ${workLaw.article("2", "art. 2")} pkt 9 lit. c–e. Usługa eksportowa має бути tymczasowa й okazjonalna, а іноземний podmiot не веде в Польщі діяльність у розумінні Prawo przedsiębiorców.`,
        },
        {
          locator: "ust. 4–5",
          explanation:
            "Właściwy wojewoda залежить від приймаючого podmiot, odbiorca usługi або головного місця роботи; якщо його неможливо визначити в моделях pkt 2–3, компетентним є wojewoda mazowiecki.",
        },
      ],
      legalEffect: workLaw.text`${workLaw.article("40", "Art. 40")} визначає модель і орган для zezwolenie при delegowanie, але не встановлює legalny pobyt. Іноземний трудовий зв'язок не замінює перевірку права перебувати та працювати в Польщі.`,
      foreignersCase:
        "Документуйте роботодавця за кордоном, роботу поза Польщею, фактичну мету та місце delegowanie. Перевірте, чи не є це функцією або sezonowa praca; окремо встановіть документ pobyt і потрібне zezwolenie.",
    },
  ],
})
