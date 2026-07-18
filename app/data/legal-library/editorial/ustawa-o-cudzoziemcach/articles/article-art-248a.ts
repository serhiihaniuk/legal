import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

const EES_2017_2226_URL = "https://eur-lex.europa.eu/eli/reg/2017/2226/oj"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-248a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Орган, який видав або обміняв наступну kartę pobytu, протягом 5 робочих днів після видачі чи обміну видаляє дані іноземця, зареєстровані в EES, відповідно до ${foreignersLaw.external("Art. 35", EES_2017_2226_URL)} ust. 6 rozporządzenia nr 2017/2226.`,
          sourceLocator: "Art. 248a",
        },
      ],
      summary:
        "Стаття встановлює обов’язок органу оновити дані в EES після видачі або обміну наступної karty pobytu.",
      rules: [
        {
          locator: "zdanie 1",
          explanation:
            "П’ятиденний строк є строком для органу й рахується в робочих днях від видачі або обміну kolejnej karty pobytu.",
        },
      ],
      legalEffect:
        "Це правило про адміністративне видалення даних з EES; воно не є окремим рішенням про легальність pobytu.",
      foreignersCase:
        "Якщо під час перевірки виникла невідповідність даних EES після отримання нової картки, зберігайте підтвердження її видачі та зверніться до органу, який картку видав або обміняв.",
    },
  ],
})
