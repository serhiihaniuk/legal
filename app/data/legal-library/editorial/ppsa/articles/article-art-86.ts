import { createLegalTextAuthor, type LegalTextValue } from "../../../legal-text"

import {
  defineEditorialPart,
  type EditorialEntry,
} from "../../define-editorial-part"

const ppsaLaw = createLegalTextAuthor("ppsa")

type Rule = { locator: string; explanation: LegalTextValue }

type ProvisionId = EditorialEntry<"ppsa">["provisionId"]

/**
 * This part was checked against the promoted local PPSA corpus
 * `ppsa-2026-143` (Dz.U. 2026 poz. 143), whose articles 85–129 are active.
 * The claim is a compact Ukrainian rendering of the statutory rule; Polish
 * procedural terms are retained so that the learner can match the source.
 */
function reviewed(
  provisionId: ProvisionId,
  claim: LegalTextValue,
  summary: LegalTextValue,
  rules: readonly Rule[],
  legalEffect: LegalTextValue,
  foreignersCase: LegalTextValue
): EditorialEntry<"ppsa"> {
  return {
    provisionId,
    reviewStatus: "reviewed",
    claims: [
      {
        kind: "statute-text",
        text: claim,
        sourceLocator: `Art. ${provisionId.slice("ppsa-art-".length)}`,
      },
    ],
    summary,
    rules,
    legalEffect,
    foreignersCase,
  }
}
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    reviewed(
      "ppsa-art-86",
      "Якщо strona без своєї вини не виконала czynność у строк, sąd на її wniosek postanowi przywrócenie terminu; це недопустимо без ujemnych skutków для сторони, а на postanowienie можна подати zażalenie.",
      ppsaLaw.text`${ppsaLaw.article("86", "Art. 86")} визначає базові умови przywrócenie terminu: brak winy, wniosek, негативний процесуальний наслідок і контроль через zażalenie.`,
      [
        {
          locator: "§ 1",
          explanation:
            "Потрібно показати, що строк пропущено без вини сторони; рішення приймається postanowienie, у тому числі на posiedzeniu niejawnym.",
        },
        {
          locator: "§ 2",
          explanation:
            "Якщо пропуск не спричинив для сторони ujemnych skutków w zakresie postępowania sądowego, przywrócenie terminu не допускається.",
        },
        {
          locator: "§ 3",
          explanation:
            "На postanowienie про przywrócenie terminu або про відмову в ньому przysługuje zażalenie.",
        },
      ],
      ppsaLaw.text`${ppsaLaw.article("86", "Art. 86")} відкриває можливість відновити строк лише за названих умов; він не скасовує обов’язок довести факт і відсутність вини.`,
      ppsaLaw.text`У справі про pobyt поясніть, чому особа не могла вчасно подати skarga або іншу czynność, додайте доступні підтвердження та перевірте окремі вимоги ${ppsaLaw.article("87", "Art. 87")}.`
    ),
  ],
})
