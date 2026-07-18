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
      "ppsa-art-116d",
      "Mediator має право на wynagrodzenie і zwrot wydatków, якщо не погодився працювати без оплати; ці koszty pokrywają strony. Міністр визначає їхній розмір і відшкодовувані витрати в rozporządzenie.",
      ppsaLaw.text`${ppsaLaw.article("116d", "Art. 116d")} регулює оплату mediator і делегує міністру визначення ставок та витрат.`,
      [
        {
          locator: "§ 1",
          explanation:
            "Оплата не виникає, якщо mediator погодився вести mediacja без wynagrodzenie; в іншому разі wynagrodzenie і wydatki покривають strony.",
        },
        {
          locator: "§ 2",
          explanation:
            "Розмір і види відшкодовуваних витрат визначаються rozporządzenie з урахуванням виду справи та ефективного проведення mediacja.",
        },
      ],
      "Стаття не встановлює індивідуальну частку кожної сторони і не означає, що будь-яка витрата mediator автоматично підлягає оплаті.",
      "До згоди на mediacja у спорі про pobyt з’ясуйте порядок koszty та чи mediator працює без оплати; не вважайте безкоштовність автоматичною."
    ),
  ],
})
