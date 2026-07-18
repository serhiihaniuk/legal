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
      provisionId: "ustawa-o-cudzoziemcach-art-210",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("210", "Art. 210")} встановлює 6 місяців для decyzji у справі про pobyt stały та 90 днів для postępowania odwoławczego. Початок першого строку залежить від формальної повноти й доказів за ${foreignersLaw.article("203f", "Art. 203f")}.`,
          sourceLocator: "Art. 210 ust. 1–4",
        },
      ],
      summary:
        "Відлік не обов’язково починається в день подання в MOS. Закон бере пізнішу з подій, коли wniosek став формально повним і коли завершився визначений доказовий етап.",
      rules: [
        {
          locator: "Art. 210 ust. 1–2",
          explanation: foreignersLaw.text`Шестимісячний строк рахується від пізнішої події: wniosek не має braków formalnych або їх усунуто; документи за ${foreignersLaw.article("203f", "Art. 203f")} подано або строк wezwania сплив безрезультатно. Особиста явка більше не є окремою подією запуску цього строку.`,
        },
        {
          locator: "Art. 210 ust. 3–4",
          explanation:
            "Апеляційне провадження має завершитися за 90 днів. Якщо odwołanie не відповідає правовим вимогам, строк починається після усунення braków.",
        },
      ],
      legalEffect:
        "Це строки для organu, а не автоматичне надання zezwolenia. Їх пропуск оцінюють через засоби проти bezczynności або przewlekłości, а не як позитивну decyzję.",
      foreignersCase: foreignersLaw.text`Побудуйте хронологію UPO, braków formalnych, wezwania з ${foreignersLaw.article("203f", "Art. 203f")}, подання доказів і відліку апеляції. Лише після цього оцінюйте, чи строк справді минув.`,
    },
  ],
})
