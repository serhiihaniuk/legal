import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-267",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 267 дозволяє Naczelny Sąd Administracyjny у формі postanowienie відмовити у прийнятті uchwała, зокрема коли немає потреби пояснювати сумніви.",
          sourceLocator: "Art. 267",
        },
      ],
      summary:
        "NSA може не прийняти uchwała, якщо, зокрема, не бачить потреби в поясненні правових сумнівів.",
      rules: [
        {
          locator: "Art. 267",
          explanation:
            "Читайте postanowienie NSA про відмову та його конкретну підставу; слово «зокрема» показує, що відсутність потреби пояснювати сумніви є прикладом, а не єдиною названою ситуацією.",
        },
      ],
      legalEffect:
        "Відмова за Art. 267 означає, що uchwała не прийнята в цьому процесуальному маршруті; вона не є відповіддю NSA по суті кожного спору про pobyt.",
      foreignersCase:
        "Якщо учасник справи іноземця посилається на wniosek про uchwała, перевірте, чи NSA його прийняв, чи видав postanowienie про відмову. Сам факт подання wniosek не створює для органу або суду нового рішення щодо pobyt.",
    },
  ]),
})
