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
      "ppsa-art-111",
      "Sąd zarządza спільний розгляд кількох окремих справ, якщо вони могли бути охоплені однією skarga і це не спричинить надмірного продовження; може також об’єднати пов’язані справи.",
      ppsaLaw.text`${ppsaLaw.article("111", "Art. 111")} розрізняє обов’язкове поєднання справ за умовами ${ppsaLaw.article("111", "§ 1")} і факультативне поєднання справ, пов’язаних між собою.`,
      [
        {
          locator: "§ 1",
          explanation:
            "Для zarządza połączenie потрібні обидві умови: справи могли бути однією skarga і спільний розгляд не надмірно продовжить postępowanie.",
        },
        {
          locator: "§ 2",
          explanation:
            "За наявності зв’язку між справами sąd може поєднати їх для łącznego rozpoznania або rozstrzygnięcia, але це його процесуальне рішення.",
        },
      ],
      "Поєднання змінює організацію розгляду, але не створює нових матеріальних підстав для рішення у справі про pobyt.",
      ppsaLaw.text`У кількох пов’язаних skarga щодо членів сім’ї порівняйте предмет і ризик затримки; не припускайте, що однакова тема автоматично відповідає ${ppsaLaw.article("111", "Art. 111")}.`
    ),
  ],
})
