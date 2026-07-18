import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "96j",
      provisionId: "kpa-art-96j",
      reviewStatus: "reviewed",
      summary:
        "Mediacja є неявною, а її учасники зобов’язані зберігати конфіденційність; переговорний матеріал загалом не використовується після її завершення.",
      rules: [
        {
          locator: "§ 1–2",
          explanation:
            "Факти, отримані через mediację, зберігаються в таємниці, якщо учасники не домовилися інакше.",
        },
        {
          locator: "§ 3",
          explanation:
            "Пропозиції, розкриті факти й заяви не використовуються після завершення, крім домовленостей, внесених до protokołu.",
        },
      ],
      legalEffect:
        "Переговори відокремлюються від подальшого доказового використання, за винятком зафіксованих домовленостей.",
      foreignersCase:
        "У справі іноземця важливо відрізняти конфіденційні переговорні заяви від домовленостей, що офіційно ввійшли до protokołu.",
    },
  ],
})
