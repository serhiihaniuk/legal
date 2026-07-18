import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-408",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Функціонування strzeżony ośrodek та areszt dla cudzoziemców фінансується з державного бюджету, з частини, якою розпоряджається minister właściwy do spraw wewnętrznych, із коштів Komendant Główny Straży Granicznej.",
          sourceLocator: "Art. 408",
        },
        {
          kind: "practical-inference",
          text: "Це правило фінансування установ; воно саме по собі не визначає право конкретного іноземця на świadczenia, zwolnienie або odszkodowanie.",
          sourceLocator: "Art. 408",
        },
      ],
      summary:
        "Стаття визначає джерело фінансування функціонування strzeżony ośrodek та areszt dla cudzoziemców.",
      rules: [
        {
          locator: "Art. 408",
          explanation:
            "Витрати на роботу установ покриваються з державного бюджету в межах частини міністра внутрішніх справ і коштів Komendant Główny Straży Granicznej.",
        },
      ],
      legalEffect:
        "Норма встановлює бюджетну відповідальність за функціонування місць утримання. Вона не замінює індивідуальні правила про допомогу, звільнення чи компенсацію.",
      foreignersCase:
        "Не використовуйте art. 408 як єдину підставу для вимоги особистої виплати. Для конкретної потреби перевірте art. 400a–400d, art. 406 або art. 407.",
    },
  ]),
})
