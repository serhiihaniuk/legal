import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-291",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 291 встановлює, що контроль legalności pobytu зазвичай проводять щонайменше двоє funkcjonariuszy Straży Granicznej, Policji або Służby Celno-Skarbowej чи щонайменше двоє upoważnionych pracowników Urzędu або urzędu wojewódzkiego; спільний контроль також проводять щонайменше дві особи, але в siedzibie Urzędu або urzędu wojewódzkiego може діяти один pracownik, а один funkcjonariusz — коли обставини виявлено під час інших службових дій.",
          sourceLocator: "Art. 291 ust. 1–4",
        },
      ],
      summary:
        "Стаття визначає мінімальний склад осіб для kontroli legalności pobytu та два прямо названі винятки.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "Звичайний контроль проводять щонайменше двоє названих funkcjonariuszy або щонайменше двоє upoważnionych pracowników; спільний контроль — щонайменше дві особи.",
        },
        {
          locator: "ust. 3–4",
          explanation:
            "Один pracownik може діяти в приміщенні Urzędu або urzędu wojewódzkiego; один funkcjonariusz — якщо підстава для контролю виявлена під час інших службових дій.",
        },
      ],
      legalEffect:
        "Стаття встановлює організаційні правила проведення контролю, але сама не визначає його результату.",
      foreignersCase:
        "Зафіксуйте, хто саме проводить контроль і де він відбувається; для одного працівника або funkcjonariusza перевірте, чи відповідає ситуація Art. 291 ust. 3–4.",
    },
  ]),
})
