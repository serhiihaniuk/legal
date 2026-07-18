import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const regulationLaw = createLegalTextAuthor(
  "rozporzadzenie-wniosek-pobyt-czasowy"
)
export default defineEditorialPart<"rozporzadzenie-wniosek-pobyt-czasowy">({
  documentId: "rozporzadzenie-wniosek-pobyt-czasowy",
  editionId: "rozporzadzenie-wniosek-pobyt-czasowy-2026-553",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-annex-10",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: regulationLaw.text`${regulationLaw.annex("10", "Załącznik nr 10")} є WZÓR INFORMACJI про pobrane odciski linii papilarnych або їх відсутність; його заповнює особа, яка бере відбитки, а форма містить дані cudzoziemca, дату для wydania karty pobytu, позначку pobrano або nie pobrano, пальці чи причину та підпис службовця.`,
          sourceLocator: "Załącznik nr 10, tytuł, pouczenie та rubryki 1–4",
        },
      ],
      summary:
        "Це службовий формуляр для фіксації результату процедури odciski linii papilarnych, включно з випадком, коли їх не знято.",
      rules: [
        {
          locator: "Uwaga та pouczenie",
          explanation:
            "Форму заповнює osoba pobierająca odciski. Пояснення називає випадки, коли відбитки не беруться: вік до 6 років на день подання, фізична неможливість або підтверджена медична хвороба чи niepełnosprawność, через яку особа не може особисто прибути у відповідь на виклик воєводи (wezwanie wojewody).",
        },
        {
          locator: "rubryki 1–4",
          explanation:
            "Вносяться imię, nazwisko, data urodzenia та obywatelstwo, дата подання відбитків для karty pobytu, а також результат pobrano або nie pobrano.",
        },
        {
          locator: "rubryki про пальці та підпис",
          explanation:
            "Якщо відбитки взято, зазначаються відповідні пальці; якщо ні — причина неможливості. Наприкінці є дата, дані, посада та підпис особи, яка їх брала.",
        },
      ],
      legalEffect: regulationLaw.text`${regulationLaw.annex("10", "Załącznik nr 10")} підтверджує лише зафіксований процедурний стан odciski для цілей карти pobytu. Він не підтверджує матеріальні умови проживання й не замінює рішення.`,
      foreignersCase:
        "Після дії перевірте, чи правильно вказані результат, пальці або причина відсутності та дані службовця. Виняток із відбитків пояснює технічний етап, але не дає автоматичного права на pobyt.",
    },
  ],
})
