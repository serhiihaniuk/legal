import { createLegalTextAuthor } from "../../../legal-text"

import { defineKpaEditorialPart } from "../define-kpa-part"

const kpaLaw = createLegalTextAuthor("kpa")

const RODO_URL = "https://eur-lex.europa.eu/eli/reg/2016/679/oj"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "226a",
      provisionId: "kpa-art-226a",
      reviewStatus: "reviewed",
      summary:
        "Норма зобов'язує орган надати скаржнику або заявнику інформацію RODO при першій дії, спрямованій до нього. Вона стосується обробки персональних даних у процедурі skarg і wniosków.",
      rules: [
        {
          locator: "одне речення",
          explanation: kpaLaw.text`Компетентний орган передає skarżącemu або wnioskodawcy інформацію з ${kpaLaw.external("art. 13 RODO", RODO_URL)} ust. 1 i 2 RODO при першій czynności skierowanej do tej osoby.`,
        },
      ],
      legalEffect:
        "На початку контакту особа має отримати інформацію про адміністратора, цілі, підстави та інші елементи обробки даних, передбачені RODO.",
      foreignersCase:
        "Коли іноземець подає skargę на urząd, ця klauzula informacyjna пояснює використання його даних; вона не є відповіддю на скаргу по суті.",
    },
  ],
})
