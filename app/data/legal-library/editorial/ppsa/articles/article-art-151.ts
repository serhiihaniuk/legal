import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-151",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Коли суд не задовольняє скаргу (skarga) повністю або частково, він відхиляє її (oddala skargę) у відповідному обсязі.",
          sourceLocator: "Art. 151",
        },
      ],
      summary:
        "Стаття пов’язує результат розгляду з тією частиною вимог, яку суд не визнав обґрунтованою.",
      rules: [
        {
          locator: "Art. 151",
          explanation:
            "Читайте резолютивну частину (sentencja), щоб відрізнити повне від часткового відхилення скарги.",
        },
      ],
      legalEffect:
        "Відхилення означає, що вимога не задоволена у зазначеній частині; подальший засіб оскарження визначають інші норми.",
      foreignersCase:
        "Після рішення у справі про перебування перевірте, які саме вимоги відхилено. Від цього залежить обсяг можливого подальшого оскарження.",
    },
  ],
})
