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
      provisionId: "ustawa-o-cudzoziemcach-art-170",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("170", "Art. 170")} встановлює обов'язок видати cudzoziemiec zaświadczenie, що підтверджує існування domniemanie, що він є ofiarą handlu ludźmi у розумінні Kodeks karny.`,
          sourceLocator: "Art. 170",
        },
      ],
      summary:
        "Zaświadczenie фіксує юридичне domniemanie статусу потенційної жертви handlu ludźmi; воно не є обвинувальним вироком і не встановлює всі умови permit.",
      rules: [
        {
          locator: "весь припис",
          explanation:
            "Адресатом є cudzoziemiec, щодо якого існує domniemanie handlu ludźmi за критеріями Kodeks karny; документ підтверджує саме domniemanie, а не остаточний результат кримінального провадження.",
        },
      ],
      legalEffect:
        "Видане zaświadczenie запускає спеціальні наслідки щодо legalny pobyt та строку документа за наступними статтями, але саме по собі не є zezwolenie na pobyt czasowy.",
      foreignersCase:
        "Перевірте, хто і на якій фактичній підставі видав zaświadczenie, його дату та строк; не замінюйте ним заяву на permit і не розкривайте чутливі дані потерпілої особи.",
    },
  ],
})
