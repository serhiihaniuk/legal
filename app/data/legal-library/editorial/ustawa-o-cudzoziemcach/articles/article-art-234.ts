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
      provisionId: "ustawa-o-cudzoziemcach-art-234",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Особа, яка знайшла чужий документ із ${foreignersLaw.article("226", "Art. 226")} pkt 1–3 або 5, невідкладно передає його wojewoda, komendant wojewódzki (Stołeczny), komendant powiatowy (miejski) або komendant komisariatu Policji, іншому organ administracji publicznej чи konsul Rzeczypospolitej Polskiej. Ці суб’єкти невідкладно передають знайдений документ органу, який його видав, для unieważnienia.`,
          sourceLocator: "Art. 234 ust. 1–2",
        },
      ],
      summary:
        "Стаття визначає, куди передати знайдений чужий документ і що з ним має зробити отриманий орган.",
      rules: [
        {
          locator: "ust. 1",
          explanation: foreignersLaw.text`Обов’язок невідкладної передачі стосується документів, названих в ${foreignersLaw.article("226", "Art. 226")} pkt 1–3 і 5; закон перелічує кілька допустимих органів або konsul RP.`,
        },
        {
          locator: "ust. 2",
          explanation:
            "Орган або konsul, який отримав знайдений документ, невідкладно передає його органу-видавцю саме для unieważnienia.",
        },
      ],
      legalEffect:
        "Знайдений документ не залишається у того, хто його знайшов: він має бути переданий визначеному суб’єкту, а потім органу-видавцю для unieważnienia.",
      foreignersCase: foreignersLaw.text`Якщо знайдено чужу kartę pobytu або інший документ із ${foreignersLaw.article("226", "Art. 226")} pkt 1–3 чи 5, зафіксуйте, кому і коли його передано. Не залишайте документ у себе та не використовуйте його після передачі для процедури unieważnienia.`,
    },
  ],
})
