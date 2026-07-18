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
      provisionId: "ustawa-o-cudzoziemcach-art-147",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("147", "Art. 147")} встановлює спеціальні підстави odmowa udzielenia zezwolenie з ${foreignersLaw.article("144", "art. 144")}: діяльність jednostka для сприяння незаконному в’їзду чи побиту, обґрунтовані сумніви щодо заявленої мети та, для наступної або повторної першої заяви, використання попереднього дозволу не за метою.`,
          sourceLocator: "Art. 147 ust. 1–2",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`За ${foreignersLaw.article("147", "art. 147")} ust. 3 у разі повторної першої або наступної заяви можна відмовити, якщо cudzoziemiec був skreślony з listy studentów або doktorantów.`,
          sourceLocator: "Art. 147 ust. 3",
        },
      ],
      summary:
        "Стаття регулює спеціальні відмови у навчальному дозволі; вона не є правилом про загальний доступ студента до праці.",
      rules: [
        {
          locator: "ust. 1 pkt 1–2",
          explanation: foreignersLaw.text`Поза ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 1–5, 8 і 9 дозвіл відмовляють, якщо jednostka переважно сприяє незаконному в’їзду/побиту або є обґрунтовані сумніви, що заявлена мета pobyt не відповідає дійсній.`,
        },
        {
          locator: "ust. 2",
          explanation:
            "При повторній першій або наступній заяві odmowa є обов’язковою за встановленого використання попереднього дозволу не за наданою метою, з урахуванням названих винятків.",
        },
        {
          locator: "ust. 3",
          explanation:
            "У такій повторній заяві орган може відмовити, якщо cudzoziemiec був викреслений зі списку студентів або doktorantów.",
        },
      ],
      legalEffect: foreignersLaw.text`${foreignersLaw.article("147", "Art. 147")} може перешкоджати udzielenie навчального дозволу навіть за наявності документів навчання; кожну підставу треба довести в конкретній процедурі.`,
      foreignersCase:
        "Перевірте мотивування decyzja, фактичну діяльність jednostka, реальну мету pobyt, історію попереднього дозволу та документ про skreślenie, якщо на нього посилається орган.",
    },
  ],
})
