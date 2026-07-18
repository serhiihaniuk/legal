import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-222",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Суд не вимагає збору за документ, з якого вже видно, що він підлягає відхиленню.",
          sourceLocator: "Art. 222",
        },
      ],
      summary:
        "Стаття не змушує сторону платити за документ, який суд не може допустити до розгляду.",
      rules: [
        {
          locator: "Art. 222",
          explanation:
            "Підстава повинна випливати вже з самого документа. Це правило про відсутність вимоги оплати, а не спосіб виправити недопустимість.",
        },
      ],
      legalEffect:
        "Документ однаково буде відхилений; стаття лише усуває зайвий платіж.",
      foreignersCase:
        "Якщо скарга у справі про перебування очевидно недопустима, відсутність виклику до оплати (wezwanie) не означає, що суд прийняв її по суті.",
    },
  ],
})
