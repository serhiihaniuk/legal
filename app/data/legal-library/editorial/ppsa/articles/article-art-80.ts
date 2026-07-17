import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-80",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Правила про doręczenie стороні з невідомим місцем перебування та ustanowienie kurator застосовуються також до jednostka organizacyjna без органів або з органами, чия siedziba невідома.",
          sourceLocator: "Art. 80",
        },
      ],
      summary:
        "Механізм kurator поширюється не лише на фізичну особу, а й на організаційну одиницю без відомого керівництва або siedziba.",
      rules: [
        {
          locator: "Art. 80",
          explanation:
            "Перевірте, чи одиниця не має organ або чи невідома його siedziba; тоді застосовуються art. 78–79.",
        },
      ],
      legalEffect:
        "Стаття розширює процесуальний захист для організаційної сторони, але не встановлює окремої процедури поза art. 78–79.",
      foreignersCase:
        "Якщо стороною спору є юридична особа, пов’язана з працевлаштуванням cudzoziemiec, перевірте її органи й siedziba перед висновком про doręczenie kurator.",
    },
  ]),
})
