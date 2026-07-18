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
      "ppsa-art-122",
      "Sąd, який розглядає справу в tryb uproszczony, може передати її для розгляду na rozprawę.",
      ppsaLaw.text`${ppsaLaw.article("122", "Art. 122")} дозволяє суду відмовитися від спрощеної форми posiedzenie, якщо для конкретної справи потрібен розгляд na rozprawie.`,
      [
        {
          locator: "Art. 122",
          explanation:
            "Передача na rozprawę є можливістю sąd, а не автоматичним правом сторони; перевірте відповідне postanowienie або zarządzenie в aktach.",
        },
      ],
      "Передача na rozprawę змінює форму розгляду, але не визначає, чи буде skarga задоволена.",
      ppsaLaw.text`У справі про pobyt стежте за зміною форми розгляду: після передачі за ${ppsaLaw.article("122", "Art. 122")} перевірте нове zawiadomienie і підготуйте усні пояснення.`
    ),
  ],
})
