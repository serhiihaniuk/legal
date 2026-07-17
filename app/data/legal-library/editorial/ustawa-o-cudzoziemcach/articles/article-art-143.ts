import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-143",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("143", "Art. 143")} ust. 1 передбачає odmowa udzielenia zezwolenie на pobyt для діяльності з ${foreignersLaw.article("142", "art. 142")} ust. 3, якщо в поточному календарному році досягнуто limit, що стосується цього cudzoziemiec; ust. 2 відсилає до ${foreignersLaw.article("117", "art. 117")} pkt 1–2.`,
          sourceLocator: "Art. 143 ust. 1–2",
        },
      ],
      summary: foreignersLaw.text`Річний limit може бути підставою для відмови у наданні бізнесового дозволу, але лише у вузькій ситуації ${foreignersLaw.article("142", "art. 142")} ust. 3.`,
      rules: [
        {
          locator: "ust. 1",
          explanation: foreignersLaw.text`Поза випадками ${foreignersLaw.article("100", "art. 100")} дозвіл відмовляють, коли досягнуто limit, що стосується конкретного cudzoziemiec, визначений на підставі ${foreignersLaw.article("142a", "art. 142a")} ust. 1.`,
        },
        {
          locator: "ust. 2",
          explanation: foreignersLaw.text`До odmowa udzielenia застосовуються ${foreignersLaw.article("117", "art. 117")} pkt 1 і 2; їхні умови треба перевірити окремо.`,
        },
      ],
      legalEffect: foreignersLaw.text`Норма не робить будь-який досягнутий limit загальною забороною бізнесового pobyt і не стосується справ поза ${foreignersLaw.article("142", "art. 142")} ust. 3.`,
      foreignersCase: foreignersLaw.text`Зафіксуйте тип дозволу, роль cudzoziemiec за ${foreignersLaw.article("142", "art. 142")} ust. 3, календарний рік і офіційний статус limit. Не називайте наслідок odmowa wszczęcia.`,
    },
  ],
})
