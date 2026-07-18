import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-285c",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Сторона може подати лише одну скаргу про визнання того самого остаточного рішення незаконним.",
          sourceLocator: "Art. 285c",
        },
      ],
      summary:
        "Стаття вимагає зібрати всі допустимі підстави в одному процесуальному документі.",
      rules: [
        {
          locator: "Art. 285c",
          explanation:
            "До подання перевірте повний текст рішення, шкоду, інші засоби та кожну правову підставу, бо повторної спроби сторони не буде.",
        },
      ],
      legalEffect:
        "Одноразовість захищає остаточність і робить якість першої скарги критичною.",
      foreignersCase:
        "У справі про перебування не подавайте поспішний неповний документ лише для позначення позиції; спершу завершіть доказову та правову перевірку.",
    },
  ],
})
