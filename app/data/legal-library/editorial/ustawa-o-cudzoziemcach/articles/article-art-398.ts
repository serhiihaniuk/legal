import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-398",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Замість strzeżony ośrodek або areszt dla cudzoziemców можна postanowienie застосувати інші заходи, коли є визначені ризики щодо рішення про powrót, невиконання строку виїзду або необхідності забезпечити передачу за rozporządzenie 604/2013 чи міжнародною угодою.",
          sourceLocator: "Art. 398 ust. 1 pkt 1–5",
        },
        {
          kind: "statute-text",
          text: "Такі заходи полягають у періодичній явці до Straż Graniczna, грошовому zabezpieczenie не нижче подвійної мінімальної зарплати, передачі документа подорожі в depozyt та проживанні у визначеному місці; postanowienie можна оскаржити до sąd rejonowy протягом 7 днів і воно негайно виконується.",
          sourceLocator: "Art. 398 ust. 2–8",
        },
      ],
      summary:
        "Стаття регулює альтернативні до ізоляції заходи для забезпечення повернення або передачі іноземця та встановлює їхній зміст, виконання, оскарження і наслідки невиконання.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Потрібна одна з конкретних обставин: prawdopodobieństwo decyzja без строку dobrowolny wyjazd через art. 315 ust. 2 pkt 1; уже видана така decyzja і потреба zabezpieczenie її виконання; пропущений строк виїзду та неможливість негайного wykonanie; потреба zabezpieczenie передачі за art. 28 rozporządzenie 604/2013 із значною ймовірністю ucieczka та неможливістю негайної передачі; або потреба zabezpieczenie передачі до іншої держави за міжнародною угодою, коли негайна передача неможлива.",
        },
        {
          locator: "ust. 2–4",
          explanation:
            "Можна поєднати явку, грошове zabezpieczenie, depozyt документа та визначене проживання. За втечі або невиконання обов’язків суд може постановити przepadek zabezpieczenie.",
        },
        {
          locator: "ust. 5–8",
          explanation:
            "Postanowienie видає organ Straż Graniczna, який встановив обставини з ust. 1 pkt 1 або 3, видав decyzja з pkt 2 або затримав cudzoziemca для цілей art. 394 ust. 1a pkt 2 або 3. Zażalenie подається до sąd rejonowy за місцезнаходженням цього органу протягом 7 днів від doręczenie; суд розглядає його протягом 7 днів, а postanowienie виконується негайно.",
        },
      ],
      legalEffect:
        "Норма дає менш ізоляційний спосіб zabezpieczenie, але він створює обов’язкові умови та фінансовий ризик. Негайне виконання не означає, що строк для zażalenie зникає.",
      foreignersCase:
        "Прочитайте postanowienie рядок за рядком: підстава, орган, графік явок, сума zabezpieczenie, depozyt, адреса і дата doręczenie. За потреби рахуйте 7-денний строк для zażalenie.",
    },
  ]),
})
