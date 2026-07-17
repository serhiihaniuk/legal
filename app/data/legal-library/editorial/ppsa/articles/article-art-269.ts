import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-269",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 269 передбачає, що якщо склад sąd administracyjny, який розглядає справу, не поділяє stanowisko uchwała складу семи sędziów, усієї Izba або повного складу NSA, він передає виникле zagadnienie prawne відповідному складу; застосовуються відповідно Art. 187 § 1–2. У такому випадку відповідний склад приймає ponowna uchwała, і Art. 267 не застосовується. Якщо склад однієї Izba не поділяє stanowisko uchwała іншої Izba, питання передають повному складу NSA.",
          sourceLocator: "Art. 269 § 1–3",
        },
      ],
      summary:
        "Норма встановлює спеціальний механізм, коли склад адміністративного суду не погоджується зі stanowisko визначеної uchwała: питання не ігнорують, а передають на ponowna uchwała.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Спочатку встановіть, чи попереднє stanowisko міститься саме в uchwała складу семи sędziów, Izba або повного NSA. За незгоди склад, що розглядає справу, передає конкретне zagadnienie prawne відповідному складу.",
        },
        {
          locator: "§ 2",
          explanation:
            "Відповідний склад приймає ponowna uchwała; для цього випадку Art. 267 про відмову в прийнятті uchwała не застосовується.",
        },
        {
          locator: "§ 3",
          explanation:
            "Якщо конфлікт виник між uchwały різних Izba, питання передається повному складу NSA, а не вирішується лише однією з цих Izba.",
        },
      ],
      legalEffect:
        "Art. 269 визначає обов’язковий процесуальний маршрут для заявленої незгоди з названою uchwała; він не дає автоматичної відповіді на індивідуальну справу і не є новим засобом оскарження decyzja про pobyt.",
      foreignersCase:
        "Якщо у справі іноземця суд посилається на інше stanowisko NSA або хоче від нього відступити, визначте конкретну uchwała і перевірте, чи застосовано маршрут Art. 269. Не називайте будь-яку відмінність у мотивах «конфліктом uchwały» без перевірки її виду та складу.",
    },
  ]),
})
