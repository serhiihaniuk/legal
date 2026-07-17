import { defineEditorialPart } from "../../define-editorial-part"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-275",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Dokument «zgoda na pobyt tolerowany» чинний два роки від дня видачі.",
          sourceLocator: "Art. 275",
        },
      ],
      summary:
        "Стаття встановлює дворічний строк чинності документа tolerowany.",
      rules: [
        {
          locator: "zdanie 1",
          explanation:
            "Строк рахується від дати видачі, зазначеної в документі, якщо інша юридична подія не спричинила його unieważnienie або zwrot.",
        },
      ],
      legalEffect:
        "Два роки — це строк документа, а не автоматичне продовження чи зміна самої zgody na pobyt tolerowany.",
      foreignersCase:
        "Звірте дату видачі з датою wygaśnięcia та перевірте, чи не було рішення про cofnięcie або інша подія, що впливає на документ.",
    },
  ],
})
