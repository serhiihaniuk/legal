import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-263",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "У розділі про право допомоги цю статтю скасовано (uchylony), тому станом на 18.07.2026 її номер не додає жодної чинної умови чи процедури.",
          sourceLocator: "Art. 263",
        },
      ],
      summary: "Номер залишено в законі лише для збереження його структури.",
      rules: [
        {
          locator: "Art. 263",
          explanation:
            "Не використовуйте історичний зміст без перевірки редакції, чинної на дату відповідної події.",
        },
      ],
      legalEffect:
        "Із цієї статті не виникає сучасний обов’язок, строк або засіб оскарження.",
      foreignersCase:
        "У поточній справі іноземця працюйте з чинними статтями про право допомоги (prawo pomocy) та не посилайтеся на цю скасовану норму як на самостійну підставу.",
    },
  ],
})
