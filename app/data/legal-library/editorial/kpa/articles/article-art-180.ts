import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "180",
      provisionId: "kpa-art-180",
      reviewStatus: "reviewed",
      summary:
        "Стаття встановлює співвідношення KPA і спеціальних правил у справах соціального страхування. KPA застосовується субсидіарно — настільки, наскільки закони про страхування не встановлюють іншої процедури.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "У sprawach z zakresu ubezpieczeń społecznych застосовується KPA, якщо спеціальні норми не передбачають іншого порядку.",
        },
        {
          locator: "§ 2",
          explanation:
            "Параграф окреслює, які справи охоплює поняття соціального страхування для цілей цього розділу.",
        },
      ],
      legalEffect:
        "Спеціальна страхова процедура має пріоритет, а прогалини заповнюються KPA.",
      foreignersCase:
        "Це загальне процесуальне правило, не норма про pobyt. Воно важливе, коли окрема справа іноземця стосується ZUS або страхових прав: спочатку читають спеціальний закон, а потім KPA.",
    },
  ],
})
