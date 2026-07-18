import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-196",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "WSA може зупинити виконання оскарженої ухвали до вирішення окремого оскарження (zażalenie); таке рішення може бути прийняте на закритому засіданні.",
          sourceLocator: "Art. 196",
        },
      ],
      summary:
        "Стаття дозволяє тимчасово зберегти становище, поки NSA перевіряє ухвалу.",
      rules: [
        {
          locator: "Art. 196",
          explanation:
            "Покажіть, яка ухвала оскаржена та чому її виконання до рішення NSA матиме значення. Подання окремого оскарження (zażalenie) саме по собі не дорівнює зупиненню.",
        },
      ],
      legalEffect:
        "Зупинення є тимчасовим і діє до вирішення окремого оскарження (zażalenie); воно не визначає, чи оскарження буде успішним.",
      foreignersCase:
        "У справі про перебування перевірте окрему ухвалу про зупинення виконання (wstrzymanie), перш ніж вважати, що процесуальний наслідок оскарженого документа не діє.",
    },
  ],
})
