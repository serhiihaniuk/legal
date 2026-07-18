import { createLegalTextAuthor, type LegalTextValue } from "../../../legal-text"

import {
  defineEditorialPart,
  type EditorialEntry,
} from "../../define-editorial-part"

const kpaLaw = createLegalTextAuthor("kpa")

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
      "ppsa-art-119",
      "Sprawa може розглядатися в tryb uproszczony, зокрема при wada nieważności або підставі wznowienie, за wniosek сторони без вимоги rozprawa іншої сторони протягом 14 днів, щодо визначених postanowienia, bezczynność або przewlekłość, а також для рішення з KPA postępowanie uproszczone.",
      ppsaLaw.text`${ppsaLaw.article("119", "Art. 119")} перелічує п’ять самостійних підстав, за яких справа може перейти до tryb uproszczony.`,
      [
        {
          locator: "pkt 1",
          explanation: ppsaLaw.text`Встановіть конкретну wada nieważności за ${kpaLaw.article("156", "Art. 156 § 1 KPA")} або інше порушення, що дає підставу для wznowienie postępowania.`,
        },
        {
          locator: "pkt 2",
          explanation:
            "Wniosek сторони спрацьовує лише якщо жодна інша strona протягом 14 днів від zawiadomienie не зажадає rozprawy.",
        },
        {
          locator: "pkt 3–4",
          explanation:
            "До переліку належать визначені postanowienia, на які służy zażalenie або які завершують postępowanie, а також bezczynność і przewlekłe prowadzenie postępowania.",
        },
        {
          locator: "pkt 5",
          explanation:
            "Окрема підстава — decyzja, видана в KPA postępowanie uproszczone за Dział II, Rozdział 14 KPA.",
        },
      ],
      "Tryb uproszczony змінює процесуальний спосіб розгляду, але не послаблює вимоги до предмета skarga й не гарантує її задоволення.",
      ppsaLaw.text`Для skarga на рішення про pobyt знайдіть у матеріалах конкретний пункт ${ppsaLaw.article("119", "Art. 119")} і перевірте, чи інша strona не вимагала rozprawa у 14-денний строк.`
    ),
  ],
})
