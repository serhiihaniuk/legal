import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-285g",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 285g зобов’язує wojewódzki sąd administracyjny після doręczenie skarga o stwierdzenie niezgodności z prawem prawomocnego orzeczenia стороні протилежній, а якщо скаргу подав Prokurator Generalny або Rzecznik Praw Obywatelskich — обом сторонам, невідкладно передати akta справи до Naczelny Sąd Administracyjny.",
          sourceLocator: "Art. 285g",
        },
      ],
      summary:
        "Стаття визначає процесуальну передачу akt з WSA до NSA після вручення спеціальної skarga належним сторонам.",
      rules: [
        {
          locator: "Art. 285g",
          explanation:
            "Встановіть, кому вручено skarga: стороні протилежній заявнику або обом сторонам у випадку подання Prokurator Generalny чи Rzecznik Praw Obywatelskich; після цього WSA передає akta невідкладно.",
        },
      ],
      legalEffect:
        "Передача akt є наступним етапом процедури і не означає, що NSA вже визнав orzeczenie незаконним або що skarga обов’язково буде розглянута по суті.",
      foreignersCase:
        "У справі іноземця перевірте doręczenie skarga та факт передачі akt до NSA окремо від результату. Не вважайте повідомлення WSA про пересилання підтвердженням виграшу.",
    },
  ]),
})
