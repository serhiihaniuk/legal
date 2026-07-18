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
      "ppsa-art-116e",
      "Mediator складає protokół mediacja із часом і місцем, даними skarżący та organ, даними mediator, ustalenia щодо способу вирішення та підписами; копії без зволікання надсилаються сторонам і sąd.",
      ppsaLaw.text`${ppsaLaw.article("116e", "Art. 116e")} визначає обов’язковий зміст protokół z przebiegu postępowania mediacyjnego та його адресатів.`,
      [
        {
          locator: "§ 1–2",
          explanation:
            "Протокол складає mediator; перевірте п’ять елементів, включно з адресами та підписами mediator, skarżący і organ.",
        },
        {
          locator: "§ 3",
          explanation:
            "Mediator niezwłocznie doręcza odpis protokołu сторонам і sąd, перед яким триває postępowanie.",
        },
      ],
      "Протокол фіксує ustalenia mediacji, але не підміняє акт organ, який має бути виданий або виконаний у межах kompetencji.",
      "Зіставте odpis protokołu у справі про pobyt з тим, що фактично погоджено, і перевірте, чи копію отримав sąd та кожна strona."
    ),
  ],
})
