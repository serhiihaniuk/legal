import { defineEditorialPart } from "../../define-editorial-part"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ppsa-art-166",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "До postanowienie відповідно застосовуються приписи про wyroki, якщо ця ustawa не встановлює інакше.",
          sourceLocator: "Art. 166",
        },
      ],
      summary:
        "Це загальне правило відповідного застосування норм про wyroki до postanowienie з урахуванням спеціальних винятків.",
      rules: [
        {
          locator: "Art. 166",
          explanation:
            "Для конкретного postanowienie спочатку шукайте спеціальний припис ustawa, а за його відсутності — відповідне правило про wyrok.",
        },
      ],
      legalEffect:
        "Стаття створює техніку відповідного застосування, але не робить wyrok і postanowienie однаковими за всіма наслідками.",
      foreignersCase:
        "У справі про pobyt не переносіть механічно весь режим wyrok на postanowienie: перевірте спеціальні норми та характер конкретного документа.",
    },
  ],
})
