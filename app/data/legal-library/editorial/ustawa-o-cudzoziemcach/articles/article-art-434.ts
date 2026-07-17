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
      provisionId: "ustawa-o-cudzoziemcach-art-434",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Точний текст ${foreignersLaw.article("434", "Art. 434")}: «Wykaz cudzoziemców, których pobyt na terytorium Rzeczypospolitej Polskiej jest niepożądany ... prowadzi Szef Urzędu».`,
          sourceLocator: "Art. 434",
        },
        {
          kind: "practical-inference",
          text: "Сам факт ведення wykaz Szef Urzędu не означає, що будь-який запис уже є щодо конкретної особи або має одну й ту саму підставу.",
          sourceLocator: "Art. 434",
        },
      ],
      summary:
        "Wykaz cudzoziemców, чий pobyt у Польщі є небажаним, веде Szef Urzędu.",
      rules: [
        {
          locator: "Art. 434",
          explanation:
            "Szef Urzędu є органом, який веде wykaz, названий у статті.",
        },
      ],
      legalEffect: foreignersLaw.text`Норма визначає орган-розпорядник wykaz. Підстави внесення, строк і права особи випливають з наступних статей, а не з ${foreignersLaw.article("434", "Art. 434")} самостійно.`,
      foreignersCase: foreignersLaw.text`Якщо особа дізналася про можливий wpis, перевіряйте підставу й строк за ${foreignersLaw.article("435", "Art. 435")}–${foreignersLaw.article("438", "438")} та спеціальний wniosek за ${foreignersLaw.article("444", "Art. 444")}, а не лише назву wykaz.`,
    },
  ],
})
