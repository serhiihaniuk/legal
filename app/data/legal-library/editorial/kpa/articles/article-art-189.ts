import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "189",
      provisionId: "kpa-art-189",
      reviewStatus: "reviewed",
      summary:
        "Норма не дозволяє прокурору паралельно використовувати sprzeciw і skargę do sądu administracyjnego проти того самого рішення з тих самих причин. Вона запобігає дублюванню двох шляхів контролю.",
      rules: [
        {
          locator: "одне речення",
          explanation:
            "Якщо прокурор уже оскаржив рішення до sądu administracyjnego, він не може внести sprzeciw з тих самих підстав.",
        },
      ],
      legalEffect:
        "Обрання судового шляху блокує прокурорський sprzeciw у тотожному обсязі підстав.",
      foreignersCase:
        "У справі іноземця потрібно перевірити, чи прокурор уже подав skargę до WSA і чи збігаються її підстави з планованим sprzeciwem; одночасне дублювання не допускається.",
    },
  ],
})
