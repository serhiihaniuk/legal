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
      "ppsa-art-92",
      "Prokurator, Rzecznik Praw Obywatelskich або Rzecznik Praw Dziecka бере участь у postępowanie, якщо подав skargę або заявив udział; їхня відсутність на rozprawa не зупиняє розгляд.",
      "Стаття визначає участь трьох названих публічних суб’єктів та наслідок їхньої неявки.",
      [
        {
          locator: "§ 1",
          explanation:
            "Участь виникає, коли відповідний суб’єкт подав skargę або zgłosił udział у postępowaniu перед sąd.",
        },
        {
          locator: "§ 2",
          explanation:
            "Відсутність prokurator, RPO або RPD на rozprawa не блокує розгляд справи судом.",
        },
      ],
      ppsaLaw.text`${ppsaLaw.article("92", "Art. 92")} не створює автоматичного обов’язку залучати цих суб’єктів у кожній справі cudzoziemca.`,
      "Не робіть висновок про порушення прав лише через відсутність RPO чи іншого суб’єкта: перевірте, чи він справді подав skargę або zgłosił udział."
    ),
  ],
})
