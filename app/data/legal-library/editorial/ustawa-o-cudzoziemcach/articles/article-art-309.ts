import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-309",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 309 зобов’язує organ, який видає decyzja o zobowiązaniu cudzoziemca do powrotu після cofnięcia zezwolenia na pobyt rezydenta długoterminowego UE особі з ochroną międzynarodową в іншій державі ЄС, через Szef Urzędu встановити, чи особа й надалі має там міжнародний захист.",
          sourceLocator: "Art. 309",
        },
      ],
      summary:
        "Перед рішенням про повернення у визначеній ситуації орган повинен перевірити збереження міжнародного захисту в іншій державі ЄС.",
      rules: [
        {
          locator: "Art. 309",
          explanation:
            "Перевірка проходить за посередництвом Szef Urzędu і стосується саме того, чи захист досі існує в іншій державі.",
        },
      ],
      legalEffect:
        "Норма встановлює обов’язок з’ясувати релевантний статус перед рішенням; вона сама не визначає результат перевірки або державу повернення.",
      foreignersCase:
        "Повідомте орган про документи щодо вашого статусу в іншій державі ЄС і перевірте, чи запит щодо актуальності ochrony фактично направлено.",
    },
  ]),
})
