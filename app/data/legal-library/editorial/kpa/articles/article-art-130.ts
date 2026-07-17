import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "130",
      provisionId: "kpa-art-130",
      reviewStatus: "reviewed",
      summary:
        "До спливу строку odwołania decyzja загалом не виконується, а своєчасне odwołanie далі зупиняє її виконання.",
      rules: [
        {
          locator: "§ 1–2",
          explanation:
            "Невиконуваність діє до спливу строку та під час своєчасного odwołania.",
        },
        {
          locator: "§ 3",
          explanation:
            "Зупинення не діє при rygorze natychmiastowej wykonalności або негайному виконанні за законом.",
        },
        {
          locator: "§ 4",
          explanation:
            "Раніше виконання можливе, коли decyzja відповідає вимогам усіх сторін або всі відмовилися від odwołania.",
        },
      ],
      legalEffect:
        "Звичайний апеляційний строк захищає від передчасного виконання, крім прямо визначених винятків.",
      foreignersCase:
        "Після odwołania у справі іноземця треба окремо перевірити, чи decyzja має rygor або спеціальну негайну виконуваність.",
    },
  ],
})
