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
      provisionId: "ustawa-o-cudzoziemcach-art-157i",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("157i", "Art. 157i")}, крім ${foreignersLaw.article("99", "art. 99")}, вимагає odmowa wszczęcia провадження про дозвіл dla wolontariusza, якщо на день заяви cudzoziemiec має дозвіл ${foreignersLaw.article("139a", "art. 139a")} ust. 1 для pracy як pracownik odbywający staż або ubiega się про ${foreignersLaw.article("127", "art. 127")} чи вже його має.`,
          sourceLocator: "Art. 157i pkt 1–2",
        },
      ],
      summary:
        "Стаття визначає несумісні дозволи та заяви, які блокують початок волонтерського провадження.",
      rules: [
        {
          locator: "pkt 1",
          explanation: foreignersLaw.text`Перевіряється дозвіл ${foreignersLaw.article("139a", "art. 139a")} ust. 1 для роботи як pracownik odbywający staż.`,
        },
        {
          locator: "pkt 2",
          explanation: foreignersLaw.text`Перевіряється подання або наявність дозволу ${foreignersLaw.article("127", "art. 127")}.`,
        },
      ],
      legalEffect:
        "Наслідком є odmowa wszczęcia, а не остаточна odmowa udzielenia після оцінки програми волонтеріату.",
      foreignersCase: foreignersLaw.text`Зафіксуйте дозволи й заяви на дату подання та наведіть у висновку конкретний пункт ${foreignersLaw.article("157i", "art. 157i")}.`,
    },
  ],
})
