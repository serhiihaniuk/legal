import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-22",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 22 § 1 встановлює: «O wyłączeniu sędziego rozstrzyga sąd administracyjny, w którym sprawa się toczy».",
          sourceLocator: "Art. 22 § 1",
        },
      ],
      summary:
        "Про wyłączenie судді вирішує sąd administracyjny, де слухається справа; стаття також визначає склад суду, можливість визначення іншого суду та повторні wnioski без нової підстави.",
      rules: [
        {
          locator: "Art. 22 § 1–2",
          explanation:
            "Рішення приймає суд у складі трьох суддів на posiedzeniu niejawnym після пояснення судді, якого стосується wniosek.",
        },
        {
          locator: "Art. 22 § 3",
          explanation:
            "Якщо суд не може постановити рішення через недостатню кількість суддів, NSA визначає інший суд для розгляду wniosku.",
        },
        {
          locator: "Art. 22 § 4",
          explanation:
            "Повторний wniosek без підстави wyłączenia або на тих самих обставинах odrzucaється без пояснення відповідного судді.",
        },
      ],
      legalEffect:
        "Стаття визначає компетентний суд і процесуальну форму вирішення wniosku, але не передбачає автоматичного задоволення повторної заяви.",
      foreignersCase:
        "У справі іноземця перевірте, чи wniosek стосується конкретного судді, які обставини наведені та чи не повторює він уже розглянуту підставу.",
    },
  ]),
})
