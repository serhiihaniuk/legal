import { createLegalTextAuthor } from "../../../legal-text"

import { defineKpaEditorialPart } from "../define-kpa-part"

const kpaLaw = createLegalTextAuthor("kpa")
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "189b",
      provisionId: "kpa-art-189b",
      reviewStatus: "reviewed",
      summary:
        "Стаття дає легальне визначення administracyjnej kary pieniężnej. Це грошова санкція, яку орган накладає рішенням за порушення обов'язку або заборони особою чи іншим суб'єктом.",
      rules: [
        {
          locator: "визначення",
          explanation:
            "Санкція має грошовий характер, накладається органом administracji publicznej у decyzji та є наслідком невиконання обов'язку або порушення заборони.",
        },
      ],
      legalEffect: kpaLaw.text`Якщо захід відповідає цьому визначенню, до нього можуть застосовуватися загальні гарантії розділу VIIIa з урахуванням ${kpaLaw.article("189a", "art. 189a")}.`,
      foreignersCase:
        "У справі, пов'язаній із працевлаштуванням іноземця, назва платежу не вирішує питання. Треба перевірити, чи це саме санкція у decyzji за порушення адміністративного обов'язку, а не штраф іншої правової природи.",
    },
  ],
})
