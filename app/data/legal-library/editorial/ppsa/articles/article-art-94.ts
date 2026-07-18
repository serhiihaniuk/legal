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
      "ppsa-art-94",
      "Posiedzenia відбуваються в будівлі sąd, а поза нею — лише за умовами безпеки та коли це необхідно, полегшує справу або істотно заощаджує витрати; przewodniczący може організувати posiedzenie jawne із засобами дистанційної передачі у випадках, названих статтею.",
      ppsaLaw.text`${ppsaLaw.article("94", "Art. 94")} визначає звичайне місце засідання, обмежені підстави засідання поза будівлею та спеціальний порядок участі з іншого sąd або місця позбавлення волі.`,
      [
        {
          locator: "§ 1",
          explanation:
            "Засідання поза будівлею допустиме не довільно: потрібні вимоги безпеки і одна з названих законом причин.",
        },
        {
          locator: "§ 2",
          explanation:
            "Дистанційне posiedzenie jawne передбачає технічну передачу між sala sądowa та місцем учасника; у тексті окремо названі інший sąd, zakład karny і areszt śledczy.",
        },
        {
          locator: "§ 2",
          explanation:
            "У місці позбавлення волі бере участь представник адміністрації; за умовами статті можуть бути pełnomocnik і tłumacz для особи, яка недостатньо володіє польською.",
        },
      ],
      ppsaLaw.text`${ppsaLaw.article("94", "Art. 94")} не дає загального права кожному учаснику вимагати відеозасідання: спосіб і місце визначає przewodniczący в межах статті.`,
      "Якщо особа у справі про pobyt не володіє польською, зафіксуйте потребу в tłumacz, а при дистанційному слуханні перевірте, з якого місця та за яким технічним порядком участь дозволена."
    ),
  ],
})
