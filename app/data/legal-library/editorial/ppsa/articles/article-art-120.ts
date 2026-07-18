import { createLegalTextAuthor, type LegalTextValue } from "../../../legal-text"

import {
  defineEditorialPart,
  type EditorialEntry,
} from "../../define-editorial-part"

const ppsaLaw = createLegalTextAuthor("ppsa")

type Rule = { locator: string; explanation: LegalTextValue }

type ProvisionId = EditorialEntry<"ppsa">["provisionId"]

/**
 * This part was checked against the prepared current PPSA corpus
 * `ppsa-2026-143-with-2026-846` (Dz.U. 2026 poz. 143), whose articles 85–129 are active.
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
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    reviewed(
      "ppsa-art-120",
      "У tryb uproszczony sąd розглядає справу на posiedzenie niejawnym у складі трьох sędziowie.",
      ppsaLaw.text`${ppsaLaw.article("120", "Art. 120")} встановлює базову форму і склад суду для tryb uproszczony.`,
      [
        {
          locator: "Art. 120",
          explanation:
            "Перевірте, що справа справді направлена до tryb uproszczony; саме тоді діють posiedzenie niejawne і склад трьох sędziowie.",
        },
      ],
      "Це правило про форму та склад розгляду, а не про висновок щодо законності decyzja про pobyt.",
      ppsaLaw.text`У повідомленні про судову справу cudzoziemca відрізняйте tryb uproszczony від звичайної rozprawa і читайте, чи немає рішення за ${ppsaLaw.article("122", "Art. 122")}.`
    ),
  ],
})
