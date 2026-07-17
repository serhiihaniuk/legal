import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-58",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Sąd odrzuca skarga, зокрема коли справа не належить до właściwość sąd administracyjny, строк пропущено, brak formalny не усунуто, та сама справа між тими самими сторонами вже в toku або правомочно вирішена, немає здатності чи особливого interes prawny або wniesienie є недопустимим; окремі недоліки спершу підлягають усуненню.",
          sourceLocator: "Art. 58 § 1–4",
        },
      ],
      summary:
        "Odrzucenie skargi — це процесуальне закриття без розгляду її суті через встановлену законом перешкоду; деякі дефекти спершу можна виправити.",
      rules: [
        {
          locator: "§ 1 pkt 1–3",
          explanation:
            "Перевірте właściwość sąd, строк і усунення braków formalnych: кожна з цих обставин може вести до odrzucenie.",
        },
        {
          locator: "§ 1 pkt 4–6",
          explanation:
            "Також враховуються та сама справа між тими самими сторонами, brak zdolność sądowa або zdolność procesowa чи органів, відсутність спеціального interes prawny або uprawnienie для art. 3 § 2 pkt 5–6 та інша недопустимість.",
        },
        {
          locator: "§ 2",
          explanation:
            "За дефекту zdolność або складу органів sąd odrzuca skarga лише після того, як недолік не було усунуто.",
        },
        {
          locator: "§ 3–4",
          explanation:
            "Odrzucenie оформлюється postanowienie і може бути на posiedzenie niejawne; через art. 58 § 1 pkt 1 суд не відкидає skarga, якщо sąd powszechny вже визнав себе niewłaściwy.",
        },
      ],
      legalEffect:
        "Odrzucenie не є висновком, що орган мав рацію по суті; це висновок про процесуальну неможливість розгляду за конкретною перешкодою.",
      foreignersCase:
        "Перед skarga про pobyt перевірте строк, właściwy sąd, wyczerpanie środków zaskarżenia та повне усунення wezwanie.",
    },
  ]),
})
