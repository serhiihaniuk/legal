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
      provisionId: "ustawa-o-cudzoziemcach-art-227",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Якщо будь-який документ із ${foreignersLaw.article("226", "Art. 226")} було видано особі, яка не мала права його отримати, орган, що видав документ, stwierdza його nieważność у формі decyzji.`,
          sourceLocator: "Art. 227",
        },
      ],
      summary: foreignersLaw.text`Стаття визначає наслідок видачі документа ${foreignersLaw.article("226", "Art. 226")} неуповноваженій особі — stwierdzenie nieważności рішенням органу-видавця.`,
      rules: [
        {
          locator: "Art. 227",
          explanation:
            "Перевіряється саме відсутність права особи на момент видачі документа, а decyzja про nieważność приймається органом, який цей документ видав.",
        },
      ],
      legalEffect:
        "Норма передбачає окрему decyzja про stwierdzenie nieważności документа; вона не означає, що кожен спір про документ вирішується без встановлення факту braku uprawnienia.",
      foreignersCase: foreignersLaw.text`Зіставте вид документа з ${foreignersLaw.article("226", "Art. 226")}, підставу його видачі та факти, через які особу вважають неуповноваженою. У decyzja перевірте орган-видавець і конкретне обґрунтування ${foreignersLaw.article("227", "Art. 227")}.`,
    },
  ],
})
