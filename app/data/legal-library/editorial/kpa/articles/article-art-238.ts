import { createLegalTextAuthor } from "../../../legal-text"

import { defineKpaEditorialPart } from "../define-kpa-part"

const kpaLaw = createLegalTextAuthor("kpa")
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "238",
      provisionId: "kpa-art-238",
      reviewStatus: "reviewed",
      summary:
        "Стаття визначає обов'язковий зміст повідомлення про спосіб розгляду skargi. Негативна відповідь повинна додатково містити фактичне й правове обґрунтування та pouczenie про наслідок повторної безпідставної скарги.",
      rules: [
        {
          locator: "§ 1 zdanie 1",
          explanation:
            "Повідомлення має вказувати орган, спосіб розгляду та містити підпис із ім'ям, прізвищем і посадою уповноваженої особи.",
        },
        {
          locator: "§ 1 zdanie 2",
          explanation: kpaLaw.text`Відмова додатково потребує uzasadnienia faktycznego i prawnego та pouczenia o treści ${kpaLaw.article("239", "art. 239")}.`,
        },
        {
          locator: "§ 2",
          explanation:
            "У визначених службах безпеки й оборони ім'я та прізвище уповноваженої особи можна не вказувати.",
        },
      ],
      legalEffect:
        "Відповідь без установлених елементів не відповідає формі завершення skargi, особливо коли орган визнає її необґрунтованою.",
      foreignersCase: kpaLaw.text`Якщо skargę іноземця відхилено, він має отримати не лише фразу про безпідставність, а фактичні й правові причини та попередження за ${kpaLaw.article("239", "art. 239")}.`,
    },
  ],
})
