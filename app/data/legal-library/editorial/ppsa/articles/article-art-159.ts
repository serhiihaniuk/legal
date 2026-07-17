import { defineEditorialPart } from "../../define-editorial-part"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ppsa-art-159",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Wniosek про sprostowanie, uzupełnienie або wykładnię wyroku не впливає на перебіг строку для wniesienia środka zaskarżenia.",
          sourceLocator: "Art. 159",
        },
      ],
      summary:
        "Подання заяви про виправлення, доповнення чи тлумачення не зупиняє строк оскарження wyrok.",
      rules: [
        {
          locator: "Art. 159",
          explanation:
            "Не очікуйте результату wniosek, перш ніж перевірити і, за потреби, дотриматися окремого строку środka zaskarżenia.",
        },
      ],
      legalEffect:
        "Стаття прямо відділяє ці три wnioski від перебігу строку оскарження.",
      foreignersCase:
        "У справі про pobyt не покладайтеся на wniosek про wykładnię чи uzupełnienie як на спосіб зберегти строк skarga kasacyjna або іншого środka zaskarżenia.",
    },
  ],
})
