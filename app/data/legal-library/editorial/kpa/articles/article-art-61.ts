import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "61",
      provisionId: "kpa-art-61",
      reviewStatus: "reviewed",
      summary:
        "Стаття визначає, як і коли адміністративне провадження починається на вимогу сторони або з ініціативи organu. Вона також встановлює дату wszczęcia та обов’язок повідомити всіх сторін.",
      rules: [
        {
          locator: "§ 1–2",
          explanation:
            "Провадження починається на żądanie strony або z urzędu. Якщо закон вимагає заяви сторони, organ може почати справу z urzędu через szczególnie ważny interes strony, але має отримати її згоду під час провадження. Якщо згоди не отримано, провадження припиняють через umorzenie.",
        },
        {
          locator: "§ 3–3a",
          explanation:
            "Для провадження на вимогу сторони днем wszczęcia є день doręczenia żądania organowi, а для електронного подання — день wystawienia dowodu otrzymania за правилами doręczeń elektronicznych.",
        },
        {
          locator: "§ 4",
          explanation:
            "Про wszczęciu postępowania organ зобов’язаний повідомити всі особи, які є сторонами справи.",
        },
        {
          locator: "§ 5",
          explanation:
            "Під час першої дії, адресованої стороні, organ передає інформацію про обробку персональних даних, якщо сторона вже не має актуальної інформації.",
        },
      ],
      legalEffect:
        "Від дати wszczęcia виникає процесуальна справа і починають діяти пов’язані з нею обов’язки organu та права сторін.",
      foreignersCase:
        "Це загальні правила KPA. Для конкретного звернення іноземця окремо встановлюють допустимий канал, належне подання та спеціальні правила відповідної процедури. Сам факт отримання установою будь-якого листа не визначає початок кожної справи про pobyt.",
    },
  ],
})
