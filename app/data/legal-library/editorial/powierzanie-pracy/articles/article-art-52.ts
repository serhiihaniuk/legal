import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-52",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 52 передбачає umorzenie postępowania з мาจу закону, якщо після wpisu wniosku не подано oświadczenia про явку до роботи у встановлений строк.",
          sourceLocator: "Art. 52 ust. 1–2",
        },
      ],
      summary:
        "Якщо oświadczenie про прибуття до сезонної роботи не подано, справа про zezwolenie na pracę sezonową автоматично припиняється після 90 днів від запланованого початку або після запланованого завершення роботи — залежно від того, що настане раніше.",
      rules: [
        {
          locator: "ust. 1 pkt 1–2",
          explanation:
            "Строк прив'язаний до дати початку, зазначеної у wpisie, і до дати завершення роботи; закон називає обидві підстави umorzenie.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Після umorzenie wpis до ewidencji wniosków також unieważnia się за прямим приписом закону.",
        },
      ],
      legalEffect:
        "Невиконання кроку з oświadczeniem припиняє саме це провадження та анулює запис; ця стаття не дає окремої підстави почати роботу.",
      foreignersCase:
        "Якщо cudzoziemiec не приїжджає або план змінився, podmiot має зіставити дати у wpisie з поданим oświadczeniem. Не слід розраховувати на старий запис після umorzenie та unieważnienie.",
    },
  ]),
})
