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
      article: "249",
      provisionId: "kpa-art-249",
      reviewStatus: "reviewed",
      summary: kpaLaw.text`Стаття поширює правила ${kpaLaw.article("248", "art. 248")} на skargi і wnioski, передані суспільними організаціями. Організація є посередником, але звернення зберігає відповідний режим skargi або wniosku.`,
      rules: [
        {
          locator: "відсилання",
          explanation: kpaLaw.text`${kpaLaw.article("248", "Art. 248")} застосовується відповідно до звернень, переданих organizacje społeczne компетентним органам за ${kpaLaw.articleRange("228", "230", { start: "art. 228", end: "230" })} та 242.`,
        },
      ],
      legalEffect:
        "Орган розглядає передане організацією звернення за процедурою działu VIII та повідомляє організацію за умов відсильної норми.",
      foreignersCase:
        "Громадська організація, яка передає skargę іноземця на urząd, не створює нового виду провадження; вирішальними залишаються зміст і компетентний адресат.",
    },
  ],
})
