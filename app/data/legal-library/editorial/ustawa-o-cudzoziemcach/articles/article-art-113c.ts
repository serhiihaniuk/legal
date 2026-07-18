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
      provisionId: "ustawa-o-cudzoziemcach-art-113c",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("113c", "Art. 113c")} передбачає, що належно сплачена opłata skarbowa за udzielenie zezwolenia na pobyt czasowy не повертається після рішення wojewody про odmowę udzielenia zezwolenia або umorzenie postępowania.`,
          sourceLocator: "Art. 113c",
        },
      ],
      summary:
        "Результат справи й доля адміністративного збору — різні питання. Відмова або закінчення провадження без рішення по суті не створює права на автоматичне повернення належного збору.",
      rules: [
        {
          locator: "Art. 113c",
          explanation:
            "Правило охоплює саме належну opłatę skarbową за надання тимчасового дозволу. Іншу або надмірно сплачену суму треба оцінювати за окремими правилами, а не поширювати на неї цей висновок автоматично.",
        },
      ],
      legalEffect:
        "Після odmowy або umorzenia належна opłata skarbowa залишається неповоротною за цією статтею.",
      foreignersCase:
        "Не обіцяйте повернення збору лише тому, що дозвіл не видано. Спочатку звірте вид платежу, його суму, правову підставу та точний вид рішення.",
    },
  ],
})
