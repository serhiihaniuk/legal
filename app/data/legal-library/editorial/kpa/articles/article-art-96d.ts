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
      article: "96d",
      provisionId: "kpa-art-96d",
      reviewStatus: "reviewed",
      summary:
        "Після згоди учасників орган направляє справу до mediacji postanowieniem і визначає mediatora.",
      rules: [
        {
          locator: "§ 1",
          explanation: kpaLaw.text`Postanowienie про направлення вручається сторонам та органу співдії з ${kpaLaw.article("106", "art. 106 § 1")}.`,
        },
        {
          locator: "§ 2",
          explanation:
            "Пріоритет має спільний вибір учасників; за його відсутності орган обирає особу з відповідними знаннями й уміннями.",
        },
      ],
      legalEffect:
        "Формальне postanowienie відкриває mediację та персоналізує mediatora.",
      foreignersCase:
        "У справі іноземця слід перевірити, чи mediator був обраний учасниками або належно визначений органом.",
    },
  ],
})
