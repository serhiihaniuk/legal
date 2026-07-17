import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "124",
      provisionId: "kpa-art-124",
      reviewStatus: "reviewed",
      summary:
        "Стаття встановлює обов’язкові елементи postanowienia та випадки, коли воно потребує фактичного і правового uzasadnienia.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Акт називає орган, дату, адресатів, підставу, результат, доступний засіб захисту й уповноважений підпис.",
        },
        {
          locator: "§ 2",
          explanation:
            "Uzasadnienie потрібне для актів із zażaleniem, skargą, sprzeciwem та для postanowienia, виданого після zażalenia.",
        },
      ],
      legalEffect:
        "Postanowienie повинно дозволяти адресату зрозуміти, що вирішено, ким і як це можна контролювати.",
      foreignersCase:
        "У справі іноземця слід звірити pouczenie і uzasadnienie, а не вважати кожне postanowienie автоматично оскаржуваним.",
    },
  ],
})
