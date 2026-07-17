import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-55",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "За невиконання обов’язку передати skarga, akta та відповідь sąd може на wniosek skarżący накласти на орган grzywna; після накладення grzywna за додатковим żądanie skarżący суд може розглянути справу за odpis skarga лише коли фактичний і правовий стан у skarga не викликає обґрунтованих сумнівів. Про rażące випадки суд повідомляє компетентні органи.",
          sourceLocator: "Art. 55 § 1–3",
        },
      ],
      summary:
        "Стаття дає судовий інструмент проти невиконання органом обов’язків передачі матеріалів, але кожен захід має власні умови.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Sąd на wniosek skarżący може постановити grzywna за невиконання обов’язків art. 54 § 2; розмір відсилає до art. 154 § 6, а postanowienie може бути на posiedzenie niejawne.",
        },
        {
          locator: "§ 2",
          explanation:
            "Якщо після grzywna орган не передав skarga, sąd може на żądanie skarżący розглянути справу за надісланим odpis skarga, коли фактичний і правовий стан, викладений у ній, не викликає обґрунтованих сумнівів.",
        },
        {
          locator: "§ 3",
          explanation:
            "Про rażące випадки порушення обов’язків за § 2 або art. 54 § 2 skład orzekający чи prezes sądu повідомляє органи, компетентні розглядати petycje, skargi та wnioski.",
        },
      ],
      legalEffect:
        "Механізм захищає доступ до суду від бездіяльності органу, але grzywna та розгляд за odpis не виникають автоматично: потрібні передбачені статтею wniosek або żądanie й фактичні умови.",
      foreignersCase:
        "Якщо орган у справі cudzoziemca не передає skarga, документуйте дату її отримання органом; окремо оцініть wniosek про grzywna і, після неї, żądanie розгляду за odpis.",
    },
  ]),
})
