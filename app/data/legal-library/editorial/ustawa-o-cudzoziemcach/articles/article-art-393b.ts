import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-393b",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Якщо відповідальна інша держава-член погодилася прийняти іноземця за rozporządzenie 604/2013, Szef Urzędu видає decyzja o przekazaniu; він також є органом для wydanie przepustka за art. 29 ust. 1 zdanie trzecie цього розпорядження.",
          sourceLocator: "Art. 393b ust. 1–2",
        },
        {
          kind: "statute-text",
          text: "Іноземця можуть доставити до кордону або до аеропорту чи морського порту відповідальної держави; витрати doprowadzenie покриваються з державного бюджету, а Komendant Główny Straży Granicznej є компетентним у справах art. 31–32 rozporządzenie 604/2013.",
          sourceLocator: "Art. 393b ust. 3–7",
        },
      ],
      summary:
        "Стаття визначає наслідки згоди відповідальної держави за rozporządzenie 604/2013: рішення про передачу, можливий супровід, документ для передачі, облік перетину та бюджетне фінансування.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "Після згоди іншої держави Szef Urzędu видає decyzja o przekazaniu та може видати przepustka, передбачену rozporządzenie 604/2013.",
        },
        {
          locator: "ust. 3–5",
          explanation:
            "На wniosek Szef Urzędu різні підрозділи Straż Graniczna виконують doprowadzenie, а placówka фіксує місце і дату перетину кордону.",
        },
        {
          locator: "ust. 6–7",
          explanation:
            "Витрати покриває бюджет через кошти Komendant Główny, який також компетентний у справах art. 31–32 розпорядження.",
        },
      ],
      legalEffect:
        "Згода відповідальної держави дає підставу для рішення про przekazanie та організації передачі, але це інший режим, ніж decyzja o zobowiązaniu do powrotu.",
      foreignersCase:
        "Перевірте доказ згоди іншої держави, текст decyzja o przekazaniu, przepustka, маршрут, дату перетину та запис у реєстрі. Не називайте Dublin-передачу звичайною deportacja.",
    },
  ]),
})
