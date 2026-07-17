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
      "ppsa-art-87",
      "Wniosek o przywrócenie terminu подається до належного sąd протягом семи днів після припинення причини пропуску; треба uprawdopodobnić brak winy, одночасно виконати пропущену czynność, а wniosek щодо skarga подати за pośrednictwem органу.",
      "Стаття визначає місце, семиденний строк і зміст wniosek o przywrócenie terminu, а також обов’язкову одночасність із пропущеною дією.",
      [
        {
          locator: "§ 1",
          explanation:
            "Сім днів рахуються від ustania przyczyny uchybienia terminu; wniosek подається до sąd, у якому мала бути виконана czynność.",
        },
        {
          locator: "§ 2",
          explanation:
            "У wniosek треба лише uprawdopodobnić обставини, що вказують на brak winy; це не тотожне повному доказуванню в іншому процесі.",
        },
        {
          locator: "§ 3–4",
          explanation:
            "Для відновлення строку skarga wniosek іде за pośrednictwem органу, а пропущену czynność треба виконати одночасно.",
        },
        {
          locator: "§ 5",
          explanation:
            "Після року від пропущеного строку відновлення допускається лише у випадках wyjątkowych.",
        },
      ],
      ppsaLaw.text`Недотримання місця, семиденного строку або одночасного виконання czynność може перешкодити розгляду wniosek; конкретний наслідок треба читати разом із ${ppsaLaw.article("88", "Art. 88")}.`,
      "Якщо строк skarga у справі cudzoziemca пропущено, складіть wniosek через właściwy organ протягом семи днів після припинення перешкоди, одночасно подайте skarga і поясніть brak winy документами."
    ),
  ],
})
