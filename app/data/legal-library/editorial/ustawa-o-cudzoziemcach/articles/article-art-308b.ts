import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-308b",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 308b передбачає застосування Rozdział 5 ustawy z 14 lipca 2006 r. до cudzoziemców, які мають zezwolenie na pobyt czasowy з Art. 160 pkt 4–6 і перестали перебувати на території Польщі разом із obywatelem Zjednoczonego Królestwa.",
          sourceLocator: "Art. 308b",
        },
      ],
      summary:
        "Стаття охоплює cudzoziemców із дозволом Art. 160 pkt 4–6 після припинення спільного перебування на території Польщі з obywatelem Zjednoczonego Królestwa.",
      rules: [
        {
          locator: "Art. 308b",
          explanation:
            "Текст Art. 308b прив’язує режим до виду zezwolenie, спільного перебування на території Польщі з obywatelem Zjednoczonego Królestwa та факту його припинення; перевіряйте кожну з цих обставин.",
        },
      ],
      legalEffect:
        "Стаття визначає відсилання до спеціального режиму, але не замінює перевірку всіх умов закону 2006 року.",
      foreignersCase:
        "Перевірте підставу вашого zezwolenie за Art. 160 pkt 4–6, статус громадянина Zjednoczonego Królestwa та дату, коли ви перестали перебувати з ним на території Польщі; не замінюйте ці умови самим сімейним або трудовим документом.",
    },
  ]),
})
