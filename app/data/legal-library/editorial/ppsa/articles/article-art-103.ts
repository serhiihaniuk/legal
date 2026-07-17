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
      "ppsa-art-103",
      "Strony можуть вимагати sprostowanie або uzupełnienie protokołu на наступному posiedzenie, але не пізніше тридцяти днів від засідання; на zarządzenie przewodniczący можна odwołać się до sąd протягом семи днів від doręczenie.",
      ppsaLaw.text`${ppsaLaw.article("103", "Art. 103")} дає окремий порядок виправлення чи доповнення протоколу з двома часовими орієнтирами.`,
      [
        {
          locator: "Art. 103 zdanie pierwsze",
          explanation:
            "Заявіть про sprostowanie або uzupełnienie на наступному posiedzenie і в будь-якому разі не пізніше 30 днів від засідання, з якого складено протокол.",
        },
        {
          locator: "Art. 103 zdanie drugie",
          explanation:
            "Якщо przewodniczący видав zarządzenie, сторона може odwołać się до sąd протягом семи днів від його doręczenie.",
        },
      ],
      "Стаття стосується виправлення запису про перебіг засідання, а не повторного розгляду всієї skarga.",
      "Після posiedzenie у справі про pobyt порівняйте protokół із власними нотатками та вчасно подайте вимогу про виправлення конкретного пропуску або помилки."
    ),
  ],
})
