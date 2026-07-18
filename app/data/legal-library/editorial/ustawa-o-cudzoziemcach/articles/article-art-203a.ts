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
      provisionId: "ustawa-o-cudzoziemcach-art-203a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("203a", "Art. 203a")} вимагає пред’явити чинний документ подорожі. Інший документ, що підтверджує особу, допускається лише у szczególnie uzasadnionym przypadku, коли чинного документа подорожі немає і його неможливо отримати.`,
          sourceLocator: "Art. 203a ust. 1–2",
        },
      ],
      summary:
        "Загальне правило — чинний документ подорожі. Альтернативний документ не є рівнозначним вибором і потребує доведення виняткової ситуації.",
      rules: [
        {
          locator: "Art. 203a ust. 1",
          explanation: foreignersLaw.text`Цифрова копія всіх сторін додається за ${foreignersLaw.article("203d", "Art. 203d")}, а документ пред’являється під час особистої явки за ${foreignersLaw.article("203e", "Art. 203e")}, якщо не діє спеціальний виняток.`,
        },
        {
          locator: "Art. 203a ust. 2",
          explanation:
            "Треба окремо показати brak ważnego dokumentu podróży та неможливість його одержати. Лише тоді organ може прийняти інший документ тотожності.",
        },
      ],
      legalEffect:
        "За доведеного szczególnie uzasadnionego przypadku інший документ може підтвердити особу; без такого доведення діє вимога чинного документа подорожі.",
      foreignersCase:
        "Зберіть докази звернень до консульства або іншого компетентного органу та об’єктивних перешкод. Прострочений документ без доказу неможливості поновлення не достатній.",
    },
  ],
})
