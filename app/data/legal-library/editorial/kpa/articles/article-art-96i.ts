import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "96i",
      provisionId: "kpa-art-96i",
      reviewStatus: "reviewed",
      summary:
        "Mediator має доступ до akt sprawy і може робити нотатки, копії та відписи, якщо учасник своєчасно не заперечив.",
      rules: [
        {
          locator: "єдиний блок",
          explanation:
            "Заперечення проти ознайомлення mediatora з aktami подається протягом семи днів від оголошення або вручення postanowienia про направлення.",
        },
      ],
      legalEffect:
        "За відсутності заперечення mediator працює з матеріалами провадження; своєчасне заперечення закриває цей доступ.",
      foreignersCase:
        "Іноземець має свідомо вирішити, чи дозволяти mediatorowi доступ до повного комплекту матеріалів справи.",
    },
  ],
})
