import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "15",
      provisionId: "kpa-art-15",
      reviewStatus: "reviewed",
      summary:
        "Стаття встановлює двоінстанційність адміністративного провадження, якщо спеціальний припис не передбачає інше.",
      rules: [
        {
          locator: "całość",
          explanation:
            "Загальне правило допускає повторний розгляд справи в адміністративному порядку другою інстанцією.",
        },
      ],
      legalEffect:
        "Можливість адміністративного контролю існує за загальним правилом, але її конкретна форма залежить від спеціальних приписів.",
      foreignersCase:
        "У справі іноземця перед оскарженням потрібно перевірити pouczenie та lex specialis, бо вони визначають właściwy organ і можливий відступ від двоінстанційності.",
    },
  ],
})
