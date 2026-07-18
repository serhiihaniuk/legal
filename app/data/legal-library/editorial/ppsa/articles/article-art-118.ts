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
      "ppsa-art-118",
      ppsaLaw.text`На akt або czynność, видані на підставі ustalenia з ${ppsaLaw.article("117", "Art. 117 § 1")}, можна подати skargę до WSA протягом тридцяти днів від doręczenie акта або виконання/вчинення дії; без такої skarga або після її oddalenie sąd umarza первісне postępowanie mediacja.`,
      ppsaLaw.text`${ppsaLaw.article("118", "Art. 118")} встановлює окремий тридцятиденний контроль за результатом mediacja та наслідок для первісної справи.`,
      [
        {
          locator: "§ 1",
          explanation:
            "Строк 30 днів залежить від виду результату: doręczenie aktu або день wykonania чи podjęcia czynności; skargę розглядають разом із первісною skarga.",
        },
        {
          locator: "§ 2",
          explanation:
            "Якщо нову skarga не подано або її oddalono, sąd umarza postępowanie у справі, де проводилася mediacja.",
        },
      ],
      ppsaLaw.text`${ppsaLaw.article("118", "Art. 118")} не робить akt після mediacja остаточно правильним: він передбачає окрему skarga і пов’язаний наслідок umorzenie.`,
      "Після домовленості про pobyt не пропустіть новий 30-денний строк на skarga до WSA, якщо organ видав оскаржуваний akt або виконав czynność."
    ),
  ],
})
