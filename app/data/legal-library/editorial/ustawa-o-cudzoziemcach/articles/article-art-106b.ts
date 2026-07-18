import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-106b",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("106b", "Art. 106b")} вимагає odcisków linii papilarnych і wzoru podpisu від заявника на pobyt czasowy, але встановлює окремі винятки для віку, фізичної неможливості, хвороби та інвалідності.`,
          sourceLocator: "Art. 106b ust. 1–4",
        },
      ],
      summary:
        "Відбитки та підпис перевіряють окремо. Особа може бути звільнена від однієї дії, але все ще бути зобов’язаною виконати іншу.",
      rules: [
        {
          locator: "Art. 106b ust. 2",
          explanation:
            "Відбитків не беруть до 6 років, при фізичній неможливості або коли особа не може прибути через підтверджену хворобу чи інвалідність. Медичну підставу підтверджує довідка належного лікаря-спеціаліста, видана не раніше ніж за 3 місяці до подання wniosku.",
        },
        {
          locator: "Art. 106b ust. 3–4",
          explanation:
            "Зразка підпису не беруть до 13 років або за підтвердженої медичної неможливості самостійно підписатися. В інших випадках підпис подають на встановленій формі або через пристрій wojewody.",
        },
      ],
      legalEffect: foreignersLaw.text`Доведений виняток виключає лише відповідну біометричну вимогу й захищає від пов’язаного з нею umorzenia за ${foreignersLaw.article("106i", "Art. 106i")}.`,
      foreignersCase:
        "Встановіть вік на день подання, а медичні та фізичні перешкоди аналізуйте окремо для відбитків і підпису. Не використовуйте одну загальну довідку без пояснення конкретної неможливості.",
    },
  ],
})
