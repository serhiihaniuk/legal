import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
const workLaw = createLegalTextAuthor("powierzanie-pracy")

export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-114",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("114", "Art. 114")} вимагає для zezwolenia na pobyt czasowy i pracę одночасно: належного ubezpieczenia або покриття лікування, допустимої професії, винагороди не нижчої за порівнювану працю та місячної суми не нижчої за minimalne wynagrodzenie незалежно від часу праці й виду правовідносин.`,
          sourceLocator: "Art. 114 ust. 1–5",
        },
      ],
      summary:
        "Це сукупний тест. Реальна мета pobytu, умови майбутньої роботи, зарплата, страхування й можливі професійні обмеження мають узгоджуватися між договором, załącznikiem і доказами.",
      rules: [
        {
          locator: "Art. 114 ust. 1 pkt 1, 3–5",
          explanation: foreignersLaw.text`Заявник показує ubezpieczenie zdrowotne або покриття лікування. Робота не повинна належати до переліку з ${workLaw.article("31", "Art. 31")} ust. 3 ustawy o warunkach dopuszczalności powierzania pracy cudzoziemcom, а зарплата з załącznika за ${foreignersLaw.article("106", "Art. 106")} ust. 2 має пройти одночасно тест порівнюваної праці й мінімальної місячної суми.`,
        },
        {
          locator: "Art. 114 ust. 1a i 5",
          explanation:
            "Для zawodu pożądanego dla polskiej gospodarki потрібні відповідні kwalifikacje та умови ust. 1 pkt 1, 4 і 5. Сам перелік таких професій може бути встановлений окремим rozporządzeniem.",
        },
        {
          locator: "Art. 114 ust. 4–4b",
          explanation:
            "Якщо іноземець звільнений від обов’язку мати zezwolenie na pracę, не застосовують pkt 3 і 4, але не автоматично решту умов. Страхування з майбутньої роботи може виконати pkt 1, а при кількох роботодавцях для pkt 5 складають зарплати з усіх відповідних załączników.",
        },
      ],
      legalEffect:
        "Невиконання необхідної умови перешкоджає наданню комбінованого дозволу за цією підставою. Навіть позитивна decyzja діє в установлених нею межах і не скасовує окремих вимог регульованої професії.",
      foreignersCase:
        "Зробіть таблицю «умова → факт → доказ»: ubezpieczenie, професія й можливий перелік, porównywalne wynagrodzenie, minimalne wynagrodzenie, кілька роботодавців і підстава можливого zwolnienia. Потім звірте все з кожним załącznikiem.",
    },
  ],
})
