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
      provisionId: "ustawa-o-cudzoziemcach-art-174",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("174", "Art. 174")} зобов'язує орган, який видав cudzoziemiec zaświadczenie з ${foreignersLaw.article("170", "art. 170")}, повідомити про цей факт ministra właściwego do spraw wewnętrznych.`,
          sourceLocator: "Art. 174",
        },
      ],
      summary:
        "Стаття встановлює міжорганізаційне повідомлення про видачу заświadczenie.",
      rules: [
        {
          locator: "весь припис",
          explanation: foreignersLaw.text`Повідомлення надсилає саме орган-видавець документа з ${foreignersLaw.article("170", "art. 170")}; адресатом є minister właściwy do spraw wewnętrznych.`,
        },
      ],
      legalEffect:
        "Повідомлення забезпечує облік і не є окремим рішенням про legalny pobyt, permit або відповідальність cudzoziemiec.",
      foreignersCase:
        "У разі розбіжностей у даних встановіть, який орган видав zaświadczenie і чи саме він повідомив міністра; не вимагайте від cudzoziemiec замінити це міжорганізаційне повідомлення.",
    },
  ],
})
