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
      "ppsa-art-88",
      "Spóźniony або z mocy ustawy niedopuszczalny wniosek o przywrócenie terminu sąd odrzuci на posiedzeniu niejawnym; на postanowienie przysługuje zażalenie.",
      ppsaLaw.text`${ppsaLaw.article("88", "Art. 88")} встановлює відхилення wniosek o przywrócenie terminu, якщо він поданий із запізненням або закон прямо не допускає його.`,
      [
        {
          locator: "Art. 88",
          explanation:
            "Перевірте спочатку своєчасність wniosek і чи не виключає закон саму можливість відновлення строку.",
        },
        {
          locator: "Art. 88",
          explanation:
            "Рішення приймається на posiedzenie niejawnym, але на відповідне postanowienie прямо передбачено zażalenie.",
        },
      ],
      "Стаття стосується процесуальної допустимості wniosek, а не оцінки обставин справи про pobyt по суті.",
      ppsaLaw.text`Збережіть доказ дати подання wniosek і перевірте pouczenie про zażalenie; не вважайте сам факт подання запізнілого wniosek захистом від наслідків ${ppsaLaw.article("85", "Art. 85")}.`
    ),
  ],
})
