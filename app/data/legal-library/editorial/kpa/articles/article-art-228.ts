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
      article: "228",
      provisionId: "kpa-art-228",
      reviewStatus: "reviewed",
      summary:
        "Норма встановлює просте правило адресування skargi: її подають органу, компетентному її розглянути. Конкретного адресата визначають наступні статті або спеціальний закон.",
      rules: [
        {
          locator: "одне речення",
          explanation:
            "Skargi składa się do organów właściwych do ich rozpatrzenia.",
        },
      ],
      legalEffect: kpaLaw.text`Правильний орган отримує повноваження розглянути скаргу; помилково адресоване звернення підлягає механізму ${kpaLaw.article("231", "art. 231")}.`,
      foreignersCase: kpaLaw.text`Скаргу на працівника або діяльність urzędu не слід автоматично адресувати тому самому відділу. Потрібно встановити орган із ${kpaLaw.article("229", "art. 229")} або спеціальної норми.`,
    },
  ],
})
