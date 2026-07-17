import type { LegalTextValue } from "../../../legal-text"

import {
  defineEditorialPart,
  type EditorialEntry,
} from "../../define-editorial-part"

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
      "ppsa-art-97",
      "На posiedzenie при drzwiach zamkniętych можуть бути strony, їхні przedstawiciele ustawowi й pełnomocnicy, prokurator та до двох osób zaufania з кожної сторони; оголошення orzeczenia, що завершує справу, відбувається публічно.",
      "Стаття визначає коло присутніх при закритому слуханні та зберігає публічність оголошення остаточного orzeczenie.",
      [
        {
          locator: "§ 1",
          explanation:
            "Перелік присутніх є спеціальним: osoba zaufania допускається максимум по дві з кожної strony.",
        },
        {
          locator: "§ 2",
          explanation:
            "Навіть після закритого розгляду orzeczenie kończące postępowanie оголошується publicznie.",
        },
      ],
      "Закрите слухання обмежує присутність у залі, але не перетворює orzeczenie на непублічне оголошення.",
      "У справі cudzoziemca узгодьте з pełnomocnik, хто має бути допущений як osoba zaufania, і перевірте порядок publicznego ogłoszenia orzeczenia."
    ),
  ],
})
