import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const workLaw = createLegalTextAuthor("powierzanie-pracy")
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "powierzanie-pracy-art-48",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("48", "Art. 48")} вимагає надавати пріоритет wnioskom про sezonowe zezwolenie для cudzoziemiec, який хоча б один раз протягом 5 років до wniosku працював на користь того самого polski podmiot на підставі сезонного дозволу, якщо нова робота буде за umowa o pracę.`,
          sourceLocator: "Art. 48",
        },
      ],
      summary:
        "Попередня сезонна робота для того самого podmiot може дати пріоритет новому wniosek. Потрібні і попередній сезонний дозвіл, і нова umowa o pracę.",
      rules: [
        {
          locator: "Art. 48",
          explanation:
            "Перевірте хоча б один попередній період роботи за сезонним дозволом протягом п'яти років та те, що нова робота буде на підставі umowa o pracę.",
        },
      ],
      legalEffect:
        "Пріоритет впливає на порядок розгляду, але не гарантує видачу sezonowe zezwolenie, legalny pobyt або продовження роботи після визначеного строку.",
      foreignersCase: workLaw.text`Зберіть попереднє zezwolenie та докази роботи у того самого podmiot, а також проєкт нової umowa o pracę. Паралельно перевірте актуальний документ pobyt і сезонні умови ${workLaw.article("45", "art. 45")}.`,
    },
  ],
})
