import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-369",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Якщо виконати decyzję o zobowiązaniu cudzoziemca do powrotu з іншої держави-члена Європейського Союзу прямим авіарейсом до państwa przeznaczenia неможливо, Komendant Główny Straży Granicznej на запит центрального органу цієї держави надає дозвіл на повітряний tranzyt через польський аеропорт.",
          sourceLocator: "Art. 369",
        },
        {
          kind: "practical-inference",
          text: "Це спеціальний канал між державами для виконання вже виданої decyzja про повернення, а не самостійна підстава для в’їзду чи pobyt у Польщі.",
          sourceLocator: "Art. 369",
        },
      ],
      summary:
        "Стаття регулює дозвіл на повітряний tranzyt через польський аеропорт, коли інша держава-член ЄС не може виконати свою decyzja o zobowiązaniu cudzoziemca do powrotu прямим рейсом.",
      rules: [
        {
          locator: "Art. 369",
          explanation:
            "Потрібні рішення про повернення іншої держави-члена, неможливість прямого сполучення та wniosek її центрального органу. Дозвіл надає Komendant Główny Straży Granicznej.",
        },
      ],
      legalEffect:
        "Норма створює правову основу для міждержавного транзиту через польський аеропорт. Вона не змінює зміст рішення про повернення і не легалізує звичайний pobyt.",
      foreignersCase:
        "У конкретній справі перевірте, яка держава видала рішення, хто подав wniosek, чому неможливий прямий рейс і чи йдеться саме про tranzyt, а не про дозвіл залишитися в Польщі.",
    },
  ]),
})
