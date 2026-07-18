import { createLegalTextAuthor } from "../../../legal-text"

import { defineKpaEditorialPart } from "../define-kpa-part"

const kpaLaw = createLegalTextAuthor("kpa")
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "222",
      provisionId: "kpa-art-222",
      reviewStatus: "reviewed",
      summary:
        "Норма наказує кваліфікувати лист за його змістом, а не заголовком або зовнішньою формою. Неправильна назва звернення не звільняє орган від установлення його справжнього предмета.",
      rules: [
        {
          locator: "одне речення",
          explanation:
            "Чи є письмо skargą або wnioskiem, вирішує зміст заявлених тверджень і вимог, а не назва документа.",
        },
      ],
      legalEffect:
        "Орган повинен застосувати процедуру, що відповідає фактичному змісту звернення.",
      foreignersCase: kpaLaw.text`Якщо іноземець назвав лист skargą, але по суті просить переглянути остаточне рішення, орган має кваліфікувати його за змістом, зокрема з урахуванням ${kpaLaw.article("235", "art. 235")}.`,
    },
  ],
})
