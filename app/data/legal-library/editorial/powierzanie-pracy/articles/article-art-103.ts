import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-103",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 103 ust. 1 передбачає, що до zezwoleń na pracę, виданих за старою ustawa o promocji zatrudnienia, застосовуються przepisy нової ustawy.",
          sourceLocator: "Art. 103 ust. 1",
        },
        {
          kind: "statute-text",
          text: "Art. 103 ust. 2 застосовує art. 50 ust. 1 нової ustawy до zaświadczenia про wpis wniosku щодо pracy sezonowej, виданих за старою ustawy, а ust. 3 застосовує przepisy нової ustawy до oświadczenia, внесених до ewidencji за старою ustawy.",
          sourceLocator: "Art. 103 ust. 2–3",
        },
        {
          kind: "practical-inference",
          text: "Перехід застосовується до названого документа або запису; з нього не випливає автоматичне продовження документа чи легалізація перебування.",
          sourceLocator: "Art. 103 ust. 1–3",
        },
      ],
      summary:
        "Стаття визначає, які правила діють для вже виданих дозволів і вже внесених записів, що походять зі старої системи працевлаштування.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Видане zezwolenie na pracę не ігнорується через зміну ustawy: до нього застосовуються przepisy нової ustawy.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Zaświadczenie про wpis wniosku щодо pracy sezonowej, видане за art. 88p ust. 1 pkt 2 старої ustawy, оцінюється за art. 50 нової ustawy.",
        },
        {
          locator: "ust. 3",
          explanation:
            "Oświadczenie, внесене до ewidencji за старою ustawy, також охоплюється новою ustawy. Треба зберегти доказ самого wpis до ewidencji.",
        },
      ],
      legalEffect:
        "Стаття переводить названі документи та записи під новий нормативний режим, але не відповідає сама по собі на питання про строк документа, legalny pobyt чи фактичне право на конкретну роботу.",
      foreignersCase:
        "Встановіть вид документа, дату його wydania або wpis до ewidencji та зазначені в ньому умови. Під час перевірки застосовуйте нову ustawy лише в межах art. 103, а статус перебування і можливість роботи перевіряйте окремо.",
    },
  ]),
})
