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
      provisionId: "ustawa-o-cudzoziemcach-art-284",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Якщо cudzoziemiec, попри обов’язок zwrotu одного з документів ${foreignersLaw.article("226", "Art. 226")} pkt 1–3 або 5, його не повернув або повідомив про utratę, organ, якому документ належало повернути або якому повідомили про utratę, вносить інформацію про документ до Systemu Informacyjnego Schengen для його zajęcia.`,
          sourceLocator: "Art. 284 ust. 1",
        },
        {
          kind: "statute-text",
          text: "Орган, який вніс інформацію за ust. 1, видаляє її з SIS, коли документ повернуто.",
          sourceLocator: "Art. 284 ust. 2",
        },
      ],
      summary:
        "Стаття передбачає внесення документа до SIS для затримання, якщо його не повернули або заявили про втрату, та видалення запису після повернення.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Обов’язок zwrotu та факт utraty можуть мати наслідок у SIS; сам запис виникає для забезпечення zajęcia документа.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Після фактичного zwrotu саме орган має видалити інформацію з SIS.",
        },
      ],
      legalEffect:
        "Запис у SIS стосується конкретного документа й його вилучення, а не самостійно визначає легальність pobytu чи винуватість іноземця.",
      foreignersCase:
        "Якщо документ повернуто, отримайте доказ zwrotu та зверніться до органу щодо актуальності запису SIS. Не користуйтеся документом, про втрату якого повідомляли.",
    },
  ],
})
