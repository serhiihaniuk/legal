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
      "ppsa-art-105",
      "Strona має під час posiedzenia або на найближчому засіданні, якщо була відсутня, заявити uchybienie przepisom postępowania і вимагати wpisanie zastrzeżenia до protokołu; без цього надалі посилання зазвичай виключене, крім передбачених статтею винятків.",
      ppsaLaw.text`${ppsaLaw.article("105", "Art. 105")} встановлює обов’язок своєчасно заявити zastrzeżenie до протоколу, якщо сторона хоче посилатися на процесуальне порушення надалі.`,
      [
        {
          locator: "Art. 105 zdanie pierwsze",
          explanation:
            "Застереження треба заявити в toku posiedzenia, а для відсутньої сторони — на найближчому posiedzenie, і просити wpisanie до protokołu.",
        },
        {
          locator: "Art. 105 zdanie drugie",
          explanation:
            "Пропуск zastrzeżenia позбавляє права посилатися на uchybienie далі, якщо це не правило, яке суд бере до уваги z urzędu, або якщо сторона uprawdopodobni brak winy.",
        },
      ],
      ppsaLaw.text`${ppsaLaw.article("105", "Art. 105")} не означає, що кожна помилка в протоколі втрачена назавжди: спочатку визначте виняток і доведіть своєчасність або відсутність вини.`,
      "На rozprawa про pobyt одразу просіть внести до protokołu заперечення щодо істотного порушення процедури; якщо не були присутні, дійте на найближчому засіданні."
    ),
  ],
})
