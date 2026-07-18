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
      article: "258",
      provisionId: "kpa-art-258",
      reviewStatus: "reviewed",
      summary:
        "Стаття детально розподіляє нагляд і контроль за розглядом skarg та wniosków між міністрами, урядовими органами, органами вищого ступеня, Прем'єр-міністром і воєводами. Для суспільних організацій діє окрема система статутного та державного нагляду.",
      rules: [
        {
          locator: "§ 1 pkt 1–2",
          explanation:
            "Ministrowie контролюють міністерства й безпосередньо підпорядковані одиниці, а rzeczowo właściwi ministrowie разом із міністром адміністрації — органи урядової адміністрації.",
        },
        {
          locator: "§ 1 pkt 3–4",
          explanation:
            "Terenowe organy administracji rządowej контролюють піднаглядні одиниці, а organy wyższego stopnia та naczelne — інші державні органи й одиниці.",
        },
        {
          locator: "§ 1 pkt 5",
          explanation:
            "Prezes Rady Ministrów і wojewodowie контролюють skargi та wnioski, які розглядають органи й одиниці samorządu terytorialnego.",
        },
        {
          locator: "§ 2",
          explanation:
            "У organizacjach społecznych нагляд здійснюють статутні наглядові та вищі органи, а щодо naczelnych organów — наглядовий орган урядової адміністрації.",
        },
      ],
      legalEffect:
        "Кожна група органів має визначеного суб'єкта системного контролю за тим, як вона приймає й завершує звернення.",
      foreignersCase: kpaLaw.text`Для skarg на роботу органів, що обслуговують іноземців, стаття допомагає встановити наглядову систему, але не змінює компетенцію для конкретної skargi за ${kpaLaw.article("229", "art. 229")}.`,
    },
  ],
})
