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
      provisionId: "ustawa-o-cudzoziemcach-art-314a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`У випадках із ${foreignersLaw.article("302", "Art. 302")} ust. 1 pkt 1–8 і 10–16 орган, компетентний видати decyzję o zobowiązaniu do powrotu, poucza іноземця з ${foreignersLaw.article("303", "Art. 303")} ust. 1 pkt 5a про обов’язок негайно виїхати до держави, куди він прямує, виконуючи рішення про повернення, видане органом держави, що застосовує dyrektywę 2008/115/WE.`,
          sourceLocator: "Art. 314a ust. 1",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`Орган фіксує здійснення pouczenia в реєстрі з ${foreignersLaw.article("428", "Art. 428")} ust. 1 pkt 6a.`,
          sourceLocator: "Art. 314a ust. 2",
        },
        {
          kind: "statute-text",
          text: "Pouczenie надається письмово мовою, зрозумілою іноземцеві.",
          sourceLocator: "Art. 314a ust. 3",
        },
      ],
      summary:
        "Стаття регулює письмову вказівку негайно прямувати до держави виконання вже виданого іншою державою рішення про повернення.",
      rules: [
        {
          locator: "ust. 1",
          explanation: foreignersLaw.text`Норма стосується конкретного іноземця з ${foreignersLaw.article("303", "Art. 303")} ust. 1 pkt 5a та лише перелічених підстав із ${foreignersLaw.article("302", "Art. 302")}. Напрям виїзду пов’язаний із виконанням рішення держави, яка застосовує dyrektywę 2008/115/WE.`,
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Недостатньо усного повідомлення: потрібні письмова форма, зрозуміла іноземцеві мова та відмітка про pouczenie у визначеному реєстрі.",
        },
      ],
      legalEffect:
        "Pouczenie конкретизує обов’язок негайного виїзду в межах виконання іноземного рішення про повернення та створює реєстраційний слід цієї процесуальної дії.",
      foreignersCase: foreignersLaw.text`Перевірте державу й рішення про повернення, підставу з ${foreignersLaw.article("302", "Art. 302")}, письмовий текст pouczenia, мову, яку особа розуміє, та запис у реєстрі.`,
    },
  ],
})
