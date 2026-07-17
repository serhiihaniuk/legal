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
      "ppsa-art-98",
      "Przewodniczący відкриває, веде й закриває posiedzenia, надає слово, ставить питання, дозволяє ставити питання та оголошує orzeczenia; може забрати слово при зловживанні й відхилити niewłaściwe або zbyteczne питання.",
      ppsaLaw.text`${ppsaLaw.article("98", "Art. 98")} описує процесуальне керування posiedzenie головуючим і межі усних виступів та питань.`,
      [
        {
          locator: "§ 1",
          explanation:
            "Організаційні дії під час posiedzenia належать przewodniczący, включно з наданням слова та оголошенням orzeczenia.",
        },
        {
          locator: "§ 2",
          explanation:
            "Відбирання слова можливе при його nadużywa, а uchylenie pytania — якщо воно niewłaściwe або zbyteczne.",
        },
      ],
      "Норма дає головуючому інструменти для порядку слухання, але не дозволяє наперед оцінити результат skarga.",
      "Підготуйте короткі, предметні пояснення щодо decyzja про pobyt і заявляйте процесуально важливі питання в межах наданого слова."
    ),
  ],
})
