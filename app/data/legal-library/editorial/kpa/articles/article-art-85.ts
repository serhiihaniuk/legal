import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "85",
      provisionId: "kpa-art-85",
      reviewStatus: "reviewed",
      summary:
        "Норма дозволяє органу провести oględziny, коли для встановлення факту треба безпосередньо оглянути предмет.",
      rules: [
        {
          locator: "§ 1",
          explanation: "Орган сам оцінює потребу в проведенні огляду.",
        },
        {
          locator: "§ 2",
          explanation:
            "Третя особа, у якої знаходиться предмет, зобов’язана показати його на wezwanie органу.",
        },
      ],
      legalEffect:
        "Огляд стає окремою доказовою дією, а володілець предмета отримує обов’язок надати його для огляду.",
      foreignersCase:
        "У справі іноземця це загальне доказове правило може застосовуватися, коли значущу обставину неможливо надійно встановити лише з документів.",
    },
  ],
})
