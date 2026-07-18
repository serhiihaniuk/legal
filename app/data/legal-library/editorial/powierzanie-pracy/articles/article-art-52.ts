import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-52",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 52 передбачає припинення провадження без окремого рішення про це (umorzenie postępowania z mocy prawa), якщо після внесення сезонної заяви до реєстру польський суб’єкт не подав заяву про прибуття іноземця до роботи.",
          sourceLocator: "Art. 52 ust. 1–2",
        },
      ],
      summary:
        "Якщо повідомлення про прибуття не надійшло, справа про сезонний дозвіл автоматично завершується зі спливом 90 днів від запланованого початку роботи або зі спливом запланованого строку її завершення — залежно від того, що настане раніше.",
      rules: [
        {
          locator: "ust. 1 pkt 1–2",
          explanation:
            "Обидві дати беруть із запису в реєстрі: запланований початок і заплановане завершення роботи. Провадження припиняється з настанням першої з двох установлених законом меж.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Після припинення провадження запис у реєстрі також автоматично втрачає чинність (unieważnienie z mocy prawa).",
        },
      ],
      legalEffect:
        "Неподання заяви про прибуття припиняє саме це провадження й анулює запис у реєстрі. Стаття не створює окремої підстави почати роботу.",
      foreignersCase:
        "Якщо іноземець не приїхав або план змінився, зіставте дати в реєстрі з датою подання заяви про прибуття. Після автоматичного припинення справи й анулювання запису старий запис уже не може бути підставою наступного етапу.",
    },
  ]),
})
