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
      provisionId: "ustawa-o-cudzoziemcach-art-138b",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("138b", "Art. 138b")} зобов’язує Szef Urzędu протягом 1 місяця від запиту іншої держави ЄС повідомити, чи cudzoziemiec надалі має status uchodźcy або ochronę uzupełniającą у Польщі.`,
          sourceLocator: "Art. 138b",
        },
      ],
      summary:
        "Норма регулює відповідь Szef Urzędu іншій державі ЄС під час її розгляду документа «Niebieska Karta UE».",
      rules: [
        {
          locator: "Art. 138b",
          explanation:
            "Інформація надається протягом місяця від отримання запиту іншої держави, яка розглядає заяву cudzoziemca на документ із adnotacją «Niebieska Karta UE».",
        },
      ],
      legalEffect:
        "Стаття створює строк для міждержавної інформації про статус захисту; вона не визначає, чи такий статус існує у конкретної особи.",
      foreignersCase:
        "У справах мобільності відрізняйте факт міждержавного запиту від рішення про ваш статус uchodźcy або ochronę uzupełniającą.",
    },
  ],
})
