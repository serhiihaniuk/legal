import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-226",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("226", "Art. 226")} перелічує документи, які можуть бути видані cudzoziemcowi: karta pobytu, polski dokument podróży dla cudzoziemca, polski dokument tożsamości cudzoziemca, tymczasowy polski dokument podróży dla cudzoziemca та документ, що підтверджує zgodę na pobyt tolerowany, під назвою «zgoda na pobyt tolerowany».`,
          sourceLocator: "Art. 226 pkt 1–5",
        },
      ],
      summary:
        "Стаття містить перелік основних документів, що видаються cudzoziemcowi, зокрема karty pobytu, польських документів подорожі або особи та документа про pobyt tolerowany.",
      rules: [
        {
          locator: "pkt 1–5",
          explanation:
            "Спочатку визначте потрібний вид документа за фактичною ситуацією; кожен пункт має власну подальшу процедуру та умови видачі.",
        },
      ],
      legalEffect: foreignersLaw.text`${foreignersLaw.article("226", "Art. 226")} є каталогом документів, а не самостійним рішенням про їх видачу і не доводить наявність права на pobyt або працю.`,
      foreignersCase:
        "У справі назвіть конкретний документ із pkt 1–5 і окремо перевірте підставу та орган його wydanie. Не замінюйте аналіз права на перебування самим фактом наявності документа в каталозі.",
    },
  ],
})
