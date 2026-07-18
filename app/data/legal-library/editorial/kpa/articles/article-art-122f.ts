import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "122f",
      provisionId: "kpa-art-122f",
      reviewStatus: "reviewed",
      summary:
        "На заяву сторони орган видає postanowieniem zaświadczenie про milczące załatwienie або відмовляє в ньому.",
      rules: [
        {
          locator: "§ 1–2",
          explanation:
            "І видача, і відмова мають форму postanowienia, на яке є zażalenie.",
        },
        {
          locator: "§ 3–4",
          explanation:
            "Zaświadczenie містить орган, сторони, дату, підставу, зміст, дату результату, pouczenie й підпис та вручається всім сторонам.",
        },
        {
          locator: "§ 5",
          explanation:
            "Неврегульовані питання підпорядковуються правилам działu VII.",
        },
      ],
      legalEffect:
        "Сторона може отримати формальний доказ мовчазного результату, а відмову піддати інстанційному контролю.",
      foreignersCase:
        "Якщо спеціальний режим застосовний до справи іноземця, zaświadczenie є документом результату, а не джерелом самого права.",
    },
  ],
})
