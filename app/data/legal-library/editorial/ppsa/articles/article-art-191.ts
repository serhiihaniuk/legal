import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-191",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "На заяву сторони NSA разом із касаційною справою перевіряє ті проміжні ухвали WSA, які не підлягали окремому оскарженню (zażalenie), але вплинули на кінцевий результат.",
          sourceLocator: "Art. 191",
        },
      ],
      summary:
        "Стаття дозволяє відкладений контроль важливої проміжної ухвали.",
      rules: [
        {
          locator: "Art. 191",
          explanation:
            "Потрібні три елементи: відсутність окремого оскарження, вплив ухвали на результат і чітка заява сторони про її перевірку.",
        },
      ],
      legalEffect:
        "NSA не переглядає автоматично кожну проміжну дію WSA; сторона має показати її значення для рішення.",
      foreignersCase:
        "У справі про перебування збережіть проміжну ухвалу або запис у протоколі та поясніть у касації, як вона змінила можливість довести вимогу.",
    },
  ],
})
