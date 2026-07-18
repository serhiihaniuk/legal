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
      provisionId: "ustawa-o-cudzoziemcach-art-203f",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("203f", "Art. 203f")} встановлює для wezwania до доказів строк не коротший ніж 14 днів від doręczenia. Wojewoda має оцінити час, потрібний для одержання конкретного документа, а щодо цифрових копій з ${foreignersLaw.article("203d", "Art. 203d")} ust. 2 — вимагати оригінали.`,
          sourceLocator: "Art. 203f",
        },
      ],
      summary:
        "Ця стаття регулює доказовий етап справи: як орган просить підтвердити дані заяви та умови постійного проживання.",
      rules: [
        {
          locator: "Art. 203f zd. 1–2",
          explanation:
            "Чотирнадцять днів — нижня межа. Строк має відповідати реальній доступності документа, тому organ не повинен механічно давати однаковий час на просту довідку й доказ, який видає інша держава.",
        },
        {
          locator: "Art. 203f zd. 3",
          explanation:
            "Подана в MOS цифрова копія не закінчує перевірку: після wezwania треба представити оригінал.",
        },
      ],
      legalEffect:
        "Стаття захищає мінімальний час на докази й дозволяє органу перевірити оригінали, але не визначає наперед результат оцінки цих доказів.",
      foreignersCase:
        "Для кожної вимоги вкажіть, яку умову pobytu stałego вона підтверджує, хто видає документ і скільки це реально триває. Про об’єктивну потребу в довшому строку повідомте до його спливу.",
    },
  ],
})
