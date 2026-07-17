import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-27",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 27 встановлює: «Osoba fizyczna niemająca zdolności do czynności w postępowaniu może je podejmować tylko przez swojego przedstawiciela ustawowego».",
          sourceLocator: "Art. 27",
        },
      ],
      summary:
        "Фізична особа, яка не має zdolność do czynności w postępowaniu, може виконувати процесуальні дії лише через свого przedstawiciel ustawowy.",
      rules: [
        {
          locator: "Art. 27",
          explanation:
            "За відсутності zdolność procesowa особа не виконує такі дії самостійно: процесуальний крок здійснює przedstawiciel ustawowy.",
        },
      ],
      legalEffect:
        "Норма визначає спосіб участі особи без процесуальної здатності, але сама не встановлює, хто саме є її przedstawiciel ustawowy.",
      foreignersCase:
        "Якщо іноземець у справі не має zdolność procesowa, до кожного процесуального кроку долучіть przedstawiciel ustawowy і перевірте документ, що підтверджує його статус.",
    },
  ]),
})
