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
      article: "26",
      provisionId: "kpa-art-26",
      reviewStatus: "reviewed",
      summary:
        "Стаття визначає, хто веде справу після wyłączenia працівника, органу або такої кількості працівників, що organ не може діяти.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Після wyłączenia працівника його безпосередній керівник призначає іншого працівника.",
        },
        {
          locator: "§ 2",
          explanation:
            "Після wyłączenia органу справу веде визначений organ wyższego stopnia або інший призначений ним підлеглий organ; для окремих найвищих посад organ визначає Prezes Rady Ministrów.",
        },
        {
          locator: "§ 3",
          explanation: kpaLaw.text`Якщо через wyłączenie працівників organ став нездатним вирішити справу, відповідно застосовується механізм ${kpaLaw.article("26", "§ 2")}.`,
        },
      ],
      legalEffect:
        "Wyłączenie не припиняє справу: норма забезпечує нового працівника або інший właściwy organ.",
      foreignersCase:
        "У справі іноземця після обґрунтованого wyłączenia потрібно перевірити, хто формально уповноважений продовжити провадження.",
    },
  ],
})
