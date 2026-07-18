import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-363",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("363", "Art. 363")} дозволяє в обґрунтованих випадках включити до wniosek про повітряний транзит осіб, відповідальних за іноземця, зокрема медичну опіку та перекладачів, разом названих eskortą.`,
          sourceLocator: "Art. 363",
        },
      ],
      summary:
        "Заявка на транзит може охоплювати супровід іноземця, якщо це виправдано обставинами, наприклад потребою в медичній допомозі чи перекладі.",
      rules: [
        {
          locator: "całość",
          explanation:
            "До eskorta можуть належати особи, відповідальні за іноземця під час транзиту, зокрема медичний персонал і tłumacze.",
        },
      ],
      legalEffect:
        "Стаття дозволяє включення eskorta до wniosek, але не встановлює автоматичної згоди на кожну особу чи обов’язковість супроводу в кожній справі.",
      foreignersCase:
        "Якщо стан здоров’я або комунікація потребують супроводу, додайте до wniosek конкретне обґрунтування та документи, не розкриваючи зайвих персональних даних.",
    },
  ],
})
