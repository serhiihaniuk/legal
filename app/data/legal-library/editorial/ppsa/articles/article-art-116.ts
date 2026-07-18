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
      "ppsa-art-116",
      ppsaLaw.text`Медіацію (mediacja) проводить mediator, якого обирають strony. Якщо mediacja проводиться у випадку ${ppsaLaw.article("115", "Art. 115 § 2")} і сторони не домовилися про спільний вибір, sąd призначає mediator, який має належні знання й уміння для проведення медіації у справах цього виду. Mediator має повну zdolność do czynności prawnych і користується повними prawami publicznymi.`,
      ppsaLaw.text`${ppsaLaw.article("116", "Art. 116")} регулює вибір і призначення mediator та базові вимоги до його особи, а також передачу контактних даних.`,
      [
        {
          locator: "§ 1–2",
          explanation: ppsaLaw.text`Зазвичай mediator обирають strony. У випадку ${ppsaLaw.article("115", "Art. 115 § 2")} за відсутності спільного вибору sąd призначає особу з належними знаннями й уміннями для проведення медіації у справах цього виду.`,
        },
        {
          locator: "§ 2",
          explanation:
            "Przewodniczący wydziału без зволікання передає mediator контактні дані stron і pełnomocnicy, зокрема телефони та e-mail, якщо вони є.",
        },
        {
          locator: "§ 3",
          explanation:
            "Mediator — фізична особа з повною дієздатністю та повними публічними правами; особливо названо внесених до відповідних списків або wykaz.",
        },
      ],
      "Стаття визначає порядок добору mediator, але сама не встановлює змісту майбутніх ustalenia чи обов’язку сторін погодитися.",
      "Перед mediacja у справі cudzoziemca перевірте, хто mediator і чи має він потрібні якості; контактні дані та повноваження не замінюють згоди щодо суті спору."
    ),
  ],
})
