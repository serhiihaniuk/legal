import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-89",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 89 замінює у art. 121 § 9a Kodeks karny wykonawczy посилання на стару ustawa про promocję zatrudnienia посиланням на ustawa z 20 marca 2025 r.",
          sourceLocator: "Art. 89",
        },
      ],
      summary:
        "Це технічна зміна відсилання у Kodeks karny wykonawczy. Вона підтримує застосування нового акту там, де раніше згадувалася стара ustawa.",
      rules: [
        {
          locator: "Art. 89; art. 121 § 9a KKW",
          explanation:
            "У визначеному місці KKW старе посилання замінене на нову ustawa про умови допустимості powierzanie pracy cudzoziemcom.",
        },
      ],
      legalEffect:
        "Сам art. 89 не створює дозволу на роботу та не визначає індивідуальний статус cudzoziemiec; він змінює нормативну відсилку.",
      foreignersCase:
        "Якщо документ посилається на art. 121 § 9a KKW, читайте його вже з новою відсилкою і перевіряйте зміст пов'язаних норм, а не лише номер старої ustawa.",
    },
  ]),
})
