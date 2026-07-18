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
      provisionId: "ustawa-o-cudzoziemcach-art-169c",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("169c", "Art. 169c")} зобов'язує wojewoda передати Szef Urzędu копію рішення про udzielenie або cofnięcie zezwolenie для mobilności długoterminowej члена сім'ї naukowiec, а Szef Urzędu — передати wojewoda визначену інформацію про цього cudzoziemiec.`,
          sourceLocator: "Art. 169c ust. 1–2",
        },
      ],
      summary:
        "Стаття створює двосторонній канал інформації у справах про zezwolenie для члена сім’ї при mobilność długoterminowa.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Wojewoda передає Szef Urzędu копію рішення як про udzielenie, так і про cofnięcie відповідного zezwolenie; це охоплює обидва види результату.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Szef Urzędu передає wojewoda, який надав zezwolenie, дані про cudzoziemiec, визначені в реєстраційній нормі; стаття не встановлює нового матеріального критерію.",
        },
      ],
      legalEffect:
        "Передача копій і даних має обліковий та координаційний ефект і не замінює рішення про дозвіл або його відкликання.",
      foreignersCase:
        "Перевірте, чи передано правильну копію рішення та інформацію саме тому wojewoda; розбіжність у реєстрі виправляйте через орган, який сформував дані.",
    },
  ],
})
