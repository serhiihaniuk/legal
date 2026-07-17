import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-50",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Skargę може подати кожен, хто має interes prawny, а також перелічені публічні суб’єкти й organizacja społeczna у межах діяльності за статутом за умов участі в postępowanie administracyjne; інший суб’єкт — якщо це дає ustawa.",
          sourceLocator: "Art. 50 § 1–2",
        },
      ],
      summary:
        "Право на skarga залежить не лише від незгоди, а передусім від interes prawny або спеціальної законної підстави.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Особа має показати власний interes prawny; для organizacja społeczna важливі statutowa działalność та участь в адміністративній справі.",
        },
        {
          locator: "§ 2",
          explanation:
            "Спеціальна ustawa може надати право на skarga іншому суб’єкту.",
        },
      ],
      legalEffect:
        "Норма визначає коло потенційних skarżący, але не доводить автоматично допустимість конкретної skarga.",
      foreignersCase:
        "Cudzoziemiec, який оскаржує decyzja про його pobyt, має пояснити власний interes prawny; окремо перевірте представництво неповнолітнього.",
    },
  ]),
})
