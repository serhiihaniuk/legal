import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-329",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 329 передбачає przymusowe wykonanie decyzji o zobowiązaniu do powrotu, якщо cudzoziemiec не виїхав добровільно у визначений строк, а також якщо строк не встановлено або після рішення виникла ймовірність втечі чи загроза безпеці; виконання полягає у doprowadzenie до кордону або порту, а стаття визначає компетентних органів і запис дати виїзду.",
          sourceLocator: "Art. 329 ust. 1–5",
        },
      ],
      summary:
        "Стаття визначає, коли рішення про повернення виконується примусово, як відбувається doprowadzenie та хто його здійснює.",
      rules: [
        {
          locator: "ust. 1–2a",
          explanation:
            "Підставами є невиїзд у строк, відсутність строку або нові обставини втечі чи безпеки; допомога в dobrowolny powrót у названій Art. 334 ситуації виключає виконання.",
        },
        {
          locator: "ust. 3",
          explanation:
            "Doprowadzenie здійснюється до кордону або до повітряного чи морського порту держави, до якої особу повертають.",
        },
        {
          locator: "ust. 4–5",
          explanation:
            "Стаття розподіляє виконання між komendant Straży Granicznej і вимагає записати дату залишення Польщі в реєстрі.",
        },
      ],
      legalEffect:
        "Примусове виконання є наслідком умов, перелічених статтею; перевірка добровільного виїзду, строку та винятку Art. 334 має значення до виконання.",
      foreignersCase:
        "Не ігноруйте строк у decyzja: зберігайте доказ виїзду або звертайтеся щодо dobrowolny powrót; перевірте, чи орган посилається на конкретну підставу примусового виконання.",
    },
  ]),
})
