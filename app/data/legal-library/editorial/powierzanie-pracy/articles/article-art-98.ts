import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-98",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 98 є виконаною нормою про зміну Prawa przedsiębiorców. Він додав винятки з окремих правил контролю, коли перевірку проводить Straż Graniczna на підставі art. 1 ust. 2 pkt 13a або Państwowa Inspekcja Pracy на підставі art. 10 ust. 1 pkt 4 відповідних законів.",
          sourceLocator:
            "Art. 98 pkt 1–2; art. 48 ust. 11 pkt 15–16 та art. 54 ust. 1 pkt 15–16 Prawo przedsiębiorców",
        },
      ],
      summary:
        "Поправка стосується процедурних правил контролю підприємців. Вона називає дві підстави перевірки, для яких у art. 48 і art. 54 Prawa przedsiębiorców передбачено винятки із загальних правил.",
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "До art. 48 ust. 11 додано випадки контролю, який проводять Straż Graniczna та PIP на прямо названих правових підставах.",
        },
        {
          locator: "pkt 2",
          explanation:
            "Аналогічні підстави додано до art. 54 ust. 1 Prawa przedsiębiorców.",
        },
      ],
      legalEffect:
        "Стаття змінює винятки у процедурі контролю. Вона не є висновком про виявлене порушення і не скасовує вимог до конкретної перевірки.",
      foreignersCase:
        "Під час контролю встановіть, який орган і на якій правовій підставі діє. Якщо він посилається на Prawo przedsiębiorców, перевірте, чи підстава відповідає саме доданим pkt 15–16.",
    },
  ]),
})
