import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-97",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 97 замінює art. 26 ustawy o delegowaniu pracowników: її правила відповідно застосовуються до працівника, якого направляє роботодавець із держави поза ЄС, з застереженням art. 41 pkt 2–3 нової ustawa.",
          sourceLocator: "Art. 97; art. 26 ustawy o delegowaniu",
        },
      ],
      summary:
        "Для delegowanie з państwo niebędące państwem członkowskim діє відповідне застосування ustawa про delegowanie, але з винятками, відсилаючими до art. 41 pkt 2–3 ustawy про powierzanie pracy.",
      rules: [
        {
          locator: "Art. 97; art. 26 ustawy o delegowaniu",
          explanation:
            "Механізм застосовується до працівника, якого направив роботодавець із non-EU держави; конкретні застереження потрібно перевіряти у art. 41 pkt 2–3 нової ustawa.",
        },
      ],
      legalEffect:
        "Норма узгоджує два акти і не вирішує сама, чи конкретна модель є delegowanie, чи іншим видом повірення роботи.",
      foreignersCase:
        "Спочатку встановіть роботодавця, державу його siedziba та фактичну модель направлення. Потім зіставте умови з art. 26 і застереженнями art. 41, не покладаючись лише на назву договору.",
    },
  ]),
})
