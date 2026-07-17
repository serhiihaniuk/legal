import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "72",
      provisionId: "kpa-art-72",
      reviewStatus: "reviewed",
      summary:
        "Стаття вимагає фіксувати в aktach істотні дії organu, з яких не складається protokół, у формі підписаної adnotacji.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Czynności, що мають значення для справи або перебігу провадження і не протоколюються, utrwala się w aktach w drodze adnotacji підписаної працівником.",
        },
      ],
      legalEffect:
        "Значуща непроцесована дія не повинна залишатися поза aktami; її слід відтворити у службовому записі.",
      foreignersCase:
        "У справі pobytowej adnotacja може підтверджувати важливу службову дію, але її зміст треба оцінювати разом з усіма aktami.",
    },
  ],
})
