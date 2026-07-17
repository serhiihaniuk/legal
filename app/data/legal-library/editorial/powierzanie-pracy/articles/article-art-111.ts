import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-111",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 111 передбачає, що program aktywizacyjny dla cudzoziemców, який реалізується на підставі art. 62d–62g старої ustawy o promocji zatrudnienia, надалі реалізується і фінансується за dotychczasowe przepisy.",
          sourceLocator: "Art. 111",
        },
        {
          kind: "practical-inference",
          text: "Це правило зберігає режим конкретної програми, але не перетворює участь у ній на автоматичну підставу для legalnego pobytu або права виконувати роботу.",
          sourceLocator: "Art. 111",
        },
      ],
      summary:
        "Стаття забезпечує продовження реалізації та фінансування вже визначеної програми активізації для іноземців за попередніми правилами.",
      rules: [
        {
          locator: "Art. 111",
          explanation:
            "Потрібно, щоб програма була реалізована саме на підставі art. 62d–62g старої ustawy.",
        },
        {
          locator: "Art. 111",
          explanation:
            "І реалізація, і фінансування програми залишаються за dotychczasowe przepisy. Стаття не містить нового переліку учасників чи нової процедури.",
        },
      ],
      legalEffect:
        "Норма забезпечує тяглість конкретної програми, а не створює самостійний дозвільний режим. Її застосування не замінює перевірку pobyt і доступу до праці за відповідними правилами.",
      foreignersCase:
        "Встановіть, чи справді захід належить до програми за art. 62d–62g, хто її реалізує та який документ підтверджує участь. Не подавайте участь у програмі як доказ автоматичного права на legalny pobyt або право на pracę.",
    },
  ]),
})
