import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "68",
      provisionId: "kpa-art-68",
      reviewStatus: "reviewed",
      summary:
        "Стаття встановлює обов’язковий зміст protokołu та порядок його підписання учасниками дії.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Protokół вказує, хто, коли, де і яку дію провів, хто був присутній і в якому статусі, що встановлено, які зауваження заявлено та які обставини виникли.",
        },
        {
          locator: "§ 2",
          explanation:
            "Protokół зачитують усім присутнім учасникам, які його підписують; відмову або відсутність підпису потрібно описати в самому protokole.",
        },
      ],
      legalEffect:
        "Підписаний запис підтверджує перебіг і результат czynności, а відмова від підпису не приховується, а фіксується.",
      foreignersCase:
        "Після протоколювання пояснень іноземця важливо перевірити, чи запис відтворює його слова і чи внесено зауваження до підписання.",
    },
  ],
})
