import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "122a",
      provisionId: "kpa-art-122a",
      reviewStatus: "reviewed",
      summary:
        "Milczące załatwienie можливе лише за прямою нормою спеціального закону і означає повне задоволення żądania за відсутності своєчасного акта або sprzeciwu.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Сам KPA не відкриває мовчазного режиму без lex specialis.",
        },
        {
          locator: "§ 2",
          explanation:
            "Після місяця або спеціального строку мовчання набуває форми milczącego zakończenia або milczącej zgody.",
        },
      ],
      legalEffect:
        "За виконання спеціальної передумови бездіяльність органу створює позитивний результат у повному обсязі żądania.",
      foreignersCase:
        "У справі іноземця не можна вважати тривале мовчання згодою без прямого припису спеціального закону.",
    },
  ],
})
