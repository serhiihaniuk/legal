import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-108",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 108 ust. 1 прирівнює, для перелічених положень ustawy o cudzoziemcach у редакції art. 96, prawomocne ukaranie за wykroczenie з art. 120 ust. 1 старої ustawy до prawomocne ukaranie за wykroczenie з art. 84 ust. 1 нової ustawy.",
          sourceLocator: "Art. 108 ust. 1",
        },
        {
          kind: "statute-text",
          text: "Art. 108 ust. 2 робить таке саме прирівнювання для prawomocne ukaranie за wykroczenia з art. 120 ust. 3–5 старої ustawy та art. 84 ust. 3–5 нової ustawy.",
          sourceLocator: "Art. 108 ust. 2",
        },
        {
          kind: "practical-inference",
          text: "Еквівалентність діє в межах прямо перелічених у статті посилань; вона не є загальним висновком про однаковість будь-яких старих і нових правопорушень.",
          sourceLocator: "Art. 108 ust. 1–2",
        },
      ],
      summary:
        "Стаття зберігає значення остаточних покарань за старими трудовими wykroczenia для конкретних перевірок, що тепер посилаються на art. 84 нової ustawy.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Для названих у ust. 1 положень покарання за art. 120 ust. 1 читається як покарання за art. 84 ust. 1.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Для названих у ust. 2 положень покарання за art. 120 ust. 3–5 читається як покарання за art. 84 ust. 3–5.",
        },
        {
          locator: "ust. 1–2",
          explanation:
            "Потрібне саме prawomocne ukaranie. Застосування залежить також від того, чи входить конкретна перевірка до переліку, наведеного в статті.",
        },
      ],
      legalEffect:
        "Норма забезпечує перехідну еквівалентність правопорушень для окремих оцінок у справах іноземців. Вона сама не встановлює окремої санкції, а визначає, як prawomocne ukaranie за старими нормами враховується при застосуванні прямо перелічених положень; право на роботу поза відповідною перевіркою вона не визначає.",
      foreignersCase:
        "Отримайте prawomocne рішення, визначте точний пункт старого art. 120 і перевірте конкретне положення ustawy o cudzoziemcach, яке його враховує. Не робіть висновок лише з номера статті або з самого факту незавершеного провадження.",
    },
  ]),
})
