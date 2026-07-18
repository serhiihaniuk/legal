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
      provisionId: "ustawa-o-cudzoziemcach-art-185c",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("185c", "Art. 185c")} вимагає cofnięcie zezwolenie з ${foreignersLaw.article("185a", "art. 185a")} ust. 1, якщо припинилася мета pobyt, cudzoziemiec перестав виконувати умови zezwolenie або виникла обставина з ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 2 або 4–8.`,
          sourceLocator: "Art. 185c",
        },
      ],
      summary:
        "Сезонний zezwolenie відкликається при втраті мети, вимог або за визначеними загальними підставами.",
      rules: [
        {
          locator: "весь припис",
          explanation: foreignersLaw.text`Для cofnięcie достатньо встановити одну з груп: припинення cel pobytu; припинення виконання вимог ${foreignersLaw.article("185a", "art. 185a")} ust. 1; або обставина ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 2, 4–8.`,
        },
      ],
      legalEffect:
        "Після обов'язкового cofnięcie сезонний zezwolenie більше не є підставою перебування; це не визначає автоматично окреме право на працю.",
      foreignersCase: foreignersLaw.text`Порівняйте фактичну роботу, чинність zezwolenie na pracę sezonową, страховку, житло та рішення з точним пунктом ${foreignersLaw.article("100", "art. 100")}; якщо умова припинилася в іншу дату, доведіть правильну хронологію.`,
    },
  ],
})
