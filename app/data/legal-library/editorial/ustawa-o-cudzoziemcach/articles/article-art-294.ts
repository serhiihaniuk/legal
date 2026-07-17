import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-294",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 294 ust. 1 зобов’язує cudzoziemca під час контролю пред’явити документи з Art. 293 pkt 1, 4 і 5 та кошти або документ про можливість законно отримати такі кошти з Art. 293 pkt 2–3, якщо вони вимагаються; ust. 2 робить виняток для особи, яка прибула для połączenia z rodziną до особи зі статусом біженця.",
          sourceLocator: "Art. 294 ust. 1–2",
        },
      ],
      summary:
        "Стаття визначає, що саме особа під час контролю повинна показати, і встановлює спеціальний виняток для певного połączenia z rodziną.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Потрібно пред’явити базові документи, документи щодо роботи або діяльності, підтвердження мети й умов pobytu та фінансові докази, якщо вони потрібні.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Виняток стосується cudzoziemca, який прибув для połączenia z rodziną до особи, що отримала status uchodźcy.",
        },
      ],
      legalEffect:
        "Норма конкретизує обов’язок пред’явлення під час контролю, але застосування слів «jeżeli są wymagane» залежить від конкретного режиму pobytu.",
      foreignersCase:
        "Зіставте запит із Art. 293 pkt 1, 2–5 та перевірте, чи існує для вашого випадку вимога щодо коштів; якщо посилаєтеся на виняток, підтвердьте мету поїздки і статус особи, до якої приєднуєтеся.",
    },
  ]),
})
