import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-76",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 76 визначає коло органів, яким на запит надаються дані з centralny rejestr, вимагає ідентифікації доступу, заходів безпеки та обмеження зберігання даних часом, необхідним для провадження.",
          sourceLocator: "Art. 76 ust. 1–4",
        },
      ],
      summary:
        "Доступ мають органи, перелічені законом: зокрема wojewoda, starosta, консул, UdSC, PIP, Straż Graniczna, Policja, KAS, ZUS та служби безпеки — кожен для своєї законної мети.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Dane можуть отримувати органи, названі в пунктах 1–15, для відповідних справ про працю, pobyt, візи, контроль, податки, страхування або завдання безпеки.",
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Доступ можливий, якщо можна встановити особу, обсяг, дату і мету доступу, забезпечено безпеку та нагляд; отримані дані зберігаються не довше необхідного для провадження.",
        },
        {
          locator: "ust. 4",
          explanation:
            "Надання даних відбувається з teleinformatyczny system, який веде minister właściwy do spraw pracy.",
        },
      ],
      legalEffect:
        "Стаття створює контрольований канал обміну даними, але не дає будь-якому органу загального доступу поза переліченою метою.",
      foreignersCase:
        "Якщо дані використані у вашій справі, перевірте орган, мету і зв'язок із предметом провадження. Питання захисту даних оцінюйте разом із конкретним способом їх отримання.",
    },
  ]),
})
