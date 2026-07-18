import { defineEditorialPart } from "../../define-editorial-part"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-262",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Polski dokument tożsamości cudzoziemca є чинним протягом одного року від дня його видачі.",
          sourceLocator: "Art. 262",
        },
      ],
      summary:
        "Стаття встановлює однорічний строк чинності польського документа особи.",
      rules: [
        {
          locator: "zdanie 1",
          explanation:
            "Дату закінчення визначайте від дати видачі, зазначеної в документі.",
        },
      ],
      legalEffect:
        "Після спливу року документ більше не підтверджує особу як чинний документ за цією статтею; питання нового документа потребує окремої заяви та підстави.",
      foreignersCase:
        "Запишіть дату видачі й завчасно перевірте потребу в новій заяві. Не використовуйте прострочений документ як єдиний доказ особи.",
    },
  ],
})
