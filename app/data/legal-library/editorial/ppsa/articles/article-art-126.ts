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
      "ppsa-art-126",
      "Sąd може також zawiesić postępowanie на zgodny wniosek stron.",
      ppsaLaw.text`${ppsaLaw.article("126", "Art. 126")} допускає zawieszenie за спільною заявою всіх stron, без твердження, що суд зобов’язаний її прийняти.`,
      [
        {
          locator: "Art. 126",
          explanation:
            "Перевірте, чи wniosek справді zgodny всіх stron; остаточне рішення про zawieszenie приймає sąd.",
        },
      ],
      "Зупинення за спільною заявою призупиняє рух справи, але не вирішує skarga і не змінює матеріальне право на pobyt.",
      ppsaLaw.text`Перш ніж просити про zawieszenie судової справи щодо pobyt, узгодьте позицію всіх stron і врахуйте мінімальний строк до podjęcie за ${ppsaLaw.article("129", "Art. 129")}.`
    ),
  ],
})
