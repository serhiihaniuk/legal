import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-207b",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("207b", "Art. 207b")} передбачає, що належно сплачена opłata skarbowa за udzielenie zezwolenia na pobyt stały не повертається після рішення wojewody про odmowę udzielenia zezwolenia або umorzenie postępowania.`,
          sourceLocator: "Art. 207b",
        },
      ],
      summary:
        "Негативний або нематеріальний результат справи не означає автоматичного повернення належного збору за постійне проживання.",
      rules: [
        {
          locator: "Art. 207b",
          explanation:
            "Спершу треба підтвердити, що платіж був саме належною opłatą skarbową за udzielenie zezwolenia na pobyt stały. Питання іншого або надмірного платежу оцінюють окремо.",
        },
      ],
      legalEffect:
        "Після odmowy або umorzenia належна opłata skarbowa не підлягає поверненню за цією статтею.",
      foreignersCase:
        "Звірте назву платежу, суму, рахунок і точний вид рішення. Не переносіть правило на оплату за kartę pobytu чи інший документ без окремої правової підстави.",
    },
  ],
})
