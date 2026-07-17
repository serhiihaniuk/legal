import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-91",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 91 змінює Kodeks postępowania w sprawach o wykroczenia: у postępowaniu mandatowym за art. 84 цієї ustawa та визначені справи cudzoziemiec можна накласти grzywna до 10000 zł за умов, названих у нормі.",
          sourceLocator: "Art. 91 pkt 1–2; art. 96 § 1af KPW",
        },
      ],
      summary:
        "Поправка визначає спеціальну межу для mandat у справах, де publiczny oskarżyciel — właściwy organ PIP або Straż Graniczna, а для art. 465 ust. 1a ustawy o cudzoziemcach — Straż Graniczna.",
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "У art. 96 § 1a KPW скасовується pkt 3 у названій частині.",
        },
        {
          locator: "pkt 2; § 1af pkt 1–2",
          explanation:
            "У mandatowym postępowaniu за діяння art. 84 або art. 465 ust. 1a, за визначеного oskarżyciel, grzywna може бути до 10000 zł.",
        },
      ],
      legalEffect:
        "Верхня межа стосується накладення mandat у визначеній процедурі, а не автоматичного розміру кожного штрафу чи доведеності порушення.",
      foreignersCase:
        "У разі mandat перевірте статтю, орган-публічний обвинувач і вид процедури. Не змішуйте максимум 10000 zł для mandat із мінімумами art. 84.",
    },
  ]),
})
