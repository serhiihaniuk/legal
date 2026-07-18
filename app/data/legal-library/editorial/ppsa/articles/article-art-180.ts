import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-180",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "NSA на закритому засіданні відхиляє касаційну скаргу, яку повинен був відхилити WSA, або повертає її до WSA для усунення виявлених недоліків.",
          sourceLocator: "Art. 180",
        },
      ],
      summary: "Стаття додає другий рівень попереднього контролю касації.",
      rules: [
        {
          locator: "Art. 180",
          explanation:
            "NSA перевіряє, чи не пропущено підставу для відхилення та чи є дефект, який має усунути суд першої інстанції.",
        },
      ],
      legalEffect:
        "Виявлений дефект може завершити касацію або повернути її на технічний етап до WSA; це ще не оцінка касаційних підстав.",
      foreignersCase:
        "У справі про перебування відрізняйте ухвалу про відхилення від повернення матеріалів до WSA: наступні дії та строки будуть різними.",
    },
  ],
})
