import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-49a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Підтвердженням doręczenia електронного pismo до sąd є dowód otrzymania за art. 41 ustawy o doręczeniach elektronicznych.",
          sourceLocator: "Art. 49a",
        },
      ],
      summary:
        "Електронне відправлення до sąd підтверджується відповідним dowód otrzymania.",
      rules: [
        {
          locator: "Art. 49a",
          explanation:
            "Для електронного pismo зберігайте dowód otrzymania, пов’язаний із поданням до sąd.",
        },
      ],
      legalEffect:
        "Норма визначає доказ doręczenia електронного pismo; питання своєчасності й інших вимог регулюють також інші приписи.",
      foreignersCase:
        "При електронній skarga у справі cudzoziemca збережіть dowód otrzymania разом із pismo та зафіксуйте його дату.",
    },
  ]),
})
