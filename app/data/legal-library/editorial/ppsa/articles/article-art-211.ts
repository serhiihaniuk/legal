import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-211",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Судові витрати (koszty sądowe) складаються із судових зборів та відшкодування видатків.",
          sourceLocator: "Art. 211",
        },
      ],
      summary: "Стаття ділить судові витрати на дві базові категорії.",
      rules: [
        {
          locator: "Art. 211",
          explanation:
            "У платіжному календарі окремо ведіть судові збори (opłaty sądowe) та видатки (wydatki), бо для них можуть діяти різні правила внесення й повернення.",
        },
      ],
      legalEffect:
        "Не кожна витрата сторони є судовою витратою в сенсі цієї статті.",
      foreignersCase:
        "У справі про перебування відділіть платіж суду від винагороди представника чи власного проїзду — це різні категорії для розрахунку.",
    },
  ],
})
