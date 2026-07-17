import { defineEditorialPart } from "../../define-editorial-part"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-274",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Dokument «zgoda na pobyt tolerowany» у період своєї чинності підтверджує tożsamość cudzoziemca під час перебування на території RP, але не підтверджує obywatelstwo і не дає права перетинати кордон.",
          sourceLocator: "Art. 274 ust. 1–2",
        },
      ],
      summary:
        "Стаття визначає обмежене значення документа tolerowany: ідентифікація в Польщі без підтвердження громадянства чи права на кордон.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Документ використовується для підтвердження tożsamości лише протягом строку чинності.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Для перетину кордону цей документ сам по собі не підходить.",
        },
      ],
      legalEffect:
        "Документ не замінює паспорт і не створює права на виїзд та повернення через кордон.",
      foreignersCase:
        "Під час внутрішньої перевірки пред’являйте документ для ідентифікації, але перед будь-якою поїздкою отримайте окрему правову підставу та документ подорожі.",
    },
  ],
})
