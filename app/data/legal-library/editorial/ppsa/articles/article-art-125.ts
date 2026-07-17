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
      "ppsa-art-125",
      ppsaLaw.text`Sąd може zawiesić postępowanie з urzędu, якщо результат залежить від іншого провадження або процедури, виявленого кримінального/дисциплінарного czyn, неможливо надати справі хід через адресу чи невиконане zarządzenie скаржника, або помер pełnomocnik; ${ppsaLaw.article("125", "§ 2")} регулює початок такого іншого провадження.`,
      ppsaLaw.text`${ppsaLaw.article("125", "Art. 125")} містить факультативні підстави zawieszenie з urzędu та спосіб дій, коли залежне postępowanie ще не розпочато.`,
      [
        {
          locator: "§ 1 pkt 1–1a",
          explanation:
            "Залежність може стосуватися іншого administracyjne, sądowoadministracyjne, sądowe провадження, TK, TSUE або процедури спору про podwójne opodatkowanie.",
        },
        {
          locator: "§ 1 pkt 2–4",
          explanation:
            "Окремо перевірте можливий вплив кримінального чи дисциплінарного czyn, відсутність/помилковість адреси або невиконання zarządzenia, а також смерть pełnomocnik, якщо strona не діє особисто.",
        },
        {
          locator: "§ 2",
          explanation:
            "Якщо початок кримінального чи адміністративного провадження залежить від wniosek strony, sąd встановлює строк для його wszczęcie; інакше може звернутися до właściwy organ.",
        },
      ],
      ppsaLaw.text`Zawieszenie за ${ppsaLaw.article("125", "Art. 125")} є можливістю sąd і вимагає зв’язку залежного питання з вирішенням справи, а не просто наявності паралельної процедури.`,
      "У skarga про pobyt поясніть, чому інше провадження реально впливає на результат; невиконання wezwanie або неправильна адреса може зупинити рух справи окремо від суті спору."
    ),
  ],
})
