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
      provisionId: "powierzanie-pracy-art-11",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("11", "Art. 11")} уповноважує ministra właściwego do spraw pracy визначити у drodze rozporządzenia перелік документів, які podmiot додає до wniosek про zezwolenie, з урахуванням потреби підтвердити обставини wniosek, підстави видачі zezwolenie та сплату opłata за ${workLaw.article("10", "art. 10")} ust. 1.`,
          sourceLocator: "Art. 11",
        },
      ],
      summary:
        "Сам закон окреслює мету документів, а конкретний wykaz передає до виконавчого rozporządzenie. Тому перелік додатків потрібно перевіряти за чинним актом, що діє для відповідної процедури.",
      rules: [
        {
          locator: "Art. 11",
          explanation:
            "Minister визначає документи для sprawnego postępowania, підтвердження даних wniosek, обставин, що обґрунтовують zezwolenie, та opłata.",
        },
      ],
      legalEffect: workLaw.text`${workLaw.article("11", "Art. 11")} не видає zezwolenie і не визначає legalny pobyt; він створює правову основу для деталізації доказів у rozporządzenie.`,
      foreignersCase:
        "Не покладайтеся на неофіційний шаблон списку документів. Для конкретної справи звірте чинне rozporządzenie, wniosek і документи, що підтверджують як роботу, так і legalny pobyt.",
    },
  ],
})
