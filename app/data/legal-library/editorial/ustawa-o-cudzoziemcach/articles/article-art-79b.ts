import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

const EES_2017_2226_URL = "https://eur-lex.europa.eu/eli/reg/2017/2226/oj"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-79b",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("79b", "Art. 79b")} зобов’язує organ, який розмістив wiza krajowa у dokument podróży або на blankiet, видалити дані cudzoziemiec, зареєстровані в System Wjazdu/Wyjazdu (EES), відповідно до ${foreignersLaw.external("Art. 35", EES_2017_2226_URL)} ust. 6 rozporządzenie nr 2017/2226, протягом 5 dni roboczych від розміщення візи.`,
          sourceLocator:
            "Art. 79b у zw. z Art. 35 ust. 6 rozporządzenie nr 2017/2226",
        },
        {
          kind: "practical-inference",
          text: "Видалення запису EES є операцією з даними, а не зміною decyzja про wiza чи самостійною легалізацією pobyt.",
          sourceLocator: "Art. 79b",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("79b", "Art. 79b")} встановлює п’ятиденний робочий строк для очищення даних EES після фізичного розміщення wiza krajowa.`,
      rules: [
        {
          locator: "Art. 79b",
          explanation: foreignersLaw.text`Строк рахується від дня umieszczenie візи, а обов’язок лежить на тому organ, який її розмістив; матеріальні правила EES беруться з ${foreignersLaw.external("Art. 35", EES_2017_2226_URL)} ust. 6 rozporządzenie nr 2017/2226.`,
        },
      ],
      legalEffect:
        "Норма забезпечує узгодженість EES із виданою візою. Вона не продовжує строк візи, не змінює SIS і не визначає права на pracę.",
      foreignersCase:
        "З’ясуйте organ, дату umieszczenie wiza і дату операції EES; якщо дані не видалені вчасно, зафіксуйте це як окрему проблему реєстру, не як автоматичну зміну статусу.",
    },
  ],
})
