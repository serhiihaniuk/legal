import { createLegalTextAuthor } from "../../../legal-text"

import { defineKpaEditorialPart } from "../define-kpa-part"

const kpaLaw = createLegalTextAuthor("kpa")
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "189j",
      provisionId: "kpa-art-189j",
      reviewStatus: "reviewed",
      summary:
        "Стаття визначає, коли переривається строк давності примусового виконання administracyjnej kary pieniężnej. Новий строк починається після завершення банкрутства або після застосування повідомленого боржнику заходу egzekucyjnego чи забезпечення.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Ogłoszenie upadłości перериває строк egzekucji, який починається заново після prawomocnego завершення або umorzenia postępowania upadłościowego.",
        },
        {
          locator: "§ 2",
          explanation:
            "Строк перериває також застосування środka egzekucyjnego, про який зобов'язаний був повідомлений, або zarządzenia zabezpieczającego.",
        },
        {
          locator: "§ 3",
          explanation: kpaLaw.text`Після переривання з причин ${kpaLaw.article("189j", "§ 2")} строк починається заново з дня, наступного після застосування заходу.`,
        },
      ],
      legalEffect:
        "Дійсна виконавча або забезпечувальна дія відновлює повний перебіг строку стягнення.",
      foreignersCase:
        "У справі про стягнення санкції з роботодавця іноземця потрібно перевірити не лише дату wymagalności, а й кожний повідомлений захід egzekucyjny або zabezpieczenie, що міг перервати строк.",
    },
  ],
})
