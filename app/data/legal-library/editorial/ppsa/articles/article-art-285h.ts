import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-285h",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 285h передбачає, що NSA на posiedzeniu niejawnym odrzuca skargę o stwierdzenie niezgodności z prawem prawomocnego orzeczenia, якщо вона підлягала odrzuceniu судом нижчої інстанції, подана після спливу строку, не відповідає вимогам Art. 285e § 1 або є niedopuszczalna з іншої причини; skarga також підлягає odrzuceniu, якщо змінити оскаржене orzeczenie іншими засобами було або є можливим чи немає винятку з Art. 285a § 2.",
          sourceLocator: "Art. 285h § 1–2",
        },
      ],
      summary:
        "Норма визначає процесуальні підстави, за яких NSA не переходить до змістовного розгляду skarga про stwierdzenie niezgodności з prawem prawomocnego orzeczenia.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Перевірте строк, вимоги Art. 285e § 1, допустимість skarga та те, чи підлягала вона odrzuceniu судом нижчої інстанції.",
        },
        {
          locator: "§ 2",
          explanation:
            "Окремо встановіть, чи можна було або ще можна змінити оскаржене orzeczenie іншим środkiem prawnym і чи наявний винятковий випадок Art. 285a § 2.",
        },
      ],
      legalEffect:
        "Odrzucenie перешкоджає розгляду цієї skarga за суттю; сама стаття не встановлює, що оскаржене orzeczenie є законним.",
      foreignersCase:
        "У справі іноземця щодо pobyt спочатку перевірте, чи ще доступний інший środek prawny проти orzeczenie та чи виконані вимоги до skarga; не ототожнюйте odrzucenie з оцінкою права на pobyt.",
    },
  ]),
})
