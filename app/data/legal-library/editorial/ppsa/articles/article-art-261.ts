import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-261",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 261 встановлює, що від sprzeciw і zażalenia, які подаються у справі про prawo pomocy, не стягуються opłaty sądowe.",
          sourceLocator: "Art. 261",
        },
      ],
      summary:
        "Спеціальні sprzeciw і zażalenia у справі про prawo pomocy є без opłata sądowa.",
      rules: [
        {
          locator: "Art. 261",
          explanation:
            "Перевірте, що środek zaskarżenia справді подається у справі про prawo pomocy і є sprzeciw або zażalenie, названим статтею.",
        },
      ],
      legalEffect:
        "Art. 261 скасовує opłata sądowa саме за визначені засоби у справі про prawo pomocy; він не встановлює загального звільнення від усіх витрат основного postępowanie.",
      foreignersCase:
        "Іноземцю поясніть різницю між відсутністю opłata за sprzeciw або zażalenie щодо prawa pomocy та можливими витратами в окремій справі про legalizacja pobytu. Не використовуйте Art. 261 як доказ повної безкоштовності всього судового процесу.",
    },
  ]),
})
