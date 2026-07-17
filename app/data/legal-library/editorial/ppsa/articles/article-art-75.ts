import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-75",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Pisma у судовому провадженні та orzeczenia doręczaються в odpisach; стаття також допускає електронну форму з даними системи teleinformatyczny sąd у відповідній редакції.",
          sourceLocator: "Art. 75 § 1–2",
        },
      ],
      summary:
        "Звичайне вручення відбувається через odpis, а закон передбачає електронний варіант; редакційні примітки містять майбутню зміну термінології.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Очікуйте odpis pismo або orzeczenia, а не обов’язково оригінал матеріалу, який зберігається в aktach.",
        },
        {
          locator: "§ 2",
          explanation:
            "Електронне doręczenie пов’язане з даними системи sąd; чинний варіант треба читати разом із перехідною приміткою corpus.",
        },
      ],
      legalEffect:
        "Стаття визначає форму примірника судового документа, але не замінює правил про момент skuteczne doręczenie.",
      foreignersCase:
        "Зберігайте отриманий odpis wyrok або wezwanie у справі pobyt разом із доказом вручення; формат файла сам по собі не визначає строк.",
    },
  ]),
})
