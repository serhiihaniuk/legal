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
      provisionId: "powierzanie-pracy-art-39",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("39", "Art. 39")} не вимагає zezwolenie на роботу у зв'язку з określona funkcja, якщо cudzoziemiec перебуває в Польщі загалом не більше 6 місяців упродовж наступних 12 місяців і виконує функцію в zarząd, представляє або веде справи визначеної spółka чи має prokura.`,
          sourceLocator: "Art. 39",
        },
      ],
      summary:
        "Є вузький виняток від вимоги функціонального дозволу: сукупний pobyt для такої функції не може перевищити 6 місяців у кожному послідовному 12-місячному періоді.",
      rules: [
        {
          locator: "Art. 39",
          explanation:
            "Порахуйте фактичний сукупний період перебування в Польщі в межах наступних 12 місяців і встановіть, що функція належить до названої в статті.",
        },
      ],
      legalEffect: workLaw.text`${workLaw.article("39", "Art. 39")} звільняє лише від zezwolenie na pracę. Він не надає visa, права wjazdu чи legalnego pobytu; підставу і строк перебування треба підтвердити окремо.`,
      foreignersCase:
        "Складіть календар усіх періодів побуту в Польщі та документів, які їх підтверджують, і перевірте корпоративну функцію. Не використовуйте правило після досягнення ліміту 6 місяців.",
    },
  ],
})
