import { createLegalTextAuthor } from "../../../legal-text"

import { defineKpaEditorialPart } from "../define-kpa-part"

const kpaLaw = createLegalTextAuthor("kpa")
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "75",
      provisionId: "kpa-art-75",
      reviewStatus: "reviewed",
      summary:
        "Стаття встановлює відкритий каталог доказів: допустиме все, що допомагає з’ясувати справу і не суперечить закону. Вона також дозволяє прийняти oświadczenie strony замість urzędowego zaświadczenia у визначеній ситуації.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Dowodem може бути все, що сприяє wyjaśnieniu sprawy і не є sprzeczne z prawem, зокрема документи, zeznania świadków, opinie biegłych та oględziny.",
        },
        {
          locator: "§ 2",
          explanation: kpaLaw.text`Якщо закон не вимагає urzędowego zaświadczenia, organ на żądanie strony приймає її oświadczenie під відповідальністю за fałszywe zeznania; застосовується попередження за ${kpaLaw.article("83", "art. 83 § 3")}.`,
        },
      ],
      legalEffect:
        "Organ не може звужувати доказування до одного закритого переліку, але кожен доказ має бути законним і придатним для з’ясування справи.",
      foreignersCase:
        "У справі pobytowej це загальна доказова норма; спеціальний закон усе одно може вимагати конкретний документ або встановлювати особливий спосіб доведення умови.",
    },
  ],
})
