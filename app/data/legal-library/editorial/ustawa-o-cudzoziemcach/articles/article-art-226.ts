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
      provisionId: "ustawa-o-cudzoziemcach-art-226",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("226", "Art. 226")} перелічує шість документів: karta pobytu, polski dokument podróży dla cudzoziemca, polski dokument tożsamości cudzoziemca, tymczasowy polski dokument podróży dla cudzoziemca, документ «zgoda na pobyt tolerowany» та europejski dokument podróży do celów powrotu, передбачений rozporządzenie (UE) 2016/1953.`,
          sourceLocator: "Art. 226 pkt 1–6",
        },
      ],
      summary:
        "Стаття містить каталог із шести документів, що можуть видаватися cudzoziemcowi, включно з europejski dokument podróży do celów powrotu.",
      rules: [
        {
          locator: "pkt 1–6",
          explanation:
            "Спочатку визначте потрібний вид документа за фактичною ситуацією; кожен пункт має власну подальшу процедуру та умови видачі.",
        },
      ],
      legalEffect: foreignersLaw.text`${foreignersLaw.article("226", "Art. 226")} є каталогом документів, а не самостійним рішенням про їх видачу і не доводить наявність права на pobyt або працю.`,
      foreignersCase:
        "У справі назвіть конкретний документ із pkt 1–6 і окремо перевірте підставу, спосіб ініціювання та орган його wydanie. Не замінюйте аналіз права на перебування самим фактом наявності документа в каталозі.",
    },
  ],
})
