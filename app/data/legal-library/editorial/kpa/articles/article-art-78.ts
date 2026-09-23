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
            "Орган може не задовольнити вимогу, не заявлену під час проведення доказування або rozprawy, якщо вона стосується обставин, уже встановлених іншими доказами. Це не дозволяє відмовити на цій підставі, якщо обставини мають значення для справи.",
        },
      ],
      legalEffect:
        "Релевантний wniosek dowodowy не можна відхилити довільно; оцінка залежить від значення факту та вже зібраного матеріалу.",
      foreignersCase:
        "Іноземець може просити про конкретний доказ, пояснивши, який істотний факт він підтверджує; це загальне правило доказового провадження.",
    },
  ],
})
