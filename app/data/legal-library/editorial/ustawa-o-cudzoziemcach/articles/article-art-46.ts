import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-46",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("46", "Art. 46")} ust. 1 pkt 1–6 уповноважує міністра внутрішніх справ у погодженні з міністром закордонних справ визначити в rozporządzenie формуляри, фотографії, зразок дозволу та порядок роботи з відбитками і даними для zezwolenie na przekraczanie granicy w ramach małego ruchu granicznego.`,
          sourceLocator: "Art. 46 ust. 1 pkt 1–6",
        },
        {
          kind: "practical-inference",
          text: "Це делегація для технічних правил провадження і контролю, а не самостійне надання іноземцю дозволу на в’їзд.",
          sourceLocator: "Art. 46 ust. 1 pkt 1–6",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("46", "Art. 46")} визначає, які деталі щодо zezwolenie na przekraczanie granicy w ramach małego ruchu granicznego мають бути врегульовані підзаконним актом: формуляр заяви, кількість і технічні вимоги до фотографій, зразок дозволу, pobieranie odcisków linii papilarnych та запис і передавання даних.`,
      rules: [
        {
          locator: "Art. 46 pkt 1–6",
          explanation:
            "Rozporządzenie має врегулювати саме перелічені технічні елементи, щоб провадження було ефективним, а перетин кордону в рамках mały ruch graniczny — контрольованим.",
        },
        {
          locator: "status przepisu",
          explanation: foreignersLaw.text`${foreignersLaw.article("46", "Art. 46")} має status active у локальному corpus; конкретні зразки та вимоги треба брати з чинного розporządzenie, прийнятого на виконання цієї делегації.`,
        },
      ],
      legalEffect:
        "Стаття сама не підтверджує право конкретного cudzoziemiec на перетин кордону і не замінює рішення про zezwolenie. Вона визначає межі майбутнього технічного регулювання.",
      foreignersCase:
        "У справі перевірте заяву, фотографії, відбитки та дані дозволу за відповідним rozporządzenie; окремо підтвердьте, що сам дозвіл чинний і охоплює потрібний перетин.",
    },
  ],
})
