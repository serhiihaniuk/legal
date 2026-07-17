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
      "ppsa-art-121",
      ppsaLaw.text`Sprawa може бути також розглянута в tryb uproszczony у випадку, про який йдеться в ${ppsaLaw.article("55", "Art. 55 § 2")}.`,
      ppsaLaw.text`${ppsaLaw.article("121", "Art. 121")} додає окрему підставу tryb uproszczony через відсилання до ${ppsaLaw.article("55", "Art. 55 § 2")}.`,
      [
        {
          locator: "Art. 121",
          explanation: ppsaLaw.text`Не замінюйте відсилання загальним припущенням: спочатку прочитайте умову ${ppsaLaw.article("55", "Art. 55 § 2")} у фактах конкретної справи.`,
        },
      ],
      ppsaLaw.text`Стаття лише відкриває ще одну процесуальну можливість і не встановлює самостійно змісту ${ppsaLaw.article("55", "Art. 55 § 2")} або результату skarga.`,
      ppsaLaw.text`Якщо суд посилається на ${ppsaLaw.article("121", "Art. 121")} у спорі про pobyt, перевірте повний текст ${ppsaLaw.article("55", "Art. 55 § 2")} і підставу, яку зазначено в aktach.`
    ),
  ],
})
