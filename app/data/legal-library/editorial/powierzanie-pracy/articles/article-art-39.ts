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
      provisionId: "powierzanie-pracy-art-39",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("39", "Art. 39")} звільняє від дозволу на роботу у зв’язку з визначеною функцією, якщо іноземець перебуває в Польщі загалом не більш як шість місяців упродовж послідовних 12 місяців і є членом правління, представляє або веде справи визначеного товариства чи виконує функцію прокуриста.`,
          sourceLocator: "Art. 39",
        },
      ],
      summary:
        "Це вузький виняток від вимоги мати дозвіл для корпоративної функції: сукупне перебування у зв’язку з такою функцією не може перевищувати шести місяців у кожному послідовному 12-місячному періоді.",
      rules: [
        {
          locator: "Art. 39",
          explanation:
            "Порахуйте фактичний сукупний період перебування в Польщі в межах наступних 12 місяців і встановіть, що функція належить до названої в статті.",
        },
      ],
      legalEffect: workLaw.text`${workLaw.article("39", "Ст. 39")} звільняє лише від дозволу на роботу. Вона не надає візи, права в’їзду чи законного перебування; підставу і строк перебування треба підтвердити окремо.`,
      foreignersCase:
        "Складіть календар усіх періодів перебування в Польщі та документів, які їх підтверджують, і перевірте корпоративну функцію. Не використовуйте виняток після досягнення шестимісячного ліміту.",
    },
  ],
})
