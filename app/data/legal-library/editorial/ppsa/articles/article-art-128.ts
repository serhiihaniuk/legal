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
      "ppsa-art-128",
      "Sąd з urzędu postanowi podjąć postępowanie, коли припиниться причина zawieszenie, зокрема після встановлення następcа правного, представника, завершення іншого провадження або визначення наступного zarządca sukcesyjny; після року без спадкоємців суд може звернутися про kurator spadku.",
      ppsaLaw.text`${ppsaLaw.article("128", "Art. 128")} визначає podjęcie після припинення причини zawieszenie та спеціальні моменти для різних підстав.`,
      [
        {
          locator: "§ 1 pkt 1–3",
          explanation:
            "Після смерті сторони потрібні zgłoszenie або wskazanie наступників/zarządca або ustanowienie kurator; після втрати zdolność чи представника — відповідний następca або представник.",
        },
        {
          locator: "§ 1 pkt 4–6",
          explanation:
            "При залежності від іншого провадження podjęcie зазвичай пов’язане з prawomocność його завершення, але sąd може діяти раніше; окремо названі zarządca sukcesyjny.",
        },
        {
          locator: "§ 2",
          explanation:
            "Якщо протягом року після postanowienie про zawieszenie не з’явився спадкоємець і немає podjęcie з zarządca, sąd може звернутися до sąd spadku про kurator; це може зробити referendarz sądowy.",
        },
      ],
      "Podjęcie відновлює рух конкретної судової справи, але не усуває матеріальних спорів щодо рішення organ.",
      "У справі cudzoziemca після усунення причини zawieszenie подайте підтвердження наступника або іншої події й перевірте, від якої дати знову рахуються terminy."
    ),
  ],
})
