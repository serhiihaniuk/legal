import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const workLaw = createLegalTextAuthor("powierzanie-pracy")
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "powierzanie-pracy-art-37",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("37", "Art. 37")} вимагає зазначати в дозволі на роботу у зв’язку з визначеною корпоративною функцією дані польського суб’єкта за частиною 1 пунктом 1 літерами a–c ${workLaw.external("ст. 9¹", "https://eli.gov.pl/eli/DU/2025/277/ogl")}, дані іноземця за пунктом 3 тієї самої норми, конкретну функцію та строк чинності дозволу.`,
          sourceLocator: "Art. 37 pkt 1–4",
        },
      ],
      summary:
        "Дозвіл на роботу у зв’язку з визначеною функцією («określona funkcja») має чітко називати суб’єкта, іноземця, функцію та строк. Це дає змогу перевірити, чи відповідає фактична корпоративна роль змісту рішення.",
      rules: [
        {
          locator: "pkt 1–2",
          explanation:
            "Зіставте ідентифікаційні дані польського суб’єкта та іноземця із заявою і підтвердними документами.",
        },
        {
          locator: "pkt 3–4",
          explanation:
            "У рішенні повинні бути названі конкретна функція та строк чинності. Діяльність поза цими межами потребує окремої оцінки.",
        },
      ],
      legalEffect: workLaw.text`${workLaw.article("37", "Ст. 37")} окреслює зміст права на роботу за визначеною функцією, але не є документом про законне перебування і не розширює його строку.`,
      foreignersCase:
        "Порівняйте функцію в дозволі з фактичними повноваженнями та записами товариства. Окремо перевірте строк рішення і чинну підставу законного перебування.",
    },
  ],
})
