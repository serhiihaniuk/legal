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
      "ppsa-art-115",
      "Postępowanie mediacyjne може бути проведене на wniosek skarżący або organ, поданий до wyznaczenie rozprawa, і може проводитися також без wniosek; мета — з’ясувати фактичні та правові обставини й узгодити спосіб вирішення в межах prawa.",
      ppsaLaw.text`${ppsaLaw.article("115", "Art. 115")} визначає момент, ініціаторів і мету mediacja, не обіцяючи сторонам конкретного результату.`,
      [
        {
          locator: "§ 1",
          explanation:
            "Wniosek про mediacja подають skarżący або organ до призначення rozprawa; предметом є факти, право та можливі ustalenia в межах obowiązującego prawa.",
        },
        {
          locator: "§ 2",
          explanation:
            "Mediacja може початися і без wniosek сторін — ця можливість не означає, що угода буде досягнута.",
        },
      ],
      "Mediacja є способом роботи над вирішенням спору, а не обов’язком органу змінити рішення чи гарантією дозволу на pobyt.",
      "У спорі про pobyt перевірте, чи сторони справді можуть узгодити спосіб załatwienia в межах компетencji organ; не називайте саму mediacja позитивним рішенням."
    ),
  ],
})
