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
      "ppsa-art-127",
      "При zawieszenie за zgodny wniosek або неможливості надати справі подальший хід зупиняються лише terminy sądowe; в інших випадках жодні строки не біжать і після podjęcie починаються спочатку. Під час zawieszenie sąd майже не чинить дій, а дії stron щодо інших предметів діють після podjęcie.",
      ppsaLaw.text`${ppsaLaw.article("127", "Art. 127")} розрізняє наслідки для строків залежно від підстави zawieszenie та обмежує дії суду й сторін у період паузи.`,
      [
        {
          locator: "§ 1",
          explanation:
            "Для zgodny wniosek або niemożność nadania sprawie dalszego biegu зупиняється лише перебіг terminy sądowe; вони продовжуються від дня podjęcie.",
        },
        {
          locator: "§ 2",
          explanation:
            "В інших випадках жодні terminy не біжать і після podjęcie рахуються від початку; terminy sądowe за потреби встановлюють заново.",
        },
        {
          locator: "§ 3",
          explanation:
            "Під час zawieszenie sąd діє лише для podjęcie або wstrzymanie wykonania aktu/czynności; інші дії stron дають ефект лише від podjęcie.",
        },
      ],
      ppsaLaw.text`Наслідок для конкретного строку залежить від підстави zawieszenie; не можна автоматично застосовувати правило ${ppsaLaw.article("127", "§ 1")} до кожної паузи.`,
      "У справі про pobyt зафіксуйте вид zawieszenie, дату podjęcie та кожен процесуальний строк окремо; не подавайте pismo, виходячи з припущення, що всі строки просто продовжилися."
    ),
  ],
})
