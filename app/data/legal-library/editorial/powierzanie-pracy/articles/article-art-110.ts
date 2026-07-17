import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-110",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 110 встановлює, що дані, зібрані та оброблені на підставі art. 90c ust. 4 і 6 старої ustawy o promocji zatrudnienia, стають даними, які обробляються на підставі art. 73 ust. 4–6 нової ustawy.",
          sourceLocator: "Art. 110",
        },
        {
          kind: "practical-inference",
          text: "Норма забезпечує нормативну тяглість обробки вже зібраних даних; вона сама не підтверджує зміст конкретного запису та не встановлює права на pobyt чи роботу.",
          sourceLocator: "Art. 110",
        },
      ],
      summary:
        "Стаття переводить правову підставу обробки даних зі старих положень до відповідних положень нової ustawy.",
      rules: [
        {
          locator: "Art. 110",
          explanation:
            "Йдеться саме про дані, зібрані та оброблені за art. 90c ust. 4 і 6 старої ustawy.",
        },
        {
          locator: "Art. 110",
          explanation:
            "Для таких даних новою підставою названі art. 73 ust. 4–6. Стаття не описує додаткових категорій даних або окремого строку зберігання.",
        },
      ],
      legalEffect:
        "Норма зберігає правову тяглість обробки визначених даних при заміні законодавчої підстави. Вона не вирішує питання достовірності запису, доступу до нього чи індивідуального статусу іноземця.",
      foreignersCase:
        "Якщо орган посилається на такий запис, попросіть визначити його джерело й перевірте, чи належить він до даних art. 90c ust. 4 або 6. Не прирівнюйте наявність запису до доведеного права на pobyt чи роботу.",
    },
  ]),
})
