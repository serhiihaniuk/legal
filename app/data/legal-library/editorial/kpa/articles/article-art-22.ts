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
      article: "22",
      provisionId: "kpa-art-22",
      reviewStatus: "reviewed",
      summary:
        "Стаття розподіляє повноваження щодо вирішення спорів про właściwość і спорів kompetencyjnych та визначає, хто може звернутися до адміністративного суду.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Для різних конфігурацій спору між адміністративними органами вказано właściwy organ, а в окремих випадках — адміністративний суд.",
        },
        {
          locator: "§ 2",
          explanation:
            "Спори kompetencyjne між органами самоврядування й урядової адміністрації вирішує адміністративний суд.",
        },
        {
          locator: "§ 3",
          explanation:
            "Норма перелічує суб’єктів, уповноважених подати до суду wniosek про розгляд спору, серед них сторону та органи, що сперечаються.",
        },
      ],
      legalEffect:
        "Спір між органами отримує визначений законом механізм вирішення замість паралельного або відсутнього розгляду справи.",
      foreignersCase: kpaLaw.text`Якщо два urzędy заперечують свою компетенцію у справі іноземця, ${kpaLaw.article("22", "art. 22")} визначає, хто має вирішити цей спір; він не вирішує матеріальні умови pobytu.`,
    },
  ],
})
