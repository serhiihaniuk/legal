import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "95",
      provisionId: "kpa-art-95",
      reviewStatus: "reviewed",
      summary:
        "Стаття закріплює активні права сторони під час rozprawy та межі відхилення запитань керівником.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Сторони можуть пояснювати, заявляти вимоги, пропозиції й заперечення, подавати докази та оцінювати результати доказового провадження.",
        },
        {
          locator: "§ 2",
          explanation:
            "Неістотне запитання може бути відхилене, але на вимогу сторони його зміст заносять до protokołu.",
        },
      ],
      legalEffect:
        "Сторона отримує формальну можливість впливати на фактичний і правовий матеріал rozprawy.",
      foreignersCase:
        "Іноземець або pełnomocnik може заявити докази й заперечення, а відхилене важливе запитання варто вимагати зафіксувати в protokole.",
    },
  ],
})
