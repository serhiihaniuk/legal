import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-21",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 21 встановлює: «Sędzia powinien zawiadomić sąd o zachodzącej podstawie swojego wyłączenia i wstrzymać się od udziału w sprawie».",
          sourceLocator: "Art. 21",
        },
      ],
      summary:
        "Суддя має повідомити суд про наявну підставу власного wyłączenia і утриматися від участі у справі.",
      rules: [
        {
          locator: "Art. 21",
          explanation:
            "Обов’язок складається з двох дій: zawiadomić sąd про підставу та wstrzymać się від участі в справі.",
        },
      ],
      legalEffect:
        "Стаття покладає процесуальний обов’язок на суддю, але не визначає сама процедуру остаточного вирішення питання про wyłączenie.",
      foreignersCase:
        "Якщо з матеріалів справи про pobyt видно можливу підставу wyłączenia, зафіксуйте її окремо; не замінюйте передбачене статтею повідомлення припущенням про упередженість.",
    },
  ]),
})
