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
      "ppsa-art-107",
      "Відсутність strony або її pełnomocnik на rozprawa не зупиняє розгляд справи.",
      "Стаття дозволяє sąd продовжити rozpoznanie справи попри неявку сторони або представника.",
      [
        {
          locator: "Art. 107",
          explanation:
            "Застосування цієї норми не скасовує необхідності перевірити належність zawiadomienie та інші правила про odroczenie.",
        },
      ],
      ppsaLaw.text`${ppsaLaw.article("107", "Art. 107")} регулює наслідок неявки, але не доводить ані належного повідомлення, ані того, що сторона втратила всі засоби захисту.`,
      "Якщо cudzoziemiec не був на rozprawa, негайно перевірте zawiadomienie, причину відсутності та зміст протоколу; не вважайте неявку визнанням позиції organ."
    ),
  ],
})
