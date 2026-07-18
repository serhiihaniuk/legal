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
      provisionId: "ustawa-o-cudzoziemcach-art-13",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("13", "Art. 13")} встановлює каталог даних, які можуть оброблятися у rejestrach, ewidencji та wykazie за ustawie: від ідентифікації, документів і біометрії до адрес, контактів, даних про роботу, навчання, провадження, підпис і членів сім’ї.`,
          sourceLocator: "Art. 13 pkt 1–30",
        },
      ],
      summary:
        "Це межі можливого набору даних, а не готова картка кожної особи. Конкретний реєстр і конкретне провадження використовують лише релевантну частину каталогу.",
      rules: [
        {
          locator: "Art. 13 pkt 1–17b",
          explanation:
            "Каталог розрізняє персональні й біометричні дані, громадянства, документ подорожі, документ тотожності та документ, що дає право pobytu. Після змін не зводьте pkt 17 лише до номера паспорта.",
        },
        {
          locator: "Art. 13 pkt 18–18d",
          explanation:
            "Для роботи, стажу, волонтерства, досліджень і навчання закон окремо описує суб’єктів та їхні реєстраційні й контактні дані, включно з pracodawcą użytkownikiem там, де він існує.",
        },
        {
          locator: "Art. 13 pkt 19–30",
          explanation:
            "До каталогу входять адреси фактичного, запланованого, попереднього проживання й адреса в kraju pochodzenia, контакти, дані про провадження, PESEL, wizerunek, wzór podpisu та структуровані дані членів сім’ї.",
        },
      ],
      legalEffect: foreignersLaw.text`${foreignersLaw.article("13", "Art. 13")} дозволяє обробляти названі категорії в межах відповідного реєстру, але запис або його відсутність самі по собі не доводять legalności pobytu, права на роботу чи істинності факту.`,
      foreignersCase: foreignersLaw.text`Зіставте спірне поле з точним пунктом ${foreignersLaw.article("13", "Art. 13")}, правовою підставою конкретного реєстру й документом-джерелом. Якщо дані змінилися, відокремте помилку в реєстрі від матеріального статусу особи.`,
    },
  ],
})
