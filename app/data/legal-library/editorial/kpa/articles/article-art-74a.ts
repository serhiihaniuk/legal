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
      article: "74a",
      provisionId: "kpa-art-74a",
      reviewStatus: "reviewed",
      summary: kpaLaw.text`Стаття уточнює, що процесуальне право доступу до akt за ${kpaLaw.article("73", "art. 73")} не обмежує окремого права суб’єкта даних за ${kpaLaw.external("art. 15 RODO", RODO_URL)} RODO.`,
      rules: [
        {
          locator: "całość",
          explanation:
            "Реалізація або межі wglądu do akt не позбавляють osobę prawa dostępu do danych osobowych, передбаченого RODO.",
        },
      ],
      legalEffect:
        "Доступ до akt і доступ до власних персональних даних залишаються двома окремими правовими режимами.",
      foreignersCase: kpaLaw.text`У справі іноземця відмова чи обмеження за ${kpaLaw.article("74", "art. 74")} не повинні автоматично трактуватися як відповідь на окремий запит про доступ до даних за RODO.`,
    },
  ],
})
