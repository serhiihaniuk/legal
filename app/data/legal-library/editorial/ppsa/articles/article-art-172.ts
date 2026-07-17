import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const ppsaLaw = createLegalTextAuthor("ppsa")
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ppsa-art-172",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "NSA unieważnia prawomocne orzeczenie суду адміністративного, винесене у справі, яка на момент рішення не підлягала юрисдикції суду через особу або предмет, і odrzuca skarga, якщо рішення не може бути усунуте іншим передбаченим законом способом; NSA діє за wniosek Prezesa NSA, із відповідним застосуванням правил про skarga kasacyjna.",
          sourceLocator: "Art. 172",
        },
      ],
      summary:
        "Стаття передбачає вузький надзвичайний механізм для prawomocne orzeczenie поза юрисдикцією sąd administracyjny.",
      rules: [
        {
          locator: "Art. 172 zdanie pierwsze",
          explanation:
            "Потрібно встановити відсутність юрисдикції через особу або предмет саме на момент orzekanie та неможливість іншого способу wzruszenie.",
        },
        {
          locator: "Art. 172 zdanie drugie",
          explanation:
            "Wniosek подає Prezes NSA; до розгляду відповідно застосовуються правила про skarga kasacyjna.",
        },
      ],
      legalEffect:
        "Це спеціальний механізм контролю юрисдикції, а не звичайна апеляція сторони на несприятливий wyrok.",
      foreignersCase: ppsaLaw.text`У справі про pobyt не розглядайте ${ppsaLaw.article("172", "art. 172")} як звичайний шлях для незгоди з оцінкою органу чи суду. Перевірка можлива лише в межах умов і wniosek, прямо названих статтею.`,
    },
  ],
})
