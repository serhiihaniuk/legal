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
      provisionId: "ustawa-o-cudzoziemcach-art-437",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Точний текст ${foreignersLaw.article("437", "Art. 437")} ust. 1: «Obowiązywanie wpisu do wykazu zawiesza się, jeżeli» настає одна з обставин, перелічених у пунктах.`,
          sourceLocator: "Art. 437 ust. 1",
        },
        {
          kind: "practical-inference",
          text: "Zawieszenie не є видаленням даних: wpis залишається, його дія призупинена до припинення підстави, а період zawieszenie перериває строк його дії.",
          sourceLocator: "Art. 437 ust. 2–3",
        },
      ],
      summary: foreignersLaw.text`Дія wpis до wykaz призупиняється за наявності окремих підстав, зокрема zgoda na pobyt tolerowany, ochrona czasowa, wstrzymanie виконання рішення або zaświadczenie ${foreignersLaw.article("170", "Art. 170")}; період призупинення перериває строк wpis.`,
      rules: [
        {
          locator: "ust. 1 pkt 1–5",
          explanation: foreignersLaw.text`Підставами є zgoda na pobyt tolerowany за ${foreignersLaw.article("351", "Art. 351")} pkt 2, udzielenie ochrony czasowej, postanowienie про wstrzymanie виконання рішення-підстави, перебування на zaświadczenie з ${foreignersLaw.article("170", "Art. 170")} або обставини ${foreignersLaw.article("330", "Art. 330")} ust. 1 pkt 1, 2 чи 4.`,
        },
        {
          locator: "ust. 1a",
          explanation: foreignersLaw.text`Якщо ${foreignersLaw.article("330", "Art. 330")} ust. 1 pkt 1 виник через kolejny wniosek про міжнародний захист, wpis не призупиняється.`,
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Zawieszenie триває до припинення підстави та перериває строк дії wpis.",
        },
      ],
      legalEffect:
        "Zawieszenie тимчасово припиняє дію wpis за умовами статті, але не дорівнює його usunięcie і не дає самостійного висновку про право на в’їзд без перевірки інших систем.",
      foreignersCase:
        "Визначте конкретну підставу zawieszenie, дату її початку й припинення та перевірте, чи не діє виняток для kolejny wniosek про міжнародний захист.",
    },
  ],
})
