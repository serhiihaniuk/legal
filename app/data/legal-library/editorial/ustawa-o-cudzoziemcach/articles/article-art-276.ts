import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-276",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "У документі «zgoda na pobyt tolerowany» зазначаються імена та прізвище і батьки, дані народження, адреса meldunku, obywatelstwo, стать, зріст, колір очей, PESEL за наявності, орган, дати, фотографія, obraz linii papilarnych та pouczenie, що документ не підтверджує obywatelstwo і не дає права перетинати кордон.",
          sourceLocator: "Art. 276 ust. 1 pkt 1–14",
        },
        {
          kind: "statute-text",
          text: "Документ містить підпис posiadacza і може містити закодований запис даних з ust. 1 pkt 1, 3, 5, 6 або 11; адреса не вміщується, якщо cudzoziemiec не zameldował się у місці pobyt czasowy понад 2 місяці.",
          sourceLocator: "Art. 276 ust. 2–3",
        },
      ],
      summary:
        "Стаття описує реквізити документа tolerowany та прямо фіксує межі його доказового значення.",
      rules: [
        {
          locator: "ust. 1 pkt 1–13",
          explanation:
            "Під час odbioru перевірте персональні дані, орган, строки, фото та відбитки пальців.",
        },
        {
          locator: "ust. 1 pkt 14",
          explanation:
            "Попередження в документі підтверджує: він не доводить громадянство й не дає права на перетин кордону.",
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Відсутність адреси може пояснюватися відсутністю потрібного meldunku.",
        },
      ],
      legalEffect: foreignersLaw.text`Реквізити дозволяють ідентифікувати власника та строк документа, але не розширюють права, прямо обмежені ${foreignersLaw.article("274", "Art. 274")}.`,
      foreignersCase:
        "Звірте документ із рішенням про згоду, особливо ім’я, фото, строк і відбитки. Для поїздки не покладайтеся на цей документ як на паспорт.",
    },
  ],
})
