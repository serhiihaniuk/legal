import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-98",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 98 додає до Prawo przedsiębiorców винятки з окремих правил контролю, коли контроль проводить Straż Graniczna за art. 1 ust. 2 pkt 13a або Państwowa Inspekcja Pracy за art. 10 ust. 1 pkt 4 відповідних актів.",
          sourceLocator:
            "Art. 98 pkt 1–2; art. 48 ust. 11 pkt 15–16 та art. 54 ust. 1 pkt 15–16 Prawo przedsiębiorców",
        },
      ],
      summary:
        "Поправка стосується процедурних правил контролю підприємців. Вона називає дві підстави контролю, для яких додаються винятки у art. 48 і art. 54 Prawo przedsiębiorców.",
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "До art. 48 ust. 11 додаються випадки контролю за правилами про Straż Graniczna та PIP.",
        },
        {
          locator: "pkt 2",
          explanation:
            "Аналогічні підстави додаються до art. 54 ust. 1 Prawo przedsiębiorców.",
        },
      ],
      legalEffect:
        "Стаття змінює винятки у режимі контролю; вона не є рішенням про виявлення порушення і не скасовує вимоги конкретного контрольного акту.",
      foreignersCase:
        "Під час контролю встановіть, який орган і за якою нормою діє. Якщо посилаються на Prawo przedsiębiorców, перевірте, чи підстава відповідає саме доданим pkt 15–16.",
    },
  ]),
})
