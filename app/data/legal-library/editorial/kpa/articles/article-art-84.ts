import { createLegalTextAuthor } from "../../../legal-text"

import { defineKpaEditorialPart } from "../define-kpa-part"

const kpaLaw = createLegalTextAuthor("kpa")
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "84",
      provisionId: "kpa-art-84",
      reviewStatus: "reviewed",
      summary:
        "Стаття дозволяє organowi залучити одного або кількох biegłych, коли для оцінки обставин потрібні спеціальні знання, і поширює на них правила відводу та допиту.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Якщо sprawa wymaga wiadomości specjalnych, organ може zwrócić się do biegłego lub biegłych o wydanie opinii.",
        },
        {
          locator: "§ 2",
          explanation: kpaLaw.text`До biegłego застосовуються підстави wyłączenia з ${kpaLaw.article("24", "art. 24")}, а в іншому — правила dotyczące przesłuchania świadków.`,
        },
      ],
      legalEffect:
        "Specjalistyczna оцінка входить до доказового матеріалу через opinię biegłego, підготовлену неупередженою особою.",
      foreignersCase:
        "Це загальна доказова норма; у справі cudzoziemca biegły потрібен лише там, де факту не можна належно оцінити без wiadomości specjalnych.",
    },
  ],
})
