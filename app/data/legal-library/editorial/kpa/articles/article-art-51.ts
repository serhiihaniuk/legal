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
      article: "51",
      provisionId: "kpa-art-51",
      reviewStatus: "reviewed",
      summary:
        "Стаття обмежує обов’язок особистої явки територією gminy або міста проживання чи перебування викликаної особи та сусідньою gminą або містом.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Особиста явка обов’язкова в межах gminy або міста, де особа живе чи перебуває.",
        },
        {
          locator: "§ 2",
          explanation: "Обов’язок охоплює також сусідню gminę або місто.",
        },
      ],
      legalEffect:
        "Поза визначеною територією organ за загальним правилом не може вимагати особистої явки через звичайне wezwanie.",
      foreignersCase: kpaLaw.text`Якщо іноземець перебуває далеко від urzędu, потрібно перевірити ${kpaLaw.article("51", "art. 51")} і можливість дії через місцевий organ за ${kpaLaw.article("52", "art. 52")}.`,
    },
  ],
})
