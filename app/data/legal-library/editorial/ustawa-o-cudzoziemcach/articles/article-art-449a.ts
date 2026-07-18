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
      provisionId: "ustawa-o-cudzoziemcach-art-449a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Точний текст ${foreignersLaw.article("449a", "Art. 449a")} ust. 1: «Minister właściwy do spraw zagranicznych tworzy i prowadzi ... centralny rejestr wizowy», що охоплює дані візових реєстрів.`,
          sourceLocator: "Art. 449a ust. 1",
        },
        {
          kind: "practical-inference",
          text: "Centralny rejestr wizowy є зведеним реєстром даних, а не окремою візою чи рішенням про її видачу.",
          sourceLocator: "Art. 449a ust. 1–3",
        },
      ],
      summary:
        "Minister właściwy do spraw zagranicznych створює та веде centralny rejestr wizowy з даних реєстрів міністра і консулів; доступ до нього мають консулі.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Centralny rejestr wizowy охоплює дані реєстрів справ про wizy, які ведуть minister і konsulowie.",
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Дані надаються konsulom і зберігаються протягом строку, встановленого для відповідних реєстрів.",
        },
      ],
      legalEffect:
        "Стаття визначає централізований візовий облік і його користувачів; вона не змінює матеріальні умови видачі чи скасування wiza.",
      foreignersCase:
        "Для питання про візовий запис установіть консульський rejestr, рішення та строк зберігання; не сприймайте запис centralny як заміну копії decyzja.",
    },
  ],
})
