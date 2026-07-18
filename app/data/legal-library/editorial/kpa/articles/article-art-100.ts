import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "100",
      provisionId: "kpa-art-100",
      reviewStatus: "reviewed",
      summary:
        "Норма визначає дії органу після zawieszenia через zagadnienie wstępne та винятки, коли орган вирішує це питання сам.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Орган звертається до компетентного органу чи суду або викликає сторону зробити це у визначений строк.",
        },
        {
          locator: "§ 2",
          explanation:
            "Через небезпеку для життя, здоров’я або серйозну шкоду суспільному інтересу орган сам оцінює попереднє питання і вирішує справу.",
        },
        {
          locator: "§ 3",
          explanation:
            "Такий підхід діє також при бездіяльності викликаної сторони або ризику непоправної шкоди для неї; можливе забезпечення.",
        },
      ],
      legalEffect:
        "Zagadnienie wstępne або передається компетентному суб’єкту, або винятково оцінюється самим органом для недопущення серйозної шкоди.",
      foreignersCase:
        "У справі іноземця слід відрізнити справжнє попереднє питання від звичайного доказу та виконати wezwanie звернутися до іншого органу чи суду.",
    },
  ],
})
