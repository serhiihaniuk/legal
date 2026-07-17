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
      "ppsa-art-117",
      "На підставі ustalenia mediacja organ у межах своєї właściwość і kompetencja uchyla або zmienia zaskarżony akt чи виконує/вчиняє іншу czynność; без ustalenia справа підлягає розгляду sąd.",
      ppsaLaw.text`${ppsaLaw.article("117", "Art. 117")} пояснює, що саме може зробити organ після результативної mediacja і що відбувається, якщо домовленості немає.`,
      [
        {
          locator: "§ 1",
          explanation:
            "Порівняйте ustalenia з повноваженнями organ: він діє лише в межах właściwość і kompetencja та відповідно до обставин справи.",
        },
        {
          locator: "§ 2",
          explanation:
            "Якщо strony не домовилися про спосіб załatwienia, mediacja не завершує судовий контроль — справу розглядає sąd.",
        },
      ],
      ppsaLaw.text`${ppsaLaw.article("117", "Art. 117")} не гарантує uchylenie або zmiana рішення: наслідок залежить від ustalenia, повноважень organ і фактичного виконання.`,
      "У спорі щодо pobyt перевірте, який акт або czynność organ зобов’язався виконати за protokół, і не вважайте домовленість заміною нового законного rozstrzygnięcia."
    ),
  ],
})
