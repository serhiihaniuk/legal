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
      article: "101",
      provisionId: "kpa-art-101",
      reviewStatus: "reviewed",
      summary:
        "Про zawieszenie і podjęcie орган повідомляє сторони postanowieniem, а визначені рішення можна оскаржити zażaleniem.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Сторони повідомляються як про зупинення, так і про поновлення.",
        },
        {
          locator: "§ 2",
          explanation: kpaLaw.text`При zawieszeniu на прохання сторони орган пояснює наслідок трирічної бездіяльності з ${kpaLaw.article("98", "art. 98 § 2")}.`,
        },
        {
          locator: "§ 3",
          explanation:
            "Zażalenie доступне на zawieszenie або відмову відновити зупинене провадження.",
        },
      ],
      legalEffect:
        "Стан провадження формалізується і в окремих випадках підлягає інстанційному контролю.",
      foreignersCase:
        "Іноземець має зберігати postanowienie і відрізняти оскаржуване zawieszenie від самого podjęcia, на яке текст не відкриває zażalenia.",
    },
  ],
})
