import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "11",
      provisionId: "kpa-art-11",
      reviewStatus: "reviewed",
      summary:
        "Стаття вимагає пояснювати стороні обґрунтованість передумов, якими орган керується при вирішенні справи.",
      rules: [
        {
          locator: "całość",
          explanation:
            "Пояснення має сприяти добровільному виконанню decyzji без застосування примусу, наскільки це можливо.",
        },
      ],
      legalEffect:
        "Орган повинен показати логіку свого вирішення, а не лише повідомити результат.",
      foreignersCase:
        "У справі іноземця це загальний стандарт зрозумілого мотивування, особливо коли organ вважає певну умову недоведеною.",
    },
  ],
})
