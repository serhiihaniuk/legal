import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-110",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 110 встановлює, що дані, зібрані та опрацьовані на підставі art. 90c ust. 4 і 6 попереднього закону «ustawa o promocji zatrudnienia i instytucjach rynku pracy», надалі опрацьовуються на підставі art. 73 ust. 4–6 нового закону.",
          sourceLocator: "Art. 110",
        },
        {
          kind: "practical-inference",
          text: "Норма забезпечує безперервність правової підстави для опрацювання вже зібраних даних. Вона сама не підтверджує правильності конкретного запису і не встановлює права на перебування чи роботу.",
          sourceLocator: "Art. 110",
        },
      ],
      summary:
        "Стаття переводить правову підставу опрацювання даних зі старих положень до відповідних положень нового закону.",
      rules: [
        {
          locator: "Art. 110",
          explanation:
            "Йдеться саме про дані, зібрані та опрацьовані за art. 90c ust. 4 і 6 старого закону.",
        },
        {
          locator: "Art. 110",
          explanation:
            "Для таких даних новою підставою є art. 73 ust. 4–6. Стаття не створює додаткових категорій даних і не встановлює окремого строку їх зберігання.",
        },
      ],
      legalEffect:
        "Норма зберігає безперервність опрацювання визначених даних після заміни законодавчої підстави. Вона не вирішує питання достовірності запису, доступу до нього чи індивідуального статусу іноземця.",
      foreignersCase:
        "Якщо орган посилається на такий запис, попросіть вказати його джерело і перевірте, чи належить він до даних з art. 90c ust. 4 або 6. Наявність запису сама по собі не доводить права на перебування чи роботу.",
    },
  ]),
})
