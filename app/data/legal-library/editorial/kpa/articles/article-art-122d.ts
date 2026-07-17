import { createLegalTextAuthor } from "../../../legal-text"

import { defineKpaEditorialPart } from "../define-kpa-part"

const kpaLaw = createLegalTextAuthor("kpa")
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "122d",
      provisionId: "kpa-art-122d",
      reviewStatus: "reviewed",
      summary: kpaLaw.text`У справах, що вирішуються мовчазно, не діють ${kpaLaw.article("10", "art. 10")} і 79a, а zawieszenie зупиняє строк на milczące załatwienie.`,
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Виключено загальне право висловитися перед рішенням та повідомлення про недоведені залежні від сторони передумови.",
        },
        {
          locator: "§ 2",
          explanation:
            "Формальне zawieszenie зупиняє спеціальний строк мовчазного режиму.",
        },
      ],
      legalEffect:
        "Мовчазна процедура має скорочену участь сторони та власну часову паузу при zawieszeniu.",
      foreignersCase: kpaLaw.text`Якщо lex specialis допускає такий режим у справі іноземця, не можна очікувати окремого повідомлення за ${kpaLaw.article("79a", "art. 79a")} перед спливом строку.`,
    },
  ],
})
