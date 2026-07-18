import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-74",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Якщо адресат відмовляється прийняти pismo, його повертають sąd із відміткою про відмову та її дату; pismo вважається doręczone в день відмови.",
          sourceLocator: "Art. 74 § 1–2",
        },
      ],
      summary:
        "Відмова від прийняття pismo не обов’язково зупиняє вручення: закон прив’язує skuteczność до дня відмови.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "У доказі має бути зазначена відмова та дата, а pismo долучається до akt.",
        },
        {
          locator: "§ 2",
          explanation: "День відмови вважається днем doręczenie.",
        },
      ],
      legalEffect:
        "Відмова може запустити процесуальний строк; спір про належність вручення потребує перевірки запису doręczyciel.",
      foreignersCase:
        "Не радьте cudzoziemiec відмовлятися від судового pismo у справі pobyt: зафіксована відмова може мати ефект для строку.",
    },
  ]),
})
