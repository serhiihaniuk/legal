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
      "ppsa-art-116a",
      ppsaLaw.text`Mediator має зберігати bezstronność і без зволікання розкрити обставини, які можуть викликати сумнів у його безсторонності, зокрема відповідні обставини з ${ppsaLaw.article("18", "Art. 18")}.`,
      ppsaLaw.text`${ppsaLaw.article("116a", "Art. 116a")} встановлює вимогу безсторонності mediator та обов’язок повідомити про потенційний конфлікт.`,
      [
        {
          locator: "Art. 116a",
          explanation:
            "Оцінюйте не лише фактичну упередженість, а й обставини, здатні wzbudzić wątpliwość щодо bezstronność.",
        },
        {
          locator: "Art. 116a",
          explanation: ppsaLaw.text`Відсилання до ${ppsaLaw.article("18", "Art. 18")} застосовується відповідно; mediator має ujawnić обставини niezwłocznie.`,
        },
      ],
      "Норма захищає довіру до mediacja, але не робить будь-яку незгоду зі mediator доказом його упередженості.",
      ppsaLaw.text`У справі про pobyt повідомте про конкретний зв’язок mediator зі стороною або organ і вимагайте оцінити bezstronność за ${ppsaLaw.article("116a", "Art. 116a")}, а не лише за результатом переговорів.`
    ),
  ],
})
