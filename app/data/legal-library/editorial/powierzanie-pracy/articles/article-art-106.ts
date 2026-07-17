import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-106",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 106 передбачає, що до незавершених на день набрання чинності новою ustawy проваджень про zezwolenie na pobyt czasowy i pracę, його зміну та pobyt czasowy для роботи у zawodzie wymagającym wysokich kwalifikacji застосовується ustawa, змінена в art. 96, у новій редакції.",
          sourceLocator: "Art. 106",
        },
        {
          kind: "practical-inference",
          text: "Це правило визначає редакцію норм для названої справи про pobyt; воно не означає автоматичної видачі zezwolenia і не скасовує необхідності окремо оцінити умови роботи.",
          sourceLocator: "Art. 106",
        },
      ],
      summary:
        "На відміну від деяких інших перехідних норм, стаття спрямовує незавершені провадження про окремі види pobyt до нової редакції ustawa o cudzoziemcach.",
      rules: [
        {
          locator: "Art. 106",
          explanation:
            "Охоплюються три категорії: zezwolenie na pobyt czasowy i pracę, зміна такого zezwolenia та zezwolenie na pobyt czasowy для роботи у zawodzie wymagającym wysokich kwalifikacji.",
        },
        {
          locator: "Art. 106",
          explanation:
            "Провадження має бути wszczęte до набрання чинності новою ustawy і не завершене до цього дня. Для нього береться нова редакція ustawy, зміненої в art. 96.",
        },
      ],
      legalEffect:
        "Норма змінює перехідний спосіб оцінки названих справ про pobyt. Вона не перетворює заяву на дозвіл і не робить legalny pobyt або доступ до роботи автоматичними.",
      foreignersCase:
        "Встановіть вид заяви, дату wszczęcia та стан провадження на дату переходу. Потім зіставте вимоги нової редакції з документами про pobyt і роботу; не змішуйте право перебування з правом виконувати роботу.",
    },
  ]),
})
