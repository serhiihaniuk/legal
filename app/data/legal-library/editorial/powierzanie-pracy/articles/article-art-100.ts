import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-100",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 100 є виконаною нормою про зміну art. 325 ust. 1 Prawa o szkolnictwie wyższym i nauce. Доручення іноземцеві роботи, що полягає у виконанні завдань, пов'язаних із навчанням і науковою діяльністю, в установі з art. 7 ust. 1 pkt 1–7 не потребує дозволу на роботу або заяви про доручення роботи.",
          sourceLocator: "Art. 100; art. 325 ust. 1 PSWiN",
        },
      ],
      summary:
        "Виняток охоплює лише роботу іноземця, що полягає у виконанні завдань, пов'язаних із навчанням і науковою діяльністю, в установі з art. 7 ust. 1 pkt 1–7. Це не загальне звільнення від документів для будь-якої роботи в такій установі.",
      rules: [
        {
          locator: "Art. 100; art. 325 ust. 1 PSWiN",
          explanation:
            "Дозвіл на роботу або записана заява не потрібні, якщо роботу виконує іноземець, роботодавець належить до установ з art. 7 ust. 1 pkt 1–7, а завдання пов'язані з навчанням і веденням наукової діяльності.",
        },
      ],
      legalEffect:
        "Виняток залежить від виду завдань і статусу установи. Він не визначає автоматично законність перебування, страхування чи доступ до регульованої професії.",
      foreignersCase:
        "Для викладача або науковця зафіксуйте конкретні завдання та перевірте, чи установа входить до art. 7 ust. 1 pkt 1–7 PSWiN. Іншу роботу в тій самій установі оцінюйте окремо.",
    },
  ]),
})
