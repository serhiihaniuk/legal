import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-243",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Сторона може подати заяву про право допомоги (prawo pomocy) до початку судового провадження або під час нього; сама заява не обкладається судовим збором. Другий абзац статті скасовано.",
          sourceLocator: "Art. 243 § 1–2",
        },
      ],
      summary:
        "Стаття дозволяє просити фінансову й професійну підтримку завчасно, не сплачуючи за розгляд самої заяви.",
      rules: [
        {
          locator: "Art. 243 § 1–2",
          explanation:
            "Не чекайте виклику суду (wezwanie) про оплату, якщо вже відомо про фінансову неспроможність. Подайте заяву на належному етапі та окремо доведіть умови допомоги.",
        },
      ],
      legalEffect:
        "Безоплатність заяви не означає автоматичного надання права допомоги (prawo pomocy).",
      foreignersCase:
        "У справі про перебування подайте заяву достатньо рано, щоб рішення про представника не поставило під ризик строк касації.",
    },
  ],
})
