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
      article: "42",
      provisionId: "kpa-art-42",
      reviewStatus: "reviewed",
      summary:
        "Стаття визначає місця традиційного doręczenia фізичній особі та резервне вручення там, де адресата фактично застануть.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Письмо вручають у помешканні, місці праці або за адресою do korespondencji, вказаною в базі електронних адрес.",
        },
        {
          locator: "§ 2–3",
          explanation:
            "Можливе вручення в siedzibie organu, а за неможливості попередніх способів або необхідності — у будь-якому місці, де застануть адресата.",
        },
      ],
      legalEffect:
        "Вручення фізичній особі є належним, якщо здійснене в одному з установлених місць за відповідних передумов.",
      foreignersCase: kpaLaw.text`У справі іноземця потрібно зіставити місце фактичного вручення з послідовністю ${kpaLaw.article("42", "art. 42")}, особливо якщо строк залежить від цієї дати.`,
    },
  ],
})
