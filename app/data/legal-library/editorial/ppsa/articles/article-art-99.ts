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
      "ppsa-art-99",
      "Sąd може odroczyć posiedzenie, навіть за zgodny wniosek stron, лише з ważna przyczyna.",
      "Стаття обмежує odroczenie вимогою важливої причини й не робить спільний wniosek сторін достатньою підставою сам по собі.",
      [
        {
          locator: "Art. 99",
          explanation:
            "Перевірте, яку конкретну ważna przyczyna наведено; згода всіх сторін не усуває цієї вимоги.",
        },
      ],
      ppsaLaw.text`${ppsaLaw.article("99", "Art. 99")} стосується календаря posiedzenie і не змінює матеріальних прав сторони у справі про pobyt.`,
      "Якщо потрібне odroczenie rozprawa, поясніть важливу причину й підтвердьте її; сама зайнятість або спільна згода не дають автоматичного права на перенесення."
    ),
  ],
})
