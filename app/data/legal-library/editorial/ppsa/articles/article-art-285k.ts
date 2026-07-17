import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-285k",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 285k зобов’язує NSA oddalić skargę o stwierdzenie niezgodności z prawem prawomocnego orzeczenia, якщо немає підстав визнати оскаржене orzeczenie незаконним; за uwzględnienie skarga NSA визнає orzeczenie в оскарженій частині niezgodne z prawem, а коли справа за особою або предметом не належала до юрисдикції sądy у момент вирішення — unieważnia оскаржене та pierwszej instancji orzeczenie і odrzuca skargę.",
          sourceLocator: "Art. 285k § 1–3",
        },
      ],
      summary:
        "Стаття розмежовує три можливі результати: oddalenie через відсутність підстави, stwierdzenie niezgodności в межах skarga та спеціальний наслідок для справи поза юрисдикцією судів.",
      rules: [
        {
          locator: "§ 1–2",
          explanation:
            "Відсутність підстави веде до oddalenie; якщо skarga обґрунтована, NSA встановлює niezgodność лише в оскарженому обсязі.",
        },
        {
          locator: "§ 3",
          explanation:
            "Спеціальний результат — unieważnienie обох названих orzeczenia та odrzucenie skarga — пов’язаний із відсутністю юрисдикції судів за особою або предметом у момент вирішення.",
        },
      ],
      legalEffect:
        "Визнання niezgodność з prawem не слід плутати з автоматичним новим вирішенням адміністративної справи; конкретний наслідок залежить від результату й обсягу skarga.",
      foreignersCase:
        "У справі іноземця про pobyt відрізняйте oddalenie, stwierdzenie niezgodności та спеціальний наслідок § 3; сама позитивна оцінка skarga не означає автоматичного надання pobyt.",
    },
  ]),
})
