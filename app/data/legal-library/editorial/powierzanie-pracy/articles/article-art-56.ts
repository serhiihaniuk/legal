import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-56",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 56 допускає для визначених громадян інший вид роботи до сукупно 30 днів чинності сезонного zezwolenie без нового документа за одночасного виконання умов; також перелічує зміни, що не потребують зміни або нового zezwolenie.",
          sourceLocator: "Art. 56 ust. 1–2",
        },
      ],
      summary:
        "Виняток стосується лише громадян держави з переліку art. 3 ust. 8 pkt 2, оплати не нижчої за сезонне zezwolenie і не тимчасової роботи. Окремі зміни договору, включно зі збільшенням годин у встановлених межах, також не вимагають нового документа.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Інший вид роботи дозволений не довше 30 днів загалом за весь строк zezwolenie; усі три умови мають виконуватися разом.",
        },
        {
          locator: "ust. 2 pkt 1–4",
          explanation:
            "Без нового zezwolenie допускаються названі заміни umowa та обставини ust. 1, а також збільшення до повного часу або до 299 годин на місяць за пропорційного збільшення wynagrodzenie.",
        },
      ],
      legalEffect:
        "Це вузький виняток із прив'язаності роботи до сезонних умов, а не загальна свобода змінювати посаду чи договір.",
      foreignersCase:
        "Перед зміною роботи перевірте громадянство, загальну кількість 30 днів, статус pracownik tymczasowy та пропорцію годин і wynagrodzenie. За межами переліку потрібен окремий аналіз дозволу.",
    },
  ]),
})
