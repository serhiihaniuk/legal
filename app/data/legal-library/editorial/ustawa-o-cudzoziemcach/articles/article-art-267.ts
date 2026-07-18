import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-267",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Tymczasowy polski dokument podróży видають cudzoziemcowi, який має намір повернутися до Польщі, за кордоном втратив, знищив або втратив чинність власного dokumentu podróży і не може отримати новий, якщо йому надано zezwolenie na pobyt stały, zezwolenie na pobyt rezydenta długoterminowego UE, ochronę uzupełniającą або zgodę humanitarną, або якщо йому надано status uchodźcy.",
          sourceLocator: "Art. 267 pkt 1 lit. a–d, pkt 2",
        },
      ],
      summary:
        "Стаття визначає tymczasowy polski dokument podróży для одноразового повернення до Польщі з-за кордону, коли власний документ недоступний.",
      rules: [
        {
          locator: "zdanie główne",
          explanation:
            "Потрібні намір повернутися, перебування за кордоном, проблема з власним документом, неможливість отримати новий і одна з названих підстав.",
        },
      ],
      legalEffect: foreignersLaw.text`${foreignersLaw.article("267", "Art. 267")} передбачає документ для конкретного повернення до Польщі з-за кордону; він не є загальною заміною паспорта або дозволом на необмежені поїздки.`,
      foreignersCase:
        "У заяві за кордоном покажіть свій статус у Польщі, обставини втрати або недійсності документа та неможливість отримати новий. Поясніть, що мета — повернення до Польщі.",
    },
  ],
})
