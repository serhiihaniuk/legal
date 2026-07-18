import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-97",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 97 є виконаною нормою про зміну art. 26 закону «ustawa o delegowaniu pracowników w ramach świadczenia usług». Його правила відповідно застосовуються до працівника, якого направляє до Польщі роботодавець із держави, що не є членом ЄС, із застереженням art. 41 pkt 2–3 закону від 20 березня 2025 року.",
          sourceLocator: "Art. 97; art. 26 ustawy o delegowaniu",
        },
      ],
      summary:
        "До направлення працівника роботодавцем із держави, що не є членом ЄС, відповідно застосовують закон про відрядження працівників у межах надання послуг. Водночас треба врахувати застереження з art. 41 pkt 2–3 закону про доручення роботи іноземцям.",
      rules: [
        {
          locator: "Art. 97; art. 26 ustawy o delegowaniu",
          explanation:
            "Механізм застосовується до працівника, якого направив роботодавець із держави поза ЄС. Конкретні застереження треба перевіряти в art. 41 pkt 2–3 закону від 20 березня 2025 року.",
        },
      ],
      legalEffect:
        "Норма узгоджує два закони і сама не вирішує, чи конкретна модель є відрядженням (delegowanie), чи іншим способом доручення роботи.",
      foreignersCase:
        "Спочатку встановіть роботодавця, державу його місцезнаходження та фактичну модель направлення. Потім зіставте умови з art. 26 і застереженнями art. 41, не покладаючись лише на назву договору.",
    },
  ]),
})
