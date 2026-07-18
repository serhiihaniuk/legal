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
      article: "151",
      provisionId: "kpa-art-151",
      reviewStatus: "reviewed",
      summary: kpaLaw.text`Після wznowienia орган або відмовляє в uchyleniu, або скасовує стару decyzję і вирішує суть заново; за бар’єром ${kpaLaw.article("146", "art. 146")} лише констатує порушення.`,
      rules: [
        {
          locator: "§ 1",
          explanation: kpaLaw.text`Результат залежить від підтвердження підстав ${kpaLaw.articleRange("145", "145b", { start: "art. 145", end: "145b" })}: збереження акта або uchylenie з новою decyzją.`,
        },
        {
          locator: "§ 2",
          explanation: kpaLaw.text`Якщо ${kpaLaw.article("146", "art. 146")} блокує скасування, organ stwierdza порушення права і пояснює, чому decyzję не усунуто.`,
        },
        {
          locator: "§ 3",
          explanation:
            "Milczące załatwienie не застосовується до цього повторного розгляду.",
        },
      ],
      legalEffect:
        "Wznowienie завершується новою formalną decyzją, але не завжди ліквідує попередній акт.",
      foreignersCase: kpaLaw.text`У sprawie cudzoziemca позитивне postanowienie o wznowieniu ще не гарантує uchylenia; organ може не підтвердити підставу або застосувати ${kpaLaw.article("146", "art. 146")}.`,
    },
  ],
})
