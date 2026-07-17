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
      "ppsa-art-91",
      "Posiedzenia wyznacza przewodniczący, коли цього вимагає стан справи; про posiedzenie jawne повідомляють письмово або оголошенням, зазвичай не пізніше семи днів, а в pilny випадок строк може становити три дні.",
      ppsaLaw.text`${ppsaLaw.article("91", "Art. 91")} регулює призначення posiedzenia, zawiadomienie про відкрите слухання та можливість зобов’язати strony або pełnomocnik з’явитися особисто.`,
      [
        {
          locator: "§ 1",
          explanation:
            "Przewodniczący призначає posiedzenie z urzędu, коли цього вимагає стан справи.",
        },
        {
          locator: "§ 2",
          explanation:
            "Про posiedzenie jawne повідомляють письмово або оголошенням; наступне повідомлення відсутній стороні треба doręczyć завжди. Звичайний мінімум — сім днів, у pilnych випадках — три.",
        },
        {
          locator: "§ 3",
          explanation:
            "Для точнішого з’ясування справи sąd може zarządzić особисту явку strony або явку через pełnomocnik.",
        },
      ],
      "Стаття встановлює правила організації слухання і повідомлення, але питання належності конкретного doręczenie потребує перевірки доказів та інших правил.",
      "Зіставте zawiadomienie про rozprawa з датою засідання й адресою, яку вказав cudzoziemiec. Окремо перевірте, чи був належно повідомлений pełnomocnik."
    ),
  ],
})
