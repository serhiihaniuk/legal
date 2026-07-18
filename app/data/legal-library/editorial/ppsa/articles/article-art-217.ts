import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-217",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "До вартості предмета оскарження не включають відсотки та витрати, пов’язані з основною грошовою вимогою.",
          sourceLocator: "Art. 217",
        },
      ],
      summary:
        "Стаття відокремлює основну суму від побічних нарахувань для розрахунку вартості спору.",
      rules: [
        {
          locator: "Art. 217",
          explanation:
            "У розрахунку покажіть основну грошову вимогу (należność) окремо від процентів (odsetki) та витрат (koszty). До процесуальної вартості входить лише перша.",
        },
      ],
      legalEffect:
        "Виключення побічних сум впливає на базу збору, але не обов’язково усуває самі вимоги з матеріального спору.",
      foreignersCase:
        "У грошовій справі іноземця додайте прозорий розрахунок, щоб суд бачив, яку суму ви взяли за основну.",
    },
  ],
})
