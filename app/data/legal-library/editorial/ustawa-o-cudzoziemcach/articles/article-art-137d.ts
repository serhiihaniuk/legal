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
      provisionId: "ustawa-o-cudzoziemcach-art-137d",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("137d", "Art. 137d")} встановлює 30-денний строк для рішення щодо zezwolenia за ${foreignersLaw.article("137a", "art. 137a")} та 60-денний строк для odwoławcze postępowanie.`,
          sourceLocator: "Art. 137d ust. 1–2",
        },
      ],
      summary:
        "Стаття визначає строки для першої та апеляційної стадій справи про довгострокову мобільність.",
      rules: [
        {
          locator: "ust. 1",
          explanation: foreignersLaw.text`Decyzja у справі про надання zezwolenia видається протягом 30 днів; обчислення строку пов’язане з ${foreignersLaw.article("112a", "art. 112a")} ust. 2.`,
        },
        {
          locator: "ust. 2",
          explanation: foreignersLaw.text`Odwoławcze postępowanie закінчується протягом 60 днів; застосовується ${foreignersLaw.article("112a", "art. 112a")} ust. 5.`,
        },
      ],
      legalEffect: foreignersLaw.text`Це строки, сформульовані разом із відсиланнями до ${foreignersLaw.article("112a", "art. 112a")}; з однієї ${foreignersLaw.article("137d", "Art. 137d")} не випливає, що кожна календарна справа рахується без винятків.`,
      foreignersCase: foreignersLaw.text`Ведіть окремий рахунок строку першої та апеляційної інстанції й прочитайте, як ${foreignersLaw.article("112a", "art. 112a")} визначає його перебіг у вашій справі.`,
    },
  ],
})
