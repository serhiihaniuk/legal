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
      provisionId: "powierzanie-pracy-art-11",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("11", "Art. 11")} уповноважує міністра, відповідального за питання праці, визначити виконавчим приписом перелік документів, які суб’єкт додає до заяви про дозвіл на роботу. Ці документи мають давати змогу підтвердити дані заяви, обставини, що обґрунтовують видачу дозволу, та сплату збору з частини 1 ${workLaw.article("10", "ст. 10")}.`,
          sourceLocator: "Art. 11",
        },
      ],
      summary:
        "Сам закон пояснює, що мають доводити документи, а конкретний перелік передає до виконавчого припису («rozporządzenie»). Тому склад додатків треба перевіряти за редакцією цього припису, чинною для відповідної процедури на дату подання.",
      rules: [
        {
          locator: "Art. 11",
          explanation:
            "Міністр визначає документи, потрібні для належного проведення справи, підтвердження даних заяви, підстав для видачі дозволу та сплати збору.",
        },
      ],
      legalEffect: workLaw.text`${workLaw.article("11", "Ст. 11")} сама не надає дозволу і не визначає законність перебування. Вона лише створює правову основу для деталізації доказів у виконавчому приписі.`,
      foreignersCase:
        "Не покладайтеся на неофіційний шаблон переліку документів. Для конкретної справи звірте виконавчий припис, чинний на дату подання, зміст заяви та докази як запланованої роботи, так і законного перебування.",
    },
  ],
})
