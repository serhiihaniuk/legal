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
      provisionId: "ustawa-o-cudzoziemcach-art-157c",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("157c", "Art. 157c")}, крім ${foreignersLaw.article("99", "art. 99")}, вимагає odmowa wszczęcia провадження про дозвіл dla stażysty, якщо на день заяви cudzoziemiec має дозвіл ${foreignersLaw.article("139a", "art. 139a")} ust. 1 для pracy як pracownik odbywający staż або ubiega się про ${foreignersLaw.article("127", "art. 127")} чи вже його має.`,
          sourceLocator: "Art. 157c pkt 1–2",
        },
      ],
      summary:
        "Норма визначає несумісні на дату заяви дозволи та заяви для початку стажового провадження.",
      rules: [
        {
          locator: "pkt 1",
          explanation: foreignersLaw.text`Перевіряється чинний дозвіл ${foreignersLaw.article("139a", "art. 139a")} ust. 1 для pracy як pracownik odbywający staż.`,
        },
        {
          locator: "pkt 2",
          explanation: foreignersLaw.text`Перевіряється подання або наявність дозволу ${foreignersLaw.article("127", "art. 127")}.`,
        },
      ],
      legalEffect:
        "Наслідком є odmowa wszczęcia, а не матеріальна odmowa udzielenia після оцінки угоди та умов staż.",
      foreignersCase:
        "Зробіть зріз усіх дозволів і заяв на день подання та вкажіть, яка саме з двох обставин застосована.",
    },
  ],
})
