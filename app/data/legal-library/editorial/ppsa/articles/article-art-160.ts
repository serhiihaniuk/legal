import { defineEditorialPart } from "../../define-editorial-part"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ppsa-art-160",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Якщо ця ustawa не передбачає видачу wyrok, суд видає orzeczenie у формі postanowienia.",
          sourceLocator: "Art. 160",
        },
      ],
      summary:
        "Стаття встановлює резервну форму postanowienie для випадків, де закон не передбачає wyrok.",
      rules: [
        {
          locator: "Art. 160",
          explanation:
            "Визначаючи документ, спершу перевірте, чи закон вимагає wyrok; за відсутності такого припису застосовується форма postanowienie.",
        },
      ],
      legalEffect:
        "Форма orzeczenie залежить від прямого припису ustawa; з назви postanowienie ще не випливає його оскаржуваність.",
      foreignersCase:
        "У судовій справі про pobyt спочатку ідентифікуйте, чи документ є wyrok або postanowienie, а потім шукайте спеціальне правило про засіб оскарження.",
    },
  ],
})
