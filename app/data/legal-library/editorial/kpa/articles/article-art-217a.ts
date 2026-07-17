import { createLegalTextAuthor } from "../../../legal-text"

import { defineKpaEditorialPart } from "../define-kpa-part"

const kpaLaw = createLegalTextAuthor("kpa")

const RODO_URL = "https://eur-lex.europa.eu/eli/reg/2016/679/oj"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "217a",
      provisionId: "kpa-art-217a",
      reviewStatus: "reviewed",
      summary:
        "Норма встановлює момент виконання інформаційного обов'язку RODO щодо особи, яка просить zaświadczenie. Інформацію надають при першій дії, спрямованій до заявника, якщо він уже не отримував актуальної інформації.",
      rules: [
        {
          locator: "перше речення",
          explanation: kpaLaw.text`Орган передає інформацію з ${kpaLaw.external("art. 13 RODO", RODO_URL)} ust. 1 i 2 RODO при першій czynności skierowanej do osoby.`,
        },
        {
          locator: "друге речення",
          explanation:
            "Повторювати інформацію не потрібно, якщо особа вже нею володіє і її зміст або обсяг не змінилися.",
        },
      ],
      legalEffect:
        "Орган має включити актуальне повідомлення про обробку персональних даних на початку контакту, але не дублювати незмінну інформацію.",
      foreignersCase:
        "Коли іноземець просить zaświadczenie, klauzula informacyjna пояснює обробку його даних; вона не є окремою вимогою до доведення умов pobytu.",
    },
  ],
})
