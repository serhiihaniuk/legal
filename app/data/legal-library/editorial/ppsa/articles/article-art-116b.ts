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
      "ppsa-art-116b",
      "Mediator має право переглядати akta справи й отримувати odpisy, kopie або wyciągi, якщо strona не заперечить протягом тижня від ogłoszenie або doręczenie postanowienie про направлення до mediacja.",
      ppsaLaw.text`${ppsaLaw.article("116b", "Art. 116b")} регулює доступ mediator до матеріалів та короткий строк для заперечення сторони.`,
      [
        {
          locator: "Art. 116b",
          explanation:
            "Звірте початок tygodniowy терміну з ogłoszenie або doręczenie postanowienie, яким сторони направлено до mediacja.",
        },
        {
          locator: "Art. 116b",
          explanation:
            "Заперечення стосується перегляду akt mediator; воно не є автоматичною відмовою від усієї mediacja.",
        },
      ],
      "Доступ mediator до akt обмежений механізмом незгоди, передбаченим статтею; не приписуйте цій нормі загальне право mediator витребувати нові докази.",
      "Якщо в aktach є чутливі дані про pobyt, перевірте дату postanowienie та за потреби вчасно подайте заперечення щодо перегляду akt mediator."
    ),
  ],
})
