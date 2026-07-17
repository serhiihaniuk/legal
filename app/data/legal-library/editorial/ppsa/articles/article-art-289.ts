import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-289",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 289 встановлює, що sąd wszczyna postępowanie щодо odtworzenie akt z urzędu або на wniosek strony; якщо zaginięcie чи zniszczenie akt сталося внаслідок siły wyższej, суд розпочинає його лише на wniosek strony.",
          sourceLocator: "Art. 289 § 1–2",
        },
      ],
      summary:
        "Спосіб початку провадження про відновлення залежить від того, чи пов’язана втрата або знищення akt із siła wyższa.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "За загальним правилом постępowanie може початися z urzędu або на wniosek strony.",
        },
        {
          locator: "§ 2",
          explanation:
            "За siła wyższa потрібен wniosek strony; не підміняйте це питання простим припущенням про причину втрати.",
        },
      ],
      legalEffect:
        "Стаття визначає спосіб wszczęcie, але не доводить, що відновлення буде успішним або що всі akta можна відтворити.",
      foreignersCase:
        "У справі іноземця перевірте документовану причину зникнення akt і те, чи потрібно подавати wniosek, особливо коли посилаються на siła wyższa.",
    },
  ]),
})
