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
      "ppsa-art-113",
      "Przewodniczący закриває rozprawa, коли sąd вважає справу достатньо з’ясованою; її можна закрити й тоді, коли залишився додатковий dowód з документів, відомих сторонам, а окреме слухання щодо нього є зайвим.",
      ppsaLaw.text`${ppsaLaw.article("113", "Art. 113")} визначає, коли rozprawa може бути zamknięta, включно з вузьким винятком для відомого сторонам документального доказу.`,
      [
        {
          locator: "§ 1",
          explanation:
            "Критерієм є оцінка sąd, що sprawa достатньо з’ясована; рішення про закриття приймає przewodniczący.",
        },
        {
          locator: "§ 2",
          explanation:
            "Закриття можливе, якщо ще буде uzupełniający dowód з документів, відомих сторонам, і слухання саме щодо нього суд вважає zbyteczne.",
        },
      ],
      "Закриття rozprawa не означає автоматичного прийняття позиції сторони й не забороняє застосування спеціальних правил про повторне відкриття, якщо вони є.",
      "До zamknięcie rozprawa у спорі про pobyt перевірте, чи всі важливі wnioski й документи є в aktach; не покладайтеся на можливість додати їх пізніше."
    ),
  ],
})
