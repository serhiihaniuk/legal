import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-314",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 314 зобов’язує орган у випадках Art. 302 ust. 1 pkt 1–8 і 10–16 письмово, зрозумілою для cudzoziemca мовою, pouczyć особу з дозволом на pobyt іншої держави, що застосовує dyrektywę 2008/115/WE, про обов’язок негайно виїхати до цієї держави; факт pouczenie вноситься до реєстру.",
          sourceLocator: "Art. 314 ust. 1–3",
        },
      ],
      summary:
        "Стаття передбачає письмове зрозуміле повідомлення про негайний виїзд до іншої держави, яка видала дозвіл на pobyt.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Pouczenie застосовується в перелічених підставах Art. 302 до особи з дозволом іншої держави, що підпадає під dyrektywę 2008/115/WE.",
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Орган реєструє факт pouczenie, а текст має бути письмовим і мовою, зрозумілою cudzoziemcowi.",
        },
      ],
      legalEffect:
        "Стаття визначає обов’язок повідомити про напрям виїзду та спосіб повідомлення; сама не підтверджує, що інша держава зобов’язана прийняти особу.",
      foreignersCase:
        "Попросіть письмовий текст зрозумілою мовою, перевірте державу, до якої вимагають виїхати, і збережіть його разом із доказами чинності іншого дозволу.",
    },
  ]),
})
