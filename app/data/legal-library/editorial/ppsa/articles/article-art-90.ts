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
      "ppsa-art-90",
      "Якщо спеціальний припис не встановлює іншого, posiedzenia sądowe є jawne, а sąd розглядає sprawy на rozprawie; навіть справу для posiedzenie niejawne можна направити на posiedzenie jawne з rozprawa.",
      "Стаття задає загальне правило відкритості та rozprawa і дозволяє суду обрати відкриту форму там, де спеціальний припис допускає закриту.",
      [
        {
          locator: "§ 1",
          explanation:
            "Завжди перевіряйте, чи немає спеціального правила: лише за його відсутності діють jawność і rozprawa як загальне правило.",
        },
        {
          locator: "§ 2",
          explanation:
            "Sąd може призначити posiedzenie jawne та rozprawa навіть для справи, яка за загальним правилом розглядається на posiedzeniu niejawnym.",
        },
      ],
      ppsaLaw.text`${ppsaLaw.article("90", "Art. 90")} визначає форму розгляду, але не встановлює результату skarga й не означає, що відкрите слухання потрібне в кожній справі.`,
      "У справі cudzoziemca перевірте в zawiadomienie, чи призначено rozprawa або posiedzenie niejawne. Форма розгляду сама не доводить законність чи незаконність decyzja."
    ),
  ],
})
