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
      article: "39¹",
      provisionId: "kpa-art-39-1",
      reviewStatus: "reviewed",
      summary: kpaLaw.text`Стаття визначає, на який електронний адрес доставляється письмо при doręczeniu за ${kpaLaw.article("39", "art. 39 § 1")}.`,
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "Письмо надсилається на adres do doręczeń elektronicznych, внесений до bazy adresów elektronicznych; для pełnomocnika використовується адреса, вказана в поданні.",
        },
        {
          locator: "pkt 2",
          explanation:
            "Якщо адреси учасника немає в базі, використовується адреса, пов’язана з kwalifikowaną usługą rejestrowanego doręczenia, через яку подано подання.",
        },
      ],
      legalEffect:
        "Норма ідентифікує належну електронну скриньку адресата для skutecznego doręczenia.",
      foreignersCase:
        "Якщо іноземець або його pełnomocnik використовує електронне doręczenie, потрібно перевірити саме адресу, визначену цією статтею.",
    },
  ],
})
