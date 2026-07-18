import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

const workLaw = createLegalTextAuthor("powierzanie-pracy")
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "powierzanie-pracy-art-50",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("50", "Art. 50")} описує перший етап сезонної процедури для іноземця, який проситиме візу з ${foreignersLaw.article("60", "art. 60")} ust. 1 pkt 5a закону «ustawa o cudzoziemcach» або в’їжджатиме в межах безвізового руху. Якщо виконані умови ${workLaw.article("45", "art. 45")} ust. 1 і немає підстав із ${workLaw.article("13", "art. 13")} ust. 1–3 та ${workLaw.article("14", "art. 14")}, староста вносить заяву до реєстру й видає довідку про внесення (zaświadczenie o wpisie). Стаття визначає зміст довідки та строки дій органу.`,
          sourceLocator: "Art. 50 ust. 1–6",
        },
      ],
      summary:
        "Внесення сезонної заяви до реєстру (ewidencja wniosków) готує майбутній в’їзд за сезонною візою або в межах безвізового руху. Довідка про внесення підтверджує цей етап, але не є візою, дозволом на перебування чи остаточним сезонним дозволом на роботу.",
      rules: [
        {
          locator: "ust. 1",
          explanation: workLaw.text`Староста вносить заяву до реєстру й видає довідку, якщо іноземець планує сезонну візу або безвізовий в’їзд, виконані умови ${workLaw.article("45", "art. 45")} ust. 1 та немає названих підстав для відмови.`,
        },
        {
          locator: "ust. 2",
          explanation:
            "У довідці зазначають дані польського суб’єкта та іноземця, а за потреби — роботодавця-користувача (pracodawca użytkownik), місце й правову підставу роботи, години, найнижчу оплату, основні обов’язки, періоди сезонної роботи та дату внесення заяви.",
        },
        {
          locator: "ust. 3–4",
          explanation: workLaw.text`Якщо не потрібне з’ясувальне провадження (postępowanie wyjaśniające), староста вносить заяву до реєстру або відмовляє протягом 7 робочих днів від подання повної заяви (kompletny wniosek). Довідка також пояснює правила в’їзду й перебування, права та обов’язки на ринку праці й право на відшкодування з ${workLaw.article("60", "art. 60")} ust. 3.`,
        },
        {
          locator: "ust. 5–6",
          explanation:
            "Якщо заява не відповідає формальним вимогам, староста протягом не більш як 7 днів від її подання викликає заявника усунути недоліки. Якщо потрібне з’ясувальне провадження, 30-денний строк на внесення заяви й видачу довідки або на відмову рахується від подання повної заяви.",
        },
      ],
      legalEffect: workLaw.text`Внесення заяви й довідка запускають сезонну процедуру, але самі не є візою, документом законного перебування чи остаточним дозволом на роботу. Право працювати до рішення залежить від окремих умов, зокрема з ${workLaw.article("51", "art. 51")}.`,
      foreignersCase: workLaw.text`Перевірте повноту заяви, умови ${workLaw.article("45", "art. 45")}, відсутність підстав із ${workLaw.article("13", "art. 13")} і ${workLaw.article("14", "art. 14")}, а також усі дані в довідці. Не замінюйте нею візу чи інший документ перебування; після в’їзду відстежуйте наступний етап процедури.`,
    },
  ],
})
