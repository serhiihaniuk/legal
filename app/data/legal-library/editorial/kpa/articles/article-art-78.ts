import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "78",
      provisionId: "kpa-art-78",
      reviewStatus: "reviewed",
      summary:
        "Стаття встановлює, коли organ повинен врахувати wniosek dowodowy strony і коли може його не прийняти.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Żądanie przeprowadzenia dowodu слід задовольнити, якщо предмет доказу має значення для справи.",
        },
        {
          locator: "§ 2",
          explanation:
            "Пізніше zgłoszone żądanie organ може не врахувати, коли воно стосується обставини вже встановленої іншими доказами, якщо ця обставина не має значення для sprawy.",
        },
      ],
      legalEffect:
        "Релевантний wniosek dowodowy не можна відхилити довільно; оцінка залежить від значення факту та вже зібраного матеріалу.",
      foreignersCase:
        "Іноземець може просити про конкретний доказ, пояснивши, який істотний факт він підтверджує; це загальне правило доказового провадження.",
    },
  ],
})
