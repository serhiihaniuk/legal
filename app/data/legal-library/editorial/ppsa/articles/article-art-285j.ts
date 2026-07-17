import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-285j",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 285j передбачає, що NSA розглядає skargę o stwierdzenie niezgodności z prawem prawomocnego orzeczenia в межах зaskarżenia і в межах підстав; скаргу розглядають на posiedzeniu niejawnym, якщо важливі міркування не виправдовують призначення rozprawa.",
          sourceLocator: "Art. 285j",
        },
      ],
      summary:
        "NSA зв’язаний межами оскарження та підставами skarga, а письмовий розгляд є правилом із можливим винятком для rozprawa.",
      rules: [
        {
          locator: "Art. 285j zdanie pierwsze",
          explanation:
            "Уточніть, яку частину orzeczenie оскаржено і на яких підставах: за цими межами NSA не описує розгляд.",
        },
        {
          locator: "Art. 285j zdanie drugie",
          explanation:
            "Загальним способом є posiedzenie niejawne; rozprawa потребує важливих міркувань, які її виправдовують.",
        },
      ],
      legalEffect:
        "Стаття обмежує предмет розгляду і визначає його форму, але не гарантує ні призначення rozprawa, ні задоволення skarga.",
      foreignersCase:
        "У спорі іноземця про pobyt сформулюйте, яку частину prawomocne orzeczenie і які його правові підстави оскаржено; не виводьте результат із того, що засідання є niejawnym.",
    },
  ]),
})
