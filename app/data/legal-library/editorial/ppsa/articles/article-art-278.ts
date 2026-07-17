import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-278",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 278 забороняє вимагати wznowienie після спливу п’яти років від uprawomocnienie orzeczenie, крім випадку, коли сторона була pozbawiona możność działania або не була należycie reprezentowana.",
          sourceLocator: "Art. 278",
        },
      ],
      summary:
        "Стаття встановлює п’ятирічну межу для żądanie wznowienia та вузький виняток для позбавлення можливості діяти або неналежного представництва.",
      rules: [
        {
          locator: "Art. 278",
          explanation:
            "Відраховуйте п’ять років від uprawomocnienie саме оскарженого orzeczenie; виняток треба пов’язати з фактичним pozbawienie możność działania або brak należytej reprezentacji.",
        },
      ],
      legalEffect:
        "Після цієї межі skarga зазвичай недопустима, але виняток не скасовує обов’язку довести конкретні обставини та дотримати інші правила.",
      foreignersCase:
        "У старій справі іноземця перевірте дату uprawomocnienie і документи про представництво та можливість участі. Сам факт пізнього виявлення документа не є названим Art. 278 винятком.",
    },
  ]),
})
