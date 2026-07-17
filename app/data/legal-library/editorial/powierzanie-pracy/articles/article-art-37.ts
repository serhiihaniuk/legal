import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const workLaw = createLegalTextAuthor("powierzanie-pracy")
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "powierzanie-pracy-art-37",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("37", "Art. 37")} вимагає зазначати у zezwolenie на роботу у зв'язку з określona funkcja дані polski podmiot за ${workLaw.external("art. 9¹", "https://eli.gov.pl/eli/DU/2025/277/ogl")} ust. 1 pkt 1 lit. a–c, дані cudzoziemiec за ${workLaw.external("art. 9¹", "https://eli.gov.pl/eli/DU/2025/277/ogl")} ust. 1 pkt 3, саму функцію та okres ważności дозволу.`,
          sourceLocator: "Art. 37 pkt 1–4",
        },
      ],
      summary:
        "Функціональний дозвіл має чітко називати podmiot, cudzoziemiec, функцію та строк. Це дає змогу перевірити, чи відповідає фактична корпоративна роль змісту рішення.",
      rules: [
        {
          locator: "pkt 1–2",
          explanation:
            "Зіставте ідентифікаційні дані polski podmiot та cudzoziemiec із wniosek і документами.",
        },
        {
          locator: "pkt 3–4",
          explanation:
            "У рішенні повинні бути названі конкретна funkcja та okres ważności; діяльність поза цими межами потребує окремої оцінки.",
        },
      ],
      legalEffect: workLaw.text`${workLaw.article("37", "Art. 37")} окреслює зміст uprawnienie do pracy за функцією, але не є документом legalnego pobytu і не розширює його строк.`,
      foreignersCase:
        "Порівняйте funkcja у zezwolenie з фактичними повноваженнями та записами spółka. Окремо перевірте строк рішення і чинну підставу legalnego pobytu.",
    },
  ],
})
