import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const ppsaLaw = createLegalTextAuthor("ppsa")
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-145a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`У випадках ${ppsaLaw.article("145", "art. 145 § 1")} pkt 1 lit. a або pkt 2, якщо це виправдано обставинами, суд зобов’язує орган у визначений строк видати decyzja або postanowienie, вказуючи спосіб załatwienia справи чи її rozstrzygnięcie, крім випадку, коли результат залишено на uznanie органу. За невидачі в строк сторона може подати skarga про встановлення права або обов’язку; суд оцінює rażące naruszenie prawa та може накласти grzywna або присудити суму.`,
          sourceLocator: "Art. 145a § 1–3",
        },
      ],
      summary:
        "Стаття описує, як суд може зобов’язати орган видати рішення після визначених порушень, а також що робити, якщо орган не виконав такий обов’язок у строк.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Суд визначає строк і спосіб załatwienia або розпорядження, але застереження про uznanie органу не дозволяє автоматично підмінити його розсуд.",
        },
        {
          locator: "§ 2",
          explanation:
            "Орган повідомляє суд про видану decyzja або postanowienie протягом семи днів; за неповідомлення можливе grzywna.",
        },
        {
          locator: "§ 3",
          explanation:
            "Якщо акт не видано в строк, сторона може вимагати orzeczenie про право або обов’язок, коли обставини це дозволяють; суд також оцінює rażące naruszenie.",
        },
      ],
      legalEffect:
        "Норма посилює виконання судового рішення у визначених випадках, але застереження про uznanie органу та умова обставин не дають універсальної гарантії конкретної decyzja.",
      foreignersCase: ppsaLaw.text`Якщо після суду у справі про pobyt орган зобов’язаний видати decyzja або postanowienie, зафіксуйте встановлений строк і семиденний обов’язок повідомлення. Невидача може відкрити шлях із ${ppsaLaw.article("145a", "§ 3")}, але це не означає автоматичної видачі дозволу.`,
    },
  ],
})
