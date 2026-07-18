import { defineEditorialPart } from "../../define-editorial-part"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-136",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Wyrok може бути виданий лише суддями, перед якими відбулася rozprawa, що безпосередньо передувала його винесенню.",
          sourceLocator: "Art. 136",
        },
      ],
      summary:
        "Стаття пов’язує склад суду, який видає wyrok, із суддями безпосередньо попередньої rozprawy.",
      rules: [
        {
          locator: "Art. 136",
          explanation:
            "Порівнюйте склад, зазначений у матеріалах та sentencja, з rozprawa, яка безпосередньо передувала wyrok.",
        },
      ],
      legalEffect:
        "Норма встановлює вимогу до складу, уповноваженого видати wyrok; вона сама не визначає наслідок кожного можливого відхилення.",
      foreignersCase:
        "У разі спору про decyzja щодо pobyt перевірте дані про склад суду і слухання, якщо виникла конкретна процесуальна проблема. Не робіть висновок про результат лише з персонального складу.",
    },
  ],
})
