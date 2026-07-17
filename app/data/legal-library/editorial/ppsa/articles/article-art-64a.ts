import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-64a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "На decyzja з art. 138 § 2 KPA skarga не подається; незадоволена strona може подати від неї sprzeciw od decyzji.",
          sourceLocator: "Art. 64a",
        },
      ],
      summary:
        "Для конкретної decyzja за art. 138 § 2 KPA засобом є sprzeciw, а не звичайна skarga.",
      rules: [
        {
          locator: "Art. 64a",
          explanation:
            "Спочатку встановіть, чи decyzja справді видана на підставі art. 138 § 2 KPA.",
        },
        {
          locator: "Art. 64a",
          explanation:
            "За умовою статті незгода реалізується через sprzeciw od decyzji, а не через skarga.",
        },
      ],
      legalEffect:
        "Норма змінює процесуальний засіб для вузької категорії decyzja; неправильна назва документа може мати наслідки.",
      foreignersCase:
        "У справі про pobyt перевірте підставу decyzja та pouczenie, перш ніж обирати sprzeciw або skarga.",
    },
  ]),
})
