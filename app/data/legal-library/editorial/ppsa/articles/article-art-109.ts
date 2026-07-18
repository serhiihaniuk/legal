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
      "ppsa-art-109",
      "Rozprawa відкладається при неправильному zawiadomienie або коли неявка сторони чи pełnomocnik спричинена надзвичайною подією чи іншою відомою суду неподоланною перешкодою, крім випадку, коли вони просять розглянути справу за відсутності.",
      ppsaLaw.text`${ppsaLaw.article("109", "Art. 109")} встановлює спеціальні підстави odroczenie rozprawa, пов’язані з повідомленням або неподоланною перешкодою.`,
      [
        {
          locator: "Art. 109",
          explanation:
            "Перевірте, яку саме nieprawidłowość zawiadomienia або яку konkretną przeszkodę встановив sąd і чи вона спричинила неявку.",
        },
        {
          locator: "Art. 109",
          explanation:
            "Виняток діє, якщо strona або pełnomocnik самі wnieśli про розгляд у своїй відсутності.",
        },
      ],
      "Саме посилання на хворобу чи іншу складність не дає автоматичного odroczenie: стаття вимагає відомої суду неподоланної перешкоди або неправильного повідомлення.",
      "У справі про pobyt збережіть докази причини неявки й одразу повідомте sąd. Перевірте також, чи в матеріалах немає wniosek про розгляд без участі."
    ),
  ],
})
