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
      provisionId: "ustawa-o-cudzoziemcach-art-269",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`У період чинності tymczasowy polski dokument podróży дає cudzoziemcowi з ${foreignersLaw.article("267", "Art. 267")} або ${foreignersLaw.article("268", "Art. 268")} pkt 1 право на одноразовий wjazd на територію RP, а cudzoziemcowi з ${foreignersLaw.article("268", "Art. 268")} pkt 2 — право на wyjazd з території RP.`,
          sourceLocator: "Art. 269 pkt 1–2",
        },
      ],
      summary:
        "Стаття прив’язує призначення тимчасового документа до підстави його видачі: одноразовий в’їзд або виїзд.",
      rules: [
        {
          locator: "pkt 1",
          explanation: foreignersLaw.text`Для повернення за ${foreignersLaw.article("267", "Art. 267")} або relokacji чи przesiedlenia за ${foreignersLaw.article("268", "Art. 268")} pkt 1 документ дозволяє один в’їзд.`,
        },
        {
          locator: "pkt 2",
          explanation: foreignersLaw.text`Для наміру або обов’язку залишити Польщу за ${foreignersLaw.article("268", "Art. 268")} pkt 2 документ дозволяє виїзд, а не багаторазове повернення.`,
        },
      ],
      legalEffect:
        "Документ не є багаторазовим проїзним документом: кількість і напрямок дії залежать від юридичної підстави.",
      foreignersCase:
        "Перед поїздкою прочитайте підставу видачі та напрямок, зазначений у документі. Не плануйте повторний в’їзд, якщо документ видано для одноразової дії.",
    },
  ],
})
