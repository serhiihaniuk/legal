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
      provisionId: "ustawa-o-cudzoziemcach-art-521",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("521", "Art. 521")} скасовує ustawa z dnia 13 czerwca 2003 r. o cudzoziemcach, наведену в статті разом із зазначеними публікаціями в Dziennik Ustaw.`,
          sourceLocator: "Art. 521",
        },
      ],
      summary:
        "Перехідна норма скасовує попередню ustawa o cudzoziemcach і завершує блок правил про заміну старого закону новим.",
      rules: [
        {
          locator: "Art. 521",
          explanation:
            "З дня набрання чинності новою ustawa втрачає чинність акт від 13 червня 2003 р., названий у статті.",
        },
        {
          locator: "Art. 521",
          explanation: foreignersLaw.text`Стаття визначає лише скасований акт; наслідки для старих дозволів, рішень, проваджень і підзаконних актів треба встановлювати за перехідними нормами, зокрема ${foreignersLaw.article("507", "Art. 507")}–${foreignersLaw.article("520", "520")}.`,
        },
      ],
      legalEffect: foreignersLaw.text`${foreignersLaw.article("521", "Art. 521")} є історичною нормою про втрату чинності попереднього закону. Сам по собі він не анулює автоматично старі рішення чи документи, для яких діють окремі перехідні правила.`,
      foreignersCase: foreignersLaw.text`У старій справі зафіксуйте дату події та перевірте, чи стосується її скасований закон; для чинності документа або дії провадження окремо застосуйте відповідну норму ${foreignersLaw.article("507", "Art. 507")}–${foreignersLaw.article("520", "520")}.`,
    },
  ],
})
