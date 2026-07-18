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
      "ppsa-art-114",
      "На orzeczenia przewodniczący, видані під час rozprawa, strony можуть до її закриття odwołać się до sąd orzekający.",
      ppsaLaw.text`${ppsaLaw.article("114", "Art. 114")} дає сторонам внутрішній засіб звернутися до складу суду щодо orzeczenie головуючого під час слухання до моменту zamknięcia rozprawy.`,
      [
        {
          locator: "Art. 114",
          explanation:
            "Відстежуйте момент: право odwołać się існує до zamknięcie rozprawa, тому заперечення треба заявляти без зволікання.",
        },
      ],
      "Це звернення до sąd orzekający щодо процесуального рішення головуючого, а не загальна skarga на адміністративну decyzja.",
      "Якщо під час rozprawa про pobyt przewodniczący прийняв рішення, що перешкоджає вашій procesowa czynność, попросіть занести реакцію до протоколу до закриття слухання."
    ),
  ],
})
