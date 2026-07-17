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
      provisionId: "ustawa-o-cudzoziemcach-art-182",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`У провадженні про permit з ${foreignersLaw.article("181", "art. 181")} ust. 1 ${foreignersLaw.article("182", "Art. 182")} виключає застосування ${foreignersLaw.article("99", "art. 99")} ust. 1 pkt 2, 3, 6–8.`,
          sourceLocator: "Art. 182",
        },
      ],
      summary:
        "Для короткострокового permit закон не застосовує вичерпно перелічені перешкоди wszczęcia, але не всі правила про заяву.",
      rules: [
        {
          locator: "весь припис",
          explanation: foreignersLaw.text`Виняток стосується лише ${foreignersLaw.article("99", "art. 99")} ust. 1 pkt 2, 3 і 6–8 у процедурі за ${foreignersLaw.article("181", "art. 181")} ust. 1; інші пункти ${foreignersLaw.article("99", "art. 99")} не виключені цією статтею.`,
        },
      ],
      legalEffect:
        "Відсутність застосування названих перешкод полегшує доступ до розгляду, але не доводить одну з матеріальних підстав короткострокового pobyt і не гарантує рішення.",
      foreignersCase: foreignersLaw.text`Якщо орган посилається на ${foreignersLaw.article("99", "art. 99")}, перевірте, чи його пункт належить до переліку ${foreignersLaw.article("182", "Art. 182")}; паралельно доведіть конкретну обставину за ${foreignersLaw.article("181", "art. 181")}.`,
    },
  ],
})
