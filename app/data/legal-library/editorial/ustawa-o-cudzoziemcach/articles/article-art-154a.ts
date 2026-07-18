import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-154a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("154a", "Art. 154a")} передбачає cofnięcie дозволу ${foreignersLaw.article("151", "art. 151")} або ${foreignersLaw.article("151b", "art. 151b")}, крім ${foreignersLaw.article("101", "art. 101")} pkt 1–2, якщо дозвіл використовується не за метою, виникла обставина ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 2, 4, 5 або 8, або jednostka переважно сприяє незаконному в’їзду/побиту naukowiec.`,
          sourceLocator: "Art. 154a pkt 1–3",
        },
      ],
      summary:
        "Це спеціальна норма cofnięcie для звичайного дослідницького дозволу та mobilność długoterminowa.",
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "Порівнюється фактичне використання дозволу з метою, для якої його надали.",
        },
        {
          locator: "pkt 2",
          explanation: foreignersLaw.text`Достатньою спеціальною підставою є хоча б одна обставина ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 2, 4, 5 або 8.`,
        },
        {
          locator: "pkt 3",
          explanation:
            "Окремою підставою є діяльність jednostka, головною метою якої є сприяння незаконному в’їзду або pobyt naukowiec.",
        },
      ],
      legalEffect:
        "Cofnięcie потребує встановлення конкретного факту і рішення органу; сама зміна проєкту не доводить автоматичний наслідок.",
      foreignersCase: foreignersLaw.text`Зіставте мету в рішенні, фактичні завдання, статус jednostka та точний пункт ${foreignersLaw.article("154a", "art. 154a")}. Відокремте доказ обставини від висновку про cofnięcie.`,
    },
  ],
})
