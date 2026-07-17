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
      "ppsa-art-129",
      "При zawieszenie на zgodny wniosek stron sąd podjmie postępowanie на wniosek будь-якої з них не раніше ніж через три місяці; при zawieszenie за wniosek BFG — на wniosek цього Fundusz.",
      ppsaLaw.text`${ppsaLaw.article("129", "Art. 129")} визначає, хто і коли може ініціювати podjęcie для двох спеціальних видів zawieszenie.`,
      [
        {
          locator: "§ 1",
          explanation:
            "Для zawieszenie на zgodny wniosek достатній wniosek однієї сторони, але podjęcie можливе не раніше трьох місяців від zawieszenie.",
        },
        {
          locator: "§ 2",
          explanation: ppsaLaw.text`У випадку ${ppsaLaw.article("124", "Art. 124 § 4")} подати wniosek про podjęcie може Bankowy Fundusz Gwarancyjny.`,
        },
      ],
      "Стаття регулює відновлення руху після двох видів zawieszenie; вона не встановлює загального строку розгляду skarga.",
      "Якщо справа про pobyt була зупинена за спільною заявою, відмітьте тримісячну дату і подайте wniosek про podjęcie від імені належної сторони, коли це дозволено."
    ),
  ],
})
