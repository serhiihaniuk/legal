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
      "ppsa-art-104",
      "Wnioski, oświadczenia, їхні uzupełnienia і sprostowania можна внести до załącznik до protokołu; коли сторону представляє adwokat, radca prawny, doradca podatkowy або rzecznik patentowy, przewodniczący може вимагати такий załącznik у визначений строк.",
      "Стаття дозволяє оформити усні процесуальні заяви й виправлення в додатку до протоколу та дає головуючому право вимагати додаток від професійного pełnomocnik.",
      [
        {
          locator: "Art. 104 zdanie pierwsze",
          explanation:
            "У załącznik можна включити wnioski, oświadczenia та їхні uzupełnienia і sprostowania, зроблені під час posiedzenia.",
        },
        {
          locator: "Art. 104 zdanie drugie",
          explanation:
            "Для названих професійних pełnomocnicy przewodniczący може встановити строк подання такого załącznik.",
        },
      ],
      "Załącznik доповнює протокол, але його зміст має стосуватися заяв і wnioski, зроблених у toku posiedzenia.",
      "У справі cudzoziemca попросіть повністю зафіксувати істотний wniosek або oświadczenie; якщо його подає професійний pełnomocnik, дотримайтеся строку для załącznik."
    ),
  ],
})
