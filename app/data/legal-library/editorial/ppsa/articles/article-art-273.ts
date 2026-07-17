import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-273",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 273 допускає wznowienie, коли orzeczenie спиралося на podrobiony або przerobiony dokument чи на skazujący wyrok karny, який потім скасовано, або коли його отримано за допомогою przestępstwo; також — після виявлення нових обставин фактичних чи dowody, які могли вплинути на результат і якими сторона не могла скористатися раніше, та після виявлення prawomocne orzeczenie у тій самій справі.",
          sourceLocator: "Art. 273 § 1–3",
        },
      ],
      summary:
        "Норма охоплює нові обставини, докази, злочинне походження orzeczenie, скасований обвинувальний вирок і пізніше виявлене prawomocne orzeczenie щодо тієї самої справи.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Потрібно встановити зв’язок orzeczenie з підробленим або зміненим dokument, скасованим skazujący wyrok karny чи przestępstwo, а не лише вказати на сумнів у доказі.",
        },
        {
          locator: "§ 2–3",
          explanation:
            "Нові facts або dowody мають бути такими, що могли б вплинути на wynik справи, і такими, якими strona не могла скористатися в попередньому провадженні; при пізньому виявленні prawomocne orzeczenie щодо тієї самої справи суд бере до уваги також інші такі рішення з urzędu.",
        },
      ],
      legalEffect:
        "Перелік дає процесуальну можливість просити wznowienie, але не встановлює наперед, що новий доказ змінить результат; його пізніше виявлення та вплив потребують обґрунтування.",
      foreignersCase:
        "У спорі про pobyt відокремте пізніше виявлені facts або dowody від тих, якими strona вже могла скористатися. Покажіть, коли і як їх виявлено та чому strona не могла скористатися ними в попередньому провадженні.",
    },
  ]),
})
