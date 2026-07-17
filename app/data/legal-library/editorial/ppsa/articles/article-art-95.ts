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
      "ppsa-art-95",
      "На posiedzenie jawne, крім stron і wezwanych осіб, до sali sądowej допускаються лише повнолітні; przewodniczący може дозволити присутність małoletni. На posiedzenie niejawne входять лише wezwane особи.",
      "Стаття встановлює правила доступу до sali залежно від того, чи є posiedzenie jawne або niejawne.",
      [
        {
          locator: "§ 1",
          explanation:
            "Для відкритого засідання розрізняйте strony та wezwane osoby від публіки: для інших загальне правило — повноліття.",
        },
        {
          locator: "§ 1–2",
          explanation:
            "Присутність małoletni залежить від дозволу przewodniczący, а на posiedzenie niejawne допускаються лише wezwane особи.",
        },
      ],
      "Норма стосується доступу до залу, а не права сторони на позитивний результат або автоматичної недійсності засідання.",
      "Перевірте позначену форму засідання у sprawa cudzoziemca та не приводьте супроводжуючих осіб на posiedzenie niejawne без wezwanie."
    ),
  ],
})
