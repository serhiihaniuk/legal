import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-107",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 107 встановлює, що до незавершених до набрання чинності новою ustawy проваджень у справах про wykroczenia з art. 120 старої ustawy o promocji zatrudnienia застосовуються dotychczasowe przepisy.",
          sourceLocator: "Art. 107",
        },
        {
          kind: "practical-inference",
          text: "Перехід стосується провадження про wykroczenie, а не визначення legalnego pobytu чи права на роботу; можливі наслідки для іншої справи треба перевіряти за її власною нормою.",
          sourceLocator: "Art. 107",
        },
      ],
      summary:
        "Стаття зберігає попередні правила для незавершених проваджень щодо визначених wykroczenia за старою трудовою ustawy.",
      rules: [
        {
          locator: "Art. 107",
          explanation:
            "Провадження повинно стосуватися wykroczenia, визначеного art. 120 старої ustawy o promocji zatrudnienia i instytucjach rynku pracy.",
        },
        {
          locator: "Art. 107",
          explanation:
            "Якщо воно було wszczęte і не завершене до набрання чинності новою ustawy, застосовуються dotychczasowe przepisy.",
        },
      ],
      legalEffect:
        "Стаття визначає процесуальний перехід у справах про wykroczenia. Вона сама не встановлює рішення про pobyt чи дозвіл на роботу.",
      foreignersCase:
        "Уточніть, яке саме wykroczenie і яке провадження маються на увазі, та зафіксуйте дати wszczęcia й завершення. Не переносіть автоматично цей перехідний режим на адміністративну справу про zezwolenie na pracę або pobyt.",
    },
  ]),
})
