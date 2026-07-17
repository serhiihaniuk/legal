import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "142",
      provisionId: "kpa-art-142",
      reviewStatus: "reviewed",
      summary:
        "Postanowienie без zażalenia можна оскаржити лише разом з odwołaniem від decyzji.",
      rules: [
        {
          locator: "єдиний блок",
          explanation:
            "Zarzut щодо такого проміжного акта зберігається до контролю кінцевої decyzji.",
        },
      ],
      legalEffect:
        "Окремого апеляційного провадження немає, але дефект не втрачає можливості перевірки.",
      foreignersCase:
        "У справі іноземця неоскаржуване postanowienie слід зберегти й конкретно включити до zarzutów odwołania від decyzji.",
    },
  ],
})
