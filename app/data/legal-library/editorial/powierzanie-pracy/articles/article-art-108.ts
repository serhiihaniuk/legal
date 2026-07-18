import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-108",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 108 ust. 1 для прямо перелічених положень прирівнює остаточне покарання за проступок з art. 120 ust. 1 старого закону до остаточного покарання за проступок з art. 84 ust. 1 нового закону.",
          sourceLocator: "Art. 108 ust. 1",
        },
        {
          kind: "statute-text",
          text: "Art. 108 ust. 2 встановлює таке саме прирівнювання між остаточними покараннями за проступки з art. 120 ust. 3–5 старого закону та art. 84 ust. 3–5 нового закону.",
          sourceLocator: "Art. 108 ust. 2",
        },
        {
          kind: "practical-inference",
          text: "Еквівалентність діє в межах прямо перелічених у статті посилань; вона не є загальним висновком про однаковість будь-яких старих і нових правопорушень.",
          sourceLocator: "Art. 108 ust. 1–2",
        },
      ],
      summary:
        "Стаття зберігає значення остаточних покарань за проступки зі старого закону для конкретних правових оцінок, які тепер посилаються на art. 84 нового закону.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Для положень, перелічених у ust. 1, остаточне покарання за art. 120 ust. 1 враховують як остаточне покарання за art. 84 ust. 1.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Для положень, перелічених у ust. 2, остаточне покарання за art. 120 ust. 3–5 враховують як остаточне покарання за art. 84 ust. 3–5.",
        },
        {
          locator: "ust. 1–2",
          explanation:
            "Потрібне саме остаточне покарання (prawomocne ukaranie). Прирівнювання діє лише під час застосування положень, прямо перелічених у статті.",
        },
      ],
      legalEffect:
        "Норма забезпечує перехідне прирівнювання остаточних покарань для окремих оцінок у справах іноземців. Вона не встановлює нової санкції і не визначає права на роботу поза застосуванням прямо перелічених положень.",
      foreignersCase:
        "Отримайте рішення, яким остаточно накладено покарання, визначте точний пункт старого art. 120 і перевірте конкретне положення, яке його враховує. Не робіть висновку лише з номера статті або з самого факту незавершеного провадження.",
    },
  ]),
})
