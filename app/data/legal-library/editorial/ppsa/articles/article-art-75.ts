import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-75",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Pisma у судовому провадженні та orzeczenia вручають у копіях (odpisy). Станом на 18.07.2026 їх можна вручати w formie dokumentu elektronicznego, що містить дані з телекомунікаційної системи суду (system teleinformatyczny sądu). Формулювання w postaci elektronicznej набере чинності 1.10.2029.",
          sourceLocator: "Art. 75 § 1–2, przypisy 44–45",
        },
      ],
      summary:
        "Вручення відбувається через odpis pismo або orzeczenia; чинний електронний варіант має форму dokument elektroniczny з даними судової системи.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Очікуйте odpis pismo або orzeczenia, а не обов’язково оригінал матеріалу, який зберігається в aktach.",
        },
        {
          locator: "§ 2",
          explanation:
            "До 30.09.2029 включно pismo або orzeczenie можна вручити w formie dokumentu elektronicznego, що містить дані з телекомунікаційної системи суду (system teleinformatyczny sądu). Редакція w postaci elektronicznej застосовуватиметься з 1.10.2029.",
        },
      ],
      legalEffect:
        "Стаття визначає форму примірника судового документа, але не замінює правил про момент skuteczne doręczenie.",
      foreignersCase:
        "Зберігайте отриманий odpis wyrok або wezwanie у справі pobyt разом із доказом вручення; формат файла сам по собі не визначає строк.",
    },
  ]),
})
