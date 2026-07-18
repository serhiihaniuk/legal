import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

const workLaw = createLegalTextAuthor("powierzanie-pracy")
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "powierzanie-pracy-art-24",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("24", "Art. 24")} встановлює автоматичне припинення дозволу на роботу в день надання іноземцеві дозволу на перебування довготермінового резидента ЄС або дозволу на постійне перебування. Такий самий наслідок настає після надання дозволу на тимчасове перебування за частиною 1 ${foreignersLaw.article("114", "ст. 114")}, частинами 1 і 3 ${foreignersLaw.article("126", "ст. 126")} або ${foreignersLaw.article("127", "ст. 127")} польського закону «ustawa o cudzoziemcach», якщо нове рішення стосується роботи в того самого польського суб’єкта й на тій самій посаді.`,
          sourceLocator: "Art. 24 pkt 1–2",
        },
      ],
      summary:
        "Дозвіл на роботу припиняється автоматично лише в прямо названих ситуаціях після надання іншого дозволу на перебування. Для дозволу на тимчасове перебування вирішальними є той самий польський суб’єкт і та сама посада.",
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "Надання дозволу на перебування довготермінового резидента ЄС або дозволу на постійне перебування з припису закону припиняє раніше виданий дозвіл на роботу.",
        },
        {
          locator: "pkt 2",
          explanation: workLaw.text`Те саме стосується лише дозволів на тимчасове перебування з частини 1 ${foreignersLaw.article("114", "ст. 114")}, частин 1 і 3 ${foreignersLaw.article("126", "ст. 126")} або ${foreignersLaw.article("127", "ст. 127")}, коли новий дозвіл пов’язаний із роботою в того самого польського суб’єкта й на тій самій посаді.`,
        },
      ],
      legalEffect: workLaw.text`${workLaw.article("24", "Ст. 24")} стосується припинення дозволу на роботу, а не автоматичного продовження чи скасування всіх прав, пов’язаних із перебуванням. Нове рішення про перебування треба читати разом із його власними умовами доступу до роботи.`,
      foreignersCase:
        "Зіставте дату надання нового дозволу на перебування з даними суб’єкта і посади в попередньому дозволі на роботу. Після цієї дати не посилайтеся на попередній дозвіл; перевірте, яке право на роботу випливає з нового статусу.",
    },
  ],
})
