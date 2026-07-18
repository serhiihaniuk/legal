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
      provisionId: "ustawa-o-cudzoziemcach-art-106f",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("106f", "Art. 106f")} встановлює для wezwania до подання доказів строк не коротший ніж 14 днів від вручення. Wojewoda має оцінити реальний час отримання конкретного документа, а щодо цифрових копій з ${foreignersLaw.article("106d", "Art. 106d")} ust. 2 — вимагати оригінали.`,
          sourceLocator: "Art. 106f",
        },
      ],
      summary:
        "Це доказовий, а не формальний етап: орган просить матеріали, які підтверджують дані заяви та умови конкретної мети pobytu.",
      rules: [
        {
          locator: "Art. 106f zd. 1–2",
          explanation:
            "Чотирнадцять днів — мінімум, а не автоматичний строк для кожного документа. Якщо доказ об’єктивно потребує більше часу, organ має врахувати це при визначенні строку.",
        },
        {
          locator: "Art. 106f zd. 3",
          explanation:
            "Цифрова копія може допомогти на старті, але не усуває обов’язку показати оригінал після wezwania.",
        },
      ],
      legalEffect:
        "Стаття задає мінімальний стандарт строку та спосіб перевірки електронних доказів; вона не доводить сама по собі, що матеріальна умова дозволу виконана.",
      foreignersCase:
        "Зіставте кожен пункт wezwania з умовою дозволу й конкретним доказом. Якщо документ неможливо отримати у відведений час, до спливу строку поясніть причину та підтвердьте кроки для його одержання.",
    },
  ],
})
