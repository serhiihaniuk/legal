import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-248",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Надане право допомоги не звільняє сторону від обов’язку повернути іншій стороні витрати провадження, якщо такий обов’язок виникає за іншими нормами.",
          sourceLocator: "Art. 248",
        },
      ],
      summary:
        "Стаття розділяє фінансування власної участі та ризик витрат опонента.",
      rules: [
        {
          locator: "Art. 248",
          explanation:
            "Перед процесуальною дією оцініть обидва блоки: що покриває право допомоги (prawo pomocy) і які витрати опонента (koszty przeciwnika) можуть бути присуджені за результатом.",
        },
      ],
      legalEffect:
        "Навіть повне право допомоги не є повним захистом від несприятливого розподілу витрат.",
      foreignersCase:
        "Іноземець із призначеним представником усе одно має знати про можливі витрати органу після невдалої касації.",
    },
  ],
})
