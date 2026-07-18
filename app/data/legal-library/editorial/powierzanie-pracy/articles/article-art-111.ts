import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-111",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 111 передбачає, що програму професійної активізації іноземців, яку реалізували на підставі art. 62d–62g попереднього закону «ustawa o promocji zatrudnienia i instytucjach rynku pracy», надалі реалізують і фінансують за попередніми нормами.",
          sourceLocator: "Art. 111",
        },
        {
          kind: "practical-inference",
          text: "Це правило зберігає режим конкретної програми, але не перетворює участі в ній на автоматичну підставу законного перебування або права виконувати роботу.",
          sourceLocator: "Art. 111",
        },
      ],
      summary:
        "Стаття забезпечує продовження реалізації та фінансування вже визначеної програми активізації для іноземців за попередніми правилами.",
      rules: [
        {
          locator: "Art. 111",
          explanation:
            "Програма має реалізовуватися саме на підставі art. 62d–62g старого закону.",
        },
        {
          locator: "Art. 111",
          explanation:
            "І реалізація, і фінансування програми залишаються за попередніми нормами. Стаття не створює нового переліку учасників або нової процедури.",
        },
      ],
      legalEffect:
        "Норма забезпечує безперервність конкретної програми, а не створює самостійного дозвільного режиму. Її застосування не замінює перевірки законності перебування і доступу до праці.",
      foreignersCase:
        "Встановіть, чи справді захід належить до програми за art. 62d–62g, хто її реалізує та який документ підтверджує участь. Не подавайте участь у програмі як доказ автоматичного права на законне перебування або роботу.",
    },
  ]),
})
