import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-393e",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Якщо під час pobyt у Польщі іноземець має чинний dokument pobytowy або чинну wizę długoterminową іншої держави Schengen, а його дані інша держава внесла до SIS для цілей art. 3 ust. 1 rozporządzenie 2018/1860, komendant oddziału або placówki через Komendant Główny Policji інформує державу, яка внесла дані.",
          sourceLocator: "Art. 393e",
        },
        {
          kind: "practical-inference",
          text: "Чинний документ іншої держави є окремою фактичною обставиною для повідомлення; сама стаття не анулює цей документ і не визначає автоматичний результат для pobyt у Польщі.",
          sourceLocator: "Art. 393e",
        },
      ],
      summary:
        "Стаття встановлює повідомлення держави, яка внесла SIS-дані, коли іноземець у Польщі має чинний документ pobytowy або довгострокову візу іншої держави Schengen.",
      rules: [
        {
          locator: "Art. 393e",
          explanation:
            "Потрібно встановити одночасно чинність документа або візи, SIS-запис іншої держави та факт pobyt у Польщі.",
        },
      ],
      legalEffect:
        "Норма забезпечує повідомлення між державами з урахуванням документа іншої держави Schengen. Подальші заходи залежать від компетентних органів і змісту запису.",
      foreignersCase:
        "Збережіть копію чинного dokument pobytowy або wiza długoterminowa, перевірте państwo, яке внесло alert, і вимагайте відокремити повідомлення від будь-якого рішення щодо вашого pobyt.",
    },
  ]),
})
