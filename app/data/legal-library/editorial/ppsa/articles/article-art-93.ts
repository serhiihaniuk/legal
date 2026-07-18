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
      "ppsa-art-93",
      "Zawiadomienie o posiedzeniu має містити дані й адресу адресата, sąd, місце та час, skarżącego і предмет справи, cel posiedzenia та skutki niestawiennictwa.",
      ppsaLaw.text`${ppsaLaw.article("93", "Art. 93")} дає перелік відомостей, за якими можна перевірити зміст zawiadomienie про posiedzenie.`,
      [
        {
          locator: "pkt 1–2",
          explanation:
            "Звірте ім’я або назву, адресу, sąd, місце і час posiedzenia з фактичними даними справи.",
        },
        {
          locator: "pkt 3–5",
          explanation:
            "У повідомленні мають бути skarżący, предмет і cel posiedzenia, а також наслідки niestawiennictwa.",
        },
      ],
      "Стаття визначає обов’язкові елементи повідомлення, але сама не вирішує, чи в конкретній ситуації doręczenie було належним.",
      "Зберігайте конверт або електронне підтвердження разом із zawiadomienie про справу щодо pobyt і перевіряйте всі п’ять категорій даних."
    ),
  ],
})
