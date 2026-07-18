import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "64",
      provisionId: "kpa-art-64",
      reviewStatus: "reviewed",
      summary:
        "Стаття визначає наслідки braków podania: відсутність адреси може одразу залишити його без розгляду, а інші формальні недоліки спершу треба запропонувати усунути.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Якщо podanie не містить адреси і її неможливо встановити з наявних даних, podanie pozostawia się bez rozpoznania.",
        },
        {
          locator: "§ 2",
          explanation:
            "За інших braków organ викликає до їх усунення у визначений строк не коротший ніж сім днів і попереджає, що невиконання призведе до pozostawienia podania bez rozpoznania.",
        },
      ],
      legalEffect:
        "Неусунення формального недоліку після правильного wezwania припиняє рух podania без оцінки матеріальних умов справи.",
      foreignersCase:
        "У справі про pobyt це загальна підстава відрізнити brak formalny заяви від браку доказу матеріальної умови zezwolenia.",
    },
  ],
})
