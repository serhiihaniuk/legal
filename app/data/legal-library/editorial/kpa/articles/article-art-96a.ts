import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "96a",
      provisionId: "kpa-art-96a",
      reviewStatus: "reviewed",
      summary:
        "Стаття визначає, коли адміністративна справа придатна для mediacji, її добровільність, мету та можливий склад учасників.",
      rules: [
        {
          locator: "§ 1–1b",
          explanation:
            "Характер справи має дозволяти mediację; орган фіксує в актах оцінку допустимості та можливі причини не пропонувати її.",
        },
        {
          locator: "§ 2–3",
          explanation:
            "Медіація добровільна і служить з’ясуванню фактів та права й пошуку законного способу завершення справи.",
        },
        {
          locator: "§ 4",
          explanation:
            "Учасниками можуть бути орган і сторона або сторони, чи лише сторони провадження.",
        },
      ],
      legalEffect:
        "За придатності справи її учасники можуть шукати узгоджене законне вирішення через mediację.",
      foreignersCase:
        "У справі іноземця mediacja не виникає автоматично; спочатку орган має оцінити характер конкретної справи, зокрема межі свого адміністративного розсуду.",
    },
  ],
})
