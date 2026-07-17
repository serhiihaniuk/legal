import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-298",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 298 визначає, що notatka służbowa про контроль із висновком про відповідність містить дату й місце, час початку та завершення, дані cudzoziemca і місце його pobytu, результат, підпис funkcjonariusza або pracownika та, якщо був tłumacz, його ім’я і прізвище.",
          sourceLocator: "Art. 298 pkt 1–7",
        },
      ],
      summary:
        "Стаття встановлює мінімальний зміст службової записки, коли pobyt визнано відповідним правилам.",
      rules: [
        {
          locator: "pkt 1–5",
          explanation:
            "Записка фіксує час і місце, дані cudzoziemca, місце перебування та результат контролю.",
        },
        {
          locator: "pkt 6–7",
          explanation:
            "Потрібні підпис контролюючого та дані tłumacza, якщо він брав участь.",
        },
      ],
      legalEffect:
        "Notatka dokumentує позитивний результат контролю за Art. 296 ust. 1 pkt 2; її зміст треба відрізняти від protokół при встановленій невідповідності.",
      foreignersCase:
        "Перевірте, чи notatka містить правильні дані, час, місце й результат; не плутайте її з рішенням про право перебування.",
    },
  ]),
})
