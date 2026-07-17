import { defineEditorialPart } from "../../define-editorial-part"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ppsa-art-171",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Prawomocny wyrok має powaga rzeczy osądzonej лише щодо того, що у зв’язку зі skarga було предметом rozstrzygnięcia.",
          sourceLocator: "Art. 171",
        },
      ],
      summary:
        "Норма обмежує powaga rzeczy osądzonej предметом, який справді був вирішений у зв’язку зі skarga.",
      rules: [
        {
          locator: "Art. 171",
          explanation:
            "Порівняйте нове питання з предметом rozstrzygnięcia у попередньому wyrok, а не лише з подібними фактами чи документами.",
        },
      ],
      legalEffect:
        "Остаточний wyrok не має сили речі вирішеної щодо питань, які не були предметом його розгляду за skarga.",
      foreignersCase:
        "Якщо орган у справі про pobyt посилається на попередній wyrok, перевірте точний предмет його rozstrzygnięcia, а не тільки те, що сторони були ті самі.",
    },
  ],
})
