import {
  authorLegalTextCitationsTree,
  createLegalTextAuthor,
} from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-9a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("9a", "Art. 9a")} встановлює, що строк на подання pismo у справах, врегульованих ustawa, вважається zachowany, якщо cudzoziemiec, umieszczony у strzeżony ośrodek або areszt dla cudzoziemców, подав pismo адміністрації цієї установи до спливу строку.`,
          sourceLocator: "Art. 9a",
        },
        {
          kind: "practical-inference",
          text: "Це спеціальне правило стосується збереження процесуального строку, а не змісту pismo, позитивного вирішення справи, legalnego pobytu чи права на працю.",
          sourceLocator: "Art. 9a",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("9a", "Art. 9a")} захищає строк для pismo іноземця, який перебуває у strzeżony ośrodek або areszt dla cudzoziemców: достатньо подати pismo адміністрації цієї установи до закінчення строку.`,
      rules: [
        {
          locator: "Art. 9a",
          explanation:
            "Спочатку встановіть, що особа є cudzoziemiec і фактично umieszczony у strzeżony ośrodek або areszt dla cudzoziemców; правило не поширюється на будь-яке місце перебування.",
        },
        {
          locator: "Art. 9a",
          explanation:
            "Вирішальним є подання pismo адміністрації відповідного ośrodek або areszt перед спливом строку. Дата підготовки документа сама по собі не замінює подання.",
        },
      ],
      legalEffect:
        "За виконання умови вважається дотриманим строк на подання pismo у справі за ustawa. Це не підтверджує матеріальні умови вимоги і не створює документа на pobyt або pracę.",
      foreignersCase:
        "Зафіксуйте вид установи, точну дату й час закінчення строку, копію pismo та підтвердження його прийняття адміністрацією. Окремо перевірте, які матеріальні умови та докази потрібні у самій справі.",
    },
  ]),
})
