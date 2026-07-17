import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-315",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 315 ust. 1 передбачає в decyzji o zobowiązaniu do powrotu termin dobrowolnego wyjazdu від 8 до 30 днів від doręczenia; за ймовірності втечі або вимог оборони, безпеки чи порядку строк не визначають, а decyzja без строку з підстави Art. 315 ust. 2 pkt 2 підлягає негайному виконанню. Ust. 3 називає обставини оцінки ризику втечі, ust. 4a є «uchylony», а ust. 4b передбачає окреме umorzenie щодо строку.",
          sourceLocator: "Art. 315 ust. 1–9",
        },
      ],
      summary:
        "Стаття визначає звичайний строк добровільного виїзду, випадки його відсутності, оцінку ризику втечі та спеціальні правила щодо держави повернення.",
      rules: [
        {
          locator: "ust. 1–3",
          explanation:
            "Строк становить 8–30 днів від doręczenia; його не визначають за ймовірності втечі або з міркувань оборони, безпеки чи порядку. Ризик оцінюють, зокрема, за заявою про непідкорення, відсутністю документів особи, незаконним перетинанням кордону або в’їздом під час wpis до wykaz чи SIS.",
        },
        {
          locator: "ust. 4–6",
          explanation:
            "Рішення без terminu називає państwo powrotu; ust. 4a є uchylony, а ust. 4b допускає umorzenie провадження в частині строку, коли особа добровільно перетинає кордон, залишаючи państwa obszaru Schengen. За безпекової підстави рішення виконується негайно, а після незаконного перетинання кордону строк припиняється z mocy prawa.",
        },
        {
          locator: "ust. 7–9",
          explanation:
            "Ust. 7 визначає як państwo powrotu державу ЄС, де cudzoziemiec з Art. 309 або 309a зберігає ochronę międzynarodową. Ust. 8 стосується особи, яка мала pobyt за Art. 186 ust. 1 pkt 3, а ust. 9 — члена її сім’ї; у цих випадках називається держава з zezwolenie na pobyt rezydenta długoterminowego UE.",
        },
      ],
      legalEffect:
        "Наявність або відсутність строку істотно впливає на час добровільного виїзду, але висновок залежить від конкретної підстави, оцінки ризику та тексту decyzja.",
      foreignersCase:
        "Перевірте дату doręczenia, кількість днів і мотив, чому строк не надано; окремо зверніть увагу на ust. 3, позначений як uchylony ust. 4a, можливе umorzenie за ust. 4b та спеціальні правила państwo powrotu в ust. 7–9.",
    },
  ]),
})
