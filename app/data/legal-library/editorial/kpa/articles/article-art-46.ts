import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "46",
      provisionId: "kpa-art-46",
      reviewStatus: "reviewed",
      summary:
        "Стаття визначає спосіб підтвердження doręczenia та оформлення ситуації, коли odbiorca не підписує підтвердження або не може цього зробити.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Одержувач підтверджує вручення підписом із датою doręczenia.",
        },
        {
          locator: "§ 2",
          explanation:
            "За відмови або неможливості підпису doręczający сам фіксує дату, особу одержувача і причину відсутності її підпису.",
        },
      ],
      legalEffect:
        "Підтвердження або службова фіксація створює доказ особи й дати doręczenia.",
      foreignersCase:
        "У справі іноземця zwrotka або інший запис про вручення є ключовим доказом початку строку; відсутність підпису адресата не завжди означає brak doręczenia.",
    },
  ],
})
