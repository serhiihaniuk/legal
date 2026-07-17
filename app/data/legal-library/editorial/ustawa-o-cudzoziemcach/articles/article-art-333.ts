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
      provisionId: "ustawa-o-cudzoziemcach-art-333",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("333", "Art. 333")} дозволяє представникам організацій, що допомагають іноземцям, бути obserwatorzy під час doprowadzenie, визначає їхні права й обов’язки та правила покриття витрат.`,
          sourceLocator: "Art. 333 ust. 1–7",
        },
      ],
      summary:
        "Представники NGO або міжнародних організацій можуть спостерігати за примусовим доставленням іноземця до кордону чи порту, щоб контролювати повагу до його гідності та прав.",
      rules: [
        {
          locator: "ust. 1–4",
          explanation:
            "Obserwatorzy можуть бути присутні під час усіх дій, спілкуватися з іноземцем, якщо це не заважає doprowadzenie, і підтверджувати дотримання його прав.",
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Держава покриває проїзд не більш як двох представників NGO, коли доставляють щонайменше 5 іноземців і використовується морське судно або chartered aircraft.",
        },
        {
          locator: "ust. 5–7",
          explanation:
            "Представники мають дотримуватися правил і вказівок SG у небезпечній ситуації; minister właściwy do spraw wewnętrznych визначає порядок інформування та документування.",
        },
      ],
      legalEffect:
        "Стаття створює рамку незалежного спостереження, але присутність obserwator не зупиняє автоматично виконання рішення.",
      foreignersCase:
        "Під час планування doprowadzenie з’ясуйте, чи залучена відповідна організація, які правила безпеки їй повідомили та як фіксується перебіг дій.",
    },
  ],
})
