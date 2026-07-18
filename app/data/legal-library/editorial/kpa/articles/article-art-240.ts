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
      article: "240",
      provisionId: "kpa-art-240",
      reviewStatus: "reviewed",
      summary:
        "Стаття поширює частину механізму skargowego на справи, які не розглядаються за KPA або не належать до адміністративних органів. Водночас решту процедури визначають правила, властиві відповідній справі.",
      rules: [
        {
          locator: "перша частина",
          explanation: kpaLaw.text`До таких skarg відповідно застосовуються ${kpaLaw.articleRange("233", "239", { start: "art. 233", end: "239" })} KPA.`,
        },
        {
          locator: "застереження",
          explanation:
            "Замість інших норм KPA застосовуються przepisy postępowania właściwego dla danej sprawy.",
        },
      ],
      legalEffect:
        "Кваліфікація та маршрут skargi зберігають частину правил KPA, але основна процедура переходить до належного галузевого режиму.",
      foreignersCase: kpaLaw.text`Якщо звернення іноземця стосується, наприклад, справи поза адміністративною компетенцією, ${kpaLaw.article("240", "art. 240")} не перетворює її на справу про pobyt; далі діятиме процедура, властива реальному предмету.`,
    },
  ],
})
