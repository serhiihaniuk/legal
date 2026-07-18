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
      provisionId: "ustawa-o-cudzoziemcach-art-137",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("137", "Art. 137")} вимагає, щоб decyzja про zezwolenie за ${foreignersLaw.article("127", "art. 127")} зазначала строк чинності та мінімальну винагороду для висококваліфікованої роботи.`,
          sourceLocator: "Art. 137",
        },
      ],
      summary:
        "Стаття визначає обов’язкові елементи decyzja про Niebieską Kartę UE.",
      rules: [
        {
          locator: "Art. 137",
          explanation: foreignersLaw.text`У decyzja зазначають okres ważności та вказують, що робота може виконуватися за wynagrodzenie не нижче рівня, визначеного ${foreignersLaw.article("127", "art. 127")} pkt 3.`,
        },
      ],
      legalEffect: foreignersLaw.text`Реквізити в decyzja пов’язують дозвіл із строком і мінімальною винагородою, але стаття не визначає нового розміру поза відсиланням до ${foreignersLaw.article("127", "art. 127")} pkt 3.`,
      foreignersCase: foreignersLaw.text`Порівняйте текст decyzja з договором: строк і мінімальна brutto-винагорода мають бути прочитані разом із ${foreignersLaw.article("127", "art. 127")} pkt 3.`,
    },
  ],
})
