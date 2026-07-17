import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "98",
      provisionId: "kpa-art-98",
      reviewStatus: "reviewed",
      summary:
        "Орган може зупинити провадження на прохання сторони, яка його ініціювала, якщо інші сторони не заперечують і це не загрожує суспільному інтересу.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Zawieszenie є факультативним і залежить від трьох названих умов.",
        },
        {
          locator: "§ 2",
          explanation:
            "Якщо протягом трьох років жодна сторона не просить поновити справу, початкову вимогу вважають відкликаною.",
        },
      ],
      legalEffect:
        "Сторона може отримати паузу, але тривала бездіяльність призводить до юридичного відкликання żądania wszczęcia.",
      foreignersCase:
        "Заявник у справі про pobyt має врахувати, що добровільне zawieszenie не може тривати безкінечно і потребує своєчасної заяви про podjęcie.",
    },
  ],
})
