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
      "ppsa-art-112",
      ppsaLaw.text`Якщо organ ухиляється від виконання postanowienie sąd або zarządzenie przewodniczący, прийнятого під час і у зв’язку з розглядом справи, sąd може накласти на organ grzywna у розмірі за ${ppsaLaw.article("154", "Art. 154 § 6")}; postanowienie може бути на posiedzenie niejawnym.`,
      ppsaLaw.text`${ppsaLaw.article("112", "Art. 112")} дає суду санкційний інструмент проти ухилення органу від процесуального розпорядження, прийнятого в цій справі.`,
      [
        {
          locator: "Art. 112",
          explanation:
            "Потрібно встановити, що невиконане postanowienie або zarządzenie прийняте в toku postępowania і пов’язане з розглядом конкретної sprawy.",
        },
        {
          locator: "Art. 112",
          explanation: ppsaLaw.text`Sąd може, але не зобов’язаний, застосувати grzywna; розмір відсилає до ${ppsaLaw.article("154", "Art. 154 § 6")}, а спосіб — до posiedzenie niejawnego.`,
        },
      ],
      ppsaLaw.text`Grzywna за ${ppsaLaw.article("112", "Art. 112")} забезпечує виконання процесуального розпорядження і сама не замінює рішення щодо законності decyzja organ.`,
      "Якщо organ не виконує розпорядження sąd у sprawa cudzoziemca, зафіксуйте зміст, дату doręczenie та факт ухилення; окремо оцініть wniosek про grzywna."
    ),
  ],
})
