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
      provisionId: "ppsa-art-235a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`${ppsaLaw.article("235a", "Art. 235a")} передбачає opłatę kancelaryjną за wydruki pism і заłączników, поданих як документ електронний, якщо їх готують для doręczenia сторонам, які не користуються засобами електронної комунікації для отримання письмових документів.`,
          sourceLocator: "Art. 235a",
        },
      ],
      summary:
        "Друк електронно поданих письма та додатків для сторони, яка не отримує документи електронно, може мати окрему opłata kancelaryjna.",
      rules: [
        {
          locator: "Art. 235a",
          explanation:
            "Перевірте одночасно електронну форму подання, підготовку wydruk для doręczenie та спосіб отримання письм іншою стороною.",
        },
      ],
      legalEffect:
        "Норма стосується конкретної вартості друку для doręczenie; вона не робить кожне електронне подання платним.",
      foreignersCase:
        "У справі іноземця відокремте opłata за сам процесуальний документ від можливої opłata за його паперовий wydruk для іншого учасника.",
    },
  ],
})
