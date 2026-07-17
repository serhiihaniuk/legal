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
      provisionId: "ppsa-art-243",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`${ppsaLaw.article("243", "Art. 243 § 1")} дозволяє надати prawo pomocy на wniosek сторони, поданий до wszczęcie або під час postępowanie, і звільняє цей wniosek від opłat sądowych; ${ppsaLaw.article("243", "§ 2")} позначений як uchylony.`,
          sourceLocator: "Art. 243 § 1–2",
        },
      ],
      summary: ppsaLaw.text`Заяву про prawo pomocy можна подати до початку або під час провадження, і сама заява не має opłata; ${ppsaLaw.article("243", "§ 2")} є uchylony.`,
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Встановіть, чи wniosek подано до wszczęcie postępowania або вже під час нього; за подання wniosku opłata sądowa не стягується.",
        },
        {
          locator: "§ 2",
          explanation:
            "Позначення «uchylony» означає, що цей параграф не містить чинного правила для застосування.",
        },
      ],
      legalEffect: ppsaLaw.text`${ppsaLaw.article("243", "Art. 243")} визначає час подання та безоплатність wniosek, але саме подання не означає автоматичного przyznanie prawa pomocy.`,
      foreignersCase:
        "Якщо іноземець не може оплатити судову справу про pobyt, зафіксуйте дату wniosek і не плутайте його безоплатність із позитивним рішенням про prawo pomocy.",
    },
  ],
})
