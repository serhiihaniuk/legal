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
      article: "109",
      provisionId: "kpa-art-109",
      reviewStatus: "reviewed",
      summary: kpaLaw.text`Decyzja вручається сторонам письмово, а у випадках з ${kpaLaw.article("14", "art. 14 § 2")} може бути оголошена усно.`,
      rules: [
        {
          locator: "§ 1–2",
          explanation:
            "Базовий спосіб — письмове doręczenie; усне ogłoszenie є винятком.",
        },
        {
          locator: "§ 3–4",
          explanation:
            "Додатки до паперової decyzji за письмовою або протокольною згодою сторони можуть бути передані на іншому trwałym nośniku, що зберігає незмінність інформації.",
        },
      ],
      legalEffect:
        "Doręczenie або ogłoszenie вводить decyzję у процесуальний обіг і пов’язане з подальшими строками.",
      foreignersCase:
        "У справі іноземця треба зберегти доказ вручення повного акта разом із додатками та перевірити, чи була згода на інший носій.",
    },
  ],
})
