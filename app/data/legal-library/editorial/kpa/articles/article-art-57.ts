import { createLegalTextAuthor } from "../../../legal-text"

import { defineKpaEditorialPart } from "../define-kpa-part"

const kpaLaw = createLegalTextAuthor("kpa")
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "57",
      provisionId: "kpa-art-57",
      reviewStatus: "reviewed",
      summary:
        "Стаття встановлює спосіб обчислення строків у днях, тижнях, місяцях і роках, перенос останнього дня та дії, що зберігають строк.",
      rules: [
        {
          locator: "§ 1–3a",
          explanation:
            "Для днів не рахується день початкової події; тижні, місяці й роки завершуються у відповідний календарний день за правилами для випадку, коли такого дня немає.",
        },
        {
          locator: "§ 4",
          explanation:
            "Якщо останній день припадає на ustawowo wolny dzień або sobotę, строк завершується наступного дня, що не є таким днем.",
        },
        {
          locator: "§ 5 pkt 1–6",
          explanation: kpaLaw.text`Для електронного способу лист до спливу строку надсилають на ADE органу, а відправник має отримати dowód otrzymania за ${kpaLaw.external("art. 41 ustawy o doręczeniach elektronicznych", "https://eli.gov.pl/api/acts/DU/2026/3/text/T/D20260003L.pdf")}. Інші названі способи охоплюють відповідного поштового оператора, польський консулат та визначені випадки подання військовослужбовцем, членом екіпажу морського судна або ув'язненою особою. Звичайне електронне надсилання без цих передумов не прирівнюється до першого способу.`,
        },
      ],
      legalEffect:
        "Правильне визначення останнього дня і належне подання до його спливу вирішують, чи czynność була своєчасною.",
      foreignersCase: kpaLaw.text`Для відповіді на wezwanie або odwołania іноземця потрібно зафіксувати подію-початок, спосіб подання і доказ з ${kpaLaw.article("57", "§ 5")}, а не лише дату підготовки письма.`,
    },
  ],
})
