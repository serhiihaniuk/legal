import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const workLaw = createLegalTextAuthor("powierzanie-pracy")
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "powierzanie-pracy-art-5",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("5", "Art. 5")} вимагає укласти з cudzoziemiec письмову umowa до допуску до роботи, крім випадку ${workLaw.article("6", "art. 6")} ust. 1 pkt 2. Якщо umowa польською, а cudzoziemiec не володіє польською, перед підписанням треба надати письмову зрозумілу версію; для umowa іноземною мовою зберігається її переклад польською від tłumacz przysięgły, а для визначених видів роботи працівника письмово інформують про право вступу до związków zawodowych.`,
          sourceLocator: "Art. 5 ust. 1–4",
        },
      ],
      summary:
        "Письмова umowa є передумовою допуску до роботи, а інформація про її зміст має бути зрозумілою cudzoziemiec. Закон також визначає, як зберігати переклад і коли повідомляти про право до związków zawodowych.",
      rules: [
        {
          locator: "ust. 1",
          explanation: workLaw.text`Umowa укладається письмово до фактичного допуску cudzoziemiec до роботи. Виняток прямо відсилає до функцій, названих у ${workLaw.article("6", "art. 6")} ust. 1 pkt 2.`,
        },
        {
          locator: "ust. 2–3",
          explanation:
            "За польськомовної umowa особа, яка не знає польської, отримує зрозумілу письмову версію до підписання. Іноземномовну umowa podmiot зберігає разом із перекладом польською, виконаним tłumacz przysięgły.",
        },
        {
          locator: "ust. 4",
          explanation:
            "Для праці на підставі перелічених правових зв'язків podmiot письмово й зрозумілою мовою інформує про право вступати до związków zawodowych; правила про версію та переклад застосовуються відповідно.",
        },
      ],
      legalEffect:
        "Стаття регулює форму та зрозумілість договору, але укладена umowa не легалізує pobyt і не замінює zezwolenie na pracę чи іншу підставу доступу до роботи.",
      foreignersCase:
        "До початку роботи перевірте письмову umowa, її мову, зрозумілу версію або переклад та відповідність умов документу роботи. Окремо підтвердьте legalny pobyt і потрібне uprawnienie do pracy.",
    },
  ],
})
