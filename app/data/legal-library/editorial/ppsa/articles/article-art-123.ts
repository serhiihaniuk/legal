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
      "ppsa-art-123",
      "Postępowanie ulega zawieszeniu z mocy prawa, якщо sąd припинив czynności через siła wyższa.",
      ppsaLaw.text`${ppsaLaw.article("123", "Art. 123")} передбачає автоматичне zawieszenie, коли надзвичайна сила фактично зупиняє діяльність sąd.`,
      [
        {
          locator: "Art. 123",
          explanation:
            "Встановіть одночасно siła wyższa і zaprzestanie czynności przez sąd; звичайна затримка або відсутність руху справи самі по собі не тотожні цій підставі.",
        },
      ],
      ppsaLaw.text`Zawieszenie з ${ppsaLaw.article("123", "Art. 123")} зупиняє рух судового провадження за законом, але не вирішує skarga і не створює права на pobyt.`,
      "У справі cudzoziemca зафіксуйте офіційну підставу zawieszenie та її вплив на строк; не називайте кожну затримку sąd siła wyższa без підтвердження."
    ),
  ],
})
