import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-87a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Якщо wojewoda відмовив у продовженні wizy Schengen або wizy krajowej чи umorzył провадження, належно сплачена opłata skarbowa за продовження візи не повертається.",
          sourceLocator: "Art. 87a",
        },
      ],
      summary:
        "Стаття пов’язує odmowę або umorzenie справи про продовження візи з неповерненням належної opłaty skarbowej.",
      rules: [
        {
          locator: "Art. 87a",
          explanation:
            "Перевірте, що платіж стосувався саме продовження візи та був належним. Причини odmowy або umorzenia визначають інші приписи.",
        },
      ],
      legalEffect:
        "Неповернення платежу є окремим фінансовим наслідком і не визначає законність pobytu після завершення провадження.",
      foreignersCase:
        "Збережіть decyzję, доказ її вручення та квитанцію. Окремо порахуйте, до якої дати існувала підстава pobytu і який засіб оскарження випливає з pouczenia.",
    },
  ],
})
