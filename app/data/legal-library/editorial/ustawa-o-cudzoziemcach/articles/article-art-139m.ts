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
      provisionId: "ustawa-o-cudzoziemcach-art-139m",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("139m", "Art. 139m")} вимагає від jednostka przyjmująca письмово повідомляти wojewodę протягом 15 dni roboczych про кожну зміну обставин, що впливає на умови наданого zezwolenia.`,
          sourceLocator: "Art. 139m ust. 1–2",
        },
      ],
      summary:
        "Стаття встановлює постійний обов’язок jednostka повідомляти про зміни після надання ICT-zezwolenia.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Письмове zawiadomienie подають wojewodzie, який надав zezwolenie, протягом 15 dni roboczych від зміни обставини.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Якщо zezwolenie надав Szef Urzędu у другій інстанції, повідомлення спрямовують wojewodzie першої інстанції.",
        },
      ],
      legalEffect:
        "Стаття створює обов’язок jednostka щодо повідомлення, але не визначає безпосередньо результат для zezwolenia при кожній зміні.",
      foreignersCase:
        "Ведіть журнал змін у роботі та доказів їх повідомлення; окремо перевірте, чи зміна впливає на умови, зазначені в decyzja.",
    },
  ],
})
