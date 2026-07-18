import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const workLaw = createLegalTextAuthor("powierzanie-pracy")
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "powierzanie-pracy-art-48",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("48", "Art. 48")} надає пріоритет під час розгляду заяві про сезонний дозвіл, якщо іноземець хоча б один раз протягом п’яти років до нового подання працював для того самого польського суб’єкта на підставі сезонного дозволу, а нова робота виконуватиметься за трудовим договором (umowa o pracę).`,
          sourceLocator: "Art. 48",
        },
      ],
      summary:
        "Попередня сезонна робота для того самого суб’єкта може вплинути на черговість розгляду нової заяви. Для цього потрібні обидві умови: робота за сезонним дозволом у межах п’ятирічного періоду та майбутній трудовий договір.",
      rules: [
        {
          locator: "Art. 48",
          explanation:
            "Перевірте хоча б один попередній період роботи за сезонним дозволом для того самого суб’єкта протягом п’яти років і підтвердьте, що нова робота буде на підставі трудового договору.",
        },
      ],
      legalEffect:
        "Пріоритет впливає лише на черговість розгляду. Він не гарантує видачі сезонного дозволу, законності перебування чи права працювати після встановленого строку.",
      foreignersCase: workLaw.text`Зберіть попередній сезонний дозвіл і докази роботи для того самого суб’єкта, а також проєкт нового трудового договору. Паралельно перевірте актуальний документ перебування та умови з ${workLaw.article("45", "art. 45")}.`,
    },
  ],
})
