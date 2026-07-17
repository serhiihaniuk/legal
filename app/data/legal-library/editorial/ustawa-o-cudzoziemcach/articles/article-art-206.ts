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
      provisionId: "ustawa-o-cudzoziemcach-art-206",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Якщо wniosek про pobyt stały подано під час legalny pobyt і він не має braków formalnych або їх вчасно усунуто, wojewoda ставить у dokument podróży odcisk stempla, а pobyt вважається legalny від подання до остаточності рішення.",
          sourceLocator: "Art. 206 ust. 1 pkt 1–2",
        },
        {
          kind: "statute-text",
          text: "Правило про legalny pobyt за ust. 1 pkt 2 не застосовується, якщо провадження про pobyt stały зупинено на wniosek strony.",
          sourceLocator: "Art. 206 ust. 2",
        },
      ],
      summary:
        "Стаття встановлює наслідок своєчасного й формально повного подання для legalny pobyt під час розгляду pobyt stały.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Потрібні одночасно legalny pobyt на момент подання та відсутність або своєчасне усунення braków formalnych; stamp підтверджує подання, а не позитивне рішення.",
        },
        {
          locator: "ust. 2",
          explanation:
            "За добровільного zawieszenie postępowania спеціальне продовження legalny pobyt не діє.",
        },
      ],
      legalEffect: foreignersLaw.text`${foreignersLaw.article("206", "Art. 206")} стосується легальності перебування під час конкретного провадження і не замінює рішення про udzielenie zezwolenia та документ подорожі.`,
      foreignersCase:
        "Збережіть підтвердження дати подання, stamp і виконання wezwanie про braki; окремо перевірте, чи не було zawieszenie на wniosek strony.",
    },
  ],
})
