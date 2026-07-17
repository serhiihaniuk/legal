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
      "ppsa-art-108",
      "Якщо strona або її pełnomocnik відсутні на rozprawa, przewodniczący або sędzia sprawozdawca представляє їхні wnioski, twierdzenia і dowody, що містяться в aktach sprawy.",
      ppsaLaw.text`${ppsaLaw.article("108", "Art. 108")} гарантує, що матеріали відсутньої сторони з akt можуть бути представлені під час слухання.`,
      [
        {
          locator: "Art. 108",
          explanation:
            "Перевірте, чи потрібний wniosek, twierdzenie або dowód справді міститься в aktach; стаття не додає нових матеріалів від імені відсутньої сторони.",
        },
      ],
      "Представлення матеріалів з akt не замінює особистої участі й не означає, що кожен доказ буде прийнятий або вирішальним.",
      ppsaLaw.text`Якщо представник cudzoziemiec не прибув, заздалегідь перевірте, чи всі письмові wnioski і документи є в aktach, щоб їх могли представити за ${ppsaLaw.article("108", "Art. 108")}.`
    ),
  ],
})
