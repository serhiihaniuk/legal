import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-247",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Право допомоги не надають, якщо скарга є очевидно необґрунтованою.",
          sourceLocator: "Art. 247",
        },
      ],
      summary:
        "Стаття не дозволяє фінансувати з публічних коштів справу, безперспективність якої очевидна вже на цьому етапі.",
      rules: [
        {
          locator: "Art. 247",
          explanation:
            "Критерій має бути саме «очевидна» безпідставність, а не звичайна невизначеність результату. Відділіть попередню оцінку від повного розгляду скарги.",
        },
      ],
      legalEffect:
        "Відмова за цією підставою стосується допомоги й не є автоматично рішенням по суті основної справи.",
      foreignersCase:
        "У справі про перебування сформулюйте конкретну правову помилку органу й докази, щоб заява про допомогу не виглядала відірваною від реального спору.",
    },
  ],
})
