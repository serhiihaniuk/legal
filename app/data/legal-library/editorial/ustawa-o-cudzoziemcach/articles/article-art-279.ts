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
      provisionId: "ustawa-o-cudzoziemcach-art-279",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`До odbioru документа «zgoda na pobyt tolerowany» застосовуються положення ${foreignersLaw.article("248", "Art. 248")}.`,
          sourceLocator: "Art. 279",
        },
      ],
      summary:
        "Стаття відсилає питання отримання документа tolerowany до загальних правил odbioru karty pobytu.",
      rules: [
        {
          locator: "zdanie 1",
          explanation: foreignersLaw.text`Для особистого отримання, правила щодо дитини до 13 років і перевірки даних застосовуйте ${foreignersLaw.article("248", "Art. 248")} у межах цієї відсилки.`,
        },
      ],
      legalEffect: foreignersLaw.text`Стаття не дублює процедуру odbioru, а робить ${foreignersLaw.article("248", "Art. 248")} частиною правил для цього документа.`,
      foreignersCase: foreignersLaw.text`Перед odbiorem перевірте, хто має отримати документ, та звірте його дані за правилами ${foreignersLaw.article("248", "Art. 248")}. Помилку повідомте органу одразу.`,
    },
  ],
})
