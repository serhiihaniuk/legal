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
      "ppsa-art-85",
      "Czynność w postępowaniu sądowym, яку strona вчинила після спливу строку, є bezskuteczna.",
      "Стаття встановлює прямий наслідок пропуску строку для процесуальної czynność сторони: вона не породжує передбаченого законом процесуального ефекту.",
      [
        {
          locator: "Art. 85",
          explanation:
            "Спочатку визначте, яку саме czynność мала виконати strona, який строк для неї діяв і коли він закінчився.",
        },
        {
          locator: "Art. 85",
          explanation:
            "Не змішуйте bezskuteczność із питанням вини: можливість przywrócenie terminu регулюють окремі статті 86–89.",
        },
      ],
      ppsaLaw.text`За ${ppsaLaw.article("85", "Art. 85")} запізніла czynność є bezskuteczna; стаття сама не встановлює ані строку, ані автоматичного przywrócenie terminu.`,
      "У skarga щодо pobyt зафіксуйте дату doręczenie, початок і кінець строку та дату подання. Якщо дія запізнилася, окремо перевірте умови wniosku o przywrócenie terminu."
    ),
  ],
})
