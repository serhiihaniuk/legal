import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-330",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 330 ust. 1 забороняє виконувати decyzja o zobowiązaniu do powrotu, коли триває провадження про ochronę międzynarodową, zgoda humanitarna або tolerowany чи Art. 176, існують названі дозволи або сімейні обставини, діє zakaz opuszczania kraju, або особа задекларувала намір подати wniosek про міжнародний захист; ust. 2–3 встановлюють винятки й момент виконання для окремих kolejny wniosek.",
          sourceLocator: "Art. 330 ust. 1–3",
        },
      ],
      summary:
        "Стаття визначає випадки, коли рішення про повернення тимчасово не виконується через інші провадження, статуси або захисні обставини.",
      rules: [
        {
          locator: "ust. 1 pkt 1–7",
          explanation:
            "Невиконання охоплює триваючі провадження про захист або дозволи, надану чи можливу zgoda humanitarna або tolerowany, визначені підстави pobytu, сімейний зв’язок і zakaz opuszczania kraju.",
        },
        {
          locator: "ust. 1 pkt 8–1b",
          explanation:
            "Декларація наміру подати wniosek про захист зупиняє виконання лише до строків і дій, названих статтею; це правило не застосовується в перелічених випадках повторної декларації або попередніх рішень.",
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Для kolejny wniosek встановлено окремі винятки, зокрема коли він поданий для затягування або після остаточного рішення; в одному випадку виконання починається після остаточності рішення Art. 38 ust. 4 закону про ochronę.",
        },
      ],
      legalEffect:
        "Art. 330 регулює виконання вже виданого рішення, а не автоматично скасовує його; застосування залежить від конкретного провадження, статусу та винятків для kolejny wniosek.",
      foreignersCase:
        "Встановіть, яка саме справа або підстава Art. 330 існує, чи це перший або kolejny wniosek, і до якої дати закон відкладає виконання; зберігайте підтвердження кожної заяви.",
    },
  ]),
})
