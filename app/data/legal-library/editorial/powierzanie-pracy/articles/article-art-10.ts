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
      provisionId: "powierzanie-pracy-art-10",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("10", "Art. 10")} зобов'язує podmiot powierzający працю сплатити opłata за кожен wniosek про zezwolenie. Для ${workLaw.article("6", "art. 6")} ust. 1 pkt 1–3 вона є доходом budżet państwa, для ${workLaw.article("6", "art. 6")} ust. 1 pkt 4 — порівну доходом państwa і powiat; opłata не повертається, крім відмови за ${workLaw.article("13", "art. 13")} ust. 1 pkt 4 або 5, а її максимальний розмір визначається через мінімальну оплату праці.`,
          sourceLocator: "Art. 10 ust. 1–5",
        },
      ],
      summary:
        "Opłata супроводжує кожен wniosek, а для сезонного zezwolenie — також wniosek про його przedłużenie. Закон визначає, куди надходять кошти, коли вони повертаються та які верхні межі може встановити minister.",
      rules: [
        {
          locator: "ust. 1–3",
          explanation: workLaw.text`Opłata сплачується за кожен wniosek. У справах ${workLaw.article("6", "art. 6")} ust. 1 pkt 1–3 кошти належать budżet państwa; у сезонній справі дохід порівну розподіляється між państwo і powiat.`,
        },
        {
          locator: "ust. 4",
          explanation: workLaw.text`Загальне правило — невідшкодування opłata. Виняток у тексті ${workLaw.article("10", "art. 10")} стосується відмови на підставі ${workLaw.article("13", "art. 13")} ust. 1 pkt 4 або 5.`,
        },
        {
          locator: "ust. 5 pkt 1–2",
          explanation: workLaw.text`Rozporządzenie може встановити суму не вище мінімального wynagrodzenie для ${workLaw.article("6", "art. 6")} ust. 1 pkt 1–3 і не вище 10% мінімального wynagrodzenie для ${workLaw.article("6", "art. 6")} ust. 1 pkt 4, з урахуванням періоду роботи та вартості провадження.`,
        },
      ],
      legalEffect:
        "Сплата opłata є процесуальною вимогою, але не гарантує видачу zezwolenie, legalny pobyt або початок роботи. Її повернення можливе лише в межах прямо названого винятку.",
      foreignersCase:
        "Визначте тип wniosek і перевірте суму за чинним rozporządzenie, зберігши доказ платежу. Не сприймайте платіж як підтвердження права працювати чи перебувати в Польщі.",
    },
  ],
})
