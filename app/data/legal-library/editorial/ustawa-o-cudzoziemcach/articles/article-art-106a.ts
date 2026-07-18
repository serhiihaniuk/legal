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
      provisionId: "ustawa-o-cudzoziemcach-art-106a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("106a", "Art. 106a")} вимагає пред’явити чинний документ подорожі. Інший документ, що підтверджує особу, допускається лише у szczególnie uzasadnionym przypadku, коли чинного документа подорожі немає і його неможливо отримати.`,
          sourceLocator: "Art. 106a ust. 1–2",
        },
      ],
      summary:
        "Звичайним доказом тотожності є чинний документ подорожі. Альтернатива існує як вузький виняток і потребує пояснення двох фактів: відсутності документа та неможливості його одержати.",
      rules: [
        {
          locator: "Art. 106a ust. 1",
          explanation: foreignersLaw.text`Документ не лише додають у цифровій формі за ${foreignersLaw.article("106d", "Art. 106d")}, а й пред’являють на особистому етапі за ${foreignersLaw.article("106e", "Art. 106e")}, якщо не діє спеціальний виняток.`,
        },
        {
          locator: "Art. 106a ust. 2",
          explanation:
            "Інший документ тотожності не є зручнішою опцією. Треба довести szczególnie uzasadniony przypadek і реальну неможливість отримати чинний документ подорожі.",
        },
      ],
      legalEffect:
        "За доведеного винятку інший документ може виконати функцію підтвердження тотожності; без такого доведення загальна вимога чинного документа зберігається.",
      foreignersCase:
        "До альтернативного документа додайте докази звернень до компетентних органів, відповідей або інших об’єктивних перешкод. Саме прострочення паспорта не доводить неможливості його отримання.",
    },
  ],
})
