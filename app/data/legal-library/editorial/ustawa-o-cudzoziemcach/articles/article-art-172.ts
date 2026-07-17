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
      provisionId: "ustawa-o-cudzoziemcach-art-172",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("172", "Art. 172")} визначає, що zaświadczenie з ${foreignersLaw.article("170", "art. 170")} видає organ właściwy до провадження у справі про злочин handlu ludźmi, і встановлює строк чинності 3 місяці або 4 місяці для małoletni cudzoziemiec.`,
          sourceLocator: "Art. 172 ust. 1–2",
        },
      ],
      summary:
        "Документ видає орган кримінального провадження, а його строк залежить від віку cudzoziemiec на момент видачі.",
      rules: [
        {
          locator: "ust. 1",
          explanation: foreignersLaw.text`Zaświadczenie з ${foreignersLaw.article("170", "art. 170")} видає орган, компетентний вести провадження про відповідний злочин; не будь-який орган у справах іноземців має цю компетенцію.`,
        },
        {
          locator: "ust. 2",
          explanation:
            "Строк чинності — 3 місяці від дня видачі, а для małoletni cudzoziemiec — 4 місяці від дня видачі; це строк документа, а не загальний строк розгляду permit.",
        },
      ],
      legalEffect:
        "Після спливу визначеного строку заświadczenie більше не забезпечує наслідок legalny pobyt за статтею 171, якщо не існує іншої підстави.",
      foreignersCase:
        "На копії документа позначте день видачі та останній день 3- або 4-місячного строку; завчасно перевірте іншу підставу перебування, якщо провадження триває.",
    },
  ],
})
