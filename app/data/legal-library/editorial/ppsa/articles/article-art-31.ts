import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-31",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 31 § 1 встановлює: «Jeżeli braki w zakresie zdolności sądowej lub procesowej albo w składzie właściwych organów dają się uzupełnić, sąd wyznaczy odpowiedni termin».",
          sourceLocator: "Art. 31 § 1",
        },
      ],
      summary:
        "Якщо недоліки zdolność sądowa, zdolność procesowa або складу належних органів можна усунути, суд призначає відповідний termin; суд може тимчасово допустити особу до дії, а невиправлені або невиправні недоліки мають наслідки для провадження.",
      rules: [
        {
          locator: "Art. 31 § 1",
          explanation:
            "Суд визначає відповідний termin для усунення виправного недоліку; якщо ustanowienie przedstawiciel ustawowy має відбутися з urzędu, sąd звертається до właściwy sąd opiekuńczy. Стаття не називає тут конкретної кількості днів.",
        },
        {
          locator: "Art. 31 § 2",
          explanation:
            "До спливу призначеного terminu суд може тимчасово допустити сторону або особу без належного umocowanie за умовою виправлення недоліку та zatwierdzenie дій.",
        },
        {
          locator: "Art. 31 § 3",
          explanation:
            "Якщо недолік не можна виправити або його не виправлено в termin, суд zniesie postępowanie в охопленій недоліком частині та за потреби видасть postanowienie.",
        },
      ],
      legalEffect:
        "Норма дає шлях виправлення процесуальної здатності чи представництва, але наслідок залежить від того, чи недолік виправний і чи виконано вимогу в призначений судом termin.",
      foreignersCase:
        "У справі іноземця відрізніть brak zdolność або umocowanie від відсутності доказу матеріальної умови; прочитайте конкретний termin суду і підтвердьте усунення саме названого недоліку.",
    },
  ]),
})
