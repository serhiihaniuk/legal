import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-59",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Sąd, який визнав, що інший sąd administracyjny є właściwy, передає йому справу; переданий суд пов’язаний таким postanowienie, крім передачі до NSA, а вже виконані czynności зберігають силу.",
          sourceLocator: "Art. 59 § 1–3",
        },
      ],
      summary:
        "Помилка у виборі адміністративного суду може бути виправлена передачею справи до właściwy sąd.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Передача оформлюється postanowienie і може бути постановлена на posiedzenie niejawne.",
        },
        {
          locator: "§ 2–3",
          explanation:
            "Суд-одержувач за загальним правилом пов’язаний передачею, а виконані в неналежному суді czynności залишаються чинними.",
        },
      ],
      legalEffect:
        "Норма спрямована на правильну юрисдикцію без автоматичної втрати вже виконаних процесуальних дій.",
      foreignersCase:
        "У справі про decyzja воєводи перевірте właściwość відповідного wojewódzki sąd administracyjny; передача не означає, що skarga виграна чи програна.",
    },
  ]),
})
