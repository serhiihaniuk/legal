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
      provisionId: "ustawa-o-cudzoziemcach-art-178",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`У провадженні про permit для ofiary handlu ludźmi ${foreignersLaw.article("178", "Art. 178")} виключає застосування окремих перешкод wszczęcia з ${foreignersLaw.article("99", "art. 99")} ust. 1 pkt 2, 4–6 та підстав відмови з ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 2, 3, 6–9.`,
          sourceLocator: "Art. 178",
        },
      ],
      summary:
        "Спеціальний режим жертви не застосовує вичерпно перелічені процедурні та відмовні перешкоди, але не всі можливі правила.",
      rules: [
        {
          locator: "весь припис",
          explanation: foreignersLaw.text`У конкретному провадженні не застосовуються лише названі пункти ${foreignersLaw.article("99", "art. 99")} ust. 1 і ${foreignersLaw.article("100", "art. 100")} ust. 1; не можна розширювати виняток на інші пункти за аналогією.`,
        },
      ],
      legalEffect: foreignersLaw.text`Стаття полегшує доступ до розгляду в межах визначеного переліку, але не скасовує матеріальні умови ${foreignersLaw.article("176", "art. 176")} або інші правила, які прямо не виключені.`,
      foreignersCase: foreignersLaw.text`Якщо орган посилається на ${foreignersLaw.article("99", "art. 99")} або ${foreignersLaw.article("100", "art. 100")}, складіть таблицю «пункт — чи виключений ${foreignersLaw.article("178", "Art. 178")} — факт — доказ» і не приймайте загальне посилання без конкретизації.`,
    },
  ],
})
