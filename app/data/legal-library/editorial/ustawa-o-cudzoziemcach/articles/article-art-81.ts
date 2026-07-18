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
      provisionId: "ustawa-o-cudzoziemcach-art-81",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("81", "Art. 81")} у локальному тексті джерела скасовано і містить лише позначку „(uchylony)”. Чинного тексту правила в цій статті немає.`,
          sourceLocator: "Art. 81",
        },
        {
          kind: "practical-inference",
          text: foreignersLaw.text`${foreignersLaw.article("81", "Art. 81")} не можна цитувати як чинну підставу права, обов’язку, odmowa або przedłużenie wizy; для історичної події потрібні редакція на ту дату і przepisy przejściowe.`,
          sourceLocator: "Art. 81 — uchylony",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("81", "Art. 81")} скасовано: текст джерела прямо позначає його як „uchylony”. Наступний чинний блок про Przedłużanie wiz починається з ${foreignersLaw.article("82", "Art. 82")}.`,
      rules: [
        {
          locator: "Art. 81",
          explanation:
            "Не виводьте правило з номера статті: у поточній редакції є лише статус uchylony, без чинних ust. або pkt.",
        },
        {
          locator: "status przepisu",
          explanation: foreignersLaw.text`Для події до скасування потрібно знайти редакцію, яка діяла тоді, і перевірити przepisy przejściowe; чинний корпус не робить ${foreignersLaw.article("81", "Art. 81")} чинною нормою.`,
        },
      ],
      legalEffect: foreignersLaw.text`У поточній редакції ${foreignersLaw.article("81", "Art. 81")} не створює прав чи обов’язків і не може бути чинною підставою для рішення у справі cudzoziemiec.`,
      foreignersCase: foreignersLaw.text`Якщо рішення або консультація посилається на ${foreignersLaw.article("81", "Art. 81")}, перевірте дату події, історичний текст і перехідні положення; для актуальної справи використовуйте ${foreignersLaw.article("82", "Art. 82")} та інші чинні норми.`,
    },
  ],
})
