import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-100",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 100 замінює art. 325 ust. 1 Prawo o szkolnictwie wyższym i nauce: повірення cudzoziemiec роботи, пов'язаної з kształcenie та działalność naukowa у перелічених art. 7 ust. 1 pkt 1–7 podmiot, не потребує zezwolenie або oświadczenie.",
          sourceLocator: "Art. 100; art. 325 ust. 1 PSWiN",
        },
      ],
      summary:
        "Виняток охоплює працю cudzoziemiec, що полягає саме у виконанні завдань, пов'язаних із навчанням і науковою діяльністю, у подmiot з art. 7 ust. 1 pkt 1–7. Це не загальне звільнення для будь-якої роботи в закладі освіти.",
      rules: [
        {
          locator: "Art. 100; art. 325 ust. 1 PSWiN",
          explanation:
            "Не потрібні zezwolenie na pracę або oświadczenie, якщо одночасно є cudzoziemiec, названий podmiot art. 7 ust. 1 pkt 1–7 і робота, пов'язана з kształcenie та działalność naukowa.",
        },
      ],
      legalEffect:
        "Виняток залежить від виду завдань і статусу установи; він не визначає автоматично легальність pobyt, страхування чи доступ до регульованої професії.",
      foreignersCase:
        "Для викладача або науковця зафіксуйте конкретні завдання та перевірте, чи установа входить до art. 7 ust. 1 pkt 1–7 PSWiN. Іншу роботу в тій самій установі оцінюйте окремо.",
    },
  ]),
})
