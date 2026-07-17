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
      article: "53",
      provisionId: "kpa-art-53",
      reviewStatus: "reviewed",
      summary: kpaLaw.text`Стаття встановлює виняток із територіальних полегшень ${kpaLaw.article("51", "art. 51")} і 52, коли характер справи або дії потребує проведення czynności саме перед organem prowadzącym.`,
      rules: [
        {
          locator: "całość",
          explanation: kpaLaw.text`Якщо специфіка справи чи дії вимагає безпосередньої участі перед prowadzącym organem, обмеження ${kpaLaw.article("51", "art. 51")} і механізм ${kpaLaw.article("52", "art. 52")} не застосовуються.`,
        },
      ],
      legalEffect:
        "Organ може вимагати явку до себе поза звичайною територією, але лише через характер конкретної справи або czynności.",
      foreignersCase:
        "У справі іноземця urząd повинен мати конкретну причину, чому дія не може бути виконана локально або іншим способом.",
    },
  ],
})
