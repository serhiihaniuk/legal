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
      provisionId: "ustawa-o-cudzoziemcach-art-104",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("104", "Art. 104")} розподіляє właściwość wojewody: загалом за місцем pobytu іноземця, для дозволів з ${foreignersLaw.article("139a", "Art. 139a")} і ${foreignersLaw.article("139o", "Art. 139o")} — за siedzibą jednostki przyjmującej, а для названих сімейних дозволів особі за межами Польщі — за місцем pobytu członka rodziny rozdzielonej.`,
          sourceLocator: "Art. 104 ust. 1–3",
        },
      ],
      summary:
        "Компетентний organ залежить не лише від виду дозволу, а інколи й від того, хто фактично подає заяву та де перебуває іноземець.",
      rules: [
        {
          locator: "Art. 104 ust. 1",
          explanation:
            "Для звичайної справи про pobyt czasowy рішення про надання або відмову приймає wojewoda за місцем pobytu іноземця.",
        },
        {
          locator: "Art. 104 ust. 1a–1b",
          explanation: foreignersLaw.text`Для ICT і mobilności długoterminowej ICT właściwość визначає siedziba jednostki przyjmującej. Для сімейних заяв з ${foreignersLaw.article("159", "Art. 159")} ust. 1 або названих пунктів ${foreignersLaw.article("160", "Art. 160")} щодо іноземця за кордоном — місце pobytu członka rodziny rozdzielonej.`,
        },
        {
          locator: "Art. 104 ust. 2–3",
          explanation:
            "Cofnięcie загалом здійснює wojewoda, який надав дозвіл; якщо Szef Urzędu надав його у другій інстанції, справу про cofnięcie веде wojewoda першої інстанції.",
        },
      ],
      legalEffect: foreignersLaw.text`${foreignersLaw.article("104", "Art. 104")} визначає належний орган і форму decyzji, але не доводить матеріальних умов дозволу й не створює права на роботу.`,
      foreignersCase:
        "Перед поданням встановіть точний вид дозволу, фактичне місце pobytu іноземця, siedzibę jednostki przyjmującej або місце pobytu члена сім’ї — залежно від маршруту. Потім окремо перевірте матеріальні умови.",
    },
  ],
})
