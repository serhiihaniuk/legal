import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

const SIS_2018_1860_URL = "https://eur-lex.europa.eu/eli/reg/2018/1860/oj"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-222f",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Якщо дані іноземця внесені до SIS для цілей ${foreignersLaw.external("art. 3 ust. 1 rozporządzenia 2018/1860", SIS_2018_1860_URL)} у зв’язку з рішенням із zakazem ponownego wjazdu, wojewoda або Szef Urzędu через Komendanta Głównego Policji запитує консультацію держави, яка внесла дані, і повідомляє її про рішення у справі дозволу.`,
          sourceLocator: "Art. 222f pkt 1–2",
        },
        {
          kind: "statute-text",
          text: "Якщо рішення, на підставі якого внесено дані до SIS, не супроводжується zakazem ponownego wjazdu, відповідний орган повідомляє державу про намір надати або про вже наданий дозвіл.",
          sourceLocator: "Art. 222f pkt 3",
        },
      ],
      summary:
        "Стаття визначає дії польського органу щодо іншої держави Schengen, коли в SIS є запис про повернення іноземця.",
      rules: [
        {
          locator: "pkt 1–2",
          explanation:
            "За наявності zakazu ponownego wjazdu потрібні і консультація, і подальша інформація про рішення у справі польського дозволу.",
        },
        {
          locator: "pkt 3",
          explanation:
            "Без zakazu ponownego wjazdu закон передбачає інформаційний режим: повідомлення про намір надати дозвіл або про його надання.",
        },
      ],
      legalEffect:
        "Запис SIS запускає координацію через Komendanta Głównego Policji; вид дії залежить від того, чи супроводжується рішення забороною повторного в’їзду.",
      foreignersCase:
        "Встановіть правову мету запису SIS та наявність zakazu ponownego wjazdu. Сам факт запису не пояснює, який із трьох обов’язків органу застосовується.",
    },
  ],
})
