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
      provisionId: "ustawa-o-cudzoziemcach-art-362",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("362", "Art. 362")} визначає мету провадження про дозвіл іншої держави ЄС на повітряний транзит: виконання рішення про повернення, коли немає прямого авіасполучення з Польщі до держави призначення.`,
          sourceLocator: "Art. 362",
        },
      ],
      summary:
        "Процедура транзитного дозволу використовується лише як практичний шлях виконання повернення, коли прямий рейс до держави призначення неможливий.",
      rules: [
        {
          locator: "całość",
          explanation:
            "Провадження стосується дозволу центрального органу іншої держави на прохід через її аеропорт; підставою залишається рішення про zobowiązaniu do powrotu.",
        },
      ],
      legalEffect: foreignersLaw.text`${foreignersLaw.article("362", "Art. 362")} не створює нового статусу pobyt і не змінює зміст рішення про повернення; він регулює спосіб його виконання.`,
      foreignersCase:
        "З’ясуйте, чому прямий рейс неможливий, яка держава є транзитною та яке рішення виконується; не плутайте цю процедуру з апеляцією.",
    },
  ],
})
