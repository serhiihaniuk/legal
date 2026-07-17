import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-266",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 266 вимагає для uchwała повного складу NSA або повного складу Izba присутності щонайменше двох третин sędziowie кожної Izba. Uchwały приймаються у jawne głosowanie звичайною більшістю голосів.",
          sourceLocator: "Art. 266 § 1–2",
        },
      ],
      summary:
        "Стаття встановлює кворум для повного складу NSA або Izba та спосіб голосування за uchwała.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Перевірте наявність щонайменше двох третин sędziowie кожної Izba — це умова для uchwała повного складу, названого статтею.",
        },
        {
          locator: "§ 2",
          explanation:
            "Голосування є jawne, а рішення приймається звичайною більшістю голосів; не підмінюйте цю процедурну вимогу припущенням про одностайність.",
        },
      ],
      legalEffect:
        "Art. 266 визначає умови легітимного ухвалення uchwała у повному складі, але не описує зміст правового вирішення конкретного питання.",
      foreignersCase:
        "У навчальному аналізі справи іноземця перевірте, який склад NSA прийняв процитовану uchwała та чи йдеться саме про повний склад або Izba. Кворум і спосіб голосування не є самостійним рішенням щодо права на pobyt.",
    },
  ]),
})
