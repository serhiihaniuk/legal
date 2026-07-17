import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-274",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 274 передбачає, що з powodu przestępstwo wznowienie можна вимагати лише тоді, коли czyn встановлено prawomocnym wyrokiem skazującym, крім випадку, коли кримінальне провадження не може бути wszczęte або його umorzono з іншої причини, ніж brak dowodów.",
          sourceLocator: "Art. 274",
        },
      ],
      summary:
        "Стаття обмежує посилання на przestępstwo як підставу wznowienie вимогою про остаточне встановлення діяння або наявність прямо названої перешкоди кримінальному провадженню.",
      rules: [
        {
          locator: "Art. 274",
          explanation:
            "Звичайне припущення про злочин недостатнє: для цієї підстави czyn має бути встановлений prawomocnym wyrokiem skazującym, якщо немає винятку щодо неможливості wszczęcia або іншого umorzenie.",
        },
      ],
      legalEffect:
        "Норма встановлює поріг для цієї конкретної підстави wznowienie і не перетворює будь-яке кримінальне повідомлення на доказ przestępstwo.",
      foreignersCase:
        "Якщо у справі іноземця наводять можливе підроблення документа, перевірте стан кримінального провадження та наявність prawomocny wyrok. Не називайте повідомлення до поліції встановленим czyn.",
    },
  ]),
})
