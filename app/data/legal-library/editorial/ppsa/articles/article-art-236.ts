import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const ppsaLaw = createLegalTextAuthor("ppsa")
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ppsa-art-236",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`${ppsaLaw.article("236", "Art. 236")} уповноважує Rada Ministrów визначити розporządzenie розмір opłat kancelaryjnych; воно має врахувати оплату за кожну сторінку, межу 200 zł для відпису orzeczenia z uzasadnieniem на прохання, фактичну вартість wydruki документів електронних та підвищення за документ іноземною мовою або з таблицею.`,
          sourceLocator: "Art. 236",
        },
      ],
      summary:
        "Розмір opłat kancelaryjnych визначає розporządzenie з урахуванням сторінок, виду документа, фактичної вартості та особливих форматів.",
      rules: [
        {
          locator: "Art. 236",
          explanation:
            "Для конкретної суми перевірте чинне розporządzenie та кількість сторінок або вид послуги, а не лише загальне уповноваження статті.",
        },
        {
          locator: "Art. 236",
          explanation:
            "Окремо врахуйте межу 200 zł для odpis orzeczenia z uzasadnieniem на прохання і правило фактичної вартості для електронних wydruki.",
        },
      ],
      legalEffect: ppsaLaw.text`${ppsaLaw.article("236", "Art. 236")} задає межі та критерії для підзаконного тарифу, але не замінює перевірки чинної ставки на дату запиту.`,
      foreignersCase:
        "Якщо документ для справи про pobyt іноземною мовою або містить таблицю, перевірте можливе підвищення opłata за чинним розporządzenie.",
    },
  ],
})
