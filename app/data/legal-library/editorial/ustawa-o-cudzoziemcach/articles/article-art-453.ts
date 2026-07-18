import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-453",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("453", "Art. 453")} передбачає надання даних через urządzenia telekomunikacyjne уповноваженим суб’єктам після jednorazowy wniosek і згоди Szef Urzędu, якщо виконані сукупні умови щодо захищених urządzenia або systemy, технічних та організаційних zabezpieczenia і обґрунтованості такого способу завданнями або діяльністю. Ust. 2–3 регулюють спільний wniosek та oświadczenia суб’єктів.`,
          sourceLocator: "Art. 453 ust. 1–3",
        },
      ],
      summary:
        "Стаття визначає додаткові умови доступу до даних через телекомунікаційні або teleinformatyczne systemy та дозволяє одному суб’єкту подати wniosek також від імені інших за встановлених умов.",
      rules: [
        {
          locator: "ust. 1 pkt 1–3",
          explanation:
            "Потрібні jednorazowy wniosek і згода Szef Urzędu, а також одночасне виконання трьох умов: належно захищені urządzenia або systemy, zabezpieczenia для обробки danych osobowych та завдання або діяльність, що виправдовують отримання даних цим способом.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Один uprawniony podmiot може подати wniosek від свого імені та від імені інших, якщо всі користуються тими самими systemy і виконують такі самі виправдовувальні завдання або діяльність; альтернативно заявником може бути minister, який kieruje відповідним dział administracji rządowej.",
        },
        {
          locator: "ust. 3",
          explanation:
            "До wniosek у режимі ust. 2 додається oświadczenie кожного суб’єкта, якого стосується wniosek, про виконання умов з ust. 1.",
        },
      ],
      legalEffect:
        "Норма не дає загального права на дистанційний доступ: потрібні згода Szef Urzędu, технічна й організаційна безпека та обґрунтування способом виконання завдань. Спільний wniosek має відповідати окремим умовам ust. 2.",
      foreignersCase:
        "Перевірте wniosek, згоду Szef Urzędu, перелік systemy, заходи захисту danych osobowych і конкретні завдання, що виправдовують доступ; для спільної заяви окремо перевірте oświadczenia та спільність systemy або завдань.",
    },
  ],
})
