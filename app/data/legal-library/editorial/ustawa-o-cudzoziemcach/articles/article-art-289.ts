import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-289",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 289 ust. 1–3 визначає, що контроль legalności pobytu для встановлення фактичного стану щодо умов в’їзду і перебування проводять Straż Graniczna та Policja; Szef Urzędu і wojewoda можуть контролювати в обсязі, необхідному для їхніх проваджень, а naczelnik urzędu celno-skarbowego — лише в межах контролів, що проводяться за правилами актів, перелічених у ust. 3.",
          sourceLocator: "Art. 289 ust. 1–3",
        },
      ],
      summary:
        "Стаття розподіляє повноваження щодо kontroli legalności pobytu між Straż Graniczna, Policja, Szef Urzędu, wojewoda та naczelnik urzędu celno-skarbowego в межах окремих контролів.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Основна мета — встановити фактичний стан дотримання правил в’їзду і перебування; контроль проводять Straż Graniczna та Policja.",
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Szef Urzędu і wojewoda діють у межах своїх проваджень, а naczelnik urzędu celno-skarbowego — лише в рамках контролів за актами, переліченими в ust. 3.",
        },
      ],
      legalEffect:
        "Стаття визначає компетентні органи та межі контролю, але сама не встановлює, що конкретний pobyt є незаконним.",
      foreignersCase:
        "У документі про контроль встановіть орган, його повноваження та мету; потім зіставте перевірені факти з умовами вашого в’їзду й pobytu.",
    },
  ]),
})
