import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

const VISA_CODE_URL = "https://eur-lex.europa.eu/eli/reg/2009/810/oj"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-79",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("79", "Art. 79")} ust. 1–2 регулює unieważnienie помилкової naklejka wizowa wizy krajowa до або після її розміщення та заміну новою; ust. 3 передбачає нову наклейку у заміненому dokument podróży через wojewoda, ust. 4 — виправлення wiza Schengen комендантом кордону, а ust. 5–6 — спеціальні дії konsul.`,
          sourceLocator: "Art. 79 ust. 1–6",
        },
        {
          kind: "practical-inference",
          text: "Заміна помилкової наклейки виправляє документальну помилку і не є новим рішенням про продовження візи або зміну її cel.",
          sourceLocator: "Art. 79 ust. 1–4",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("79", "Art. 79")} встановлює порядок виправлення помилки у візовій наклейці: її скасовують і наносять нову, а при заміні паспорта нову наклейку wiza krajowa розміщує właściwy wojewoda на заяву cudzoziemiec.`,
      rules: [
        {
          locator: "Art. 79 ust. 1–2",
          explanation:
            "Помилку до розміщення виправляють через unieważnienie naklejka; після розміщення MFA, konsul або komendant placówki Straży Granicznej unieważnia стару і розміщує нову.",
        },
        {
          locator: "Art. 79 ust. 3–4",
          explanation:
            "При заміні документа подорожі wojewoda за місцем pobyt, на wniosek, ставить нову наклейку wiza krajowa; помилку wiza Schengen на кордоні виправляє komendant placówki Straży Granicznej.",
        },
        {
          locator: "Art. 79 ust. 5–6",
          explanation: foreignersLaw.text`Для віз MFA діє спеціальна компетенція konsul ${foreignersLaw.article("66", "Art. 66")} ust. 1b, а дії за ${foreignersLaw.external("Art. 28 kodeksu wizowego", VISA_CODE_URL)} у випадку ${foreignersLaw.article("66", "Art. 66")} ust. 1a виконує цей konsul.`,
        },
      ],
      legalEffect:
        "Норма забезпечує правильний носій і реквізити вже виданої візи. Вона не продовжує okres ważności, не змінює кількість в’їздів і не легалізує іншу діяльність.",
      foreignersCase:
        "Порівняйте помилкову і нову naklejka, паспорт до та після заміни, wniosek до wojewoda і дати; зафіксуйте, що виправлено саме помилку, а не cel або строк візи.",
    },
  ],
})
