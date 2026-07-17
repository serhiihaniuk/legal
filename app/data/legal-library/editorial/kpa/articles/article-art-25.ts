import { createLegalTextAuthor } from "../../../legal-text"

import { defineKpaEditorialPart } from "../define-kpa-part"

const kpaLaw = createLegalTextAuthor("kpa")
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "25",
      provisionId: "kpa-art-25",
      reviewStatus: "reviewed",
      summary:
        "Стаття передбачає wyłączenie самого органу у справах про майнові інтереси його керівника, його близьких або керівника органу безпосередньо вищого рівня та його близьких.",
      rules: [
        {
          locator: "§ 1 pkt 1–2",
          explanation: kpaLaw.text`Wyłączenie стосується справ про майнові інтереси названих керівників та осіб у сімейних чи опікунських зв’язках, визначених через ${kpaLaw.article("24", "art. 24")}.`,
        },
        {
          locator: "§ 2",
          explanation: kpaLaw.text`До виключеного органу відповідно застосовується обмеження лише невідкладними діями з ${kpaLaw.article("24", "art. 24 § 4")}.`,
        },
      ],
      legalEffect: kpaLaw.text`За наявності підстав organ втрачає можливість вирішувати цю справу, а компетенція переходить за правилами ${kpaLaw.article("26", "art. 26")}.`,
      foreignersCase: kpaLaw.text`У типовій справі про pobyt норма має непряме значення і застосовується лише за конкретного майнового конфлікту, передбаченого ${kpaLaw.article("25", "art. 25")}.`,
    },
  ],
})
