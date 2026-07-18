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
      provisionId: "ustawa-o-cudzoziemcach-art-517",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("517", "Art. 517")} встановлює, що записи про cudzoziemców зі старого wykaz переходять до wykaz за новим законом і зберігаються на первісно визначений строк; до старих zakazy ponownego wjazdu застосовуються правила Dział X Rozdział 2.`,
          sourceLocator: "Art. 517 ust. 1–2",
        },
      ],
      summary:
        "Перехідна стаття зберігає дані старого wykaz і визначає режим для раніше встановлених zakaz ponownego wjazdu.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Старі wpisy даних стають wpisami до нового wykaz і зберігаються протягом строку, на який їх було внесено.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Для старих zakazy ponownego wjazdu застосовуються положення Dział X Rozdział 2 про umieszczanie і przechowywanie даних особи, щодо якої видано decyzja o zobowiązaniu do powrotu.",
        },
      ],
      legalEffect:
        "Стаття забезпечує правонаступність реєстрових записів і режиму заборон, але сама не встановлює нову заборону та не доводить, що конкретний запис ще зберігається.",
      foreignersCase:
        "Якщо спір стосується zakaz, перевірте первинну decyzja, строк заборони, дату внесення та актуальний запис у wykaz; вимагайте розмежувати дані й правову підставу рішення.",
    },
  ],
})
