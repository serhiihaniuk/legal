import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-107",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 107 встановлює, що до проваджень у справах про проступки з art. 120 попереднього закону «ustawa o promocji zatrudnienia i instytucjach rynku pracy», розпочатих і не завершених до 1 червня 2025 року, застосовуються попередні норми.",
          sourceLocator: "Art. 107",
        },
        {
          kind: "practical-inference",
          text: "Перехід стосується провадження про проступок, а не визначення законності перебування чи права на роботу. Можливі наслідки для іншої справи треба перевіряти за нормами, що регулюють саме ту справу.",
          sourceLocator: "Art. 107",
        },
      ],
      summary:
        "Стаття зберігає попередні правила для незавершених проваджень щодо проступків, визначених старим законом про сприяння зайнятості.",
      rules: [
        {
          locator: "Art. 107",
          explanation:
            "Провадження має стосуватися проступку, визначеного art. 120 попереднього закону «ustawa o promocji zatrudnienia i instytucjach rynku pracy».",
        },
        {
          locator: "Art. 107",
          explanation:
            "Якщо провадження було відкрито і не завершено до 1 червня 2025 року, застосовуються попередні норми.",
        },
      ],
      legalEffect:
        "Стаття визначає процесуальний перехід у справах про проступки. Вона сама не вирішує питання перебування чи дозволу на роботу.",
      foreignersCase:
        "Уточніть, який саме проступок і яке провадження маються на увазі, та зафіксуйте дати відкриття і завершення. Не переносіть автоматично цей перехідний режим на адміністративну справу про дозвіл на роботу або перебування.",
    },
  ]),
})
