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
      provisionId: "ppsa-art-149",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`Задовольняючи skarga на bezczynność або przewlekłe prowadzenie postępowania у справах ${ppsaLaw.article("3", "art. 3 § 2")} pkt 1–4, а також на przewlekłość у справі pkt 4a, суд може зобов’язати орган видати akt, interpretację чи здійснити czynność, зобов’язати визнати право або обов’язок і встановлює факт бездіяльності чи затягування провадження; він також оцінює rażące naruszenie prawa, а за умов ${ppsaLaw.article("149", "§ 1b")} може вирішити існування права чи обов’язку, накласти grzywna або присудити суму.`,
          sourceLocator: "Art. 149 § 1–2",
        },
      ],
      summary:
        "Стаття дає суду кілька способів реагування на bezczynność або przewlekłość: від зобов’язання органу до окремих фінансових наслідків.",
      rules: [
        {
          locator: "§ 1 pkt 1–3",
          explanation:
            "Розрізняйте наказ видати akt або зробити czynność, наказ визнати право чи обов’язок і саме stwierdzenie bezczynności або przewlekłości.",
        },
        {
          locator: "§ 1a–1b",
          explanation:
            "Суд встановлює, чи було rażące naruszenie prawa; безпосереднє вирішення права або обов’язку можливе лише за умов характеру справи та безсумнівного стану.",
        },
        {
          locator: "§ 2",
          explanation: ppsaLaw.text`Grzywna або сума на користь skarżący можливі додатково і мають межу, прив’язану до ${ppsaLaw.article("154", "art. 154 § 6")}.`,
        },
      ],
      legalEffect:
        "Судовий захист від бездіяльності спрямований на процесуальну реакцію та, за умов статті, на право чи обов’язок; він не гарантує наперед позитивного адміністративного рішення.",
      foreignersCase: ppsaLaw.text`У справі про затягування розгляду wniosku про pobyt спершу визначте, чи належить оскаржувана bezczynność або przewlekłość до справ, перелічених у ${ppsaLaw.article("3", "art. 3 § 2")} pkt 1–4, а у випадку pkt 4a — чи йдеться саме про przewlekłość. Навіть зобов’язання органу розглянути справу не дорівнює обов’язку видати дозвіл.`,
    },
  ],
})
