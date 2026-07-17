import { defineEditorialPart } from "../../define-editorial-part"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ppsa-art-158",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Sąd, який видав wyrok, вирішує postanowieniem сумніви щодо його змісту; таке postanowienie може бути видане на posiedzenie niejawnym.",
          sourceLocator: "Art. 158",
        },
      ],
      summary:
        "Стаття передбачає окреме postanowienie суду для роз’яснення сумнівів у змісті власного wyrok.",
      rules: [
        {
          locator: "Art. 158",
          explanation:
            "Звертайтеся до суду, який видав wyrok, коли є сумнів саме щодо його змісту; форма може бути niejawnym засіданням.",
        },
      ],
      legalEffect:
        "Норма встановлює форму вирішення сумнівів, але не надає підстав змінювати предмет спору чи замінювати wyrok новим розглядом.",
      foreignersCase:
        "Якщо формулювання wyrok у справі про pobyt незрозуміле, відокремте wniosek про wykładnię від оскарження по суті й перевірте інші строки за справою.",
    },
  ],
})
