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
      provisionId: "ustawa-o-cudzoziemcach-art-203b",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("203b", "Art. 203b")} вимагає від заявника на pobyt stały відбитки пальців і зразок підпису, але встановлює окремі винятки для віку, фізичної неможливості, хвороби та інвалідності.`,
          sourceLocator: "Art. 203b ust. 1–4",
        },
      ],
      summary:
        "Відбитки та підпис — два різні елементи. Виняток щодо одного з них не означає автоматичного звільнення від другого.",
      rules: [
        {
          locator: "Art. 203b ust. 2",
          explanation:
            "Odcisków linii papilarnych не беруть у дитини до 6 років, при фізичній неможливості або коли особиста явка неможлива через підтверджену хворобу чи інвалідність. Для медичного винятку потрібна довідка належного лікаря-спеціаліста, видана не раніше ніж за 3 місяці до подання wniosku.",
        },
        {
          locator: "Art. 203b ust. 3–4",
          explanation:
            "Wzoru podpisu не беруть до 13 років або за підтвердженої медичної неможливості самостійно підписатися. В інших випадках підпис подають на встановленій формі або через пристрій wojewody.",
        },
      ],
      legalEffect:
        "Правильно встановлений виняток усуває лише відповідну біометричну дію; він не замінює доказів матеріальних умов pobytu stałego.",
      foreignersCase:
        "Фіксуйте вік на день подання та окремо аналізуйте можливість надати відбитки й підпис. Медична довідка має пояснювати саме ту неможливість, на яку посилається заявник.",
    },
  ],
})
