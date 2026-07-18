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
      provisionId: "ustawa-o-cudzoziemcach-art-124",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("124", "Art. 124")} зобов’язує wojewodę повідомити starostę właściwego ze względu na miejsce pobytu cudzoziemca про cofnięcie zezwolenia na pobyt czasowy i pracę після того, як рішення стане ostateczne.`,
          sourceLocator: "Art. 124",
        },
      ],
      summary:
        "Норма регулює передання інформації між wojewoda та starosta після остаточного cofnięcie zezwolenia.",
      rules: [
        {
          locator: "Art. 124",
          explanation:
            "Wojewoda повідомляє starostę właściwego ze względu na miejsce pobytu cudzoziemca саме після того, як decyzja про cofnięcie стане ostateczna.",
        },
      ],
      legalEffect:
        "Стаття визначає адміністративну комунікацію після остаточного рішення, а не окрему підставу для cofnięcie.",
      foreignersCase:
        "У справі відрізняйте дату видачі рішення від дати, коли воно стало ostateczne; ця стаття говорить про повідомлення starosta лише після другого моменту.",
    },
  ],
})
