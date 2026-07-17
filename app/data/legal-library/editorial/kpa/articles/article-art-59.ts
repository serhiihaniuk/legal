import { createLegalTextAuthor } from "../../../legal-text"

import { defineKpaEditorialPart } from "../define-kpa-part"

const kpaLaw = createLegalTextAuthor("kpa")
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "59",
      provisionId: "kpa-art-59",
      reviewStatus: "reviewed",
      summary:
        "Стаття визначає organ, який вирішує питання przywrócenia terminu, та засіб оскарження відмови.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Загалом рішення приймає właściwy w sprawie organ, а на відмову належить zażalenie.",
        },
        {
          locator: "§ 2",
          explanation:
            "Щодо строку на odwołanie або zażalenie остаточно вирішує organ właściwy do ich rozpatrzenia.",
        },
      ],
      legalEffect:
        "Właściwość щодо відновлення залежить від виду пропущеної дії, а відмова за загальним правилом контролюється zażaleniem.",
      foreignersCase: kpaLaw.text`У справі іноземця prośby про відновлення строку на odwołanie не слід адресувати як звичайне питання organowi першої інстанції без урахування ${kpaLaw.article("59", "§ 2")}.`,
    },
  ],
})
