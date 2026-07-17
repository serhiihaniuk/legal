import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-54",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 54 обмежує zezwolenie na pracę sezonową дев'ятьма місяцями календарного року і встановлює різний початок обчислення для в'їзду за сезонною візою або ruch bezwizowy та для іншої підстави pobytu.",
          sourceLocator: "Art. 54 ust. 1–3",
        },
      ],
      summary:
        "Межа 9 місяців є річною. Для особи, яка в'їхала у зв'язку із wpisem wniosku, період рахується від першого в'їзду до держав Schengen після видачі zaświadczenie; за іншою підставою pobytu враховується період legalного pobyt і попередні сезонні zezwolenia.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "Zezwolenie видається на визначений строк до 9 місяців у календарному році, а для відповідного в'їзду відлік починається з першого в'їзду до Schengen у цьому році.",
        },
        {
          locator: "ust. 3",
          explanation:
            "За іншою підставою pobytu zezwolenie може охопити лише період legalного pobyt і не більше 9 місяців разом з періодами з попередніх сезонних zezwolenia.",
        },
      ],
      legalEffect:
        "Стаття встановлює межу дозволу, а не автоматичне право перебувати чи працювати після закінчення документа pobyt.",
      foreignersCase:
        "Зробіть хронологію першого в'їзду до Schengen та всіх сезонних zezwolenia за календарний рік. Не рахуйте 9 місяців лише від дати підпису umowy або рішення.",
    },
  ]),
})
