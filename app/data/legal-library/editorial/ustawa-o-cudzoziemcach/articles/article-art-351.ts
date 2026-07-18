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
      provisionId: "ustawa-o-cudzoziemcach-art-351",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("351", "Art. 351")} встановлює підстави udzielenie zgody na pobyt tolerowany: ризики за Konwencja за наявності ${foreignersLaw.article("349", "Art. 349")}, неможливість повернення з незалежних причин або юридичну недопустимість видачі до певної держави.`,
          sourceLocator: "Art. 351 pkt 1–3",
        },
      ],
      summary:
        "Tolerowany pobyt є окремим режимом для ситуацій, коли повернення неможливе або юридично недопустиме, а гуманітарна згода не застосовується чи не може бути надана.",
      rules: [
        {
          locator: "pkt 1",
          explanation: foreignersLaw.text`Ризик для прав у державі повернення оцінюється разом із наявністю обставин для відмови у гуманітарній згоді за ${foreignersLaw.article("349", "Art. 349")}.`,
        },
        {
          locator: "pkt 2",
          explanation:
            "Підставою є невиконуваність повернення з причин, незалежних від компетентного органу та самого іноземця.",
        },
        {
          locator: "pkt 3",
          explanation:
            "Підстава виконана, коли повернення можливе лише до держави, до якої видача заборонена судовим рішенням або розпорядженням Ministra Sprawiedliwości.",
        },
      ],
      legalEffect: foreignersLaw.text`${foreignersLaw.article("351", "Art. 351")} формулює зв’язану компетенцію: «zgody ... udziela się». Якщо орган встановив хоча б одну повну підставу pkt 1–3, він повинен надати zgodę na pobyt tolerowany; сама тривалість pobytu чи загальна складність повернення такою підставою не є.`,
      foreignersCase: foreignersLaw.text`З’ясуйте, чи орган посилається на ${foreignersLaw.article("351", "Art. 351")} pkt 1, 2 або 3, хто перешкоджає поверненню та які документи підтверджують неможливість або юридичну заборону.`,
    },
  ],
})
