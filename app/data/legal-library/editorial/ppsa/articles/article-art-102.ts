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
      "ppsa-art-102",
      "Перебіг czynności, які протоколюються, можна додатково записати апаратурою dźwiękową, але до її запуску треба попередити всіх учасників czynność.",
      "Стаття дозволяє додаткову звукову фіксацію протоколюваної дії за умови попередження всіх присутніх учасників.",
      [
        {
          locator: "Art. 102",
          explanation:
            "Запис є додатковим до протоколювання, а повідомлення має відбутися перед uruchomienie aparatury.",
        },
        {
          locator: "Art. 102",
          explanation:
            "Перевірте, чи попередження отримали всі osoby uczestniczące w czynności, а не лише сторона, яка веде запис.",
        },
      ],
      ppsaLaw.text`${ppsaLaw.article("102", "Art. 102")} регулює спосіб фіксації й не робить будь-який приватний аудіозапис заміною судового протоколу.`,
      "Якщо на слуханні про pobyt ведеться запис, зафіксуйте факт попередження та зіставляйте аудіо лише з офіційним protokół і межами дозволеної czynność."
    ),
  ],
})
