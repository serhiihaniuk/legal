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
      "ppsa-art-110",
      "Rozprawa відкладається, якщо sąd вирішує повідомити про провадження осіб, які досі не брали участі у справі як strony.",
      "Стаття пов’язує odroczenie з рішенням суду повідомити потенційних сторін, які раніше не були учасниками.",
      [
        {
          locator: "Art. 110",
          explanation:
            "З’ясуйте, кого саме sąd вважає особою, яку треба zawiadomić як можливу stronę, і зафіксуйте нову дату rozprawa.",
        },
      ],
      ppsaLaw.text`${ppsaLaw.article("110", "Art. 110")} стосується складу учасників і повідомлення; воно не вирішує, чи має нова особа право на задоволення skarga.`,
      "Якщо рішення про pobyt може зачіпати іншу особу, перевірте, чи суд має підстави повідомити її як stronę до продовження rozprawa."
    ),
  ],
})
