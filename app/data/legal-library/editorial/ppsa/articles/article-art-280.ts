import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-280",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 280 § 1 зобов’язує суд на posiedzenie niejawnym перевірити, чи skarga o wznowienie подана в строк і чи спирається на ustawowa podstawa wznowienia; за відсутності вимоги суд odrzuci скаргу, інакше призначить rozprawa. За вимогою суду заявник має uprawdopodobnić обставини дотримання строку або dopuszczalność wznowienia.",
          sourceLocator: "Art. 280 § 1–2",
        },
      ],
      summary:
        "Стаття встановлює попередню перевірку строку й законної підстави та можливість вимагати від заявника підтвердити допустимість.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "На першому етапі суд перевіряє не весь спір по суті, а строк і ustawowa podstawa; відсутність одного з них веде до odrzucenie, а не до призначення rozprawa.",
        },
        {
          locator: "§ 2",
          explanation:
            "На wezwanie суду заявник має uprawdopodobnić факти, що стосуються строку або dopuszczalność wznowienia.",
        },
      ],
      legalEffect:
        "Проходження попередньої перевірки означає лише призначення rozprawa, а не визнання підстави доведеною і не позитивний результат wznowienie.",
      foreignersCase:
        "Якщо skarga іноземця подана до суду, відокремте posiedzenie niejawne щодо строку й ustawowa podstawa від подальшої rozprawa. На żądanie суду заявник має uprawdopodobnić обставини, що підтверджують строк або dopuszczalność wznowienia.",
    },
  ]),
})
