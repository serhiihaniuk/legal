import { createLegalTextAuthor } from "../../../legal-text"

import { defineKpaEditorialPart } from "../define-kpa-part"

const kpaLaw = createLegalTextAuthor("kpa")
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "159",
      provisionId: "kpa-art-159",
      reviewStatus: "reviewed",
      summary: kpaLaw.text`Стаття дозволяє тимчасово зупинити виконання рішення, якщо є ймовірність однієї з вад, названих в ${kpaLaw.article("156", "art. 156 § 1")}. Це запобіжний захід на час перевірки nieważności.`,
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Компетентний орган може z urzędu або на вимогу сторони зупинити виконання, коли обставини вказують на ймовірність недійсності рішення.",
        },
        {
          locator: "§ 2",
          explanation:
            "Про зупинення орган видає postanowienie, на яке можна подати zażalenie.",
        },
      ],
      legalEffect:
        "Виконання рішення тимчасово припиняється, але саме рішення ще не визнається недійсним; окремо зберігається право оскаржити postanowienie.",
      foreignersCase: kpaLaw.text`Якщо іноземець доводить імовірну ваду рішення про зобов'язання або відмову, він може просити про wstrzymanie wykonania. Для цього слід показати зв'язок із конкретною підставою ${kpaLaw.article("156", "art. 156 § 1")}.`,
    },
  ],
})
